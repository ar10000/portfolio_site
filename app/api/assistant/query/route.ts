import { NextRequest } from 'next/server';
import OpenAI from 'openai';
import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';

// Use nodejs runtime for Anthropic SDK compatibility
export const runtime = 'nodejs';

interface EmbeddingChunk {
  content: string;
  embedding: number[];
  chunkIndex: number;
  filename: string;
}

// Cache embeddings in memory (loaded once per instance)
let cachedEmbeddings: EmbeddingChunk[] | null = null;

/**
 * Load embeddings from JSON file
 * Using fs directly since we're on nodejs runtime
 */
async function loadEmbeddings(): Promise<EmbeddingChunk[]> {
  if (cachedEmbeddings) {
    return cachedEmbeddings;
  }

  try {
    const embeddingsPath = path.join(process.cwd(), 'knowledge', 'embeddings.json');
    
    if (!fs.existsSync(embeddingsPath)) {
      console.error('Embeddings file not found at:', embeddingsPath);
      return [];
    }

    const fileContent = fs.readFileSync(embeddingsPath, 'utf-8');
    cachedEmbeddings = JSON.parse(fileContent) as EmbeddingChunk[];
    
    console.log(`Loaded ${cachedEmbeddings.length} embeddings from file`);
    return cachedEmbeddings;
  } catch (error) {
    console.error('Error loading embeddings:', error);
    return [];
  }
}

/**
 * Generate embedding for a query
 */
async function generateQueryEmbedding(query: string, apiKey: string): Promise<number[]> {
  const openai = new OpenAI({ apiKey });
  
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: query,
  });

  return response.data[0].embedding;
}

/**
 * Calculate cosine similarity between two vectors
 */
function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) return 0;

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

/**
 * Find top K most relevant chunks
 */
function findTopChunks(
  queryEmbedding: number[],
  chunks: EmbeddingChunk[],
  topK: number = 5
): EmbeddingChunk[] {
  const scored = chunks
    .filter(chunk => chunk.embedding && chunk.embedding.length > 0)
    .map(chunk => ({
      chunk,
      score: cosineSimilarity(queryEmbedding, chunk.embedding),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(item => item.chunk);

  return scored;
}

/**
 * Build system prompt with context
 */
function buildSystemPrompt(chunks: EmbeddingChunk[]): string {
  const contextSections = chunks
    .map((chunk, i) => `[${i + 1}] ${chunk.content}`)
    .join('\n\n');

  return `You are Andrew Ryan's AI Assistant. Andrew is an AI builder, rapid prototyper, and automation engineer specializing in production-ready AI systems and workflow automation.

ABOUT ANDREW:
- AI Automation Consultant
- Rapid prototyper (3-10 day delivery cycles)
- Full-stack AI builder (Flutter, Python, Supabase)
- Workflow automation expert (Make.com, n8n)
- Production-ready architecture from day one
- Focuses on measurable ROI and business outcomes

HOW TO BEHAVE:
- Be concise and helpful
- Answer questions directly without unnecessary introductions
- Avoid hallucination - only use information from the provided context
- If you're not certain about something, say: "I'm not certain, but here's what I can tell you..."
- If information isn't in the context, politely redirect to the contact form or booking a call
- Keep responses professional and friendly
- Use specific details (prices, timelines, features) when available

CONTEXT FROM KNOWLEDGE BASE:
${contextSections}

Remember: Answer based on the context above. If the context doesn't contain the answer, be honest about it.`;
}

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    if (!query || typeof query !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Query is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const anthropicApiKey = process.env.ANTHROPIC_API_KEY;
    const openaiApiKey = process.env.OPENAI_API_KEY;

    if (!anthropicApiKey) {
      return new Response(
        JSON.stringify({ error: 'ANTHROPIC_API_KEY not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Load embeddings
    const embeddings = await loadEmbeddings();
    if (embeddings.length === 0) {
      return new Response(
        JSON.stringify({ error: 'No embeddings found. Please run the embedding script first.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Generate query embedding (use OpenAI for embeddings - very cheap, just for retrieval)
    // If OpenAI key is not available, we'll skip RAG and use full context
    let topChunks: EmbeddingChunk[] = [];
    
    if (openaiApiKey) {
      try {
        const queryEmbedding = await generateQueryEmbedding(query, openaiApiKey);
        topChunks = findTopChunks(queryEmbedding, embeddings, 5);
      } catch (error) {
        console.warn('Failed to generate query embedding, using all chunks:', error);
        // Fallback: use first 5 chunks if embedding fails
        topChunks = embeddings.slice(0, 5);
      }
    } else {
      // No OpenAI key - use first 5 chunks as fallback
      console.warn('OPENAI_API_KEY not set - using first 5 chunks without semantic search');
      topChunks = embeddings.slice(0, 5);
    }

    // Build system prompt
    const systemPrompt = buildSystemPrompt(topChunks);

    // Use Anthropic Claude for chat
    const anthropic = new Anthropic({ apiKey: anthropicApiKey });

    // Try to find a working model - prioritize Opus since it's most commonly available
    // Then try newer models, then fallback to older ones
    const modelCandidates = [
      process.env.ANTHROPIC_MODEL, // User-specified model (highest priority)
      'claude-3-opus-20240229', // Claude 3 Opus (most capable, commonly available)
      'claude-3-5-sonnet-20241022', // Latest Claude 3.5 Sonnet
      'claude-3-5-sonnet-20240620', // Claude 3.5 Sonnet (June)
      'claude-3-5-sonnet', // Claude 3.5 Sonnet (no date)
      'claude-3-sonnet-20240229', // Claude 3 Sonnet
      'claude-3-haiku-20240307', // Claude 3 Haiku (fastest)
    ].filter(Boolean) as string[];

    let stream;
    let lastError: Error | null = null;
    let workingModel = modelCandidates[0];

    // Try each model until one works
    for (const model of modelCandidates) {
      try {
        stream = await anthropic.messages.stream({
          model: model as any,
          max_tokens: 500,
          system: systemPrompt,
          messages: [
            { role: 'user', content: query },
          ],
        });
        workingModel = model;
        console.log(`✅ Using model: ${model}`);
        break;
      } catch (error: any) {
        lastError = error;
        const errorMessage = error?.message || '';
        // If it's a model not found error, try next model
        if (errorMessage.includes('not_found') || errorMessage.includes('404')) {
          console.warn(`❌ Model ${model} not available, trying next...`);
          continue;
        }
        // For other errors, throw immediately
        throw error;
      }
    }

    // If no model worked, throw the last error
    if (!stream) {
      throw new Error(`No available models found. Last error: ${lastError?.message || 'Unknown'}`);
    }

    // Create a readable stream for the response
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          let hasContent = false;
          for await (const chunk of stream) {
            // Log chunk for debugging in development
            if (process.env.NODE_ENV === 'development') {
              console.log('Stream chunk:', JSON.stringify(chunk, null, 2).substring(0, 200));
            }
            
            // Handle content_block_delta - this is the main type for streaming text
            if (chunk.type === 'content_block_delta') {
              // Note: delta.type is 'text_delta', not 'text'
              if (chunk.delta?.type === 'text_delta' && chunk.delta.text) {
                hasContent = true;
                controller.enqueue(encoder.encode(chunk.delta.text));
              }
            }
            // Handle content_block_start - just metadata, no content yet
            else if (chunk.type === 'content_block_start') {
              // Stream started, but no content yet
              continue;
            }
            // Handle message_start - just metadata
            else if (chunk.type === 'message_start') {
              // Stream started, but no content yet
              continue;
            }
            // Handle message_delta - metadata about message changes
            else if (chunk.type === 'message_delta') {
              // Usually just stop_reason, finish the stream
              if (chunk.delta?.stop_reason) {
                break;
              }
            }
            // Handle message_stop - stream is done
            else if (chunk.type === 'message_stop') {
              break;
            }
            // Handle error
            else if (chunk.type === 'error') {
              throw new Error(`Anthropic API error: ${chunk.error?.message || 'Unknown error'}`);
            }
          }
          
          if (!hasContent) {
            console.warn('No content received from stream. Chunk types may be different than expected.');
            controller.enqueue(encoder.encode('I apologize, but I received an empty response. Please try again.'));
          }
          
          controller.close();
        } catch (error: any) {
          console.error('Streaming error:', error);
          const errorText = error?.message || 'Streaming failed';
          try {
            controller.enqueue(encoder.encode(`\n\n[Error: ${errorText}]`));
          } catch {
            // Controller might be closed
          }
          controller.error(error);
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error: any) {
    console.error('Assistant query error:', error);
    const errorMessage = error?.message || 'Failed to process query';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}


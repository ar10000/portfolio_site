import { NextRequest, NextResponse } from "next/server";
import OpenAI from 'openai';

export const runtime = 'edge';

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
 */
async function loadEmbeddings(request: NextRequest): Promise<EmbeddingChunk[]> {
  if (cachedEmbeddings) {
    return cachedEmbeddings;
  }

  try {
    const url = new URL(request.url);
    const baseUrl = `${url.protocol}//${url.host}`;
    
    const response = await fetch(`${baseUrl}/api/embeddings`, {
      cache: 'no-store',
    }).catch(() => null);

    if (response && response.ok) {
      cachedEmbeddings = await response.json() as EmbeddingChunk[];
      return cachedEmbeddings;
    }

    console.warn('Could not load embeddings. Make sure embeddings.json is accessible.');
    return [];
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
 * Build system prompt with context from embeddings
 */
function buildSystemPrompt(chunks: EmbeddingChunk[]): string {
  const contextSections = chunks
    .map((chunk, i) => `[${i + 1}] ${chunk.content}`)
    .join('\n\n');

  return `You are Andrew Ryan's AI Assistant. Andrew builds AI automation solutions including lead qualification systems, email processing automation, workflow automation, API integrations, multi-tenant systems, and production-ready AI agents.

ABOUT ANDREW:
- AI Automation Consultant
- Delivers solutions: AI automation, lead qualification, email processing, workflow automation
- Builds: Multi-tenant systems, real-time sync, content workflow platforms, AI agents
- Technical solutions: API integrations, webhook handling, data models, system architecture
- Production deployments: 1-2 weeks for starter builds, scalable systems starting at €4,500
- Focuses on measurable ROI and business outcomes

HOW TO BEHAVE:
- Be concise and helpful
- Answer questions directly without unnecessary introductions
- Avoid hallucination - only use information from the provided context
- If you're not certain about something, say: "I'm not certain, but here's what I can tell you..."
- If information isn't in the context, politely redirect to the contact form or booking a call
- Keep responses professional and friendly
- Use specific details (prices, timelines, features) when available
- Keep responses concise: 1-3 sentences for voice, 2-4 sentences for text

CONTEXT FROM KNOWLEDGE BASE:
${contextSections}

Remember: Answer based on the context above. If the context doesn't contain the answer, be honest about it.`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const openaiApiKey = process.env.OPENAI_API_KEY;
    const anthropicApiKey = process.env.ANTHROPIC_API_KEY;

    if (!openaiApiKey && !anthropicApiKey) {
      return NextResponse.json(
        { error: "No API key configured. Please set OPENAI_API_KEY or ANTHROPIC_API_KEY" },
        { status: 500 }
      );
    }

    // Load embeddings
    const embeddings = await loadEmbeddings(request);
    if (embeddings.length === 0) {
      return NextResponse.json(
        { error: "embeddings_missing" },
        { status: 500 }
      );
    }

    // Generate query embedding (requires OpenAI API key)
    if (!openaiApiKey) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY required for embeddings. Anthropic API key alone is not sufficient." },
        { status: 500 }
      );
    }

    const queryEmbedding = await generateQueryEmbedding(message, openaiApiKey);

    // Find top 5 most relevant chunks
    const topChunks = findTopChunks(queryEmbedding, embeddings, 5);

    // Build system prompt
    const systemPrompt = buildSystemPrompt(topChunks);

    if (openaiApiKey) {
      // Use OpenAI
      const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiApiKey}`,
        },
        body: JSON.stringify({
          model: process.env.OPENAI_MODEL || "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: systemPrompt,
            },
            {
              role: "user",
              content: message,
            },
          ],
          max_tokens: 300,
          temperature: 0.7,
        }),
      });

      if (!openaiResponse.ok) {
        const errorData = await openaiResponse.text();
        console.error("OpenAI API error:", errorData);
        throw new Error("Failed to get AI response");
      }

      const data = await openaiResponse.json();
      return NextResponse.json({
        response: data.choices[0]?.message?.content || "I'm sorry, I couldn't process that.",
      });
    } else if (anthropicApiKey) {
      // Use Anthropic Claude
      const anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": anthropicApiKey,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: process.env.ANTHROPIC_MODEL || "claude-3-sonnet-20240229",
          max_tokens: 300,
          system: systemPrompt,
          messages: [
            {
              role: "user",
              content: message,
            },
          ],
        }),
      });

      if (!anthropicResponse.ok) {
        const errorData = await anthropicResponse.text();
        console.error("Anthropic API error:", errorData);
        throw new Error("Failed to get AI response");
      }

      const data = await anthropicResponse.json();
      return NextResponse.json({
        response: data.content[0]?.text || "I'm sorry, I couldn't process that.",
      });
    }

    return NextResponse.json(
      { error: "No API key configured" },
      { status: 500 }
    );
  } catch (error: any) {
    console.error("Voice AI API error:", error);
    
    // Provide more specific error messages
    let errorMessage = "Failed to process request";
    if (error.message?.includes("embeddings") || error.message?.includes("No embeddings")) {
      errorMessage = "embeddings_missing";
    } else if (error.message?.includes("API key") || error.message?.includes("OPENAI_API_KEY")) {
      errorMessage = "api_key_missing";
    } else if (error.message?.includes("Failed to get AI response")) {
      errorMessage = "api_error";
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

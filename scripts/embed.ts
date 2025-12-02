// Run: bun scripts/embed.ts
// or: npx tsx scripts/embed.ts

import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

interface EmbeddingChunk {
  content: string;
  embedding: number[];
  chunkIndex: number;
  filename: string;
}

/**
 * Rough token estimation: ~4 characters per token
 * 500 tokens ≈ 2000 characters
 */
const TARGET_CHUNK_SIZE = 2000; // characters (roughly 500 tokens)
const OVERLAP = 200; // characters for overlap between chunks

/**
 * Load all markdown files from the knowledge directory
 */
function loadKnowledgeFiles(): Map<string, string> {
  const knowledgeDir = path.join(process.cwd(), 'knowledge');
  const files = new Map<string, string>();

  if (!fs.existsSync(knowledgeDir)) {
    console.error('Knowledge directory does not exist:', knowledgeDir);
    process.exit(1);
  }

  const fileNames = fs.readdirSync(knowledgeDir);
  const mdFiles = fileNames.filter(file => file.endsWith('.md') && file !== 'README.md');

  if (mdFiles.length === 0) {
    console.error('No markdown files found in knowledge directory');
    process.exit(1);
  }

  for (const fileName of mdFiles) {
    const filePath = path.join(knowledgeDir, fileName);
    const content = fs.readFileSync(filePath, 'utf-8');
    files.set(fileName, content);
  }

  return files;
}

/**
 * Chunk markdown content into ~500 token chunks
 */
function chunkMarkdown(content: string, filename: string): Omit<EmbeddingChunk, 'embedding'>[] {
  const chunks: Omit<EmbeddingChunk, 'embedding'>[] = [];

  // Remove HTML comments
  const cleanedContent = content.replace(/<!--[\s\S]*?-->/g, '').trim();

  if (!cleanedContent) {
    return chunks;
  }

  // Split by paragraphs (double newlines) and headers
  const sections = cleanedContent
    .split(/\n\s*\n/)
    .map(s => s.trim())
    .filter(s => s.length > 0);

  let currentChunk = '';
  let chunkIndex = 0;

  for (const section of sections) {
    // If adding this section would exceed chunk size, save current chunk
    if (currentChunk && (currentChunk.length + section.length + 1) > TARGET_CHUNK_SIZE) {
      chunks.push({
        content: currentChunk.trim(),
        chunkIndex: chunkIndex++,
        filename,
      });

      // Start new chunk with overlap (last part of previous chunk)
      const words = currentChunk.split(/\s+/);
      const overlapText = words.slice(-Math.floor(OVERLAP / 10)).join(' ');
      currentChunk = overlapText + ' ' + section;
    } else {
      currentChunk = currentChunk ? currentChunk + '\n\n' + section : section;
    }
  }

  // Add the last chunk if it exists
  if (currentChunk.trim()) {
    chunks.push({
      content: currentChunk.trim(),
      chunkIndex: chunkIndex,
      filename,
    });
  }

  return chunks;
}

/**
 * Generate embeddings for all chunks
 */
async function generateEmbeddings(
  chunks: Omit<EmbeddingChunk, 'embedding'>[]
): Promise<EmbeddingChunk[]> {
  const openaiApiKey = process.env.OPENAI_API_KEY;

  if (!openaiApiKey) {
    console.error('OPENAI_API_KEY environment variable is required');
    process.exit(1);
  }

  const openai = new OpenAI({ apiKey: openaiApiKey });
  const embeddedChunks: EmbeddingChunk[] = [];

  // Process in batches to avoid rate limits
  const batchSize = 10;
  console.log(`Generating embeddings for ${chunks.length} chunks...`);

  for (let i = 0; i < chunks.length; i += batchSize) {
    const batch = chunks.slice(i, i + batchSize);
    const batchNum = Math.floor(i / batchSize) + 1;
    const totalBatches = Math.ceil(chunks.length / batchSize);

    console.log(`Processing batch ${batchNum}/${totalBatches} (${batch.length} chunks)...`);

    try {
      const embeddings = await Promise.all(
        batch.map(chunk =>
          openai.embeddings.create({
            model: 'text-embedding-3-small',
            input: chunk.content,
          })
        )
      );

      for (let j = 0; j < batch.length; j++) {
        embeddedChunks.push({
          ...batch[j],
          embedding: embeddings[j].data[0].embedding,
        });
      }
    } catch (error) {
      console.error(`Error generating embeddings for batch ${batchNum}:`, error);
      throw error;
    }
  }

  return embeddedChunks;
}

/**
 * Main function
 */
async function main() {
  console.log('Starting embedding generation...\n');

  // Load markdown files
  console.log('Loading markdown files from /knowledge...');
  const files = loadKnowledgeFiles();
  console.log(`Found ${files.size} markdown file(s)\n`);

  // Chunk all files
  const allChunks: Omit<EmbeddingChunk, 'embedding'>[] = [];
  for (const [filename, content] of files.entries()) {
    const chunks = chunkMarkdown(content, filename);
    allChunks.push(...chunks);
    console.log(`Chunked ${filename}: ${chunks.length} chunks`);
  }

  console.log(`\nTotal chunks: ${allChunks.length}\n`);

  if (allChunks.length === 0) {
    console.error('No chunks to embed. Make sure your markdown files have content.');
    process.exit(1);
  }

  // Generate embeddings
  const embeddedChunks = await generateEmbeddings(allChunks);

  // Save to JSON file
  const outputPath = path.join(process.cwd(), 'knowledge', 'embeddings.json');
  fs.writeFileSync(outputPath, JSON.stringify(embeddedChunks, null, 2), 'utf-8');

  console.log(`\n✅ Successfully saved ${embeddedChunks.length} chunks to ${outputPath}`);
}

// Run the script
main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});


import fs from 'fs';
import path from 'path';

export interface KnowledgeChunk {
  content: string;
  source: string;
  chunkIndex: number;
  metadata?: Record<string, any>;
}

/**
 * Load all markdown files from the knowledge directory
 */
export async function loadKnowledgeFiles(): Promise<Map<string, string>> {
  const knowledgeDir = path.join(process.cwd(), 'knowledge');
  const files = new Map<string, string>();

  try {
    if (!fs.existsSync(knowledgeDir)) {
      console.warn('Knowledge directory does not exist:', knowledgeDir);
      return files;
    }

    const fileNames = fs.readdirSync(knowledgeDir);
    const mdFiles = fileNames.filter(file => file.endsWith('.md'));

    for (const fileName of mdFiles) {
      const filePath = path.join(knowledgeDir, fileName);
      const content = fs.readFileSync(filePath, 'utf-8');
      files.set(fileName, content);
    }
  } catch (error) {
    console.error('Error loading knowledge files:', error);
  }

  return files;
}

/**
 * Chunk markdown content into smaller pieces for embedding
 * Uses a simple approach: split by double newlines (paragraphs) and combine into chunks
 */
export function chunkMarkdown(
  content: string,
  source: string,
  chunkSize: number = 1000,
  overlap: number = 200
): KnowledgeChunk[] {
  const chunks: KnowledgeChunk[] = [];

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
    if (currentChunk && (currentChunk.length + section.length + 1) > chunkSize) {
      chunks.push({
        content: currentChunk.trim(),
        source,
        chunkIndex: chunkIndex++,
      });

      // Start new chunk with overlap (last part of previous chunk)
      const words = currentChunk.split(/\s+/);
      const overlapText = words.slice(-Math.floor(overlap / 10)).join(' ');
      currentChunk = overlapText + ' ' + section;
    } else {
      currentChunk = currentChunk ? currentChunk + '\n\n' + section : section;
    }
  }

  // Add the last chunk if it exists
  if (currentChunk.trim()) {
    chunks.push({
      content: currentChunk.trim(),
      source,
      chunkIndex: chunkIndex,
    });
  }

  return chunks;
}

/**
 * Load and chunk all knowledge files
 */
export async function loadAndChunkKnowledge(): Promise<KnowledgeChunk[]> {
  const files = await loadKnowledgeFiles();
  const allChunks: KnowledgeChunk[] = [];

  for (const [fileName, content] of files.entries()) {
    const chunks = chunkMarkdown(content, fileName);
    allChunks.push(...chunks);
  }

  return allChunks;
}


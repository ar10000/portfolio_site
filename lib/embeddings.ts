import OpenAI from 'openai';
import { KnowledgeChunk } from './knowledge-loader';

export interface EmbeddedChunk extends KnowledgeChunk {
  embedding: number[];
}

// Simple in-memory vector store
// In production, consider using a proper vector database like Pinecone, Weaviate, or Qdrant
class VectorStore {
  private chunks: EmbeddedChunk[] = [];
  private initialized = false;

  async initialize() {
    if (this.initialized) return;

    const { loadAndChunkKnowledge } = await import('./knowledge-loader');
    const chunks = await loadAndChunkKnowledge();

    if (chunks.length === 0) {
      console.warn('No knowledge chunks found. Make sure to add content to knowledge/*.md files.');
      this.initialized = true;
      return;
    }

    // Generate embeddings for all chunks
    const embeddedChunks = await this.generateEmbeddings(chunks);
    this.chunks = embeddedChunks;
    this.initialized = true;

    console.log(`Initialized vector store with ${this.chunks.length} chunks`);
  }

  private async generateEmbeddings(chunks: KnowledgeChunk[]): Promise<EmbeddedChunk[]> {
    const openaiApiKey = process.env.OPENAI_API_KEY;

    if (!openaiApiKey) {
      console.warn('OPENAI_API_KEY not found. Embeddings will not be generated.');
      return chunks.map(chunk => ({ ...chunk, embedding: [] }));
    }

    const openai = new OpenAI({ apiKey: openaiApiKey });
    const embeddedChunks: EmbeddedChunk[] = [];

    // Process in batches to avoid rate limits
    const batchSize = 10;
    for (let i = 0; i < chunks.length; i += batchSize) {
      const batch = chunks.slice(i, i + batchSize);
      
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
        console.error(`Error generating embeddings for batch ${i}:`, error);
        // Add chunks without embeddings as fallback
        batch.forEach(chunk => {
          embeddedChunks.push({ ...chunk, embedding: [] });
        });
      }
    }

    return embeddedChunks;
  }

  async search(query: string, topK: number = 5): Promise<EmbeddedChunk[]> {
    await this.ensureInitialized();

    const openaiApiKey = process.env.OPENAI_API_KEY;
    if (!openaiApiKey || this.chunks.length === 0) {
      return [];
    }

    try {
      const openai = new OpenAI({ apiKey: openaiApiKey });
      const queryEmbedding = await openai.embeddings.create({
        model: 'text-embedding-3-small',
        input: query,
      });

      const queryVector = queryEmbedding.data[0].embedding;

      // Calculate cosine similarity for all chunks
      const scoredChunks = this.chunks
        .filter(chunk => chunk.embedding.length > 0)
        .map(chunk => ({
          chunk,
          score: this.cosineSimilarity(queryVector, chunk.embedding),
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, topK)
        .map(item => item.chunk);

      return scoredChunks;
    } catch (error) {
      console.error('Error searching vector store:', error);
      return [];
    }
  }

  private cosineSimilarity(a: number[], b: number[]): number {
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

  private async ensureInitialized() {
    if (!this.initialized) {
      await this.initialize();
    }
  }

  // Force re-initialization (useful when knowledge files are updated)
  async refresh() {
    this.initialized = false;
    this.chunks = [];
    await this.initialize();
  }
}

// Singleton instance
let vectorStore: VectorStore | null = null;

export function getVectorStore(): VectorStore {
  if (!vectorStore) {
    vectorStore = new VectorStore();
  }
  return vectorStore;
}


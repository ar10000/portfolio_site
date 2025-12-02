# Knowledge Base

This directory contains the knowledge base files for the AI assistant. The assistant uses embeddings-based retrieval to answer questions from these files.

## How It Works

1. **Markdown Files**: All `.md` files in this directory are automatically loaded
2. **Chunking**: Files are split into smaller chunks (1000 characters with 200 character overlap)
3. **Embeddings**: Each chunk is converted to embeddings using OpenAI's `text-embedding-3-small` model
4. **Retrieval**: When a user asks a question, the system:
   - Converts the question to an embedding
   - Finds the most relevant chunks using cosine similarity
   - Uses those chunks as context for the LLM to generate an answer

## Adding Content

1. Edit `andrew.md` (or create new `.md` files)
2. Add your content in markdown format
3. The system will automatically reload on the next API call
4. For immediate reload, restart the Next.js server

## Best Practices

- **Be specific**: Include exact details (prices, timelines, features)
- **Use clear structure**: Headers, lists, and paragraphs help with chunking
- **Keep it updated**: This is the single source of truth for the assistant
- **Test questions**: After updating, test with real questions to ensure accuracy

## File Structure

```
knowledge/
  ├── andrew.md      # Main knowledge file (fill this manually)
  └── README.md      # This file
```

## Technical Details

- **Chunk Size**: 1000 characters (configurable in `lib/knowledge-loader.ts`)
- **Overlap**: 200 characters between chunks
- **Embedding Model**: `text-embedding-3-small` (OpenAI)
- **Top K Retrieval**: 5 most relevant chunks per query
- **Vector Store**: In-memory (consider upgrading to Pinecone/Weaviate for production)

## Fallback Behavior

If no knowledge chunks are found or embeddings fail, the system falls back to the static context in `app/api/voice-ai/route.ts`. This ensures the assistant always has some information to work with.


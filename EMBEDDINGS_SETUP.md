# Embeddings-Based AI Assistant Setup

Your AI assistant has been upgraded to use embeddings-based retrieval (RAG - Retrieval Augmented Generation).

## What Was Created

### 1. Knowledge Base Directory
- **Location**: `/knowledge`
- **Files**:
  - `andrew.md` - Main knowledge file (fill this manually)
  - `README.md` - Documentation for the knowledge base

### 2. Core Libraries
- **`lib/knowledge-loader.ts`** - Loads and chunks markdown files from `/knowledge`
- **`lib/embeddings.ts`** - Handles embedding generation and vector search

### 3. Updated API Route
- **`app/api/voice-ai/route.ts`** - Now uses RAG to retrieve relevant context

## How It Works

1. **Knowledge Loading**: All `.md` files in `/knowledge` are automatically loaded
2. **Chunking**: Content is split into ~1000 character chunks with 200 character overlap
3. **Embedding**: Each chunk is converted to embeddings using OpenAI's `text-embedding-3-small`
4. **Retrieval**: When users ask questions:
   - Question is converted to an embedding
   - Most relevant chunks are found using cosine similarity
   - Top 5 chunks are used as context for the LLM
5. **Response**: LLM generates answer based on retrieved context + fallback context

## Next Steps

### 1. Fill the Knowledge Base
Edit `/knowledge/andrew.md` and add all information about:
- Services and pricing
- Projects and case studies
- Process and workflow
- FAQs
- Contact information
- Any other relevant information

### 2. Test the System
1. Add content to `andrew.md`
2. Restart your Next.js server
3. Ask questions via the voice assistant
4. Verify responses use information from the knowledge base

### 3. Environment Variables
Make sure you have:
```bash
OPENAI_API_KEY=your_key_here  # Required for embeddings
# OR
ANTHROPIC_API_KEY=your_key_here  # For Claude responses
```

## Features

✅ **Automatic Loading**: All `.md` files in `/knowledge` are loaded automatically
✅ **Smart Chunking**: Content is intelligently split for optimal retrieval
✅ **Vector Search**: Uses cosine similarity to find most relevant information
✅ **Fallback Support**: Falls back to static context if knowledge base is empty
✅ **In-Memory Store**: Fast retrieval (consider upgrading to Pinecone/Weaviate for production)

## Production Considerations

For production, consider:
- **Vector Database**: Upgrade from in-memory to Pinecone, Weaviate, or Qdrant
- **Caching**: Cache embeddings to avoid regenerating on every request
- **Incremental Updates**: Only re-embed when files change
- **Monitoring**: Track retrieval quality and user satisfaction

## Troubleshooting

**No knowledge chunks found?**
- Make sure `/knowledge/andrew.md` has content (not just the comment)
- Check server logs for loading errors
- Verify file permissions

**Embeddings not working?**
- Check `OPENAI_API_KEY` is set
- Verify API key has access to embeddings API
- Check API rate limits

**Responses not using knowledge base?**
- Ensure content is in `andrew.md`
- Restart the server after adding content
- Check that embeddings were generated (see server logs)

## File Structure

```
/knowledge
  ├── andrew.md          # Main knowledge file (fill manually)
  └── README.md          # Knowledge base docs

/lib
  ├── knowledge-loader.ts  # Loads and chunks markdown files
  └── embeddings.ts        # Embedding generation and vector search

/app/api/voice-ai
  └── route.ts            # Updated to use RAG
```

The system is ready to use! Just add content to `andrew.md` and restart your server.


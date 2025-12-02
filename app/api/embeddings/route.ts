import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// This route serves embeddings.json for edge runtime compatibility
// Edge runtime can't use fs, so we serve it via this API route
export const runtime = 'nodejs';

export async function GET() {
  try {
    const embeddingsPath = path.join(process.cwd(), 'knowledge', 'embeddings.json');
    
    if (!fs.existsSync(embeddingsPath)) {
      return NextResponse.json(
        { error: 'Embeddings file not found' },
        { status: 404 }
      );
    }

    const fileContent = fs.readFileSync(embeddingsPath, 'utf-8');
    const embeddings = JSON.parse(fileContent);

    return NextResponse.json(embeddings, {
      headers: {
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Error serving embeddings:', error);
    return NextResponse.json(
      { error: 'Failed to load embeddings' },
      { status: 500 }
    );
  }
}


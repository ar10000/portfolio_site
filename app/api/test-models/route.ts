import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

export const runtime = 'nodejs';

/**
 * Test which Anthropic models are available with the current API key
 */
export async function GET() {
  const anthropicApiKey = process.env.ANTHROPIC_API_KEY;

  if (!anthropicApiKey) {
    return NextResponse.json(
      { error: 'ANTHROPIC_API_KEY not configured' },
      { status: 500 }
    );
  }

  const anthropic = new Anthropic({ apiKey: anthropicApiKey });

  // List of models to test
  const modelsToTest = [
    'claude-3-5-sonnet-20241022',
    'claude-3-5-sonnet-20240620',
    'claude-3-5-sonnet',
    'claude-3-opus-20240229',
    'claude-3-sonnet-20240229',
    'claude-3-haiku-20240307',
  ];

  const results: Array<{ model: string; status: string; error?: string }> = [];

  for (const model of modelsToTest) {
    try {
      // Try to create a minimal message to test if model is available
      const response = await anthropic.messages.create({
        model: model as any,
        max_tokens: 1,
        messages: [
          { role: 'user', content: 'Hi' },
        ],
      });

      results.push({
        model,
        status: '✅ Available',
      });

      // If we found a working model, we can stop here
      break;
    } catch (error: any) {
      const errorMessage = error?.message || 'Unknown error';
      const isNotFound = errorMessage.includes('not_found') || errorMessage.includes('404');
      
      results.push({
        model,
        status: isNotFound ? '❌ Not found' : `⚠️ Error: ${errorMessage.substring(0, 100)}`,
        error: errorMessage,
      });
    }
  }

  return NextResponse.json({
    availableModels: results.filter(r => r.status.includes('✅')),
    allResults: results,
  });
}


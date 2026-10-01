import { NextRequest, NextResponse } from 'next/server';
import { generateAdaptiveRecommendation } from '@/lib/ai';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = await generateAdaptiveRecommendation({
      name: body.name || 'Student',
      topic: body.topic || 'learning workflow',
      strengths: Array.isArray(body.strengths) ? body.strengths : ['consistency'],
      weaknesses: Array.isArray(body.weaknesses) ? body.weaknesses : ['focus'],
    });

    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: 'Unable to generate recommendation.' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    module: 'adaptive-tutor',
    message: 'Tutor is ready.',
  });
}

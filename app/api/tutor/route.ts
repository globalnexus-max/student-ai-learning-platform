import { NextRequest, NextResponse } from 'next/server';
import { generateAdaptiveRecommendation } from '@/lib/ai';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const studentProfile = {
      name: body.name || 'Student',
      topic: body.topic || 'learning workflow',
      strengths: Array.isArray(body.strengths) ? body.strengths : ['consistency'],
      weaknesses: Array.isArray(body.weaknesses) ? body.weaknesses : ['focus'],
    };

    const result = await generateAdaptiveRecommendation(studentProfile);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Unable to generate tutor guidance right now.' },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    module: 'tutor',
    message: 'Adaptive tutoring endpoint is ready.',
  });
}

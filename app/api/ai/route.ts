import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const topic = body.topic || 'learning flow';
    const strengths = Array.isArray(body.strengths) ? body.strengths : ['consistency'];
    const weaknesses = Array.isArray(body.weaknesses) ? body.weaknesses : ['focus'];

    const recommendation = `Focus on ${weaknesses[0]} before moving to more advanced ${topic} tasks.`;
    const actionPlan = [
      `Review the fundamentals of ${topic} for 20 minutes.`,
      `Apply one practical exercise using the strongest skill: ${strengths[0]}.`,
      `Complete a short reflection and ask the AI tutor for the next challenge.`,
    ];

    return NextResponse.json({
      recommendation,
      actionPlan,
      generatedLesson: {
        title: `Lesson: ${topic}`,
        summary: `This lesson helps the learner improve ${weaknesses[0]} while building on ${strengths[0]}.`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Unable to generate AI guidance at the moment.' },
      { status: 500 },
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';

const analyticsSeed = [
  {
    student: 'Nargiz A.',
    course: 'AI for Students',
    status: 'On track',
    completion: 78,
    streak: 12,
  },
  {
    student: 'Samir M.',
    course: 'Product Thinking',
    status: 'Needs support',
    completion: 64,
    streak: 6,
  },
  {
    student: 'Leyla R.',
    course: 'UI Design Fundamentals',
    status: 'Excellent',
    completion: 90,
    streak: 15,
  },
];

export async function GET() {
  return NextResponse.json({ data: analyticsSeed });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    return NextResponse.json({
      ok: true,
      student: body.student || 'Unknown',
      course: body.course || 'General Learning',
      completion: Number(body.completion ?? 0),
      streak: Number(body.streak ?? 0),
      message: 'Analytics updated successfully.',
    });
  } catch {
    return NextResponse.json({ error: 'Could not save analytics.' }, { status: 500 });
  }
}

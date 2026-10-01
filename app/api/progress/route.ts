import { NextRequest, NextResponse } from 'next/server';

const progressByStudent = [
  { student: 'Nargiz A.', course: 'AI for Students', percent: 78, streak: 12 },
  { student: 'Samir M.', course: 'Product Thinking', percent: 64, streak: 6 },
  { student: 'Leyla R.', course: 'UI Design Fundamentals', percent: 90, streak: 15 },
];

export async function GET() {
  return NextResponse.json({ data: progressByStudent });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const student = body.student || 'Unknown';
    const course = body.course || 'General Learning';
    const percent = Number(body.percent ?? 0);
    const streak = Number(body.streak ?? 0);

    return NextResponse.json({
      ok: true,
      student,
      course,
      percent,
      streak,
      message: 'Progress updated successfully.',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Could not update student progress.' },
      { status: 500 },
    );
  }
}

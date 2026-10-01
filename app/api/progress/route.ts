import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

const fallbackProgress = [
  { student: 'Nargiz A.', course: 'AI for Students', percent: 78, streak: 12 },
  { student: 'Samir M.', course: 'Product Thinking', percent: 64, streak: 6 },
  { student: 'Leyla R.', course: 'UI Design Fundamentals', percent: 90, streak: 15 },
];

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ data: fallbackProgress });
  }

  try {
    const rows = await db.progress.findMany({
      include: {
        user: true,
        course: true,
      },
    });

    return NextResponse.json({
      data: rows.map((row) => ({
        student: row.user.name || 'Unknown',
        course: row.course.title,
        percent: row.percent,
        streak: row.streak,
      })),
    });
  } catch {
    return NextResponse.json({ data: fallbackProgress });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const student = String(body.student || 'Unknown');
    const course = String(body.course || 'General Learning');
    const percent = Number(body.percent ?? 0);
    const streak = Number(body.streak ?? 0);

    if (!process.env.DATABASE_URL) {
      return NextResponse.json({
        ok: true,
        student,
        course,
        percent,
        streak,
        message: 'Progress updated successfully.',
      });
    }

    const user = await db.user.upsert({
      where: { email: `${student.toLowerCase().replace(/\s+/g, '.')}@demo.local` },
      update: { name: student },
      create: {
        email: `${student.toLowerCase().replace(/\s+/g, '.')}@demo.local`,
        name: student,
        role: 'STUDENT',
      },
    });

    const courseRecord = await db.course.upsert({
      where: { id: course },
      update: { title: course },
      create: {
        id: course,
        title: course,
        level: 'Intermediate',
        duration: '4 weeks',
        tags: ['AI'],
      },
    });

    const progress = await db.progress.upsert({
      where: {
        userId_courseId: {
          userId: user.id,
          courseId: courseRecord.id,
        },
      },
      update: {
        percent,
        streak,
      },
      create: {
        userId: user.id,
        courseId: courseRecord.id,
        percent,
        streak,
      },
    });

    return NextResponse.json({
      ok: true,
      student,
      course,
      percent: progress.percent,
      streak: progress.streak,
      message: 'Progress updated successfully.',
    });
  } catch {
    return NextResponse.json({ error: 'Could not update student progress.' }, { status: 500 });
  }
}

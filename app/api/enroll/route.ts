import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

const fallbackEnrollments = [
  {
    id: 'enr-101',
    userId: 'u-student-1',
    courseId: 'ui-design-fundamentals',
    status: 'ACTIVE',
    enrolledAt: new Date('2026-10-01T08:00:00.000Z').toISOString(),
  },
  {
    id: 'enr-102',
    userId: 'u-student-1',
    courseId: 'ai-for-students',
    status: 'ACTIVE',
    enrolledAt: new Date('2026-10-01T08:10:00.000Z').toISOString(),
  },
];

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('userId') || 'u-student-1';

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ data: fallbackEnrollments.filter((item) => item.userId === userId) });
  }

  try {
    const rows = await db.enrollment.findMany({
      where: { userId },
      orderBy: { enrolledAt: 'desc' },
      select: {
        id: true,
        userId: true,
        courseId: true,
        status: true,
        enrolledAt: true,
      },
    });

    return NextResponse.json({ data: rows });
  } catch {
    return NextResponse.json({ data: fallbackEnrollments.filter((item) => item.userId === userId) });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const userId = String(body.userId || 'u-student-1');
    const courseId = String(body.courseId || '');

    if (!courseId) {
      return NextResponse.json({ error: 'courseId is required.' }, { status: 400 });
    }

    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ ok: true, message: 'Enrollment successful.' });
    }

    const exists = await db.enrollment.findUnique({
      where: {
        userId_courseId: { userId, courseId },
      },
    });

    if (exists) {
      return NextResponse.json({ ok: true, message: 'Already enrolled in this course.' });
    }

    const record = await db.enrollment.create({
      data: {
        userId,
        courseId,
        status: 'ACTIVE',
      },
    });

    return NextResponse.json({ ok: true, id: record.id, message: 'Enrollment successful.' });
  } catch {
    return NextResponse.json({ error: 'Unable to enroll the user.' }, { status: 500 });
  }
}

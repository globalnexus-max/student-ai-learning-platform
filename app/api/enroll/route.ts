import { NextRequest, NextResponse } from 'next/server';
import { getEnrollmentsForUser, enrollUserToCourse } from '@/lib/enrollment';

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('userId') || 'u-student-1';
  const data = await getEnrollmentsForUser(userId);
  return NextResponse.json({ data });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const userId = String(body.userId || 'u-student-1');
    const courseId = String(body.courseId || '');

    if (!courseId) {
      return NextResponse.json({ error: 'courseId is required.' }, { status: 400 });
    }

    const result = await enrollUserToCourse(userId, courseId);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: 'Unable to enroll the user.' }, { status: 500 });
  }
}

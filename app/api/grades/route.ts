import { NextResponse } from 'next/server';
import { gradeCurriculum } from '@/lib/mock-data';

export async function GET() {
  return NextResponse.json({
    data: gradeCurriculum,
    summary: {
      yearLevels: 4,
      subjectsPerGrade: 6,
      totalCreditsPerGrade: 24,
    },
  });
}

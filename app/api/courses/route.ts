import { NextResponse } from 'next/server';
import { courses } from '@/lib/mock-data';

export async function GET() {
  return NextResponse.json({ courses });
}

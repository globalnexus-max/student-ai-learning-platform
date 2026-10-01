import { NextResponse } from 'next/server';
import { getAdminAnalytics } from '@/lib/admin-analytics';

export async function GET() {
  const data = await getAdminAnalytics();
  return NextResponse.json({ data });
}

import { NextRequest, NextResponse } from 'next/server';
import { getSession, setSession, clearSession } from '@/lib/auth';

const demoUsers = [
  {
    id: 'u-student-1',
    email: 'student@example.com',
    name: 'Nargiz A.',
    role: 'STUDENT' as const,
  },
  {
    id: 'u-teacher-1',
    email: 'teacher@example.com',
    name: 'Samir M.',
    role: 'TEACHER' as const,
  },
  {
    id: 'u-admin-1',
    email: 'admin@example.com',
    name: 'Leyla R.',
    role: 'ADMIN' as const,
  },
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = String(body.email || '').trim().toLowerCase();
    const role = ['STUDENT', 'TEACHER', 'ADMIN'].includes(String(body.role || '').toUpperCase())
      ? String(body.role).toUpperCase()
      : 'STUDENT';

    const matchedUser = demoUsers.find((user) => user.email === email) || {
      id: `u-${Date.now()}`,
      email,
      name: body.name || 'New User',
      role: role as 'STUDENT' | 'TEACHER' | 'ADMIN',
    };

    const response = setSession({
      id: matchedUser.id,
      email: matchedUser.email,
      name: matchedUser.name,
      role: matchedUser.role,
    });

    return response;
  } catch {
    return NextResponse.json({ error: 'Unable to sign in' }, { status: 500 });
  }
}

export async function GET() {
  const session = getSession();

  if (!session) {
    return NextResponse.json({ user: null });
  }

  return NextResponse.json({ user: session });
}

export async function DELETE() {
  return clearSession();
}

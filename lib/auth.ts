import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const SESSION_COOKIE = 'student_ai_session';

export type SessionUser = {
  id: string;
  email: string;
  name: string;
  role: 'STUDENT' | 'TEACHER' | 'ADMIN';
};

export function getSession(): SessionUser | null {
  const cookieStore = cookies();
  const raw = cookieStore.get(SESSION_COOKIE)?.value;

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(Buffer.from(raw, 'base64').toString('utf-8')) as SessionUser;
  } catch {
    return null;
  }
}

export function setSession(user: SessionUser) {
  const encoded = Buffer.from(JSON.stringify(user)).toString('base64');

  return NextResponse.json({ user }, {
    headers: {
      'Set-Cookie': `${SESSION_COOKIE}=${encoded}; Path=/; HttpOnly; SameSite=Lax; Max-Age=3600`,
    },
  });
}

export function clearSession() {
  return NextResponse.json({ ok: true }, {
    headers: {
      'Set-Cookie': `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`,
    },
  });
}

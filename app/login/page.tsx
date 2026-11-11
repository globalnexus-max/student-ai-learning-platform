"use client";

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const demoAccounts = [
  { email: 'student@example.com', role: 'STUDENT', name: 'Nargiz A.' },
  { email: 'teacher@example.com', role: 'TEACHER', name: 'Samir M.' },
  { email: 'admin@example.com', role: 'ADMIN', name: 'Leyla R.' },
];

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('student@example.com');
  const [role, setRole] = useState('STUDENT');
  const [status, setStatus] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus('Signing in...');

    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        role,
        name: demoAccounts.find((account) => account.email === email)?.name || 'Student',
      }),
    });

    if (response.ok) {
      setStatus('Signed in successfully.');
      router.push('/dashboard');
      router.refresh();
      return;
    }

    const payload = await response.json();
    setStatus(payload.error || 'Sign in failed.');
  }

  return (
    <main className="dashboard-shell">
      <div className="panel" style={{ maxWidth: 520, margin: '80px auto 0' }}>
        <h3 style={{ marginTop: 0 }}>Student AI login</h3>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
          <label style={{ display: 'grid', gap: 8 }}>
            <span>Email</span>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="student@example.com"
              style={{
                padding: 12,
                borderRadius: 10,
                border: '1px solid rgba(148,163,184,0.25)',
                background: '#0d1e2c',
                color: '#e5f0ff',
              }}
            />
          </label>

          <label style={{ display: 'grid', gap: 8 }}>
            <span>Role</span>
            <select
              value={role}
              onChange={(event) => setRole(event.target.value)}
              style={{
                padding: 12,
                borderRadius: 10,
                border: '1px solid rgba(148,163,184,0.25)',
                background: '#0d1e2c',
                color: '#e5f0ff',
              }}
            >
              <option value="STUDENT">Student</option>
              <option value="TEACHER">Teacher</option>
              <option value="ADMIN">Admin</option>
            </select>
          </label>

          <button type="submit" className="card-button">Sign in</button>
        </form>

        <p style={{ color: '#9bb2c9', marginTop: 16 }}>{status}</p>

        <div style={{ marginTop: 18, display: 'grid', gap: 8, color: '#9bb2c9' }}>
          <strong>Demo accounts</strong>
          {demoAccounts.map((account) => (
            <button
              key={account.email}
              type="button"
              onClick={() => {
                setEmail(account.email);
                setRole(account.role);
              }}
              className="secondary-btn"
              style={{ justifyContent: 'flex-start', width: '100%' }}
            >
              {account.name} — {account.role}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

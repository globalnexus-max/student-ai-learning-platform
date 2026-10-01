import Link from 'next/link';
import { getAdminAnalytics } from '@/lib/admin-analytics';

export default async function AdminPage() {
  const data = await getAdminAnalytics();

  return (
    <main className="admin-shell">
      <header className="page-header">
        <div>
          <h1>Admin overview</h1>
          <p>Monitor learner health, engagement, and AI-guided interventions.</p>
        </div>
        <Link href="/dashboard" className="inline-link">Back to dashboard</Link>
      </header>

      <section className="admin-grid">
        <div className="panel">
          <h3>Class performance</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Course</th>
                <th>Progress</th>
                <th>Status</th>
                <th>Risk</th>
              </tr>
            </thead>
            <tbody>
              {data.map((student) => (
                <tr key={student.student}>
                  <td>{student.student}</td>
                  <td>{student.course}</td>
                  <td>{student.completion}%</td>
                  <td>{student.status}</td>
                  <td>{student.riskScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="list-card">
          <h3>AI admin notes</h3>
          <ul className="side-list">
            {data.map((student) => (
              <li key={`${student.student}-summary`}>
                <strong>{student.student}</strong>: {student.aiSummary}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

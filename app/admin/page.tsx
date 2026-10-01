import Link from 'next/link';

const studentRows = [
  { name: 'Nargiz A.', progress: '78%', status: 'On track', lastActive: '2h ago' },
  { name: 'Samir M.', progress: '64%', status: 'Needs review', lastActive: '5h ago' },
  { name: 'Leyla R.', progress: '90%', status: 'Excellent', lastActive: '1d ago' },
  { name: 'Ramin K.', progress: '52%', status: 'Needs support', lastActive: '3h ago' },
];

export default function AdminPage() {
  return (
    <main className="admin-shell">
      <header className="page-header">
        <div>
          <h1>Admin overview</h1>
          <p>Manage student activity, class health, and AI-guided recommendations.</p>
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
                <th>Progress</th>
                <th>Status</th>
                <th>Last active</th>
              </tr>
            </thead>
            <tbody>
              {studentRows.map((row) => (
                <tr key={row.name}>
                  <td>{row.name}</td>
                  <td>{row.progress}</td>
                  <td>{row.status}</td>
                  <td>{row.lastActive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="list-card">
          <h3>AI admin notes</h3>
          <ul className="side-list">
            <li>3 students need additional support before the next checkpoint.</li>
            <li>Product design cohort is outperforming average engagement.</li>
            <li>AI recommendation quality improved 18% in the past week.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

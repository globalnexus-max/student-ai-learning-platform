import Link from 'next/link';
import { getDashboardData } from '@/lib/dashboard-data';

export default async function DashboardPage() {
  const { metrics, studyPlan, insights } = await getDashboardData();

  return (
    <main className="dashboard-shell">
      <header className="page-header">
        <div>
          <h1>Student dashboard</h1>
          <p>Welcome back, Nargiz. Your learning plan is updating in real time.</p>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href="/courses" className="inline-link">View all courses</Link>
          <Link href="/login" className="inline-link">Logout demo</Link>
        </div>
      </header>

      <section className="metrics-grid">
        {metrics.map((stat) => (
          <div key={stat.label} className="metric-card">
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </section>

      <section className="content-grid">
        <div className="panel">
          <h3>Recommended next steps</h3>
          <ul className="task-list">
            {studyPlan.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="list-card">
          <h3>AI learning insights</h3>
          <ul className="insight-list">
            {insights.map((group) => (
              <li key={group.title}>
                <strong>{group.title}</strong>
                <div>
                  {group.items.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

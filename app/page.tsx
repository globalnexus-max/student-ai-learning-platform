import Link from 'next/link';

const features = [
  'Academic curriculum for Grades 9-12',
  '6 subjects per grade',
  '24 credits in each academic year',
  'OpenStax learning resources',
  'Teacher and student progress tracking',
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand">GradeFlow AI</div>
        <nav className="nav">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/courses">Curriculum</Link>
          <Link href="/resources">Resources</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Academic learning platform</span>
          <h1>Smart education for students in Grades 9–12.</h1>
          <p>
            A curriculum-based learning system built around six subjects per grade, 24 credits per academic year,
            and real OpenStax resources for every subject.
          </p>
          <div className="cta-row">
            <Link href="/dashboard" className="primary-btn">Open dashboard</Link>
            <Link href="/courses" className="secondary-btn">View curriculum</Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="mini-stat">
            <span>Grade levels</span>
            <strong>4</strong>
          </div>
          <div className="mini-stat">
            <span>Subjects / grade</span>
            <strong>6</strong>
          </div>
          <div className="mini-stat">
            <span>Credits / grade</span>
            <strong>24</strong>
          </div>
        </div>
      </section>

      <section className="feature-grid">
        {features.map((feature) => (
          <div key={feature} className="feature-card">
            <span className="dot" />
            <p>{feature}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

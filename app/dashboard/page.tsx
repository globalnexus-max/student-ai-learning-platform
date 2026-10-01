import Link from 'next/link';

const features = [
  'AI tutor guidance',
  'Adaptive study paths',
  'Progress dashboards',
  'Assignments and quizzes',
  'Teacher and admin control',
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand">LearnFlow AI</div>
        <nav className="nav">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/admin">Admin</Link>
          <Link href="/login">Login</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Adaptive learning platform</span>
          <h1>Turn student learning into a guided, intelligent journey.</h1>
          <p>
            A complete learning system for students, teachers, and administrators built
            around AI feedback, progress tracking, and personalized study planning.
          </p>
          <div className="cta-row">
            <Link href="/login" className="primary-btn">Login to start</Link>
            <Link href="/courses" className="secondary-btn">Browse courses</Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="mini-stat">
            <span>Completion</span>
            <strong>78%</strong>
          </div>
          <div className="mini-stat">
            <span>AI coaching</span>
            <strong>Live</strong>
          </div>
          <div className="mini-stat">
            <span>Next task</span>
            <strong>Data checkpoint</strong>
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

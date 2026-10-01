import Link from 'next/link';
import { openStaxResources } from '@/lib/openstax';

export default function OpenStaxPage() {
  const gradeGroups = Array.from(
    new Map(
      openStaxResources.map((item) => [item.grade, { grade: item.grade, label: item.gradeLabel }]),
    ).values(),
  );

  return (
    <main className="courses-shell">
      <header className="page-header">
        <div>
          <h1>OpenStax curriculum resources</h1>
          <p>Direct access to open educational materials for 9th–12th grade subjects.</p>
        </div>
        <Link href="/dashboard" className="inline-link">Back to dashboard</Link>
      </header>

      <section className="course-grid">
        {gradeGroups.map((group) => {
          const subjects = openStaxResources.filter((item) => item.grade === group.grade);

          return (
            <article key={group.grade} className="course-card">
              <h3>{group.label}</h3>
              <div className="tag-row">
                <span className="tag">6 subjects</span>
                <span className="tag">24 credits</span>
              </div>

              <ul className="side-list">
                {subjects.map((subject) => (
                  <li key={`${subject.grade}-${subject.subject}`}>
                    <strong>{subject.subject}</strong>: {subject.title}
                    <div>
                      <a href={subject.url} target="_blank" rel="noreferrer" className="inline-link">
                        Open resource
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </section>
    </main>
  );
}

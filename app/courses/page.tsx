import Link from 'next/link';
import { courses } from '@/lib/mock-data';

export default function CourseCatalogPage() {
  return (
    <main className="courses-shell">
      <header className="page-header">
        <div>
          <h1>Available courses</h1>
          <p>Auto-enrollment flow for learners based on current goals and performance.</p>
        </div>
        <Link href="/dashboard" className="inline-link">Back to dashboard</Link>
      </header>

      <section className="course-grid">
        {courses.map((course) => (
          <article key={course.id} className="course-card">
            <div className="course-meta">
              <span>{course.level}</span>
              <span>{course.duration}</span>
            </div>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="tag-row">
              {course.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="course-actions">
              <strong>{course.progress}% complete</strong>
              <button
                type="button"
                className="card-button"
                onClick={async () => {
                  await fetch('/api/enroll', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ userId: 'u-student-1', courseId: course.id }),
                  });
                  window.location.href = '/dashboard';
                }}
              >
                Enroll
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

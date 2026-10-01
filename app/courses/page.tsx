import Link from 'next/link';
import { courses } from '@/lib/mock-data';

export default function CoursesPage() {
  return (
    <main className="courses-shell">
      <header className="page-header">
        <div>
          <h1>Courses</h1>
          <p>Curated learning tracks adapted to your own pace and goals.</p>
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
            <div className="progress-bar">
              <span style={{ width: `${course.progress}%` }} />
            </div>
            <div className="course-actions">
              <strong>{course.progress}% complete</strong>
              <Link href={`/courses/${course.id}`} className="card-button">Open</Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

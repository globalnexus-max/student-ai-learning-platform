import Link from 'next/link';
import { notFound } from 'next/navigation';
import { courses } from '@/lib/mock-data';

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = courses.find((item) => item.id === params.id);

  if (!course) {
    notFound();
  }

  return (
    <main className="courses-shell">
      <header className="page-header">
        <div>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
        </div>
        <Link href="/courses" className="inline-link">All courses</Link>
      </header>

      <section className="content-grid">
        <div className="panel">
          <h3>Module overview</h3>
          <ul className="task-list">
            <li>Week 1: Foundations and key concepts</li>
            <li>Week 2: Applied exercises and guided practice</li>
            <li>Week 3: Feedback loop with AI tutor</li>
            <li>Week 4: Final project and assessment</li>
          </ul>
        </div>

        <div className="list-card">
          <h3>Course stats</h3>
          <ul className="side-list">
            <li>Level: {course.level}</li>
            <li>Duration: {course.duration}</li>
            <li>Progress: {course.progress}%</li>
            <li>Next milestone: Reflection review</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

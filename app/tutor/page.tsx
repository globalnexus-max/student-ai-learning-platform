import Link from 'next/link';
import { generateAdaptiveRecommendation } from '@/lib/tutor-data';

export default async function TutorPage() {
  const recommendation = await generateAdaptiveRecommendation({
    name: 'Nargiz',
    topic: 'UI design and product thinking',
    strengths: ['visual consistency', 'reflection quality'],
    weaknesses: ['data interpretation', 'problem framing'],
  });

  return (
    <main className="dashboard-shell">
      <header className="page-header">
        <div>
          <h1>AI tutor</h1>
          <p>Your next learning move is generated based on current strengths and weak points.</p>
        </div>
        <Link href="/dashboard" className="inline-link">Back to dashboard</Link>
      </header>

      <section className="content-grid">
        <div className="panel">
          <h3>Recommendation</h3>
          <p>{recommendation.recommendation}</p>
          <ul className="task-list" style={{ marginTop: 18 }}>
            {recommendation.actionPlan.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="list-card">
          <h3>Generated lesson</h3>
          <strong>{recommendation.generatedLesson.title}</strong>
          <p>{recommendation.generatedLesson.summary}</p>
        </div>
      </section>
    </main>
  );
}

import Link from 'next/link';

export default function SponsorsPage() {
  return (
    <main className="sponsors-shell">
      <header className="topbar">
        <Link href="/" className="brand">GradeFlow AI</Link>
        <nav className="nav" aria-label="Main navigation">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/courses">Curriculum</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/sponsors" aria-current="page">Sponsors</Link>
        </nav>
      </header>

      <section className="sponsor-hero">
        <span className="eyebrow">A new vision for high school</span>
        <h1>Help build a hybrid high school for Grades 9–12.</h1>
        <p>
          We are developing a U.S.-based high school project designed to combine flexible online learning
          with in-person educational experiences. We are seeking mission-aligned sponsors and partners to
          help move the project toward launch.
        </p>
      </section>

      <section className="sponsor-grid" aria-label="Project overview">
        <article className="sponsor-card">
          <span className="sponsor-label">The vision</span>
          <h2>High school designed around students</h2>
          <p>
            The proposed school will serve students in Grades 9–12 through a hybrid learning model, with
            a structured academic curriculum and support for student progress.
          </p>
        </article>

        <article className="sponsor-card">
          <span className="sponsor-label">Accreditation update</span>
          <h2>Discussions with Cognia are ongoing</h2>
          <p>
            We have held discussions with Cognia, a leading accreditation and school improvement
            organization. The next steps discussed include completing tax registration and securing a
            leased school facility and office. Accreditation has not yet been awarded.
          </p>
        </article>

        <article className="sponsor-card">
          <span className="sponsor-label">Diploma pathway</span>
          <h2>A goal for the school</h2>
          <p>
            The project aims to provide a pathway toward a U.S. high school diploma. Any diploma program
            will be subject to applicable state requirements, school authorization, and accreditation
            approvals.
          </p>
        </article>
      </section>

      <section className="sponsor-support">
        <div>
          <span className="sponsor-label">Partner with us</span>
          <h2>Support the steps needed to move forward</h2>
          <p>
            Financial support is needed for tax registration, leasing a school facility and office, and
            developing the academic programs. These startup steps will help the project advance toward
            the formal accreditation process and the launch of a hybrid high school for Grades 9–12.
          </p>
          <p>
            Interested in supporting our school project? Please contact us to discuss sponsorship
            opportunities. Bank details will be provided directly upon contact, and the purpose and use
            of any support will be discussed with the sponsor in advance.
          </p>
          <p className="sponsor-note">
            The school has not yet been accredited or authorized to award diplomas.
          </p>
        </div>
        <Link href="/" className="secondary-btn">Back to GradeFlow AI</Link>
      </section>
    </main>
  );
}

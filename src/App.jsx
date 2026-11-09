import "./App.css";

const focusAreas = [
  { name: "Unified Registry", status: "in testing" },
  { name: "Aadhaar Vault", status: "in testing" },
  { name: "Sparsh DBT", status: "in testing" },
];

const stats = [
  { value: "1", label: "Shipped project" },
  { value: "3", label: "Government systems in testing" },
  { value: "BCA", label: "In progress, IGNOU" },
];

const skillGroups = [
  {
    title: "Current role",
    items: ["Apprentice Software Tester", "Kerala State IT Mission"],
  },
  {
    title: "Current work",
    items: ["Unified Registry", "Aadhaar Vault", "Sparsh DBT"],
  },
  {
    title: "Project work",
    items: ["AI Code Debugger", "SQL Query Generator", "AI Chatbot"],
  },
  {
    title: "Education",
    items: ["BCA — IGNOU", "Diploma in Computer Engineering"],
  },
];

const project = {
  code: "CASE-01",
  title: "AI-Powered Development Assistant",
  type: "College project",
  description:
    "A college project combining six AI-powered functionalities into a single web application for development and productivity tasks.",
  technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "AI APIs"],
  features: [
    "AI Code Debugger",
    "SQL Query Generator",
    "Text Summarization",
    "Grammar Correction",
    "AI Chatbot",
    "Words-to-Paragraph Converter",
  ],
};

const education = [
  {
    year: "Current",
    title: "BCA",
    place: "Indira Gandhi National Open University (IGNOU)",
  },
  {
    year: "Completed",
    title: "Diploma in Computer Engineering",
    place: "",
  },
];

function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12l5 5L20 6" />
    </svg>
  );
}

function App() {
  return (
    <div className="site">
      <header className="topbar">
        <a href="#home" className="mark">
          <span className="mark-box">AS</span>
          <span className="mark-name">Ancy Shihabudeen</span>
        </a>

        <nav className="topnav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </nav>

        <a href="#contact" className="topbar-cta">
          Get in touch
          <IconArrow />
        </a>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <span className="hero-badge">Verified builds only</span>
            <p className="hero-overline">apprentice software tester — kerala state it mission</p>

            <h1 className="hero-title">
              I make sure Kerala&rsquo;s
              <br />
              software works.
            </h1>

            <p className="hero-lede">
              I test government digital services before people ever have to trust
              them &mdash; currently on Unified Registry, Aadhaar Vault and Sparsh
              DBT, while finishing a BCA at IGNOU.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">See the work</a>
              <a href="#contact" className="btn btn-ghost">Get in touch</a>
            </div>

            <ul className="focus-list">
              {focusAreas.map((f) => (
                <li key={f.name}>
                  <span className="dot" />
                  {f.name}
                  <span className="focus-status">{f.status}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-panel" aria-hidden="true">
            <div className="panel-bar">
              <span />
              <span />
              <span />
              <p>test-log.txt</p>
            </div>
            <pre className="panel-body">
{`$ whoami
ancy.shihabudeen

$ role
apprentice software tester
kerala state it mission

$ current_queue
unified_registry   ... testing
aadhaar_vault      ... testing
sparsh_dbt         ... testing

$ education
bca (ignou)        ... in progress
diploma, comp. eng ... complete

$ status
verified`}
            </pre>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-head">
            <p className="eyebrow">The short version</p>
            <h2>Learning the discipline of finding what&rsquo;s broken &mdash; carefully, and on record.</h2>
          </div>

          <div className="about-body">
            <div className="about-text">
              <p>
                I&rsquo;m Ancy Shihabudeen, an Apprentice Software Tester at
                Kerala State IT Mission, where public systems don&rsquo;t get
                to fail quietly.
              </p>
              <p>
                Day to day I&rsquo;m verifying the Unified Registry, Aadhaar
                Vault and Sparsh DBT projects while studying for a BCA at
                IGNOU. Outside of that, I built a college project stitching
                together six AI-powered tools into one application.
              </p>
            </div>

            <dl className="stat-list">
              {stats.map((s) => (
                <div className="stat-row" key={s.label}>
                  <dt>{s.value}</dt>
                  <dd>{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-head">
            <p className="eyebrow">Experience</p>
            <h2>Kerala State IT Mission</h2>
          </div>

          <article className="case-panel">
            <div className="case-panel-top">
              <span className="status-chip status-amber">active</span>
              <span className="case-meta">apprentice software tester</span>
            </div>
            <p className="case-panel-text">
              Currently testing the Unified Registry and Aadhaar Vault
              projects &mdash; two systems the state relies on to keep
              citizen data accurate and accessible.
            </p>
          </article>
        </section>

        <section id="skills" className="section">
          <div className="section-head">
            <p className="eyebrow">Where things stand</p>
            <h2>What I&rsquo;m working with right now.</h2>
          </div>

          <div className="matrix">
            {skillGroups.map((group) => (
              <div className="matrix-row" key={group.title}>
                <span className="matrix-label">{group.title}</span>
                <div className="matrix-items">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-head">
            <p className="eyebrow">{project.type}</p>
            <h2>One build, six tools in one.</h2>
          </div>

          <article className="project-case">
            <div className="project-case-top">
              <span className="status-chip status-green">shipped</span>
              <span className="case-id">{project.code}</span>
              <h3>{project.title}</h3>
            </div>

            <p className="project-case-desc">{project.description}</p>

            <div className="project-case-grid">
              <div>
                <span className="detail-label">Stack</span>
                <div className="tag-row">
                  {project.technologies.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <div>
                <span className="detail-label">Test coverage</span>
                <ul className="check-list">
                  {project.features.map((f) => (
                    <li key={f}>
                      <IconCheck />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </section>

        <section id="education" className="section">
          <div className="section-head">
            <p className="eyebrow">Education</p>
            <h2>Still studying, still building.</h2>
          </div>

          <div className="timeline">
            {education.map((item) => (
              <div className="timeline-row" key={item.title}>
                <span className="timeline-year">{item.year}</span>
                <div className="timeline-info">
                  <h3>{item.title}</h3>
                  {item.place && <p>{item.place}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="stamp">
          <div className="stamp-box">
            <span className="stamp-mark">Verified</span>
            <p>
              Learn the systems. Test them properly. Build what&rsquo;s next.
            </p>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-head">
            <p className="eyebrow">Contact</p>
            <h2>Let&rsquo;s talk.</h2>
          </div>

          <dl className="record">
            <div>
              <dt>Name</dt>
              <dd>Ancy Shihabudeen</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>Apprentice Software Tester</dd>
            </div>
            <div>
              <dt>Organisation</dt>
              <dd>Kerala State IT Mission</dd>
            </div>
            <div>
              <dt>Study</dt>
              <dd>BCA, IGNOU (in progress)</dd>
            </div>
          </dl>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-left">
          <span className="mark-box small">AS</span>
          <div>
            <strong>Ancy Shihabudeen</strong>
            <span>Apprentice Software Tester</span>
          </div>
        </div>

        <p>&copy; {new Date().getFullYear()} Ancy Shihabudeen.</p>

        <a href="#home" className="back-top">
          Back to top
          <IconArrow />
        </a>
      </footer>
    </div>
  );
}

export default App;

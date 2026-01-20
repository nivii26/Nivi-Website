import "./Resume.css";

export default function Resume() {
  return (
    <main className="resume">
      <section className="resume-container">
        {/* Header */}
        <header className="resume-header">
          <h1 className="resume-title">
            My <span className="gradient-text">Resume</span>
          </h1>

          <div className="resume-actions">
            <a
              href="/Niveditha-Nerella-Resume-SC.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button primary"
            >
              Open in new tab ↗
            </a>

            <a
              href="/Niveditha-Nerella-Resume-SC.pdf"
              download
              className="button"
            >
              Download
            </a>
          </div>
        </header>

        {/* Resume frame */}
        <div className="card resume-frame">
          <iframe
            title="Niveditha Nerella Resume"
            src="/Niveditha-Nerella-Resume-SC.pdf"
            className="resume-iframe"
          />
        </div>
      </section>
    </main>
  );
}

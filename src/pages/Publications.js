import "./Publications.css";

const publications = [
  {
    title: "Leveraging AI to Drive Operational Excellence in the Manufacturing Sector",
    authors: "Niveditha Nerella, Pranay Chimmani, Chad Laux",
    venue: "10th International Conference on Operational Excellence (ICOPEX)",
    location: "Portugal",
    date: "Sep 2025",
    type: "Conference Paper",
    description:
      "This work explores how AI and large language models can enable operational excellence in manufacturing by improving decision support, standardizing best practices, and accelerating continuous improvement workflows. The paper highlights practical pathways for integrating AI into OpEx initiatives and driving measurable efficiency gains.",
    tags: ["Operational Excellence", "AI", "LLMs", "Manufacturing", "Industry 4.0"],
    link: "", // add PDF/arXiv link later if you want
  },
  {
  title: "Can AI Be Your Energy Consultant?",
  authors: "Pranay Chimmani, Niveditha Nerella, Chad Laux",
  venue: "The 17th International Green Energy Conference (IGEC)",
  
  date: "Oct 2025",
  type: "Conference Paper",
  description:
    "This paper investigates the potential of AI-driven decision support systems to act as virtual energy consultants. By leveraging machine learning and domain knowledge, the work demonstrates how AI can analyze energy usage patterns, provide actionable recommendations, and support more sustainable and cost-efficient energy management.",
  tags: ["AI", "Energy Systems", "Decision Support", "Sustainability", "Machine Learning"],
  link: "",
}
];

const conferences = [
  {
    name: "PEARC ’25",
    year: "2025",
    notes:
      "Attended sessions across HPC systems, user support, and applied AI in research computing.",
    tags: ["HPC", "AI Infrastructure", "Research Computing"],
    link: "",
  },
  {
    name: "All Things Open 2025",
    year: "2025",
    notes:
      "Explored open-source tooling, developer ecosystems, and modern cloud-native practices.",
    tags: ["Open Source", "Cloud Native", "Developer Tools"],
    link: "",
  },
  {
    name: "Supercomputing 2025 (SC25)",
    year: "2025",
    notes:
      "Engaged with HPC + AI systems, scaling challenges, and emerging GPU software stacks.",
    tags: ["HPC", "GPUs", "AI Systems"],
    link: "",
  },
  {
    name: "WiCyS ’26 (Women in CyberSecurity)",
    year: "2026",
    notes:
      "Awarded a scholarship to attend and engage with the women-in-security community.",
    tags: ["Cybersecurity", "Community", "Professional Development"],
    link: "",
  },
];

// const presentations = [
//   {
//     title: "PEARC ’25 Lightning Talk",
//     venue: "PEARC ’25",
//     year: "2025",
//     type: "Lightning Talk",
//     description:
//       "Presented a short lightning talk highlighting applied work at the intersection of HPC and AI systems.",
//     media: {
//       image: "/pearc-lightning-talk.png", // ✅ update to your real path
//       alt: "PEARC ’25 lightning talk slide",
//     },
//     link: "",
//   },
//   {
//     title: "SC25 Booth Talk",
//     venue: "Supercomputing 2025 (SC25)",
//     year: "2025",
//     type: "Booth Talk",
//     description:
//       "Delivered a booth talk/demo focused on practical HPC + AI infrastructure workflows and system design.",
//     link: "",
//   },
//   {
//     title: "ICOPEX Presentation: Leveraging AI to Drive Operational Excellence",
//     venue: "10th International Conference on Operational Excellence (ICOPEX)",
//     year: "2025",
//     type: "Conference Presentation",
//     description:
//       "Presented the conference paper on applying AI to operational excellence in manufacturing, emphasizing real-world integration and impact.",
//     link: "",
//   },
// ];

export default function Publications() {
  return (
    <main className="publications">
      <section className="publications-container">
        {/* Header */}
        <header className="publications-header">
          <h1 className="publications-title">
           Conferences & <span className="gradient-text">Research </span>
          </h1>
          <p className="publications-subtitle">
            Research Papers, Presentations, and Conferences attended.
          </p>
        </header>

        {/* Publications */}
        <h2 className="publications-section-title">Publications</h2>
        <div className="publications-list">
          {publications.map((p) => (
            <article className="card publication-card" key={p.title}>
              <div className="publication-top">
                <span className="publication-pill">{p.type}</span>
                <span className="publication-date">{p.date}</span>
              </div>

              <h3 className="publication-title">{p.title}</h3>

              <p className="publication-meta">
                <span className="publication-authors">{p.authors}</span> ·{" "}
                <span className="publication-venue">{p.venue}</span> ·{" "}
                <span className="publication-location">{p.location}</span>
              </p>

              <p className="publication-desc">{p.description}</p>

              <div className="publication-tags">
                {p.tags.map((t) => (
                  <span className="publication-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-link"
                >
                  Read paper →
                </a>
              )}
            </article>
          ))}
        </div>

        {/* Conferences */}
<h2 className="publications-section-title">Conferences</h2>

<div className="conferences-grid">
  {[...conferences]
    .sort((a, b) => Number(b.year) - Number(a.year))
    .map((c) => (
      <article className="card conference-card" key={`${c.name}-${c.year}`}>
        <div className="conference-top">
          <span className="conference-year">{c.year}</span>
        </div>

        <h3 className="conference-title">{c.name}</h3>
        <p className="conference-desc">{c.notes}</p>

        <div className="conference-tags">
          {c.tags.map((t) => (
            <span className="conference-tag" key={t}>
              {t}
            </span>
          ))}
        </div>

        {c.link ? (
          <a
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="conference-link"
          >
            Details →
          </a>
        ) : null}
      </article>
    ))}
</div>


       

      </section>
    </main>
  );
}

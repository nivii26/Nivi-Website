import "./Projects.css";

const projects = [
  {
    title: "GANs vs. Diffusion: Who Generates CelebA Better?",
    description:
  "This project evaluates GANs and diffusion models on the CelebA dataset to determine which approach generates more realistic facial images. Performance is measured using Frechet Inception Distance (FID) to assess image quality.",
    skills: ["PyTorch", "Diffusion Models", "GANs", "Computer Vision", "FID", "Experiment Design"],
    badge: "Deep Learning",
    icon: "😎",
  
  },
  {
    title: "Pun Intended!",
    description:
  "This project explores how large language models interpret and explain puns by analyzing their ability to reason over linguistic ambiguity and wordplay. Explores how different large language models “get” humor and puns, comparing their ability to catch wordplay, double meanings, and the subtle twists that make jokes funny.",
    skills: ["LLMs", "RAG", "NLP", "Streamlit", "Speech-to-Text", "Prompting", "Vector DB"],
    badge: "LLM App",
    icon: "🗣️",
    
  },
  {
    title: "Voice of the Customer Analysis",
    description:
      "Built an end-to-end NLP pipeline that transforms raw customer reviews into actionable insights using sentiment analysis and topic modeling. Developed an interactive dashboard to present key results and findings, combining clear visualizations with intuitive design to help stakeholders quickly understand trends, patterns, and actionable insights.",
    skills: ["NLP", "Sentiment Analysis", "Topic Modeling", "TF-IDF", "Word2Vec", "PCA", "Scikit-learn"],
    badge: "NLP",
    icon: "💬",
    github: "https://github.com/nivii26/DSA4263-Voice-of-Customer-VOC-analysis",
  },
  {
    title: "Prediction of m6A RNA Modifications",
    description:
  "This project focuses on predicting m6A RNA modifications from direct RNA-seq signals using machine learning. Multiple models such as Random Forest, XGBoost, SVM and LSTM were evaluated. Feature selection and oversampling techniques were applied to address the class imbalance issue.",
    skills: ["Bioinformatics", "XGBoost", "SVM", "Random Forest", "Feature Selection", "Imbalanced Data", "Model Comparison"],
    badge: "Genomics",
    icon: "🧬",
    github: "https://github.com/nivii26/DSA4262_genex",
  },
  {
    title: "Grammatical Error Correction Ensemble (BART + GECToR)",
    description:
      "Developed a majority-vote ensemble for grammatical error correction by combining BART and GECToR to balance fluency and precision. The work includes building data-processing pipelines for .m2 datasets and achieves a measurable improvement in F-score on the BEA 2019 benchmark.",
    skills: ["NLP", "GEC", "BART", "GECToR", ".m2", "Ensembling", "Python"],
    badge: "NLP",
    icon: "✍️",
    github: "https://github.com/nivii26/CS4248-Grammatical-Error-Correction",
  },
  {
    title: "Seoul Bike Rental Demand Forecasting",
    description:
      "Forecasted bike rental demand by integrating automated feature engineering with tree-based learning models such as Random Forest and XGBoost. Model interpretability is addressed using SHAP, and insights are visualized through a Tableau dashboard highlighting spatial, seasonal, and hourly demand patterns.",
    skills: ["Featuretools", "XGBoost", "Random Forest", "Time Series", "SHAP", "Tableau", "Python"],
    badge: "Forecasting",
    icon: "🚲",
    github: "https://github.com/nivii26/Seoul-Bike-Rental",
  },
  {
  title: "Market-Basket Analysis",
  description:
    "This project applies market-basket analysis to uncover hidden purchasing patterns and product associations within transactional data. Association rule mining techniques such as Apriori are used to identify frequently co-occurring items, generating actionable insights that can inform cross-selling strategies, promotions, and inventory planning.",
  skills: [
    "Association Rule Mining",
    "Apriori Algorithm",
    "Market-Basket Analysis",
    "Frequent Itemsets",
    "Data Mining",
    "Python",
    "Pandas"
  ],
  badge: "Data Mining",
  icon: "🛒",
  github: "https://github.com/nivii26/healthcampaign",
},

  {
    title: "Statistical Analysis of Network Models",
    description:
  "This study analyzes classical and modern random graph models, including Erdős–Rényi, ERGM, and Preferential Attachment, to understand real-world network structure. The models are applied to datasets such as COVID-19 contact tracing in Singapore and Facebook networks, with centrality analysis used to identify influential nodes.",

    skills: ["Network Science", "NetworkX", "R (statnet)", "igraph", "ERGM", "Centrality Analysis"],
    badge: "Networks",
    icon: "🕸️",
    
  },
];

// Inline GitHub icon (no external libs)
function GitHubIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="github-icon"
    >
      <path
        fill="currentColor"
        d="M12 .5C5.73.5.75 5.64.75 12.01c0 5.11 3.29 9.44 7.86 10.97.58.11.79-.26.79-.57v-2.07c-3.2.71-3.88-1.57-3.88-1.57-.53-1.36-1.29-1.72-1.29-1.72-1.05-.73.08-.72.08-.72 1.16.08 1.77 1.2 1.77 1.2 1.03 1.8 2.71 1.28 3.37.98.1-.76.4-1.28.73-1.57-2.56-.3-5.26-1.3-5.26-5.78 0-1.28.45-2.32 1.19-3.14-.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.2a10.7 10.7 0 0 1 2.9-.4c.98 0 1.97.14 2.9.4 2.21-1.51 3.18-1.2 3.18-1.2.63 1.65.23 2.87.11 3.17.74.82 1.19 1.86 1.19 3.14 0 4.5-2.7 5.48-5.28 5.78.41.36.78 1.09.78 2.2v3.26c0 .31.21.68.8.57 4.56-1.53 7.85-5.86 7.85-10.97C23.25 5.64 18.27.5 12 .5z"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <main className="projects">
      <section className="projects-container">
        {/* Header */}
        <header className="projects-header">
          <h1 className="projects-title">
            Projects that I’ve <span className="gradient-text">built</span>.
          </h1>
          <p className="projects-subtitle">
            A few highlights across ML, LLM applications, and applied data science.
          </p>
        </header>

        {/* Grid */}
        <div className="projects-grid">
          {projects.map((p) => (
            <article className="card project-card" key={p.title}>
              <div className="project-top">
                <span className="project-badge">{p.badge}</span>
              </div>

              <div className="project-title-row">
                <span className="project-icon" aria-hidden="true">
                  {p.icon}
                </span>
                <h2 className="project-title">{p.title}</h2>
              </div>

              <p className="project-desc">{p.description}</p>

              <div className="project-skills">
                {p.skills.map((s) => (
                  <span className="project-skill-chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              {p.github ? (
                <a
                  className="project-github"
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon size={16} />
                  <span>View on GitHub</span>
                </a>
              ) : null}
            </article>
          ))}
        </div>

        
      </section>
    </main>
  );
}

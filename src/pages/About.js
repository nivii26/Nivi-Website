import "./About.css";
import rcacLogo from "../assets/rcac-logo.jpg";
import bigtappLogo from "../assets/bigtapp-logo.png";


export default function About() {
  return (
    <main className="about">
      <section className="about-container">
        {/* Header */}
        <div className="about-header">

          <h1 className="about-title">
            A little about <span className="gradient-text">me</span>.
          </h1>
          
        </div>

        {/* Top grid: Photo + Intro */}
        <div className="about-grid">
          {/* Photo card */}
          <div className="about-photo-wrap">
  <img
    src="me.png"
    alt="Niveditha Nerella"
    className="about-photo"
  />
</div>

          {/* Intro card */}
          <div className="card about-intro-card">
  <h2 className="section-title">Hi there! 👋</h2>

  <p className="section-text">
    I’m <strong>Niveditha Nerella</strong>, aka <strong>Nivi</strong>.<br />
    
    I’m a graduate student pursuing a Master’s in
    Computer and Information Technology at
    <strong> Purdue University</strong>.
    <br /><br />
  </p>

  <p className="section-text">
    I enjoy working at the intersection of data,
    product, and engineering,
    where I can turn ideas into well-designed, reliable systems.
<br /><br />
 <strong> Actively looking for full-time opportunities</strong>.
  </p>

  <div className="about-hobbies">
    <h2 className="section-title">Beyond work, I enjoy</h2>
    <ul className="about-hobbies-list">
      <li>
        <span className="hobby-icon">✈️</span>
        <span>Travelling</span>
      </li>
      <li>
        <span className="hobby-icon">📚</span>
        <span>Reading books</span>
      </li>
      <li>
        <span className="hobby-icon">🥾</span>
        <span>Board Games</span>
      </li>
    </ul>
  </div>
</div>

        </div>

    {/* Education */}
{/* Education */}
<section className="about-education">
  <h2 className="about-education-title">Education</h2>

  {/* GRID WRAPPER */}
  <div className="about-education-grid">
    {/* Purdue */}
    <div className="card education-card education-card-wide">
      <div className="education-logo-big">
        <img
          src="/purdue-logo.jpg"
          alt="Purdue University logo"
        />
      </div>

      <div className="education-content">
        <h3 className="education-school">Purdue University</h3>

        <p className="education-degree">
          Master’s in Computer and Information Technology <br />
          RA at Rosen Center for Advanced Computing <br />
          GPA: 3.9 / 4.0
        </p>

        <p className="education-meta">Indiana, USA</p>
      </div>
    </div>

    {/* NUS */}
    <div className="card education-card education-card-wide">
      <div className="education-logo-big-sg">
        <img
          src="/nus-logo.png"
          alt="National University of Singapore logo"
        />
      </div>

      <div className="education-content">
        <h3 className="education-school">
          National University of Singapore
        </h3>

        <p className="education-degree">
          Bachelor’s in Data Science and Analytics <br />
          Minor in Computer Science <br />
          Graduated with Honours
        </p>

        <p className="education-meta">Singapore</p>
      </div>
    </div>
  </div>
</section>


{/* Experience */}
<section className="about-experience" id="experience">
 

    
  <h2 className="about-education-title">My Experiences</h2>

  <div className="experience-row">
    {/* RCAC */}
    <article className="card exp-card">
      <div className="exp-logo">
        <img src={rcacLogo} alt="Purdue RCAC logo" />
      </div>

      <h3 className="exp-company">Purdue RCAC</h3>
      <p className="exp-role">Graduate Data Science Research Assistant</p>
      <p className="exp-dates">May 2025 – Present</p>
      <p className="exp-loc">Indiana, USA</p>

      

      <div className="exp-details">
        <ul>
          <li>
            Fine-tuned and deployed <strong>LLaMA 3.2 3B-Instruct</strong> using{" "}
            <strong>qLoRA</strong> + <strong>PEFT</strong> for QA-specific feedback.
          </li>
          <li>
            Built LLM NLP pipelines + React visualizations for <strong>ACID-R</strong> (DoD-funded)
            for vendor capability analysis.
          </li>
        </ul>
      </div>
    </article>

    {/* HTX */}
    <article className="card exp-card">
      <div className="exp-logo">
        <img
            src="/htx-logo.png"
            alt="HTX logo"
        />
        </div>

      <h3 className="exp-company">HTX</h3>
      <p className="exp-role">Data Scientist</p>
      <p className="exp-dates">Aug 2023 – Aug 2024</p>
      <p className="exp-loc">Singapore</p>

      

      <div className="exp-details">
        <ul>
          <li>
            Location-based crime prediction improved accuracy from <strong>48%</strong> to{" "}
            <strong>91%</strong>.
          </li>
          <li>
            Built an AOR document-generation chatbot using <strong>Azure ML</strong> +{" "}
            <strong>OpenAI API</strong>.
          </li>
        </ul>
      </div>
    </article>

    {/* Bata */}
    <article className="card exp-card">
      <div className="exp-logo">
        <img
            src="/bata-logo.png"
            alt="Bata logo"
        />
        </div>

      <h3 className="exp-company">Bata Group</h3>
      <p className="exp-role">Business Analyst</p>
      <p className="exp-dates">May 2023 – Jul 2023</p>
      <p className="exp-loc">Singapore</p>

   

      <div className="exp-details">
        <ul>
          <li>
            Created pitch decks for international franchising presented to senior leadership.
          </li>
          <li>
            Built dashboards and visualizations (matplotlib / seaborn) for diverse stakeholders.
          </li>
        </ul>
      </div>
    </article>

    {/* BigTapp */}
    <article className="card exp-card">
      <div className="exp-logo">
        <img src={bigtappLogo} alt="BigTapp logo" />
      </div>

      <h3 className="exp-company">BigTapp Pte. Ltd.</h3>
      <p className="exp-role">Data Science Intern</p>
      <p className="exp-dates">Jun 2021 – Aug 2021</p>
      <p className="exp-loc">Singapore</p>

      

      <div className="exp-details">
        <ul>
          <li>Cleaned/processed data into reusable modules for integration.</li>
          <li>
            Indoor localization scripts using real-time sensor data + <strong>RSSI</strong>.
          </li>
          <li>Visualized customer journeys with animated graphs.</li>
        </ul>
      </div>
    </article>
  </div>
</section>



{/* Skills */}
<section className="about-skills" id="skills">
  <div className="skills-head">
    <h2 className="about-skills-title">Skills</h2>
    
  </div>

  <div className="skills-grid-clean">
    <div className="card skills-card">
      <div className="skills-card-top">
        <h3 className="skills-card-title">Core Programming</h3>
        <span className="skills-card-pill">Engineering</span>
      </div>
      <div className="skills-chips-clean">
        <span className="skill-chip clean">Python</span>
        <span className="skill-chip clean">SQL</span>
        <span className="skill-chip clean">R</span>
        <span className="skill-chip clean">JavaScript</span>
        <span className="skill-chip clean">Git</span>
      </div>
    </div>

    <div className="card skills-card">
      <div className="skills-card-top">
        <h3 className="skills-card-title">Data & Analytics</h3>
        <span className="skills-card-pill">Data</span>
      </div>
      <div className="skills-chips-clean">
        <span className="skill-chip clean">Pandas</span>
        <span className="skill-chip clean">NumPy</span>
        <span className="skill-chip clean">EDA</span>
        <span className="skill-chip clean">Data Pipelines</span>
        <span className="skill-chip clean">ETL / ELT</span>
        <span className="skill-chip clean">Tableau</span>
      </div>
    </div>

    <div className="card skills-card">
      <div className="skills-card-top">
        <h3 className="skills-card-title">Machine Learning</h3>
        <span className="skills-card-pill">ML</span>
      </div>
      <div className="skills-chips-clean">
        <span className="skill-chip clean">Supervised Learning</span>
        <span className="skill-chip clean">Unsupervised Learning</span>
        <span className="skill-chip clean">Feature Engineering</span>
        <span className="skill-chip clean">Model Evaluation</span>
        <span className="skill-chip clean">Hyperparameter Tuning</span>
        <span className="skill-chip clean">Bias & Fairness</span>
      </div>
    </div>

    <div className="card skills-card">
      <div className="skills-card-top">
        <h3 className="skills-card-title">NLP & Generative AI</h3>
        <span className="skills-card-pill">GenAI</span>
      </div>
      <div className="skills-chips-clean">
        <span className="skill-chip clean accent">LLMs / GPT</span>
        <span className="skill-chip clean">Prompt Engineering</span>
        <span className="skill-chip clean">Embeddings</span>
        <span className="skill-chip clean">RAG</span>
        <span className="skill-chip clean">Vector Databases</span>
        <span className="skill-chip clean">LangChain</span>
        <span className="skill-chip clean">AI Agents</span>
      </div>
    </div>

    <div className="card skills-card">
      <div className="skills-card-top">
        <h3 className="skills-card-title">Deployment & MLOps</h3>
        <span className="skills-card-pill">Systems</span>
      </div>
      <div className="skills-chips-clean">
        <span className="skill-chip clean accent2">FastAPI</span>
        <span className="skill-chip clean">REST APIs</span>
        <span className="skill-chip clean">Docker</span>
        <span className="skill-chip clean">Cloud Deployment</span>
        <span className="skill-chip clean">Monitoring</span>
        <span className="skill-chip clean">Experiment Tracking</span>
      </div>
    </div>

    <div className="card skills-card">
      <div className="skills-card-top">
        <h3 className="skills-card-title">Research & Product</h3>
        <span className="skills-card-pill">Impact</span>
      </div>
      <div className="skills-chips-clean">
        <span className="skill-chip clean">Experimental Design</span>
        <span className="skill-chip clean">A/B Testing</span>
        <span className="skill-chip clean">Statistical Inference</span>
        <span className="skill-chip clean">Problem Framing</span>
        <span className="skill-chip clean">Metrics & KPIs</span>
        <span className="skill-chip clean">Stakeholder Communication</span>
      </div>
    </div>

    <div className="card skills-card span-2">
      <div className="skills-card-top">
        <h3 className="skills-card-title">Frontend (Portfolio)</h3>
        <span className="skills-card-pill">UI</span>
      </div>
      <div className="skills-chips-clean">
        <span className="skill-chip clean">React</span>
        <span className="skill-chip clean">CSS</span>
        <span className="skill-chip clean">Accessibility</span>
      </div>
    </div>
  </div>
</section>



      </section>

      
    </main>
  );
}

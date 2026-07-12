import React from 'react';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java (Core)", "Python", "JavaScript (ES6+)", "SQL"],
      themeClass: "card-neutral",
      // Compass icon
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      )
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "HTML5", "CSS3", "Bootstrap", "Responsive", "REST API Integration"],
      themeClass: "card-powder-blue",
      // Layout icon
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="9" y1="9" x2="21" y2="9" />
        </svg>
      )
    },
    {
      title: "Backend Development",
      skills: ["Django (MVT)", "Django REST Framework", "RESTful API Design", "MySQL", "SQLite"],
      themeClass: "card-mint-wash",
      // Database icon
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      )
    },
    {
      title: "Generative AI & LLM",
      skills: ["LangChain", "RAG Pipelines", "Vector Databases", "LLM App Development", "Prompt Engineering"],
      themeClass: "card-blush-tint",
      // Cpu/AI icon
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <line x1="9" y1="9" x2="9" y2="15" />
          <line x1="15" y1="9" x2="15" y2="15" />
          <line x1="9" y1="12" x2="15" y2="12" />
        </svg>
      )
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "Docker (Basic)", "CI/CD Pipelines", "Netlify", "Postman"],
      themeClass: "card-neutral",
      // Terminal icon
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      )
    },
    {
      title: "Engineering Practices",
      skills: ["Clean Code", "Unit Testing", "Code Reviews", "Debugging", "Agile/Scrum", "Version Control"],
      themeClass: "card-powder-blue",
      // CheckSquare/Practices icon
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-heading">Skills</h2>
      <p className="skills-subtitle">A breakdown of my professional tools, technologies, and methodologies.</p>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className={`skills-card ${category.themeClass}`}>
            <h3 className="skills-card-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, sIndex) => (
                <span key={sIndex} className="skill-badge-item">
                  {skill}
                </span>
              ))}
            </div>
            <div className="skills-card-icon">
              {category.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

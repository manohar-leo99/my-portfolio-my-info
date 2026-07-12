import React from 'react';

export default function ProjectCard({ title, description, tags, demoUrl, githubUrl, index, image }) {
  // Generate different elegant geometric SVG shapes for each project visual placeholder
  const getPlaceholderSvg = (idx) => {
    const patterns = [
      <rect width="100%" height="100%" fill="#ffffff" />,
      <rect width="100%" height="100%" fill="#ffffff" />,
      <rect width="100%" height="100%" fill="#ffffff" />
    ];
    const pattern = patterns[idx % 3];

    return (
      <svg className="project-svg-bg" viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
        {pattern}
        <circle cx="200" cy="112.5" r="50" fill="none" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="0" y1="0" x2="400" y2="225" stroke="#1a1a1a" strokeWidth="0.5" opacity="0.2" />
        <line x1="400" y1="0" x2="0" y2="225" stroke="#1a1a1a" strokeWidth="0.5" opacity="0.2" />
        <text x="20" y="200" fontFamily="Inter" fontSize="12" fill="#1a1a1a" opacity="0.4">
          ws-design-ref.{(idx + 1).toString().padStart(3, '0')}
        </text>
      </svg>
    );
  };

  return (
    <div className="collaboration-project-card">
      <div className="project-image-wrapper">
        {image ? (
          <img src={image} alt={title} className="project-card-image" />
        ) : (
          getPlaceholderSvg(index)
        )}
        
        <div className="project-card-overlay">
          <div className="project-card-header">
            <h3 className="project-card-title">{title}</h3>
            <span className="project-card-credit">{description}</span>
          </div>
          
          <div className="project-card-actions">
            <a href={demoUrl} className="project-action-link" target="_blank" rel="noopener noreferrer">
              Live Demo ↗
            </a>
            <a href={githubUrl} className="project-action-link" target="_blank" rel="noopener noreferrer">
              GitHub Repo ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

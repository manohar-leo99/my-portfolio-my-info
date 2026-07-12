import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        
        {/* Availability Badge */}
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for Full-Time Roles
        </div>
        
        {/* Huge Name Title */}
        <h1 className="hero-title">
          Medabalam Manohar
        </h1>
        
        {/* Bold Subtitle Statement */}
        <h2 className="hero-statement">
          Building quiet, robust interfaces and AI-integrated web systems.
        </h2>
        
        {/* Short details */}
        <p className="hero-description">
          A Full-Stack Developer and Generative AI Specialist based in India. I engineer clean, production-grade web applications that blend modern React architectures with Django and LLM integrations.
        </p>
        
        {/* Modern styled CTA actions */}
        <div className="hero-actions">
          <a href="#projects" className="ws-btn ws-btn-primary">
            Explore Work
          </a>
          <a href="#contact" className="ws-btn ws-btn-secondary">
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
}

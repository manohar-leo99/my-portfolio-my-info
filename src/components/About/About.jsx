import React from 'react';
import './About.css';
import profilePic from '../../assets/profile-pic.jpeg';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <h2 className="section-heading">About</h2>
      
      <div className="about-grid">
        <div className="about-image-column">
          <div className="about-image-container">
            <img src={profilePic} alt="Medabalam Manohar" className="about-profile-img" />
          </div>
        </div>

        <div className="about-text-column">
          <h3 className="about-lead">Full-Stack & Generative AI Developer</h3>
          <p className="about-paragraph">
            I am a Full-Stack Developer with hands-on experience building and deploying production-grade web applications. As a Meta-Certified Front-End Developer, I blend frontend design using modern tools like React with robust backend architectures powered by Django and Python.
          </p>
          <p className="about-paragraph">
            Additionally, I have practical experience building AI-integrated solutions including RAG pipelines, LLM-powered applications, and vector database integrations using LangChain and Ollama. I am passionate about writing clean, testable, and maintainable code.
          </p>
          
          <div className="about-education">
            <h4 className="education-heading">Education</h4>
            <div className="education-timeline">
              <div className="education-item">
                <span className="education-meta">2022 — 2026</span>
                <h5 className="education-title">B.Tech in Electronics and Communication Engineering</h5>
                <p className="education-text">Anantha Lakshmi Institute of Technology and Sciences — 75.0%</p>
              </div>
              <div className="education-item">
                <span className="education-meta">2020 — 2022</span>
                <h5 className="education-title">Intermediate (MPC)</h5>
                <p className="education-text">Govt. Junior College, Kanekal — 57.1%</p>
              </div>
              <div className="education-item">
                <span className="education-meta">2018 — 2020</span>
                <h5 className="education-title">Secondary School Certificate (SSC)</h5>
                <p className="education-text">Z.P.H. School, Yerragunta — 79.0%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

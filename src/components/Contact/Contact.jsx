import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-heading">Contact</h2>
      
      <div className="contact-grid">
        <div className="contact-meta-info">
          <h3 className="contact-title">Let's Connect</h3>
          <p className="contact-desc">
            Feel free to reach out for internship opportunities, collaborations, or just to say hello! I'm always open to discussing new projects and ideas.
          </p>
          
          <div className="contact-links-list">
            <div className="contact-link-item">
              <span className="contact-link-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-link-icon">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Email
              </span>
              <a href="mailto:manohar.leo.2005@gmail.com" className="contact-link-value">
                manohar.leo.2005@gmail.com
              </a>
            </div>
            
            <div className="contact-link-item">
              <span className="contact-link-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-link-icon">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </span>
              <a href="https://linkedin.com/in/medabalam-manohar-93b241386" target="_blank" rel="noopener noreferrer" className="contact-link-value">
                linkedin.com/in/medabalam-manohar
              </a>
            </div>
            
            <div className="contact-link-item">
              <span className="contact-link-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-link-icon">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                GitHub
              </span>
              <a href="https://github.com/manohar-leo99" target="_blank" rel="noopener noreferrer" className="contact-link-value">
                github.com/manohar-leo99
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          {isSubmitted ? (
            <div className="contact-success">
              <div className="contact-success-dot"></div>
              <h3 className="success-heading">Message sent</h3>
              <p className="success-text">Thank you. I will get back to you shortly.</p>
              <button className="ws-dark-button" onClick={() => setIsSubmitted(false)}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="ws-form-group">
                <label htmlFor="name" className="ws-label">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="ws-input" 
                  placeholder="John Doe" 
                  required 
                />
              </div>
              
              <div className="ws-form-group">
                <label htmlFor="email" className="ws-label">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="ws-input" 
                  placeholder="john@example.com" 
                  required 
                />
              </div>
              
              <div className="ws-form-group">
                <label htmlFor="message" className="ws-label">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="ws-textarea" 
                  placeholder="Hey, I'd love to chat about..." 
                  rows="5" 
                  required 
                ></textarea>
              </div>
              
              <button type="submit" className="ws-dark-button">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

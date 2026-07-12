import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="ws-footer">
      <div className="ws-footer-container">
        <p className="ws-footer-copyright">
          &copy; {currentYear} Medabalam Manohar. All rights reserved.
        </p>
        <div className="ws-footer-links">
          <a href="mailto:manohar.leo.2005@gmail.com">Email</a>
          <a href="https://linkedin.com/in/medabalam-manohar-93b241386" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/manohar-leo99" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

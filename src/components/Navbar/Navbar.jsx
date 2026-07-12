import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
      setCurrentTime(timeStr.toLowerCase());
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          Manohar
        </a>

        <div className={`navbar-menu-icon ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="#home" className="navbar-link" onClick={() => setIsOpen(false)}>Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link" onClick={() => setIsOpen(false)}>About</a>
          </li>
          <li className="navbar-item">
            <a href="#skills" className="navbar-link" onClick={() => setIsOpen(false)}>Skills</a>
          </li>
          <li className="navbar-item">
            <a href="#projects" className="navbar-link" onClick={() => setIsOpen(false)}>Projects</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link" onClick={() => setIsOpen(false)}>Contact</a>
          </li>
        </ul>

        <div className="navbar-status">
          <span className="status-dot"></span>
          <span className="status-time">{currentTime || '10:56 am'}</span>
        </div>
      </div>
    </nav>
  );
}

import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="content-wrapper">
        <div className="footer-inner">
          <div>
            <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
              © 2026 {personalInfo.name}
            </span>
            <span style={{ margin: '0 8px', color: 'var(--border-color)' }}>·</span>
            <span>{personalInfo.badge}</span>
          </div>

          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Built with React & Vite · Designed with restraint
          </div>

          <div className="footer-links">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="nav-link"
            >
              Email
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="theme-toggle-btn"
              title="Return to top"
              aria-label="Return to top of page"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

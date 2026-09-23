import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUpRight, Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ activeSection, theme, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="nav-container">
      <div className="content-wrapper">
        <div className="nav-inner">
          {/* Brand */}
          <a href="#hero" className="nav-brand" aria-label="Om Shinde Home">
            <span>{personalInfo.name.toUpperCase()}</span>
            <span className="nav-brand-badge">2026</span>
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action Buttons */}
          <div className="nav-right-actions">
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'warm' ? 'Dark' : 'Warm'} Theme`}
              title={`Switch to ${theme === 'warm' ? 'Dark Technical' : 'Warm Editorial'} Theme`}
            >
              {theme === 'warm' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            <a
              href="mailto:omshinde3156@gmail.com?subject=Resume%20Request%20-%20Om%20Shinde"
              className="btn btn-secondary btn-sm"
              title="Request or View Résumé"
            >
              <span>Résumé</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
            <a
              href="mailto:omshinde3156@gmail.com?subject=Resume%20Request%20-%20Om%20Shinde"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Request Résumé ↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

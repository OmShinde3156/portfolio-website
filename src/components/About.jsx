import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Compass, BookOpen, Sparkles, MapPin, GraduationCap, Code2 } from 'lucide-react';

export default function About() {
  const { about } = personalInfo;

  return (
    <section id="about" className="section">
      <div className="content-wrapper">
        <div className="section-header">
          <div className="section-index">01 / ABOUT</div>
          <h2 className="section-heading">
            Engineering Background & Focus
          </h2>
          <p className="section-description">
            A grounded overview of my technical education, focus areas, and what drives my software development practice.
          </p>
        </div>

        <div className="about-grid">
          {/* Narrative Column */}
          <div className="about-text-column">
            <p>
              {about.introParagraph1}
            </p>
            <p>
              {about.introParagraph2}
            </p>
            <p>
              Rather than chasing trends for their own sake, I prioritize building maintainable, high-leverage software. I care deeply about clean API design, predictable system boundaries, and crafting responsive interfaces that feel genuinely fast.
            </p>

            {/* Human Element Box */}
            <div className="human-elements-box">
              <div className="human-element-row">
                <Compass size={17} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Currently exploring:</strong> {about.humanElements.currentlyExploring}
                </div>
              </div>
              <div className="human-element-row">
                <BookOpen size={17} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Outside code:</strong> {about.humanElements.outsideCode}
                </div>
              </div>
            </div>
          </div>

          {/* Facts Panel */}
          <aside className="facts-card">
            <div className="facts-header">
              Quick Facts
            </div>
            <div className="facts-list">
              {about.facts.map((fact) => (
                <div key={fact.label} className="fact-item">
                  <div className="fact-item-label">{fact.label}</div>
                  <div className="fact-item-value">{fact.value}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="pill-badge pill-accent" style={{ fontSize: '0.72rem' }}>
                ✦ 4 Industry Internships Completed
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

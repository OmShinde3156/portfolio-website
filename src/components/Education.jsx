import React from 'react';
import { educationList, certifications } from '../data/portfolioData';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="content-wrapper">
        <div className="section-header">
          <div className="section-index">05 / EDUCATION & HONORS</div>
          <h2 className="section-heading">
            Education & Verified Honors
          </h2>
          <p className="section-description">
            Academic degrees, foundational coursework, and industry honors from Google Cloud and NASA.
          </p>
        </div>

        <div className="edu-cert-grid">
          {/* Education Column */}
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <GraduationCap size={20} color="var(--accent)" />
              <span>Academic Background</span>
            </h3>

            {educationList.map((edu, idx) => (
              <div key={idx} className="edu-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                  <span className="pill-badge pill-accent">{edu.period}</span>
                  <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    {edu.status}
                  </span>
                </div>
                <h4 className="edu-degree">{edu.degree}</h4>
                <div className="edu-institution">{edu.institution}</div>
                <p className="edu-details">{edu.details}</p>
              </div>
            ))}
          </div>

          {/* Certifications & Honors Column */}
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={20} color="var(--accent)" />
              <span>Selected Honors & Badges</span>
            </h3>

            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-card">
                <div className="cert-title-row">
                  <div>
                    <h4 className="cert-title">{cert.title}</h4>
                    <div style={{ fontSize: '0.82rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                      {cert.issuer}
                    </div>
                  </div>
                  <span className="pill-badge">{cert.badge}</span>
                </div>
                <p className="cert-desc">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

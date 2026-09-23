import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Award, ShieldCheck, CheckCircle2, Rocket, ExternalLink } from 'lucide-react';

export default function Credentials() {
  const credentialsList = [
    {
      title: "Google Cloud Arcade Legend (Cohort 2, 2025)",
      issuer: "Google Cloud Skills Boost",
      badge: "Arcade Legend Tier",
      desc: "Achieved the highest Arcade Legend milestone in Cohort 2 (2025), completing dozens of hands-on architecture labs covering Vertex AI, Cloud Run microservices, Kubernetes, and enterprise IAM.",
      highlight: "Highest Arcade Milestone Tier"
    },
    {
      title: "NASA Space Apps Challenge",
      issuer: "NASA International Space Apps",
      badge: "Galactic Problem Solver",
      desc: "Earned global Galactic Problem Solver recognition for engineering innovative planetary telemetry analysis platforms.",
      highlight: "Global Hackathon Achievement"
    },
    {
      title: "Google Cloud Generative AI",
      issuer: "SmartBridge & Google Cloud",
      badge: "Certified Specialist",
      desc: "Comprehensive certification covering Vertex AI, prompt design, foundation models, and vector search integrations.",
      highlight: "Enterprise GenAI Specialization"
    },
    {
      title: "Oracle Cloud Infrastructure (OCI)",
      issuer: "Oracle University",
      badge: "Cloud Certified",
      desc: "Credentialed in cloud infrastructure fundamentals, compute instances, virtual cloud networks, and storage management.",
      highlight: "Enterprise Cloud Architecture"
    }
  ];

  return (
    <section id="credentials" className="section" style={{ paddingTop: '40px', paddingBottom: '70px' }}>
      <div className="content-wrapper">
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <div className="section-badge">
            <Award size={14} />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="section-title">
            Industry <span className="text-gradient">Credentials & Badges</span>
          </h2>
          <p className="section-subtitle">
            Recognized achievements across Google Cloud, NASA International Challenges, and enterprise infrastructure.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px'
        }}>
          {credentialsList.map((cred, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)'
                }}>
                  <Award size={20} />
                </div>
                <span className="tab-layer-badge" style={{ fontSize: '0.72rem' }}>
                  {cred.badge}
                </span>
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '4px', color: '#fff' }}>
                {cred.title}
              </h3>
              <div style={{ fontSize: '0.82rem', color: 'var(--accent-blue)', marginBottom: '12px', fontFamily: 'var(--font-mono)' }}>
                {cred.issuer}
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
                {cred.desc}
              </p>

              <div style={{
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: '#cbd5e1',
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '6px 12px',
                borderRadius: 'var(--radius-sm)',
                borderLeft: '2px solid var(--accent-cyan)'
              }}>
                ✦ {cred.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

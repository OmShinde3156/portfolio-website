import React, { useEffect } from 'react';
import { X, ExternalLink, ArrowUpRight, CheckCircle2, AlertTriangle, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project || !project.caseStudy) return null;

  const { caseStudy } = project;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '4px' }}>
              Project Case Study · {project.number}
            </div>
            <h3 id="modal-title" style={{ fontSize: '1.4rem', fontWeight: 700 }}>
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close Case Study"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="modal-content">
          {/* Overview */}
          <div>
            <div className="case-study-section-title">01 / Overview</div>
            <p style={{ fontSize: '0.96rem', lineHeight: 1.7 }}>
              {caseStudy.overview}
            </p>
          </div>

          {/* Problem */}
          <div>
            <div className="case-study-section-title">02 / The Problem</div>
            <p style={{ fontSize: '0.96rem', lineHeight: 1.7 }}>
              {caseStudy.problemDetail}
            </p>
          </div>

          {/* My Approach */}
          <div>
            <div className="case-study-section-title">03 / Engineering Approach</div>
            <p style={{ fontSize: '0.96rem', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
              {caseStudy.approach}
            </p>
          </div>

          {/* Technical Architecture */}
          <div>
            <div className="case-study-section-title">04 / Technical Architecture</div>
            <div className="case-study-arch-grid">
              {caseStudy.architecture.map((layer) => (
                <div key={layer.title} className="arch-layer-card">
                  <h5>{layer.title}</h5>
                  <p>{layer.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div>
            <div className="case-study-section-title">05 / Challenges & Solutions</div>
            <div style={{ background: 'var(--bg-card-alt)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '18px' }}>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.65 }}>
                {caseStudy.challenges}
              </p>
            </div>
          </div>

          {/* What I Learned */}
          <div>
            <div className="case-study-section-title">06 / What I Learned</div>
            <p style={{ fontSize: '0.96rem', lineHeight: 1.7 }}>
              {caseStudy.whatILearned}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Role: {project.role}
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <GithubIcon size={14} />
              <span>Inspect Source</span>
              <ArrowUpRight size={13} />
            </a>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

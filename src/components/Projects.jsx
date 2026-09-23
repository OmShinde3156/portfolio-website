import React, { useState } from 'react';
import { featuredProjects, otherBuilds } from '../data/portfolioData';
import { ExternalLink, ArrowUpRight, BookOpen, Layers, Zap } from 'lucide-react';
import { GithubIcon } from './Icons';
import CaseStudyModal from './CaseStudyModal';

export default function Projects() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="content-wrapper">
        <div className="section-header">
          <div className="section-index">02 / FEATURED WORK</div>
          <h2 className="section-heading">
            Selected Engineering Projects
          </h2>
          <p className="section-description">
            Projects built with tangible engineering intent. Each project solves a specific problem with verified technical architecture and measurable outcomes.
          </p>
        </div>

        {/* Featured Projects Stream */}
        <div className="projects-stream">
          {featuredProjects.map((project) => (
            <article key={project.id} className="featured-project-card">
              {/* Left Column: Number */}
              <div className="project-number" aria-hidden="true">
                {project.number}
              </div>

              {/* Right Column: Project Details */}
              <div className="project-body">
                {/* Title & Tagline */}
                <div className="project-title-row">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-tagline">{project.tagline}</p>
                  </div>

                  <div className="project-actions">
                    {project.hasCaseStudy && (
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => setSelectedCaseStudy(project)}
                      >
                        <BookOpen size={14} />
                        <span>Case Study</span>
                      </button>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      title="Inspect source on GitHub"
                    >
                      <GithubIcon size={14} />
                      <span>Code</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>

                {/* Narrative Grid: Problem vs Solution */}
                <div className="project-narrative-grid">
                  <div className="narrative-block">
                    <h4>The Problem</h4>
                    <p>{project.problem}</p>
                  </div>
                  <div className="narrative-block">
                    <h4>What I Built & Solution</h4>
                    <p>{project.whatIBuilt}</p>
                  </div>
                </div>

                {/* Metrics Strip */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="project-metrics-strip">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="metric-item">
                        <span className="metric-value">{m.value}</span>
                        <span className="metric-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Meta Row: Role & Tech Tags */}
                <div className="project-meta-row">
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Role:</strong> {project.role}
                  </div>

                  <div className="tech-tag-group">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other Builds Section */}
        <div className="other-builds-header">
          <h3 className="other-builds-title">Other Selected Builds</h3>
          <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)' }}>
            Additional open-source repositories and infrastructure systems.
          </p>
        </div>

        <div className="other-builds-grid">
          {otherBuilds.map((build, idx) => (
            <div key={idx} className="other-build-card">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <h3>{build.title}</h3>
                  <a
                    href={build.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                    style={{ color: 'var(--text-secondary)' }}
                    title="View on GitHub"
                  >
                    <GithubIcon size={16} />
                  </a>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  {build.description}
                </p>
                <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)', marginBottom: '14px' }}>
                  ✦ {build.highlight}
                </div>
              </div>

              <div className="tech-tag-group">
                {build.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </section>
  );
}

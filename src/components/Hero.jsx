import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, MapPin, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Hero({ onTriggerToast }) {
  return (
    <section id="hero" className="section hero-section">
      <div className="content-wrapper">
        {/* Top Meta Info */}
        <div className="hero-top-meta">
          <span className="pill-badge pill-accent">
            {personalInfo.badge}
          </span>
          <span className="status-indicator">
            <span className="status-dot"></span>
            <span>{personalInfo.availabilityStatus}</span>
          </span>
        </div>

        {/* Visually Dominant Name */}
        <h1 className="hero-name">
          {personalInfo.name.toUpperCase()}
        </h1>

        {/* Core Positioning Headline */}
        <h2 className="hero-headline">
          {personalInfo.headline}
        </h2>

        {/* 30-Second Recruiter Pitch */}
        <p className="hero-lead">
          {personalInfo.shortBio}
        </p>

        {/* Direct Action Group */}
        <div className="hero-cta-row">
          <a href="#projects" className="btn btn-primary">
            <span>View Projects</span>
            <ArrowDown size={16} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <GithubIcon size={16} />
            <span>GitHub Profile</span>
            <ArrowUpRight size={14} />
          </a>
          <a
            href="#contact"
            className="btn btn-secondary"
          >
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Subtle Footer Status */}
        <div className="hero-footer-status">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
            <MapPin size={15} color="var(--accent)" />
            <span>{personalInfo.location} · {personalInfo.relocationStatus}</span>
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Python · FastAPI · React · PostgreSQL · Docker
          </div>
        </div>
      </div>
    </section>
  );
}

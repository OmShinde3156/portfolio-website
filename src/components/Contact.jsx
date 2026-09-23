import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Copy, Check, ArrowUpRight, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact({ onTriggerToast }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    if (onTriggerToast) {
      onTriggerToast(`Copied ${personalInfo.email} to clipboard.`);
    }
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="section">
      <div className="content-wrapper">
        <div className="contact-box">
          <div className="section-index">06 / CONTACT</div>
          
          <h2 className="contact-heading">
            LET'S BUILD SOMETHING
          </h2>

          <p className="contact-subtext">
            I'm currently looking for software engineering opportunities where I can build practical, well-engineered web applications and continue growing.
          </p>

          <div className="contact-email-row">
            <div className="email-display-badge">
              <Mail size={16} color="var(--accent)" />
              <span>{personalInfo.email}</span>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCopyEmail}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
            </button>

            <a
              href={`mailto:${personalInfo.email}?subject=Software%20Development%20Opportunity`}
              className="btn btn-secondary"
            >
              <span>Email Me</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="contact-links-row">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-pill"
            >
              <GithubIcon size={15} />
              <span>github.com/omshinde3156</span>
              <ArrowUpRight size={12} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-pill"
            >
              <LinkedinIcon size={15} />
              <span>linkedin.com/in/om-shinde</span>
              <ArrowUpRight size={12} />
            </a>

            <div className="contact-link-pill" style={{ cursor: 'default' }}>
              <MapPin size={15} color="var(--accent)" />
              <span>{personalInfo.location} · {personalInfo.relocationStatus}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

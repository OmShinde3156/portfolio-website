import React from 'react';
import { internships } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="section">
      <div className="content-wrapper">
        <div className="section-header">
          <div className="section-index">04 / EXPERIENCE</div>
          <h2 className="section-heading">
            Industry Internships
          </h2>
          <p className="section-description">
            Four completed internships providing hands-on experience with cloud microservices, machine learning pipelines, and production IT systems.
          </p>
        </div>

        <div className="timeline-stream">
          {internships.map((job, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card">
                <div className="timeline-header-row">
                  <div>
                    <h3 className="timeline-role">{job.role}</h3>
                    <div className="timeline-company">{job.company}</div>
                  </div>
                  <div className="timeline-period">{job.period}</div>
                </div>

                <ul className="timeline-bullets">
                  {job.points.map((pt, pIdx) => (
                    <li key={pIdx} className="timeline-bullet">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

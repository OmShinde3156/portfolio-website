import React from 'react';
import { skillsData } from '../data/portfolioData';
import { Code2, Server, Layout, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Languages':
        return <Code2 size={16} />;
      case 'Backend & Systems':
        return <Server size={16} />;
      case 'Frontend':
        return <Layout size={16} />;
      case 'Databases & Storage':
        return <Database size={16} />;
      default:
        return <Wrench size={16} />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="content-wrapper">
        <div className="section-header">
          <div className="section-index">03 / SKILLS</div>
          <h2 className="section-heading">
            Technical Stack & Tools
          </h2>
          <p className="section-description">
            A transparent overview of programming languages, frameworks, and developer tooling I have used to build real applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((group) => (
            <div key={group.category} className="skill-category-card">
              <div className="skill-category-title">
                <span>{group.category}</span>
                <span style={{ color: 'var(--text-muted)' }}>
                  {getCategoryIcon(group.category)}
                </span>
              </div>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-footnote">
          Note: No arbitrary percentage bars. These are technologies I have written code in and can comfortably discuss in an engineering interview.
        </div>
      </div>
    </section>
  );
}

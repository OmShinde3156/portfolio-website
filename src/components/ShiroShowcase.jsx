import React, { useState } from 'react';
import { flagshipProject } from '../data/portfolioData';
import { Sparkles, ExternalLink, Activity, Layers, Cpu, ShieldCheck, Database, GitBranch, Check, Play, RefreshCw, BarChart3 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ShiroShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeMode, setActiveMode] = useState('architecture'); // 'architecture' | 'simulator'

  // Interactive Simulator States
  const [bktMastery, setBktMastery] = useState(62);
  const [simStep, setSimStep] = useState(1);
  const [simResult, setSimResult] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSimulateAnswer = (isCorrect) => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      if (isCorrect) {
        setBktMastery(prev => Math.min(prev + 18, 96));
        setSimResult({
          status: 'correct',
          message: 'Response Verified Correct: BKT updated student latent mastery (θ) from prior to posterior distribution.',
          metrics: {
            bktDelta: '+18%',
            ragLatency: '164ms',
            faithfulness: '98.5%',
            nextDifficulty: 'Advanced (CAT IRT Calibrated)'
          }
        });
      } else {
        setBktMastery(prev => Math.max(prev - 12, 35));
        setSimResult({
          status: 'incorrect',
          message: 'Slip Detected / Missed Question: BKT applied slip probability penalty and lowered proximal difficulty.',
          metrics: {
            bktDelta: '-12%',
            ragLatency: '178ms',
            faithfulness: '96.2%',
            nextDifficulty: 'Intermediate Reinforcement'
          }
        });
      }
      setSimStep(prev => prev + 1);
    }, 600);
  };

  const handleResetSim = () => {
    setBktMastery(62);
    setSimStep(1);
    setSimResult(null);
  };

  const architecturePipelines = [
    {
      title: "Data & Ingestion",
      detail: "Chunking + Dense ChromaDB Embeddings + BM25 Token Index",
      badge: "Stage 01"
    },
    {
      title: "Hybrid Retrieval",
      detail: "Vector Similarity + Sparse Lexical Reranking with Redis Cache",
      badge: "Stage 02"
    },
    {
      title: "BKT & CAT Calibration",
      detail: "Adaptive θ-mastery & Dynamic Proximal Question Selection",
      badge: "Stage 03"
    },
    {
      title: "Evaluation Cockpit",
      detail: "Real-time Context Recall, Faithfulness & Drift Telemetry",
      badge: "Stage 04"
    }
  ];

  return (
    <section id="shiro-ai" className="section">
      <div className="content-wrapper">
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Flagship Systems Engineering</span>
          </div>
          <h2 className="section-title">
            Shiro.ai — <span className="text-gradient">Adaptive Cognitive Intelligence</span>
          </h2>
          <p className="section-subtitle">
            An end-to-end full-stack AI platform pairing psychometric modeling (CAT/BKT) with high-speed hybrid RAG retrieval and automated hallucination telemetry.
          </p>
        </div>

        {/* Flagship Main Deep-Dive Card */}
        <div className="flagship-card">
          <div className="flagship-header-row">
            <div>
              <span className="project-category-tag" style={{ background: 'rgba(56, 189, 248, 0.15)', borderColor: 'rgba(56, 189, 248, 0.4)', color: 'var(--accent-cyan)' }}>
                {flagshipProject.badge}
              </span>
              <h3 className="flagship-title">{flagshipProject.title}</h3>
              <p className="flagship-summary">{flagshipProject.summary}</p>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexShrink: 0, marginTop: '8px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className={`btn btn-sm ${activeMode === 'simulator' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveMode(activeMode === 'simulator' ? 'architecture' : 'simulator')}
              >
                <Play size={15} />
                <span>{activeMode === 'simulator' ? 'View Architecture' : 'Live Interactive Simulator'}</span>
              </button>

              <a
                href={flagshipProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <GithubIcon size={16} />
                <span>Source Code</span>
              </a>
            </div>
          </div>

          {/* Benchmark Metrics Grid */}
          <div className="flagship-metrics-grid">
            {flagshipProject.metrics.map((metric, idx) => (
              <div key={idx} className="metric-box">
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
                <div className="metric-detail">{metric.detail}</div>
              </div>
            ))}
          </div>

          {/* MODE 1: Interactive Live Simulator */}
          {activeMode === 'simulator' ? (
            <div style={{
              background: 'rgba(8, 12, 22, 0.95)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              borderRadius: 'var(--radius-md)',
              padding: '28px',
              marginTop: '24px',
              boxShadow: '0 0 35px rgba(56, 189, 248, 0.1)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '16px' }}>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Activity size={18} color="var(--accent-cyan)" />
                    <span>Live Cognitive & RAG Assessment Simulator</span>
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    Interact directly with the Bayesian Knowledge Tracing & Hybrid RAG inference engine.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleResetSim}
                  className="btn btn-secondary btn-sm"
                  style={{ fontSize: '0.78rem' }}
                >
                  <RefreshCw size={13} />
                  <span>Reset State</span>
                </button>
              </div>

              {/* Live Mastery Bar */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                    Student Latent Mastery (θ) Estimate:
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                    {bktMastery}%
                  </span>
                </div>
                <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.06)', borderRadius: '999px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${bktMastery}%`,
                      height: '100%',
                      background: 'var(--grad-primary)',
                      transition: 'width 0.5s ease'
                    }}
                  />
                </div>
              </div>

              {/* Sample Adaptive Question Calibrated by IRT */}
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: 'var(--radius-sm)', marginBottom: '20px' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-blue)', marginBottom: '8px' }}>
                  Adaptive Item #{simStep} • Calibrated for Mastery Level: {bktMastery > 75 ? 'Advanced (Tier 3)' : 'Intermediate (Tier 2)'}
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: '#f8fafc', marginBottom: '16px' }}>
                  "How does Bayesian Knowledge Tracing update student knowledge probability P(L_t) given an observed response?"
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button
                    disabled={isSimulating}
                    onClick={() => handleSimulateAnswer(true)}
                    style={{
                      background: 'rgba(56, 189, 248, 0.08)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '12px 16px',
                      color: '#fff',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <strong>A)</strong> Posterior update via transition probability: <code style={{ color: 'var(--accent-cyan)' }}>P(L_t) = P(L_{`{t-1}`} | Obs) + (1 - P(L_{`{t-1}`} | Obs)) * T</code>
                  </button>

                  <button
                    disabled={isSimulating}
                    onClick={() => handleSimulateAnswer(false)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '12px 16px',
                      color: 'var(--text-secondary)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <strong>B)</strong> Static linear step threshold without state transition parameters
                  </button>
                </div>
              </div>

              {/* Simulation Result Box */}
              {isSimulating ? (
                <div style={{ padding: '16px', textAlign: 'center', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.88rem' }}>
                  Running Cross-Encoder Reranking & BKT Posterior Matrix calculation...
                </div>
              ) : simResult ? (
                <div style={{
                  background: simResult.status === 'correct' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  border: `1px solid ${simResult.status === 'correct' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                  borderRadius: 'var(--radius-sm)',
                  padding: '16px'
                }}>
                  <div style={{ fontWeight: 600, color: simResult.status === 'correct' ? '#34d399' : '#f87171', marginBottom: '8px' }}>
                    {simResult.message}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#cbd5e1' }}>
                    <div>Mastery Shift: <strong style={{ color: '#fff' }}>{simResult.metrics.bktDelta}</strong></div>
                    <div>RAG Latency: <strong style={{ color: '#fff' }}>{simResult.metrics.ragLatency}</strong></div>
                    <div>Faithfulness: <strong style={{ color: '#fff' }}>{simResult.metrics.faithfulness}</strong></div>
                    <div>Next Target: <strong style={{ color: '#fff' }}>{simResult.metrics.nextDifficulty}</strong></div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            /* MODE 2: Architecture Pipeline & Deep-Dive Tabs */
            <>
              {/* Pipeline Visual Flow Schema */}
              <div style={{ margin: '32px 0' }}>
                <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  End-to-End System Data Flow Pipeline
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '12px'
                }}>
                  {architecturePipelines.map((pipe, idx) => (
                    <div key={idx} style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(255, 255, 255, 0.07)',
                      borderRadius: 'var(--radius-md)',
                      padding: '16px',
                      position: 'relative'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
                          {pipe.badge}
                        </span>
                        <Activity size={14} color="var(--accent-cyan)" />
                      </div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff', marginBottom: '4px' }}>
                        {pipe.title}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                        {pipe.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Architecture Deep-Dive Tabs */}
              <div className="architecture-tabs-container">
                <div className="tabs-nav">
                  {flagshipProject.architectureLayers.map((layer, idx) => (
                    <button
                      key={layer.id}
                      type="button"
                      className={`tab-btn ${activeTab === idx ? 'active' : ''}`}
                      onClick={() => setActiveTab(idx)}
                    >
                      {layer.title}
                    </button>
                  ))}
                </div>

                <div className="tab-content">
                  <div className="tab-layer-title">
                    <span>{flagshipProject.architectureLayers[activeTab].title}</span>
                    <span className="tab-layer-badge">
                      {flagshipProject.architectureLayers[activeTab].badge}
                    </span>
                  </div>

                  <ul className="tab-bullet-list">
                    {flagshipProject.architectureLayers[activeTab].points.map((pt, pIdx) => (
                      <li key={pIdx} className="tab-bullet-item">
                        <Check size={18} className="bullet-icon" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}

          {/* Tech Stack Cloud */}
          <div className="tech-tags-cloud">
            <span style={{ alignSelf: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginRight: '8px', fontFamily: 'var(--font-mono)' }}>
              Engineered With:
            </span>
            {flagshipProject.stack.map((item) => (
              <span key={item} className="tech-pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

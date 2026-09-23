import React, { useState, useEffect, useRef } from 'react';
import { personalInfo, projectsList, internshipsAndEducation } from '../data/portfolioData';
import { Search, ArrowRight, ExternalLink, Copy, Check, Terminal, FolderGit2, Briefcase, Award, Mail, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function CommandPalette({ isOpen, onClose, onTriggerToast }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(!isOpen);
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const defaultActions = [
    { id: 'shiro', label: 'Inspect Flagship: Shiro.ai', category: 'Projects', icon: <Terminal size={16} />, href: '#shiro-ai' },
    { id: 'projects', label: 'View All Curated Projects', category: 'Navigation', icon: <FolderGit2 size={16} />, href: '#projects' },
    { id: 'skills', label: 'Inspect Technical Arsenal (FastAPI, React, RAG)', category: 'Skills', icon: <Terminal size={16} />, href: '#skills' },
    { id: 'journey', label: 'View 4 Industry Internships & Education', category: 'Career', icon: <Briefcase size={16} />, href: '#journey' },
    { id: 'credentials', label: 'View Google Cloud Arcade & NASA Honors', category: 'Honors', icon: <Award size={16} />, href: '#education' },
    {
      id: 'copy-email',
      label: 'Copy Direct Email (omshinde3156@gmail.com)',
      category: 'Actions',
      icon: <Copy size={16} />,
      action: () => {
        navigator.clipboard.writeText(personalInfo.email);
        onTriggerToast('Copied email to clipboard!');
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
        onClose(false);
      }
    },
    {
      id: 'github',
      label: 'Open GitHub Profile (@omshinde3156)',
      category: 'Social',
      icon: <GithubIcon size={16} />,
      action: () => {
        window.open(personalInfo.github, '_blank');
        onClose(false);
      }
    },
    {
      id: 'contact',
      label: 'Send Direct Collaboration Inquiry',
      category: 'Contact',
      icon: <Mail size={16} />,
      href: '#contact'
    }
  ];

  // Dynamic filter
  const filteredActions = defaultActions.filter(action =>
    action.label.toLowerCase().includes(query.toLowerCase()) ||
    action.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleAction = (item) => {
    if (item.action) {
      item.action();
    } else if (item.href) {
      window.location.hash = item.href;
      onClose(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 7, 12, 0.75)',
        backdropFilter: 'blur(16px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '15vh',
        paddingLeft: '16px',
        paddingRight: '16px'
      }}
      onClick={() => onClose(false)}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '620px',
          background: 'rgba(14, 18, 28, 0.95)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          borderRadius: '16px',
          boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(56, 189, 248, 0.15)',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '16px 20px',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <Search size={18} color="var(--accent-blue)" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command, project, or skill..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#fff',
              fontSize: '1rem',
              fontFamily: 'var(--font-sans)'
            }}
          />
          <button
            onClick={() => onClose(false)}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '6px',
              padding: '4px 8px',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>ESC</span>
          </button>
        </div>

        {/* Action List */}
        <div style={{ maxHeight: '340px', overflowY: 'auto', padding: '8px' }}>
          {filteredActions.length === 0 ? (
            <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              No commands found for "{query}". Try "Shiro", "internships", or "email".
            </div>
          ) : (
            filteredActions.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => handleAction(item)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  background: selectedIndex === idx ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                  border: selectedIndex === idx ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid transparent',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ color: 'var(--accent-cyan)' }}>{item.icon}</div>
                  <span style={{ fontSize: '0.92rem', color: '#f8fafc', fontWeight: 500 }}>
                    {item.label}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                    background: 'rgba(255,255,255,0.05)',
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}>
                    {item.category}
                  </span>
                  <ArrowRight size={14} color="var(--text-muted)" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          background: 'rgba(0,0,0,0.3)',
          borderTop: '1px solid var(--border-subtle)',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-mono)'
        }}>
          <span>Press Enter to select</span>
          <span>Navigation • Actions • Socials</span>
        </div>
      </div>
    </div>
  );
}

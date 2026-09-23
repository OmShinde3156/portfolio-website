import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ExperienceTimeline from './components/ExperienceTimeline';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [toastMessage, setToastMessage] = useState(null);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('om_portfolio_theme') || 'warm';
  });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleToggleTheme = () => {
    const nextTheme = theme === 'warm' ? 'dark' : 'warm';
    setTheme(nextTheme);
    localStorage.setItem('om_portfolio_theme', nextTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'education', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-root">
      {/* Subtle fine grid texture */}
      <div className="bg-grid-texture" aria-hidden="true" />

      {/* Main Navigation */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Single Page Flow */}
      <main id="main-content">
        <Hero onTriggerToast={showToast} />
        <About />
        <Projects />
        <Skills />
        <ExperienceTimeline />
        <Education />
        <Contact onTriggerToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-container" role="status" aria-live="polite">
          <div className="toast">
            <CheckCircle2 size={16} color="var(--accent)" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}

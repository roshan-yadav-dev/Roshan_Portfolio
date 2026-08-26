import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EngineeringApproach from './components/EngineeringApproach';
import GithubSection from './components/GithubSection';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bgDark text-slate-100 font-sans selection:bg-accentCyan/30 selection:text-accentCyan">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EngineeringApproach />
        <GithubSection />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

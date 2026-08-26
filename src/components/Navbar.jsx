import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-indigo-100/80 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-mono font-bold text-lg shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform">
            &gt;_
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 text-lg tracking-tight leading-none">
              Roshan Yadav
            </span>
            <span className="text-xs text-slate-500 font-medium mt-1">
              Backend & Full-Stack Developer | AI/ML
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-1 text-sm font-semibold transition-colors ${
                  isActive ? 'text-indigo-600' : 'text-slate-700 hover:text-indigo-600'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full animate-fadeIn" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Social Buttons + View GitHub */}
        <div className="hidden lg:flex items-center gap-3">
          {/* GitHub Icon Button */}
          <a
            href="https://github.com/roshan-yadav-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 flex items-center justify-center transition-all border border-slate-200/60"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-4 h-4" />
          </a>

          {/* LinkedIn Icon Button */}
          <a
            href="https://linkedin.com/in/roshan-yadav-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 flex items-center justify-center transition-all border border-slate-200/60"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>

          {/* Email Icon Button */}
          <a
            href="#contact"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 flex items-center justify-center transition-all border border-slate-200/60"
            title="Contact Email"
            aria-label="Contact Email"
          >
            <FaEnvelope className="w-4 h-4" />
          </a>

          {/* View GitHub Primary Button */}
          <a
            href="https://github.com/roshan-yadav-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all hover:scale-[1.02]"
          >
            View GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 border border-slate-200 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-indigo-600" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-indigo-100 px-6 pt-4 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800 hover:text-indigo-600"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/roshan-yadav-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/roshan-yadav-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center"
              >
                <FaEnvelope className="w-4 h-4" />
              </a>
            </div>
            <a
              href="https://github.com/roshan-yadav-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-sm font-semibold text-white bg-indigo-600"
            >
              View GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import React from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function Navbar({ activeSection }) {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Design System', href: '#design-system' },
    { name: 'Contact', href: '#contact' }
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-full border border-slate-200/80 bg-white/80 px-4 py-3 shadow-[0_12px_30px_-16px_rgba(15,23,42,0.2)] backdrop-blur-md">
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="flex items-center gap-3" aria-label="Roshan Yadav home">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-black text-white shadow-md shadow-indigo-200">R</div>
              <div className="leading-tight">
                <div className="text-sm font-black text-slate-900">Roshan Yadav</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Frontend • Product • UX</div>
              </div>
            </a>

            <nav className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-semibold transition ${isActive ? 'text-indigo-600' : 'text-slate-700 hover:text-indigo-600'}`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <a href="https://github.com/roshan-yadav-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600">
                <FaGithub className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/roshan-yadav-dev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600">
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a href="#contact" aria-label="Contact" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600">
                <FaEnvelope className="h-4 w-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 md:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-navigation" className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8 md:hidden">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

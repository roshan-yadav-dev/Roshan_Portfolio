import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-indigo-100/80 py-12 text-slate-600 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-mono font-bold text-sm flex items-center justify-center shadow-md shadow-indigo-200">
              &gt;_
            </div>
            <div>
              <span className="font-bold text-slate-900 text-base">
                Roshan Yadav
              </span>
              <p className="text-xs text-slate-500 font-medium">
                Backend &amp; Full-Stack Developer | AI/ML
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-600">
            <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-indigo-600 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/roshan-yadav-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 flex items-center justify-center transition-all border border-slate-200/60"
              title="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/roshan-yadav-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 flex items-center justify-center transition-all border border-slate-200/60"
              title="LinkedIn"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 flex items-center justify-center transition-all border border-slate-200/60"
              title="Email"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>
            <a
              href="#home"
              className="w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white flex items-center justify-center transition-all border border-indigo-100 ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs font-semibold text-slate-500 gap-3">
          <div>
            © 2026 Roshan Yadav. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React &amp; Tailwind CSS</span>
            <span>•</span>
            <span className="text-indigo-600 font-bold">Production Ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

import React from 'react';
import { ArrowRight, Mail, Code2, Layers, ShieldCheck, Coffee } from 'lucide-react';
import { FaGithub, FaPython, FaReact, FaNodeJs, FaDocker, FaLinux, FaDatabase } from 'react-icons/fa';
import { SiFastapi } from 'react-icons/si';
import HeroVisual from './HeroVisual';

export default function Hero() {
  const techStackPills = [
    { name: 'Python', icon: FaPython, color: 'text-amber-500' },
    { name: 'FastAPI', icon: SiFastapi, color: 'text-emerald-500' },
    { name: 'React', icon: FaReact, color: 'text-sky-500' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-emerald-600' },
    { name: 'PostgreSQL', icon: FaDatabase, color: 'text-indigo-600' },
    { name: 'Docker', icon: FaDocker, color: 'text-sky-600' },
    { name: 'Linux', icon: FaLinux, color: 'text-slate-700' },
  ];

  const stats = [
    { icon: Code2, value: '12+', label: 'Public Repositories', color: 'text-indigo-600 bg-indigo-50 border-indigo-100' },
    { icon: Layers, value: '5+', label: 'Major Projects', color: 'text-indigo-600 bg-indigo-50 border-indigo-100' },
    { icon: ShieldCheck, value: '3', label: 'Industry Certifications', color: 'text-indigo-600 bg-indigo-50 border-indigo-100' },
    { icon: Coffee, value: 'Always', label: 'Learning & Building', color: 'text-indigo-600 bg-indigo-50 border-indigo-100' },
  ];

  return (
    <section id="home" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-grid-pattern bg-purple-ambient overflow-hidden">
      
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Main Grid: Hero Content & IDE Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Student Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700 shadow-sm">
              <span>CS Engineering Student</span>
              <span className="text-indigo-300">•</span>
              <span>Builder</span>
              <span className="text-indigo-300">•</span>
              <span>Problem Solver</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700">Roshan Yadav</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-indigo-600 tracking-tight">
                Backend &amp; Full-Stack Developer <span className="text-indigo-300">|</span> AI/ML Enthusiast
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-medium">
              I build practical software systems, APIs, and AI-powered applications with a focus on performance, secure architecture, and clean code.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-200 hover:scale-[1.02]"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/roshan-yadav-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/80 font-semibold text-sm transition-all shadow-sm hover:border-indigo-300 hover:scale-[1.02]"
              >
                <FaGithub className="w-4 h-4 text-slate-700" />
                View GitHub
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/80 font-semibold text-sm transition-all shadow-sm hover:border-indigo-300 hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4 text-slate-700" />
                Contact Me
              </a>
            </div>

            {/* Tech Stack Pills Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-4">
              {techStackPills.map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-sm hover:border-indigo-200 transition-colors"
                  >
                    <Icon className={`w-3.5 h-3.5 ${tech.color}`} />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Hero Visual IDE */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroVisual />
          </div>

        </div>

        {/* Middle Stats Banner */}
        <div className="rounded-2xl bg-white/90 backdrop-blur-md border border-indigo-100/80 p-6 sm:p-8 shadow-xl shadow-indigo-100/40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl border ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-slate-900 font-sans tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-slate-500 font-sans">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

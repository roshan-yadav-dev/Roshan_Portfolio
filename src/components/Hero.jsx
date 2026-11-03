import React from 'react';
import { ArrowRight, Download, Sparkles, Code2, Briefcase } from 'lucide-react';
import { FaGithub, FaReact, FaFigma, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiFastapi, SiTailwindcss, SiFigma } from 'react-icons/si';

export default function Hero() {
  const techStack = [
    { name: 'React', icon: FaReact, color: 'text-sky-500' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'Figma', icon: SiFigma, color: 'text-pink-500' },
    { name: 'FastAPI', icon: SiFastapi, color: 'text-emerald-500' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' }
  ];

  const resumeHref = '/Roshan_Portfolio/Roshan_Yadav_Resume.pdf';
  const resumeDownloadName = 'Roshan_Yadav_Resume.pdf';

  return (
    <section id="home" className="relative overflow-hidden bg-[#f6f8fd] pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-70" aria-hidden="true" />
      <div className="absolute -left-16 top-16 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" aria-hidden="true" />
      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Frontend Engineer • Product-minded Developer • UI/UX Designer
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Building polished digital products with a strong product and design lens.
              </h1>
              <p className="text-lg font-medium text-slate-600 sm:text-xl">
                Hi, I&apos;m <span className="font-bold text-indigo-600">Roshan Yadav</span> — I design and build frontend experiences that connect clear product thinking, strong UX, and high-quality engineering.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={resumeHref} download={resumeDownloadName} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-indigo-200 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a href="https://github.com/roshan-yadav-dev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-indigo-200 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-2 pt-2 lg:justify-start">
              {techStack.map(({ name, icon: Icon, color }) => (
                <span key={name} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                  <Icon className={`h-3.5 w-3.5 ${color}`} />
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-indigo-100 bg-white/90 p-6 shadow-[0_20px_45px_-20px_rgba(79,70,229,0.25)] backdrop-blur-sm">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-600">Current focus</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">Product + Frontend</h2>
              </div>
              <div className="rounded-2xl bg-indigo-50 p-3 text-indigo-600">
                <Code2 className="h-6 w-6" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  <Briefcase className="h-3.5 w-3.5" />
                  Role alignment
                </div>
                <p className="text-sm leading-6 text-slate-700">
                  UI/Frontend Engineer with strong frontend implementation, product thinking, responsive design, and design-to-code execution.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Design</p>
                  <p className="mt-2 text-sm font-semibold text-slate-800">Figma, Auto Layout, component systems</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Frontend</p>
                  <p className="mt-2 text-sm font-semibold text-slate-800">React, TypeScript, accessible interfaces</p>
                </div>
              </div>

              <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">
                  <FaNodeJs className="h-3.5 w-3.5" />
                  Stack strength
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  {['React', 'TypeScript', 'Tailwind', 'FastAPI', 'Python', 'REST APIs'].map((item) => (
                    <span key={item} className="rounded-full bg-white px-2.5 py-1 border border-indigo-100">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

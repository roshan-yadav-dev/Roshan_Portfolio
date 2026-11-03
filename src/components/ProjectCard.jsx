import React from 'react';
import { ArrowUpRight, Github, MonitorPlay, Sparkles } from 'lucide-react';

export default function ProjectCard({ project }) {
  const isPlaceholder = Boolean(project.placeholder);
  const sourceLabel = isPlaceholder ? 'GitHub Repository' : project.githubLabel || 'View Source';

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-indigo-100 bg-white p-5 shadow-[0_18px_35px_-22px_rgba(79,70,229,0.2)] transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_20px_40px_-20px_rgba(79,70,229,0.35)]">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
          <Sparkles className="h-5 w-5" />
        </div>
        <span className="rounded-full border border-indigo-100 bg-indigo-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-indigo-700">
          {project.category}
        </span>
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
        <p className="text-sm leading-6 text-slate-600">{project.summary}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.slice(0, 4).map((tech) => (
          <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold text-slate-700">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Problem</p>
          <p className="mt-2 text-sm leading-6 text-slate-700">{project.problem}</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Key features</p>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
            {project.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3 pt-5">
        <a
          href={project.githubUrl}
          target={project.githubUrl.startsWith('http') ? '_blank' : undefined}
          rel={project.githubUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3.5 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-700"
        >
          <Github className="h-4 w-4" />
          {sourceLabel}
        </a>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-3.5 py-2.5 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-100"
          >
            <MonitorPlay className="h-4 w-4" />
            Live Demo
          </a>
        )}

        {project.caseStudyUrl && (
          <a href={project.caseStudyUrl} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-700">
            Case Study
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}

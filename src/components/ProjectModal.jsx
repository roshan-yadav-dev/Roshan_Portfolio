import React, { useEffect } from 'react';
import { X, ExternalLink, Cpu, CheckCircle2, Layers, ShieldCheck } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal Box */}
      <div
        className="w-full max-w-4xl max-h-[90vh] bg-white border border-indigo-100 rounded-3xl shadow-2xl overflow-y-auto font-sans flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider block">
                {project.category}
              </span>
              <h2 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 font-sans">
                {project.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 space-y-8 text-slate-700">
          
          {/* Tagline */}
          <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
            {project.tagline}
          </p>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span> Problem Statement
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Architecture Solution
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {project.solution}
              </p>
            </div>
          </div>

          {/* System Architecture Flow */}
          {project.architecture && (
            <div className="p-6 rounded-2xl bg-slate-50 border border-indigo-100 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-600" />
                  System Architecture Flow
                </h3>
                <span className="text-[11px] font-semibold text-slate-500">
                  Data Pipeline &amp; Service Nodes
                </span>
              </div>

              {/* Horizontal Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
                {project.architecture.map((node, nIdx) => (
                  <div
                    key={nIdx}
                    className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex flex-col justify-between space-y-2 shadow-sm"
                  >
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-indigo-600">
                      <span>{node.step}</span>
                      <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">
                        {node.name}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium mt-0.5">
                        {node.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Implementation Highlights */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              Key Technical Implementation Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((highlight, hIdx) => (
                <div
                  key={hIdx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium leading-relaxed">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Tech Stack Pills */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">
              Verified Technical Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-md px-6 py-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 z-20">
          <div className="text-xs text-slate-500 font-medium">
            Repo: <span className="text-slate-900 font-bold">{project.repoName}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors"
            >
              Close
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors shadow-md shadow-indigo-200"
            >
              <FaGithub className="w-4 h-4" />
              View Source Code on GitHub
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

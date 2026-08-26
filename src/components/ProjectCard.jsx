import React from 'react';
import { Shield, Brain, Smartphone, Server, ArrowRight, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({ project, onOpenModal }) {
  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'Systems & Networking':
        return <Shield className="w-6 h-6 text-indigo-600" />;
      case 'AI & Full-Stack':
        return <Brain className="w-6 h-6 text-indigo-600" />;
      case 'Android Architecture':
      case 'Mobile':
        return <Smartphone className="w-6 h-6 text-indigo-600" />;
      default:
        return <Server className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <div className="rounded-2xl bg-white border border-indigo-100/80 p-6 hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-indigo-100/50 relative">
      
      {/* Top Header: Icon, Title & Category Badge */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 group-hover:scale-105 transition-transform">
            {getCategoryIcon(project.category)}
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[11px] font-semibold text-indigo-700">
            {project.category}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900 font-sans group-hover:text-indigo-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-slate-600 font-medium leading-relaxed mt-2 line-clamp-3">
            {project.tagline}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.techStack.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/60 text-[11px] font-medium text-slate-700"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 rounded-lg bg-indigo-50 border border-indigo-100 text-[10px] font-bold text-indigo-600">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Card Footer: GitHub Link on Left, Live Demo / Inspect on Right */}
      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
        >
          <FaGithub className="w-4 h-4" />
          GitHub
        </a>

        <button
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors group-hover:translate-x-0.5 transition-transform"
        >
          Live Demo
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}

import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Code2 } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Systems & Networking', 'AI & Full-Stack', 'Mobile', 'API & Backend', 'Full-Stack'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => {
        if (selectedCategory === 'Mobile') return p.category === 'Android Architecture' || p.category === 'Mobile';
        if (selectedCategory === 'Full-Stack') return p.category.includes('Full-Stack');
        return p.category === selectedCategory;
      });

  return (
    <section id="projects" className="py-24 bg-[#f6f8fd] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-600 mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>FEATURED PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
              Things I've Built
            </h2>
            <p className="text-slate-500 text-sm font-medium mt-2">
              Production-ready applications and systems built with modern technologies.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white/80 p-1.5 rounded-2xl border border-indigo-100/80 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 font-bold'
                    : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(proj) => setActiveModalProject(proj)}
            />
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}

import React, { useState } from 'react';
import { Code2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const categories = ['All', 'AI / Product', 'Full-Stack', 'Developer Tools', 'UX / System Design', 'Mobile'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-700">
              <Code2 className="h-3.5 w-3.5" />
              Selected projects
            </div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Product-minded work with strong UX and frontend execution</h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              A focused portfolio of product experiences, user-facing platforms, and full-stack work designed to solve real problems with clarity and polish.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-xl px-3 py-2 text-xs font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

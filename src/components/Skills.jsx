import React from 'react';
import { skillsCategories } from '../data/skillsData';
import { Code2, Server, Layout, Database, Brain, Wrench, CheckCircle2, Cpu } from 'lucide-react';

export default function Skills() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-indigo-600" />;
      case 'Server': return <Server className="w-5 h-5 text-indigo-600" />;
      case 'Layout': return <Layout className="w-5 h-5 text-indigo-600" />;
      case 'Database': return <Database className="w-5 h-5 text-indigo-600" />;
      case 'Brain': return <Brain className="w-5 h-5 text-indigo-600" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-indigo-600" />;
      default: return <Cpu className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#f6f8fd] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-600 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Skills & Ecosystem
          </h2>
          <p className="text-slate-500 text-sm font-medium mt-2">
            Categorized technical stack focused on backend systems, REST APIs, AI integration, and full-stack software.
          </p>
          <div className="h-1 w-16 bg-indigo-600 rounded-full mt-3"></div>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-indigo-100/80 p-6 hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-indigo-100/50"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-4">
                  <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-100 group-hover:scale-105 transition-transform">
                    {getIcon(cat.icon)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg font-sans">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills Badges List */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-50/70 border border-slate-200/60 flex items-center justify-between hover:bg-indigo-50/40 hover:border-indigo-200 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                        <span className="text-xs font-bold text-slate-800">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white text-slate-600 border border-slate-200/60">
                        {skill.focus}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Count Tag */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>{cat.skills.length} Technologies</span>
                <span className="text-indigo-600 group-hover:translate-x-1 transition-transform inline-block font-bold">
                  Verified Stack →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

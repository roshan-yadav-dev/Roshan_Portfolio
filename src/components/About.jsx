import React from 'react';
import { User, CheckCircle2, Server, Brain, Layout, Wrench } from 'lucide-react';

export default function About() {
  const highlights = [
    { title: "Backend Systems", desc: "FastAPI, Flask, Node.js, RESTful APIs, JWT Auth, RBAC & Microservices", icon: Server },
    { title: "AI & ML Engineering", desc: "NLP, RAG Pipelines, Semantic Vector Matching & LLM Integration", icon: Brain },
    { title: "Full-Stack Development", desc: "React Single Page Applications, CSS, HTML5 & State Management", icon: Layout },
    { title: "Infrastructure & Tools", desc: "Docker Containerization, Linux Administration (Fedora/Ubuntu), Git & WireGuard", icon: Wrench }
  ];

  return (
    <section id="about" className="py-24 bg-white border-y border-indigo-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-600 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>PROFILE & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            About Roshan Yadav
          </h2>
          <div className="h-1 w-16 bg-indigo-600 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Bio Text */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 text-base leading-relaxed">
            <p className="text-slate-700 font-medium">
              I am a <strong className="text-slate-900 font-bold">Computer Science Engineering student</strong> focused on building production-ready software systems, REST APIs, AI-integrated microservices, and backend solutions.
            </p>
            <p>
              My approach prioritizes <strong className="text-slate-900 font-bold">practical software engineering over surface-level templates</strong>. I design systems from the database layer up—whether that means architecting zero-trust VPN client controllers in Python and WireGuard, engineering RAG matching engines in FastAPI, or crafting modular Android applications with Kotlin and Jetpack Compose.
            </p>
            <p>
              Currently expanding expertise across full-stack applications, intelligent candidate matching systems, and cloud infrastructure, while holding industry certifications from <strong className="text-slate-900 font-bold">ServiceNow (CSA &amp; CAD)</strong> and <strong className="text-slate-900 font-bold">Shell India / Edunet Foundation (Green Skills &amp; AI)</strong>.
            </p>

            {/* Core Tech Pill Grid */}
            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-3">
                Core Stack Overview
              </span>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {[
                  "Python", "JavaScript", "React", "Node.js", "FastAPI", "REST APIs", 
                  "SQL", "PostgreSQL", "MongoDB", "Docker", "Linux", "Git", "AI/ML", 
                  "NLP", "RAG", "Microservices"
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-800 font-medium hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Focus Areas Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50/60 border border-indigo-100/80 hover:border-indigo-300 hover:bg-white transition-all duration-200 space-y-2 group shadow-sm hover:shadow-md hover:shadow-indigo-100/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-normal pl-11">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

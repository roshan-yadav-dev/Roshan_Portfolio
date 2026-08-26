import React from 'react';
import { ExternalLink, Terminal } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function GithubSection() {
  const repoStats = [
    { label: "Public Repositories", value: "12+", sub: "Backend, AI, Systems & Android" },
    { label: "Primary Languages", value: "Python, JS, Kotlin", sub: "FastAPI, React, Jetpack Compose" },
    { label: "Core Security", value: "ServiceNow & Certs", sub: "CSA, CAD, AI & Green Skills" }
  ];

  return (
    <section className="py-20 bg-[#f6f8fd] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Box */}
        <div className="rounded-3xl bg-white border border-indigo-100/80 p-8 sm:p-12 relative overflow-hidden shadow-xl shadow-indigo-100/40">
          
          {/* Subtle Ambient Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left: Text & CTA */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-600">
                <FaGithub className="w-3.5 h-3.5" />
                <span>GITHUB REPOSITORIES</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
                Explore Source Code on GitHub
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-medium">
                All featured projects—including CloudVPN+, OfferJob AI microservice, GalleryApp, and API Workspace—are fully documented with system architecture guides, installation steps, and code tests.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="https://github.com/roshan-yadav-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-200 hover:scale-[1.02]"
                >
                  <FaGithub className="w-4 h-4" />
                  Visit github.com/roshan-yadav-dev
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Stat Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
              {repoStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50/70 border border-indigo-100/80 flex items-center justify-between hover:bg-white hover:border-indigo-200 transition-colors shadow-sm"
                >
                  <div>
                    <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                      {stat.label}
                    </div>
                    <div className="text-lg font-extrabold font-sans text-slate-900 mt-0.5">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 font-medium font-sans">
                      {stat.sub}
                    </div>
                  </div>
                  <Terminal className="w-5 h-5 text-indigo-600 opacity-70" />
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

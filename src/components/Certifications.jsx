import React from 'react';
import { certificationsData } from '../data/certificationsData';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white border-y border-indigo-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-600 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Industry & Technical Certifications
          </h2>
          <p className="text-slate-500 text-sm font-medium mt-2">
            Verified certifications from ServiceNow, Shell India Markets, and Edunet Foundation.
          </p>
          <div className="h-1 w-16 bg-indigo-600 rounded-full mt-3"></div>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl bg-slate-50/70 border border-indigo-100/80 p-6 hover:border-indigo-300 hover:bg-white transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-indigo-100/50 relative"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/60 mb-4">
                  <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700">
                    {cert.badgeType}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div className="space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-lg font-sans leading-snug group-hover:text-indigo-600 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs text-slate-600 font-medium">
                    <span className="text-slate-400">Issuer:</span> {cert.issuer}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    <span className="text-slate-400">Issued:</span> {cert.issuedDate}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mt-3 font-medium">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="pt-4 border-t border-slate-200/60 mt-4 space-y-2">
                  <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">
                    Verified Skills
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/60 text-[11px] font-medium text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verify Certificate CTA Button */}
              <div className="pt-6 mt-6 border-t border-slate-200/60">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-all shadow-md shadow-indigo-200 hover:scale-[1.01]"
                >
                  <Award className="w-4 h-4" />
                  Verify Certificate
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

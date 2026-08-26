import React from 'react';
import { Lightbulb, Compass, Code, Rocket, Terminal } from 'lucide-react';

export default function EngineeringApproach() {
  const steps = [
    {
      num: "01",
      title: "Understand",
      desc: "Understand the problem, users, constraints and requirements before writing code.",
      icon: Lightbulb,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100"
    },
    {
      num: "02",
      title: "Design",
      desc: "Design APIs, data models, microservices, and system architecture diagrams.",
      icon: Compass,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100"
    },
    {
      num: "03",
      title: "Build",
      desc: "Implement clean backend services, robust frontend interfaces, and resilient integrations.",
      icon: Code,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100"
    },
    {
      num: "04",
      title: "Deploy & Improve",
      desc: "Test, containerize, deploy, and iterate continuously based on real usage telemetry.",
      icon: Rocket,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100"
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-indigo-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-600 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            How I Build
          </h2>
          <p className="text-slate-500 text-sm font-medium mt-2">
            A disciplined 4-step engineering process focused on clarity, performance, and long-term system stability.
          </p>
          <div className="h-1 w-16 bg-indigo-600 rounded-full mt-3"></div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-50/70 border border-indigo-100/80 p-6 hover:border-indigo-300 hover:bg-white transition-all duration-300 space-y-4 group shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 relative"
              >
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl border ${step.color} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-extrabold text-2xl text-slate-300 group-hover:text-indigo-600 transition-colors font-mono">
                    {step.num}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

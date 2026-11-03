import React from 'react';
import { ArrowRight, Figma, Layers3, MonitorSmartphone, Palette, PencilRuler } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudiesData';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-700">
            <PencilRuler className="h-3.5 w-3.5" />
            UX Case Studies
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Designing interfaces that are both useful and product-ready</h2>
          <p className="mt-4 text-base text-slate-600">
            These case studies focus on product thinking, user-centered design decisions, and the path from interface design to working frontend implementation.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudiesData.map((study) => (
            <article id={study.id} key={study.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
              <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-600">Case Study</p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">{study.title}</h3>
                </div>
                <p className="max-w-2xl text-sm leading-6 text-slate-600">{study.summary}</p>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Problem</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{study.problem}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Target users</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{study.targetUsers}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">User needs</p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-700">
                      {study.userNeeds.map((need) => (
                        <li key={need} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500" /> {need}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">User journey</p>
                    <ol className="mt-2 space-y-2 text-sm text-slate-700">
                      {study.userJourney.map((step) => (
                        <li key={step} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500" /> {step}</li>
                      ))}
                    </ol>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Design decisions</p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-700">
                      {study.designDecisions.map((decision) => (
                        <li key={decision} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500" /> {decision}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Interface</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{study.interfaceDesign}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Figma → React</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{study.figmaToReact}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Technical challenges</p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    {study.technicalChallenges.map((challenge) => (
                      <li key={challenge} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500" /> {challenge}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Future improvements</p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    {study.futureImprovements.map((improvement) => (
                      <li key={improvement} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500" /> {improvement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

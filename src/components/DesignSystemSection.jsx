import React from 'react';
import { ArrowRight, Figma, Layers3, MonitorSmartphone, Palette } from 'lucide-react';

export default function DesignSystemSection() {
  const capabilities = [
    { title: 'Figma proficiency', description: 'Design exploration, rapid iteration, and UI system creation.', icon: Figma },
    { title: 'Auto Layout', description: 'Responsive composition for flexible, scalable component layouts.', icon: Layers3 },
    { title: 'Reusable components', description: 'Consistent building blocks that turn design into product code.', icon: Palette },
    { title: 'Responsive UI design', description: 'Mobile-first, content-aware layouts across devices.', icon: MonitorSmartphone }
  ];

  return (
    <section id="design-system" className="bg-[#f6f8fd] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-700">
            <Figma className="h-3.5 w-3.5" />
            Design system skills
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Translating design systems into scalable frontend products</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-indigo-100 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-600">Design approach</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">From Figma concepts to reusable frontend systems</h3>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-700">
              Let&apos;s build with design systems
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {['Typography & visual hierarchy', 'Interaction design', 'Reusable UI patterns', 'Accessibility-aware interfaces'].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

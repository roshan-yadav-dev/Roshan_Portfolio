import React from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-700">
            <Mail className="h-3.5 w-3.5" />
            Contact
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Open to frontend, product, and UI/UX engineering opportunities</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <a href="https://github.com/roshan-yadav-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-indigo-200 hover:bg-indigo-50/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm"><FaGithub className="h-5 w-5" /></div>
              <div>
                <div className="text-sm font-bold text-slate-900">GitHub</div>
                <div className="text-xs text-slate-500">github.com/roshan-yadav-dev</div>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/roshan-yadav-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-indigo-200 hover:bg-indigo-50/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm"><FaLinkedinIn className="h-5 w-5" /></div>
              <div>
                <div className="text-sm font-bold text-slate-900">LinkedIn</div>
                <div className="text-xs text-slate-500">linkedin.com/in/roshan-yadav-dev</div>
              </div>
            </a>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-sm font-bold text-slate-900">Email</div>
              <a href="mailto:roshanarvind1@gmail.com" className="mt-2 block text-sm font-semibold text-indigo-600">roshanarvind1@gmail.com</a>
            </div>
          </div>

          <div className="rounded-3xl border border-indigo-100 bg-slate-50 p-6 shadow-[0_18px_35px_-24px_rgba(79,70,229,0.25)] sm:p-8">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-indigo-700">
              <CheckCircle2 className="h-4 w-4" />
              Availability
            </div>
            <p className="text-base leading-7 text-slate-700">
              I&apos;m actively looking for frontend, product, and UI/UX engineering opportunities where I can contribute to thoughtful product experiences, design systems, and high-quality frontend implementation.
            </p>

            <a href="mailto:roshanarvind1@gmail.com?subject=Frontend%20Engineer%20Opportunity" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
              <Send className="h-4 w-4" />
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

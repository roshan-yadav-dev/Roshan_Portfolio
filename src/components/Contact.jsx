import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ loading: false, success: false, error: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ loading: true, success: false, error: '' });

    setTimeout(() => {
      setStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#f6f8fd] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-600 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Let's Build Something Useful
          </h2>
          <p className="text-slate-500 text-base font-medium mt-2">
            Open to software engineering, backend, full-stack, and AI/ML opportunities.
          </p>
          <div className="h-1 w-16 bg-indigo-600 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-indigo-100/80 space-y-6 shadow-xl shadow-indigo-100/40">
              <h3 className="font-bold text-slate-900 text-xl font-sans">
                Direct Channels
              </h3>

              <div className="space-y-4 text-xs font-medium">
                {/* GitHub */}
                <a
                  href="https://github.com/roshan-yadav-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-indigo-300 hover:bg-indigo-50/40 flex items-center gap-4 text-slate-800 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-white text-indigo-600 shadow-sm border border-slate-200/60 group-hover:scale-105 transition-transform">
                    <FaGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900">GitHub</div>
                    <div className="text-xs text-slate-500 font-sans">github.com/roshan-yadav-dev</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/roshan-yadav-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-indigo-300 hover:bg-indigo-50/40 flex items-center gap-4 text-slate-800 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-white text-indigo-600 shadow-sm border border-slate-200/60 group-hover:scale-105 transition-transform">
                    <FaLinkedinIn className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900">LinkedIn</div>
                    <div className="text-xs text-slate-500 font-sans">linkedin.com/in/roshan-yadav-dev</div>
                  </div>
                </a>

                {/* Email */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center gap-4 text-slate-800">
                  <div className="p-3 rounded-xl bg-white text-indigo-600 shadow-sm border border-slate-200/60">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900">Email</div>
                    <div className="text-xs text-indigo-600 font-semibold">
                      roshan.yadav.dev@gmail.com <span className="text-slate-400 font-normal text-[11px]">(Replace with your email)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-xs text-slate-600 leading-relaxed font-medium">
                <span className="font-bold text-indigo-700 block mb-1">
                  Status Notice
                </span>
                Actively seeking internship and entry-level software engineering, backend, and AI/ML roles.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-indigo-100/80 space-y-5 shadow-xl shadow-indigo-100/40"
            >
              <h3 className="font-bold text-slate-900 text-xl font-sans">
                Send a Message
              </h3>

              {status.success && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
                  <span>Thank you! Your message has been sent successfully. Roshan will get back to you soon.</span>
                </div>
              )}

              {status.error && (
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
                  <span>{status.error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="contact-name">
                    YOUR NAME *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/80 focus:border-indigo-600 text-slate-900 text-sm font-sans focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="contact-email">
                    YOUR EMAIL *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/80 focus:border-indigo-600 text-slate-900 text-sm font-sans focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="contact-subject">
                  SUBJECT
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Internship / Software Engineering Role Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/80 focus:border-indigo-600 text-slate-900 text-sm font-sans focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="contact-message">
                  MESSAGE *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Roshan, we would like to discuss software engineering opportunities..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/80 focus:border-indigo-600 text-slate-900 text-sm font-sans focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-200 disabled:opacity-50 hover:scale-[1.01]"
              >
                {status.loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

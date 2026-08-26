import React from 'react';

export default function HeroVisual() {
  const codeLines = [
    { num: "01", text: <><span className="text-purple-600 font-bold">const</span> <span className="text-indigo-600 font-bold">developer</span> = &#123;</> },
    { num: "02", text: <><span className="ml-4 text-slate-700">name</span>: <span className="text-emerald-600">"Roshan Yadav"</span>,</> },
    { num: "03", text: <><span className="ml-4 text-slate-700">role</span>: <span className="text-emerald-600">"Backend &amp; Full-Stack Developer"</span>,</> },
    { num: "04", text: <><span className="ml-4 text-slate-700">passion</span>: [<span className="text-emerald-600">"System Design"</span>, <span className="text-emerald-600">"AI/ML"</span>, <span className="text-emerald-600">"APIs"</span>],</> },
    { num: "05", text: <><span className="ml-4 text-slate-700">code</span>: <span className="text-emerald-600">"Clean • Scalable • Secure"</span>,</> },
    { num: "06", text: <><span className="ml-4 text-slate-700">goal</span>: <span className="text-emerald-600">"Build products that solve real problems"</span>,</> },
    { num: "07", text: <>&#125;;</> },
    { num: "08", text: <></> },
    { num: "09", text: <><span className="text-purple-600 font-bold">while</span> (<span className="text-indigo-600">learning</span>) &#123;</> },
    { num: "10", text: <><span className="ml-4 text-indigo-600 font-semibold">build</span>();</> },
    { num: "11", text: <><span className="ml-4 text-indigo-600 font-semibold">ship</span>();</> },
    { num: "12", text: <><span className="ml-4 text-indigo-600 font-semibold">improve</span>();</> },
    { num: "13", text: <>&#125;</> }
  ];

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl bg-white/90 backdrop-blur-md border border-indigo-100 shadow-xl shadow-indigo-100/50 overflow-hidden font-mono text-xs sm:text-sm">
      {/* IDE Top Window Bar */}
      <div className="bg-slate-50/80 px-5 py-3 border-b border-indigo-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-400"></div>
          <div className="w-3 h-3 rounded-full bg-amber-400"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
          <span className="ml-2 font-mono text-xs text-slate-500 font-medium">
            roshan@dev:~
          </span>
        </div>

        {/* Green Status Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-sans font-semibold text-emerald-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Building Impactful Systems
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-5 bg-white space-y-1 overflow-x-auto leading-relaxed">
        {codeLines.map((line, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <span className="w-6 text-right font-mono text-xs text-slate-400 select-none font-medium">
              {line.num}
            </span>
            <div className="font-mono text-slate-800 text-xs sm:text-sm">
              {line.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

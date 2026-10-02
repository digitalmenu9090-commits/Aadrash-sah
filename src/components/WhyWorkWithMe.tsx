import React from 'react';
import { Sparkles, Code, Cpu, CheckCircle2, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';

export const WhyWorkWithMe: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-5 h-5 text-cyan-400" />,
    Code: <Code className="w-5 h-5 text-cyan-400" />,
    Cpu: <Cpu className="w-5 h-5 text-cyan-400" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-cyan-400" />,
    BookOpen: <BookOpen className="w-5 h-5 text-cyan-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
  };

  return (
    <section className="py-20 border-t border-slate-800/80 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Work Ethic & Engineering Strengths
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Why Work With Me
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Qualities and disciplined habits that define how I approach software problems, collaborate with teammates, and build real digital products.
          </p>
        </div>

        {/* 6 Core Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_WORK_WITH_ME.map((item, idx) => (
            <div
              key={item.title}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all hover:bg-slate-900/80 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                    {iconMap[item.iconName]}
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span>Disciplined practice</span>
                <span className="text-cyan-400 font-mono">Reliable</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter / Engineering Lead Callout */}
        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white">
              Seeking an ambitious, self-driven developer for your team?
            </h3>
            <p className="text-xs text-slate-400">
              I am eager to contribute to real software repositories, absorb engineering mentorship, and ship production-ready code.
            </p>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap active:scale-95 shadow-md"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

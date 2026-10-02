import React from 'react';
import { Calendar, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Professional Track Record
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Honest Experience & Development History
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            A transparent record of independent engineering, freelance client solutions, and self-directed software development. No inflated titles, no invented corporate employers—only genuine work and practical execution.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-5 before:w-0.5 before:bg-slate-800">
          {EXPERIENCE_ITEMS.map((item, index) => (
            <div
              key={index}
              className="relative pl-10 md:pl-14 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute left-1.5 md:left-3.5 top-1.5 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

              <div className="rounded-2xl bg-slate-900/60 border border-slate-800/90 p-6 md:p-8 hover:border-slate-700/80 transition-all space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    <div className="text-sm font-medium text-cyan-400">
                      {item.organization}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.period}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-300">{item.type}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.summary}
                </p>

                {/* Achievements List */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Key Deliverables & Responsibilities
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies: Zero-pill discipline (unboxed text with separators) */}
                <div className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
                  <span className="text-slate-500 font-mono">Technologies:</span>
                  {item.technologies.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span className="text-cyan-300 font-medium">{tech}</span>
                      {idx < item.technologies.length - 1 && (
                        <span className="text-slate-600" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

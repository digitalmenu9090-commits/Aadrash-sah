import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Layers, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const allSkillsList = SKILL_CATEGORIES.flatMap((c) =>
    c.skills.map((s) => ({ ...s, categoryTitle: c.title }))
  );

  const displayedCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              Core Competencies
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Technical Skills
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              Organized by engineering capability and application domain. Evaluated through practical implementation in personal software and client projects.
            </p>
          </div>

          {/* Interactive Category Filter Bar */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Categories
            </button>
            <button
              onClick={() => setSelectedCategory('Core Programming')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'Core Programming'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Core Languages
            </button>
            <button
              onClick={() => setSelectedCategory('Web & Frontend')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'Web & Frontend'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Web & Frontend
            </button>
            <button
              onClick={() => setSelectedCategory('Backend & Automation')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'Backend & Automation'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Backend & Automation
            </button>
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl bg-slate-900/60 border border-slate-800/90 p-6 flex flex-col justify-between hover:border-slate-700/80 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400">
                    {category.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-6">
                  {category.description}
                </p>

                {/* Skills List within Category */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-100 flex items-center gap-2">
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          )}
                          {skill.name}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-slate-400 leading-normal">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Category Note */}
              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span>Applied in real deliverables</span>
                <span className="text-cyan-400 font-mono">Hands-on</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tech Badges Summary (No pills, clean unboxed text) */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/30 border border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            <span className="font-semibold text-slate-200">Engineering Principles:</span> Clean semantic architecture · Mobile-first responsiveness · Defensive scripting · Reusable modular components
          </div>
          <a
            href="#projects"
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>See practical implementations in Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Terminal, Lightbulb, Compass, Code, CheckCircle, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Professional Overview
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Prose Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <p className="text-lg text-slate-200 font-medium leading-relaxed">
              I am a self-driven Web Developer, Python Developer, and Digital Creator based in Nepal. I believe true engineering skill is built by getting hands dirty with real code, diagnosing edge cases, and constructing practical solutions that users can rely on.
            </p>

            <p>
              Rather than waiting for opportunities to learn passively, I actively build. My development path spans building voice-automated desktop intelligence in Python (like my personal assistant project <span className="text-cyan-400 font-medium">Jarvis</span>), crafting modern responsive business websites that translate client goals into seamless digital interfaces, and modernizing traditional workflows through contactless <span className="text-cyan-400 font-medium">Digital & QR Menus</span>.
            </p>

            <p>
              Through my brand initiative, <span className="text-white font-semibold">{PERSONAL_INFO.brandName} ({PERSONAL_INFO.brandShort})</span>, I work directly on solving digital pain points for local businesses—combining modern frontend web development, clean scripting, and cohesive digital design.
            </p>

            <p>
              I am motivated by clean code architecture, intuitive user interfaces, and continuous technical growth. I am ready to bring this self-directed momentum, discipline, and problem-solving mentality to collaborative engineering teams.
            </p>

            {/* Core Philosophy List */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex items-center gap-2.5 text-white font-semibold text-sm mb-1.5">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Learn by Building</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Real knowledge comes from architecture, debugging errors, and shipping working features.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex items-center gap-2.5 text-white font-semibold text-sm mb-1.5">
                  <Lightbulb className="w-4 h-4 text-cyan-400" />
                  <span>Practical Problem Solving</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Focus on software that serves real needs—from client business sites to automated voice tools.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Facts / Engineering Snapshot Column */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 md:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center justify-between border-b border-slate-800 pb-4">
                <span>Profile Snapshot</span>
                <span className="text-xs font-mono text-cyan-400 font-normal">verified profile</span>
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-xs text-slate-400 font-mono uppercase tracking-wider mb-1">
                    Full Name
                  </div>
                  <div className="font-semibold text-white">{PERSONAL_INFO.name}</div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 font-mono uppercase tracking-wider mb-1">
                    Primary Focus
                  </div>
                  <div className="text-slate-200">
                    Web Development · Python Automation · Digital Solutions
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 font-mono uppercase tracking-wider mb-1">
                    Location
                  </div>
                  <div className="text-slate-200">{PERSONAL_INFO.location}</div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 font-mono uppercase tracking-wider mb-1">
                    Digital Brand
                  </div>
                  <div className="text-slate-200">
                    {PERSONAL_INFO.brandName} ({PERSONAL_INFO.brandShort})
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 font-mono uppercase tracking-wider mb-1">
                    Communication
                  </div>
                  <div className="text-cyan-400 font-mono text-xs break-all">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

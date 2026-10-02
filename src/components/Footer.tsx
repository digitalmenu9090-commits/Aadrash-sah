import React from 'react';
import { ArrowUp, Heart, Terminal, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#070b12] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="text-base font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-xs text-cyan-400 font-medium mt-0.5">
              Web Developer | Python Developer | Digital Creator
            </div>
            <p className="mt-1 text-slate-400 max-w-sm">
              Engineering practical web software, Python automation tools, and business digital systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#nnd" className="hover:text-white transition-colors">New Nepal Digital</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all active:scale-95"
            aria-label="Back to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Based in {PERSONAL_INFO.location} · {PERSONAL_INFO.brandName}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

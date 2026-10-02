import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Eye, Terminal, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectDetailModal } from './ProjectDetailModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              Featured Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Engineering Projects
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              Hands-on software and web solutions engineered to solve real functional problems. Built with Python automation, modern React web development, and digital menu architectures.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>3 Production Case Studies</span>
          </div>
        </div>

        {/* Projects Grid: 3 Clean Featured Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg hover:shadow-cyan-950/20"
            >
              <div>
                {/* Project Image Frame with zero-broken-image fallback container */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback container
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Clean unboxed category kicker on image bottom */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="font-mono text-cyan-300 text-[11px] bg-slate-950/85 px-2 py-0.5 rounded border border-slate-800">
                      {project.category}
                    </span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity bg-cyan-500 text-slate-950 font-semibold px-2.5 py-1 rounded text-xs flex items-center gap-1 active:scale-95 shadow-md"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies Used: Zero-Pill discipline (clean unboxed inline text with separators) */}
                  <div className="pt-2">
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1.5">
                      Tech Stack
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-cyan-300/90 font-mono">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <React.Fragment key={tech}>
                          <span>{tech}</span>
                          {idx < Math.min(project.technologies.length, 4) - 1 && (
                            <span className="text-slate-600 select-none" aria-hidden="true">
                              ·
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 mt-4 border-t border-slate-800/60 pt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors active:scale-95"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Detail & Sandbox Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

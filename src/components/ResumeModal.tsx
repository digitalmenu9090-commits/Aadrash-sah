import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EXPERIENCE_ITEMS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const plainResumeText = `===================================================================
AADRASH KUMAR SAH
Web Developer | Python Developer | Digital Creator
Location: Nepal | Phone: ${PERSONAL_INFO.phoneFormatted}
Email: ${PERSONAL_INFO.email}
Brand: ${PERSONAL_INFO.brandName} (${PERSONAL_INFO.brandShort})
===================================================================

PROFESSIONAL SUMMARY
Self-driven Web Developer and Python Developer based in Nepal. Proven track
record of learning by building functional projects—ranging from Python-based
voice-automated assistants (Jarvis) to modern responsive client business
websites and contactless Digital & QR Menu architectures. Passionate about
clean code, modular systems, and practical digital execution.

TECHNICAL SKILLS
- Languages: Python, JavaScript (ES6+), HTML5, CSS3
- Frontend: React, Tailwind CSS, Responsive Web Design, Component Architecture
- Backend & Automation: Python Scripting, SpeechRecognition, REST APIs, JSON
- Tools & Practices: Git & GitHub, UI/UX Fundamentals, VS Code, Digital Solutions

KEY FEATURED PROJECTS
1. Jarvis — Personal AI Assistant
   - Python-based voice-controlled desktop assistant.
   - Built speech-to-text input parsing and synthesized audio output.
   - Automated OS workflows, application dispatch, and web information lookups.
   - Tech: Python, SpeechRecognition, Pyttsx3, OS Automation, Requests.

2. Business Website Projects
   - Modern, high-performance responsive web presence for businesses.
   - Mobile-first layouts, semantic accessible HTML, and customer touchpoints.
   - Tech: React, Tailwind CSS, JavaScript, HTML5/CSS3.

3. Digital Menu & QR Menu
   - Contactless smartphone menu system for dining establishments.
   - Instant QR code access with zero app download requirement.
   - Dynamic item categorization, prices, and fast single-hand mobile UI.
   - Tech: HTML5, CSS3, JavaScript, QR Code Integration.

EXPERIENCE
- Founder & Independent Developer | NEW NEPAL DIGITAL (NND) (2024 — Present)
  * Developing responsive websites, digital & QR menus for dining venues.
  * Directing digital media assets, banners, and modern brand design.
- Self-Driven Software & Python Development (2023 — Present)
  * Building voice automation tools, mastering modern React and full-stack basics.
  * Practicing clean Git version control workflows.

WHY WORK WITH ME
- Rapid, self-driven learning and independent initiative.
- Forged through practical project engineering rather than pure theory.
- Disciplined attention to responsive details and clean user experience.
===================================================================`;

  const handleCopy = () => {
    navigator.clipboard.writeText(plainResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([plainResumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Aadrash_Kumar_Sah_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0b1120] border border-slate-700/90 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/90">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-cyan-400" />
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                Curriculum Vitae / Resume
              </h2>
              <p className="text-xs text-slate-400">
                Aadrash Kumar Sah · Software Engineer Profile
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Copy Resume Plaintext"
              aria-label="Copy Resume"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={handlePrint}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors hidden sm:inline-flex"
              title="Print Resume"
              aria-label="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .TXT</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-1"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document View */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6 flex-1 text-slate-200 text-sm leading-relaxed bg-[#0d1424]">
          {/* Document Header */}
          <div className="border-b border-slate-800 pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-cyan-400 font-semibold text-sm">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {PERSONAL_INFO.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                {PERSONAL_INFO.phoneFormatted}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                {PERSONAL_INFO.email}
              </span>
            </div>
          </div>

          {/* Section: Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Self-driven Web Developer and Python Developer based in Nepal with practical experience engineering software solutions. Creator of "Jarvis" (Python voice automation assistant), responsive client business websites, and digital contactless QR menu architectures under the brand New Nepal Digital (NND). Motivated by clean component design, practical automation, and collaborative software engineering.
            </p>
          </div>

          {/* Section: Technical Skills */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="font-bold text-white block mb-1">Programming & Web</span>
                <span className="text-slate-300">
                  Python, JavaScript (ES6+), React, HTML5, CSS3, Tailwind CSS, Responsive Design
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="font-bold text-white block mb-1">Architecture & Tools</span>
                <span className="text-slate-300">
                  SpeechRecognition, Pyttsx3, REST APIs, JSON Handling, Git & GitHub, Digital & QR Menus
                </span>
              </div>
            </div>
          </div>

          {/* Section: Featured Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              Key Featured Projects
            </h3>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs sm:text-sm">{proj.title}</span>
                    <span className="text-[11px] font-mono text-cyan-400">{proj.category}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="text-[11px] font-mono text-slate-400 pt-1">
                    Technologies: {proj.technologies.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Experience */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              Independent Experience & Client Work
            </h3>
            <div className="space-y-3">
              {EXPERIENCE_ITEMS.map((exp, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white text-xs sm:text-sm">{exp.role}</span>
                      <span className="text-slate-400 text-xs ml-2">({exp.organization})</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-300">{exp.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
          <span>Official CV · Aadrash Kumar Sah · Nepal</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};

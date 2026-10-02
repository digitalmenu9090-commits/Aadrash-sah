import React, { useState } from 'react';
import { ArrowDown, Code2, Terminal, Play, Check, Copy, ExternalLink, MapPin, Sparkles, FileText, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'python' | 'react' | 'nnd'>('python');
  const [copied, setCopied] = useState(false);
  const [simulatedRunning, setSimulatedRunning] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string | null>(null);

  const pythonSnippet = `# Jarvis Voice Assistant — Core Architecture
import speech_recognition as sr
import pyttsx3, webbrowser, subprocess

engine = pyttsx3.init()
def speak(text):
    engine.say(text)
    engine.runAndWait()

def take_command():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        audio = r.listen(source, phrase_time_limit=5)
    return r.recognize_google(audio).lower()

# Task automation & practical dispatch
if __name__ == "__main__":
    speak("Jarvis online. Awaiting command.")`;

  const reactSnippet = `// Business & Digital Experience Architecture
import React, { useState } from 'react';

export function BusinessExperience() {
  const [activeService, setActiveService] = useState('web');

  return (
    <div className="responsive-container modern-ui">
      <header className="hero-branding">
        <h1>Your Business, Digitally Better.</h1>
      </header>
      <main className="interactive-grid">
        {/* Responsive, mobile-first components */}
      </main>
    </div>
  );
}`;

  const nndSnippet = `// NEW NEPAL DIGITAL — Solutions Matrix
{
  "brand": "NEW NEPAL DIGITAL",
  "founder": "Aadrash Kumar Sah",
  "location": "Nepal",
  "coreSolutions": [
    "Website Design",
    "Digital Menu & QR Menu",
    "Creative & Graphic Design",
    "Social Media & Video Production"
  ],
  "mission": "Empowering businesses through digital execution"
}`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunScript = () => {
    setSimulatedRunning(true);
    setTerminalOutput('Initializing environment...\nLoading modules [speech_recognition, pyttsx3, requests]...\nListening on local audio interface...\n✓ Voice synthesis verified: "Jarvis online. Ready for command."');
    setTimeout(() => {
      setSimulatedRunning(false);
    }, 1200);
  };

  const currentCode =
    activeTab === 'python' ? pythonSnippet : activeTab === 'react' ? reactSnippet : nndSnippet;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background subtle radial accents */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Identity and Hero Statements */}
          <div className="lg:col-span-7 space-y-6">
            {/* Location & Status Badge (Unboxed text with clean separator) */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Available for Projects & Software Roles
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Candidate Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase font-sans">
                {PERSONAL_INFO.name}
              </h1>
              {/* Role Subheading */}
              <p className="mt-3 text-lg sm:text-xl font-semibold text-cyan-400 tracking-wide">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Short Headline as specified */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-balance">
              “{PERSONAL_INFO.headline}”
            </p>

            {/* Genuine Profile Points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400 pt-1">
              <span>Python & Automation</span>
              <span aria-hidden="true">·</span>
              <span>Modern Web & React</span>
              <span aria-hidden="true">·</span>
              <span>Digital & QR Menus</span>
              <span aria-hidden="true">·</span>
              <span>Founder, {PERSONAL_INFO.brandName}</span>
            </div>

            {/* Three Core Hero Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-lg shadow-lg shadow-cyan-950/40 hover:shadow-cyan-500/25 transition-all transform active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all transform active:scale-95 hover:border-slate-600"
              >
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 rounded-lg transition-all transform active:scale-95"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </button>
            </div>
          </div>

          {/* Right Column: Animated Developer / Technology Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-md overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/70 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    aadrash-workspace
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(currentCode)}
                    className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                    title="Copy code"
                    aria-label="Copy current code"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Code File Tabs */}
              <div className="flex items-center border-b border-slate-800/80 bg-slate-950/40 px-2 text-xs font-mono">
                <button
                  onClick={() => {
                    setActiveTab('python');
                    setTerminalOutput(null);
                  }}
                  className={`px-3 py-2 border-b-2 flex items-center gap-1.5 transition-colors ${
                    activeTab === 'python'
                      ? 'border-cyan-400 text-cyan-400 bg-slate-900/50'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  jarvis_core.py
                </button>
                <button
                  onClick={() => {
                    setActiveTab('react');
                    setTerminalOutput(null);
                  }}
                  className={`px-3 py-2 border-b-2 flex items-center gap-1.5 transition-colors ${
                    activeTab === 'react'
                      ? 'border-cyan-400 text-cyan-400 bg-slate-900/50'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  BusinessWeb.tsx
                </button>
                <button
                  onClick={() => {
                    setActiveTab('nnd');
                    setTerminalOutput(null);
                  }}
                  className={`px-3 py-2 border-b-2 flex items-center gap-1.5 transition-colors ${
                    activeTab === 'nnd'
                      ? 'border-cyan-400 text-cyan-400 bg-slate-900/50'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  nnd_services.json
                </button>
              </div>

              {/* Code Content Area */}
              <div className="p-4 overflow-x-auto text-xs font-mono text-slate-300 leading-relaxed max-h-[280px]">
                <pre className="selection:bg-cyan-500/30">
                  <code>{currentCode}</code>
                </pre>
              </div>

              {/* Interactive Test Action */}
              <div className="p-3 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-400 font-mono">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Python 3.11 · TypeScript · Node</span>
                </div>
                <button
                  onClick={handleRunScript}
                  disabled={simulatedRunning}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-medium transition-all active:scale-95 disabled:opacity-50"
                >
                  <Play className={`w-3 h-3 ${simulatedRunning ? 'animate-spin' : ''}`} />
                  <span>{simulatedRunning ? 'Running...' : 'Simulate Run'}</span>
                </button>
              </div>

              {/* Terminal Output preview if simulated */}
              {terminalOutput && (
                <div className="px-4 py-2.5 bg-slate-950 border-t border-cyan-900/40 text-[11px] font-mono text-cyan-300 whitespace-pre-wrap leading-tight">
                  {terminalOutput}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

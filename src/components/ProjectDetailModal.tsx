import React, { useState } from 'react';
import { X, ExternalLink, Github, Terminal, CheckCircle2, Monitor, Smartphone, Tablet, QrCode, Play, Volume2, Sparkles, Plus, Trash2 } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Simulator states for Jarvis
  const [jarvisCommand, setJarvisCommand] = useState<string>('');
  const [jarvisLog, setJarvisLog] = useState<{ query: string; response: string; time: string }[]>([
    {
      query: 'Jarvis, introduce yourself',
      response: 'Greetings! I am Jarvis, a personal Python-engineered assistant. I handle voice tasks, desktop automation, and quick web lookups.',
      time: '10:00:02',
    },
  ]);
  const [isProcessing, setIsProcessing] = useState(false);

  // Simulator states for Business Websites
  const [deviceViewport, setDeviceViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Simulator states for Digital Menu
  const [menuFilter, setMenuFilter] = useState<'all' | 'momo' | 'khaja' | 'beverages'>('all');
  const [orderItems, setOrderItems] = useState<{ name: string; price: number }[]>([
    { name: 'Steamed Chicken Momo', price: 250 },
  ]);
  const [showQrModal, setShowQrModal] = useState(false);

  const sampleMenu = [
    { id: 1, name: 'Steamed Chicken Momo', category: 'momo', price: 250, desc: 'Fresh minced chicken with Himalayan spices & spicy tomato achar' },
    { id: 2, name: 'Kothey Veg Momo', category: 'momo', price: 220, desc: 'Pan-fried vegetable dumplings with roasted sesame chutney' },
    { id: 3, name: 'Newari Khaja Set', category: 'khaja', price: 420, desc: 'Baji (beaten rice), choila, bhatmas sadeko, aloo tama, achar' },
    { id: 4, name: 'Thakali Thali Special', category: 'khaja', price: 550, desc: 'Authentic local organic rice, black dal, gundruk, seasonal curries' },
    { id: 5, name: 'Himalayan Masala Chiya', category: 'beverages', price: 80, desc: 'Brewed milk tea with freshly crushed cardamom, cloves, and ginger' },
    { id: 6, name: 'Fresh Mint Lemon Soda', category: 'beverages', price: 150, desc: 'Crisp chilled sparkling water with fresh hill mint and lemon' },
  ];

  const handleSimulateJarvis = (cmd: string) => {
    setIsProcessing(true);
    let resp = '';
    const lower = cmd.toLowerCase();

    if (lower.includes('status') || lower.includes('system')) {
      resp = 'System Diagnostics: All background threads nominal. Python 3.11 runtime active. Memory footprint: 48MB. Audio output stream open.';
    } else if (lower.includes('youtube') || lower.includes('open')) {
      resp = 'Executing OS dispatch: Launching browser session and navigating to designated URL.';
    } else if (lower.includes('time') || lower.includes('date')) {
      resp = `Current system timestamp: ${new Date().toLocaleTimeString()} (Nepal Time).`;
    } else if (lower.includes('joke')) {
      resp = 'Why do Python developers wear glasses? Because they do not C#!';
    } else if (lower.includes('search') || lower.includes('what is')) {
      resp = `Executing search query via Wikipedia/Requests module. Retrieved summary dispatch with 200 OK.`;
    } else {
      resp = `Command acknowledged: "${cmd}". Routing to execution handler.`;
    }

    setTimeout(() => {
      setJarvisLog((prev) => [
        { query: cmd, response: resp, time: new Date().toLocaleTimeString() },
        ...prev.slice(0, 4),
      ]);
      setIsProcessing(false);
      setJarvisCommand('');
    }, 400);
  };

  const handleAddMenuItem = (item: { name: string; price: number }) => {
    setOrderItems((prev) => [...prev, item]);
  };

  const handleRemoveOrderItem = (index: number) => {
    setOrderItems((prev) => prev.filter((_, i) => i !== index));
  };

  const totalOrderPrice = orderItems.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0b1120] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              {project.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-8 flex-1">
          {/* Main Visual Frame */}
          <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-video max-h-[380px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Resilient fallback container if image cannot be loaded
                const target = e.target as HTMLElement;
                target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
              <span className="font-mono bg-slate-950/80 px-2.5 py-1 rounded border border-slate-800">
                {project.subtitle}
              </span>
            </div>
          </div>

          {/* Project Long Description */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Project Overview
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.longDescription}
            </p>
          </div>

          {/* Key Technologies (Zero-pill discipline: unboxed text with separators) */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-cyan-300">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="font-medium">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-slate-600" aria-hidden="true">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Interactive Feature Sandbox depending on project */}
          <div className="border border-slate-800 rounded-xl bg-slate-950/60 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Interactive Project Sandbox</span>
              </h3>
              <span className="text-xs font-mono text-cyan-400">live demo preview</span>
            </div>

            {/* CASE 1: Jarvis AI Sandbox */}
            {project.id === 'jarvis-assistant' && (
              <div className="space-y-4 text-xs font-mono">
                <p className="text-slate-400">
                  Simulate voice commands dispatched to Jarvis's Python core engine:
                </p>

                {/* Pre-made quick command chips */}
                <div className="flex flex-wrap gap-2">
                  {[
                    'system diagnostics',
                    'open youtube',
                    'what time is it',
                    'tell me a programming joke',
                    'what is python',
                  ].map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => handleSimulateJarvis(cmd)}
                      disabled={isProcessing}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-cyan-300 transition-colors flex items-center gap-1.5 active:scale-95"
                    >
                      <Play className="w-3 h-3 text-cyan-400" />
                      <span>"{cmd}"</span>
                    </button>
                  ))}
                </div>

                {/* Simulated Terminal Log */}
                <div className="rounded-lg bg-slate-950 border border-slate-800 p-4 space-y-3 max-h-[180px] overflow-y-auto">
                  {jarvisLog.map((entry, i) => (
                    <div key={i} className="border-b border-slate-900 pb-2 last:border-0 last:pb-0">
                      <div className="text-cyan-400 flex items-center gap-2">
                        <span className="text-slate-500">[{entry.time}]</span>
                        <span>User: {entry.query}</span>
                      </div>
                      <div className="text-slate-300 pl-4 mt-1 flex items-start gap-1.5">
                        <Volume2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Jarvis: {entry.response}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CASE 2: Business Websites Sandbox */}
            {project.id === 'business-websites' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Switch viewport simulator:</span>
                  <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                    <button
                      onClick={() => setDeviceViewport('desktop')}
                      className={`px-2.5 py-1 rounded flex items-center gap-1.5 ${
                        deviceViewport === 'desktop' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400'
                      }`}
                    >
                      <Monitor className="w-3.5 h-3.5" /> Desktop
                    </button>
                    <button
                      onClick={() => setDeviceViewport('tablet')}
                      className={`px-2.5 py-1 rounded flex items-center gap-1.5 ${
                        deviceViewport === 'tablet' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400'
                      }`}
                    >
                      <Tablet className="w-3.5 h-3.5" /> Tablet
                    </button>
                    <button
                      onClick={() => setDeviceViewport('mobile')}
                      className={`px-2.5 py-1 rounded flex items-center gap-1.5 ${
                        deviceViewport === 'mobile' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" /> Mobile
                    </button>
                  </div>
                </div>

                {/* Simulated Screen Container */}
                <div className="flex justify-center bg-slate-950 p-4 rounded-xl border border-slate-800/80 overflow-hidden">
                  <div
                    className={`transition-all duration-300 border border-slate-700/80 rounded-lg bg-slate-900 p-4 space-y-3 ${
                      deviceViewport === 'desktop'
                        ? 'w-full'
                        : deviceViewport === 'tablet'
                        ? 'w-[480px]'
                        : 'w-[280px]'
                    }`}
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                      <span className="font-bold text-white">Apex Business Sol.</span>
                      <span className="text-slate-400 text-[10px]">Contact · Services · About</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="text-xs font-semibold text-cyan-300">Modern Digital Growth</div>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        Designed with high-conversion layouts, crisp typography, and touch responsiveness.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-1 text-[10px]">
                      <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300">
                        ⚡ Fast Loading
                      </div>
                      <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300">
                        📱 Multi-Device
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CASE 3: Digital Menu & QR Menu Sandbox */}
            {project.id === 'digital-qr-menu' && (
              <div className="space-y-4 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    Live Restaurant Menu Interface (Table #04)
                  </span>
                  <button
                    onClick={() => setShowQrModal(!showQrModal)}
                    className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-cyan-300 bg-cyan-950/60 border border-cyan-800/80 rounded-md hover:bg-cyan-900/60"
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>{showQrModal ? 'Hide QR' : 'Show Table QR Code'}</span>
                  </button>
                </div>

                {/* QR Code Card Popover */}
                {showQrModal && (
                  <div className="p-4 bg-slate-900 border border-cyan-500/40 rounded-xl flex items-center gap-4 animate-in fade-in">
                    <div className="w-20 h-20 bg-white p-2 rounded-lg flex items-center justify-center">
                      <QrCode className="w-16 h-16 text-slate-950" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">Table #04 QR Stand</div>
                      <p className="text-slate-400 text-xs mt-0.5">
                        Scanned via smartphone camera. Loads contactless digital menu with zero app download.
                      </p>
                    </div>
                  </div>
                )}

                {/* Interactive Menu Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[190px] overflow-y-auto">
                  {sampleMenu.map((item) => (
                    <div
                      key={item.id}
                      className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between"
                    >
                      <div>
                        <div className="font-semibold text-white text-xs">{item.name}</div>
                        <div className="text-[11px] text-cyan-400 font-mono">रू {item.price} NPR</div>
                      </div>
                      <button
                        onClick={() => handleAddMenuItem(item)}
                        className="p-1.5 bg-slate-800 hover:bg-cyan-500/20 hover:text-cyan-300 rounded text-slate-300 transition-colors"
                        title="Add to simulated bill"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Quick Order Bill Summary */}
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Simulated Order:</span>
                    <span className="font-mono text-white">{orderItems.length} items</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-cyan-400 font-bold">Total: रू {totalOrderPrice}</span>
                    {orderItems.length > 0 && (
                      <button
                        onClick={() => setOrderItems([])}
                        className="text-[10px] text-rose-400 hover:underline"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Architecture & Feature Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Core Features
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Engineering Architecture
              </h4>
              <ul className="space-y-2 text-xs text-slate-300 font-mono">
                {project.architecture.map((arch, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-400">→</span>
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/90 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            Real code implementation by <span className="text-slate-200">Aadrash Kumar Sah</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

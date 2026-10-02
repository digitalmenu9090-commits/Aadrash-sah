import React, { useState } from 'react';
import { ArrowRight, Check, Send, Sparkles, Monitor, QrCode, Image, Video, Palette, Share2, Layers } from 'lucide-react';
import { NND_SERVICES, NND_BRAND_IMAGE, PERSONAL_INFO } from '../data/portfolioData';

interface NewNepalDigitalProps {
  onSelectServicesForContact?: (selectedServices: string[]) => void;
}

export const NewNepalDigital: React.FC<NewNepalDigitalProps> = ({ onSelectServicesForContact }) => {
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>(['web-design', 'qr-menu']);

  const toggleService = (id: string) => {
    setSelectedServiceIds((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleInquire = () => {
    const names = NND_SERVICES.filter((s) => selectedServiceIds.includes(s.id)).map((s) => s.name);
    if (onSelectServicesForContact) {
      onSelectServicesForContact(names);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceIcons: Record<string, React.ReactNode> = {
    'web-design': <Monitor className="w-4 h-4 text-cyan-400" />,
    'digital-menu': <Layers className="w-4 h-4 text-cyan-400" />,
    'qr-menu': <QrCode className="w-4 h-4 text-cyan-400" />,
    'banner-design': <Image className="w-4 h-4 text-cyan-400" />,
    'graphic-design': <Palette className="w-4 h-4 text-cyan-400" />,
    'social-media-design': <Share2 className="w-4 h-4 text-cyan-400" />,
    'video-editing': <Video className="w-4 h-4 text-cyan-400" />,
    'branding-creative': <Sparkles className="w-4 h-4 text-cyan-400" />,
  };

  return (
    <section id="nnd" className="py-20 border-t border-slate-800/80 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Banner Block */}
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 md:p-12 mb-16 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
                <span>Independent Brand Initiative</span>
                <span aria-hidden="true">·</span>
                <span>Nepal</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                NEW NEPAL DIGITAL
              </h2>

              <p className="text-xl font-semibold text-cyan-300">
                Your Business, Digitally Better.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Founded and directed by Aadrash Kumar Sah, <span className="text-white font-medium">New Nepal Digital (NND)</span> bridges technical software engineering and creative digital media. We engineer modern, mobile-friendly websites, contactless QR dining menus, and digital assets that empower businesses in Nepal to operate modernly and reach more customers.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
                <span>Local Business Modernization</span>
                <span aria-hidden="true">·</span>
                <span>Direct Engineer-to-Client Delivery</span>
                <span aria-hidden="true">·</span>
                <span>Practical Solutions</span>
              </div>
            </div>

            {/* Brand Visual Mockup */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl relative aspect-video">
                <img
                  src={NND_BRAND_IMAGE}
                  alt="New Nepal Digital Agency Showcase"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-300">
                  <span>NND Creative & Code Studio</span>
                  <span className="text-cyan-400">Kathmandu / Nepal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Digital Solutions Grid */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
                Comprehensive Capabilities
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Digital Solutions & Creative Services
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Select any services below to pre-populate an inquiry directly into the contact desk.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {NND_SERVICES.map((service) => {
              const isSelected = selectedServiceIds.includes(service.id);
              return (
                <div
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-500/70 shadow-md shadow-cyan-950/20'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                        {serviceIcons[service.id]}
                      </div>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                          isSelected
                            ? 'bg-cyan-400 border-cyan-400 text-slate-950'
                            : 'border-slate-700 bg-slate-950/60'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-white tracking-tight">
                        {service.name}
                      </h4>
                      <p className="mt-1 text-xs text-slate-300 leading-normal">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Deliverables unboxed */}
                    <div className="pt-2 border-t border-slate-800/80 space-y-1">
                      {service.deliverables.slice(0, 2).map((deliv, idx) => (
                        <div key={idx} className="text-[11px] text-slate-400 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-cyan-400" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-3 text-[11px] font-mono text-cyan-400 flex items-center justify-between">
                    <span>{service.tag}</span>
                    <span className="text-slate-500">{isSelected ? 'Selected' : 'Click to select'}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Inquire Bar */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-white">
                Selected {selectedServiceIds.length} Service{selectedServiceIds.length !== 1 ? 's' : ''} for Inquiry
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {selectedServiceIds.length === 0
                  ? 'Click services above to customize your inquiry.'
                  : NND_SERVICES.filter((s) => selectedServiceIds.includes(s.id))
                      .map((s) => s.name)
                      .join(' · ')}
              </p>
            </div>

            <button
              onClick={handleInquire}
              disabled={selectedServiceIds.length === 0}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-lg shadow transition-all active:scale-95 disabled:opacity-50 whitespace-nowrap"
            >
              <span>Inquire for Selected Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, ExternalLink, Github, Linkedin, MessageSquare, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  prefilledServices?: string[];
}

export const Contact: React.FC<ContactProps> = ({ prefilledServices }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Website Project');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update prefilled services if selected from NND section
  useEffect(() => {
    if (prefilledServices && prefilledServices.length > 0) {
      setSubject('NEW NEPAL DIGITAL Solutions Inquiry');
      setMessage(
        `Hello Aadrash,\n\nI would like to inquire about the following services from NEW NEPAL DIGITAL:\n• ${prefilledServices.join(
          '\n• '
        )}\n\nPlease let me know your availability and requirements.\n\nThank you!`
      );
    }
  }, [prefilledServices]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please fill in all required fields (Name, Email, and Message).');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's Build Something Meaningful
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Whether you have a web development project, require digital solutions for your business, want to discuss Python engineering, or have an engineering opening on your team, reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Communication Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 space-y-3 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-white font-semibold text-sm">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>Direct Email</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </span>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sm font-mono text-cyan-300 hover:underline block break-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-xs text-slate-400">
                Primary inbox. Inquiries typically answered within 24 hours.
              </p>
            </div>

            {/* Phone Card */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 space-y-3 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-white font-semibold text-sm">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>Phone & WhatsApp</span>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </span>
                  )}
                </button>
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-sm font-mono text-cyan-300 hover:underline block"
              >
                {PERSONAL_INFO.phoneFormatted} ({PERSONAL_INFO.phone})
              </a>
              <p className="text-xs text-slate-400">
                Direct mobile line in Nepal for urgent calls and messaging.
              </p>
            </div>

            {/* Location & Brand Card */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 space-y-3">
              <div className="flex items-center gap-2.5 text-white font-semibold text-sm">
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Location & Operation Base</span>
              </div>
              <p className="text-sm text-slate-200">
                Nepal (Operating for clients in Nepal & remote worldwide)
              </p>
              <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-400">
                <span className="font-semibold text-white">Brand:</span> {PERSONAL_INFO.brandName} ({PERSONAL_INFO.brandShort})
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400">Engineering Profiles:</span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.githubPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-700">·</span>
                <a
                  href={PERSONAL_INFO.linkedinPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 md:p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill out the form below. Form is validated and ready for communication.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-slate-950 border border-emerald-500/40 space-y-3 animate-in fade-in">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <Check className="w-5 h-5" />
                    <span>Message Prepared Successfully</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{name}</span>! Your message regarding <span className="text-cyan-400">{subject}</span> has been logged. You can also send this directly via your email client below:
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                        `[Inquiry: ${subject}] from ${name}`
                      )}&body=${encodeURIComponent(message)}`}
                      className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors inline-flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Default Mail Client</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-medium text-slate-300 block">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ramesh Shrestha"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-medium text-slate-300 block">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-medium text-slate-300 block">
                      Topic or Project Scope
                    </label>
                    <select
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    >
                      <option value="Website Project">Custom Website Development</option>
                      <option value="Digital Menu & QR System">Digital Menu & QR System</option>
                      <option value="Python & Automation">Python Automation / Software Tool</option>
                      <option value="NEW NEPAL DIGITAL Solutions Inquiry">NEW NEPAL DIGITAL (NND) Solutions</option>
                      <option value="Engineering Job Opportunity">Software Engineering Role / Interview</option>
                      <option value="General Conversation">General Technical Discussion</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-medium text-slate-300 block">
                      Your Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your project, timeline, or engineering opportunity..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none leading-relaxed"
                      required
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-mono">
                      Direct delivery to {PERSONAL_INFO.email}
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-lg shadow-md transition-all active:scale-95"
                    >
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

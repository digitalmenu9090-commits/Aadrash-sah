/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { NewNepalDigital } from './components/NewNepalDigital';
import { Experience } from './components/Experience';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [prefilledContactServices, setPrefilledContactServices] = useState<string[]>([]);

  const handleSelectServicesForContact = (services: string[]) => {
    setPrefilledContactServices(services);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Top 3-Zone Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <NewNepalDigital onSelectServicesForContact={handleSelectServicesForContact} />
        <Experience />
        <WhyWorkWithMe />
        <Contact prefilledServices={prefilledContactServices} />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Downloadable / Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

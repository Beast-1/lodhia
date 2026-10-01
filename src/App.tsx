/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HeritageStory } from './components/HeritageStory';
import { AyurvedicLibrary } from './components/AyurvedicLibrary';
import { ProductsShowcase } from './components/ProductsShowcase';
import { PharmacyStorefront } from './components/PharmacyStorefront';
import { TrustAndLegacy } from './components/TrustAndLegacy';
import { WisdomArticles } from './components/WisdomArticles';
import { Footer } from './components/Footer';
import { PrescriptionModal } from './components/PrescriptionModal';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  const [prescriptionModalOpen, setPrescriptionModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#242A26] flex flex-col font-sans selection:bg-[#C98A2C]/20 selection:text-[#0F281E]">
      {/* Editorial Header */}
      <Header
        onOpenPrescription={() => setPrescriptionModalOpen(true)}
        onNavigate={scrollToSection}
      />

      <main className="flex-1">
        {/* Cinematic Botanical Hero */}
        <Hero
          onExploreAyurveda={() => scrollToSection('library')}
          onDiscoverLohia={() => scrollToSection('heritage')}
          onOpenPrescription={() => setPrescriptionModalOpen(true)}
        />

        {/* 1988 Guwahati Heritage & Legacy */}
        <HeritageStory />

        {/* Distinctive Ayurvedic Library & Living Herbarium */}
        <AyurvedicLibrary />

        {/* Classical Formulations & Medicines Preview */}
        <ProductsShowcase
          onOpenPrescription={() => setPrescriptionModalOpen(true)}
        />

        {/* The Physical Pharmacy in Guwahati (Storefront & Location) */}
        <PharmacyStorefront
          onOpenPrescription={() => setPrescriptionModalOpen(true)}
        />

        {/* Trust, Vaidya Testimonials & AYUSH Standards */}
        <TrustAndLegacy />

        {/* Living Wisdom Articles & Dispensary Chronicles */}
        <WisdomArticles />
      </main>

      {/* Refined Multi-Column Footer with Future Directory */}
      <Footer
        onNavigate={scrollToSection}
        onOpenPrescription={() => setPrescriptionModalOpen(true)}
      />

      {/* Interactive Prescription & Vaidya Consultation Modal */}
      <PrescriptionModal
        isOpen={prescriptionModalOpen}
        onClose={() => setPrescriptionModalOpen(false)}
      />

      {/* Mobile Floating Quick Contact Action */}
      <div className="fixed bottom-4 right-4 z-40 sm:hidden flex items-center gap-2">
        <a
          href="tel:+913612540000"
          className="w-11 h-11 bg-[#0E241B] text-[#C5A572] rounded-full flex items-center justify-center shadow-lg border border-[#C5A572]/40"
          aria-label="Call Lohia Pharmacy"
        >
          <Phone className="w-4 h-4" />
        </a>

        <button
          onClick={() => setPrescriptionModalOpen(true)}
          className="px-4 py-3 bg-[#0F281E] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-full shadow-xl border border-[#C5A572]/60 flex items-center gap-2 cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-[#C5A572]" />
          <span>Prescription / Help</span>
        </button>
      </div>
    </div>
  );
}

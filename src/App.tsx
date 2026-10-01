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
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [prescriptionModalOpen, setPrescriptionModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70;
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
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0F281E] focus:text-[#FAF7F2] focus:ring-2 focus:ring-[#C5A572]"
      >
        Skip to main content
      </a>

      {/* Editorial Header */}
      <Header
        onOpenPrescription={() => setPrescriptionModalOpen(true)}
        onNavigate={scrollToSection}
      />

      <main id="main-content" className="flex-1">
        {/* Grounded Editorial Hero */}
        <Hero
          onExploreProducts={() => scrollToSection('formulations')}
          onVisitStore={() => scrollToSection('store')}
          onOpenPrescription={() => setPrescriptionModalOpen(true)}
        />

        {/* 1988 Guwahati Heritage & Story */}
        <HeritageStory />

        {/* Distinctive Ayurvedic Library & Living Botanical Compendium */}
        <AyurvedicLibrary />

        {/* Traditional Products & Formulations (Sample Preview) */}
        <ProductsShowcase
          onOpenPrescription={() => setPrescriptionModalOpen(true)}
        />

        {/* Guwahati Storefront & Location */}
        <PharmacyStorefront
          onOpenPrescription={() => setPrescriptionModalOpen(true)}
        />

        {/* Standards, Heritage Pillars & Community Trust */}
        <TrustAndLegacy />

        {/* Educational Literature & Knowledge Articles */}
        <WisdomArticles />
      </main>

      {/* Refined Multi-Column Footer with Future Directory */}
      <Footer
        onNavigate={scrollToSection}
        onOpenPrescription={() => setPrescriptionModalOpen(true)}
      />

      {/* Medicine & Product Enquiry Modal */}
      <PrescriptionModal
        isOpen={prescriptionModalOpen}
        onClose={() => setPrescriptionModalOpen(false)}
      />

      {/* Mobile Floating Quick Contact Action */}
      <div className="fixed bottom-4 right-4 z-40 sm:hidden">
        <button
          onClick={() => setPrescriptionModalOpen(true)}
          className="px-4 py-3 bg-[#0F281E] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-full shadow-lg border border-[#C5A572]/60 flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C5A572]"
          aria-label="Enquire about Ayurvedic products or medicines"
        >
          <MessageSquare className="w-4 h-4 text-[#C5A572]" aria-hidden="true" />
          <span>Medicine Enquiry</span>
        </button>
      </div>
    </div>
  );
}

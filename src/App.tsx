/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HeritageStory } from './components/HeritageStory';
import { PharmacyProducts } from './components/PharmacyProducts';
import { AyurvedicLibrary } from './components/AyurvedicLibrary';
import { VisitStore } from './components/VisitStore';
import { TrustBand } from './components/TrustBand';
import { Footer } from './components/Footer';
import { HerbDetailModal } from './components/HerbDetailModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { PrescriptionModal } from './components/PrescriptionModal';
import { CatalogueModal } from './components/CatalogueModal';
import { FullHerbariumModal } from './components/FullHerbariumModal';
import { HERBS_DATA } from './data/herbsData';
import { Herb, Formulation } from './types';

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [catalogueModalOpen, setCatalogueModalOpen] = useState(false);
  const [catalogueCategory, setCatalogueCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Formulation | null>(null);
  const [fullHerbariumOpen, setFullHerbariumOpen] = useState(false);
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null);

  // Lovable Intersection Observer scroll-reveal animation
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -35px 0px' }
    );
    elements.forEach((element) => {
      element.classList.add('reveal-ready');
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToHref = (href: string) => {
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 88;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleSelectHerbById = (herbId: string) => {
    const found = HERBS_DATA.find((h) => h.id === herbId);
    if (found) {
      setSelectedHerb(found);
    }
  };

  const handleSelectCategory = (categoryTarget: string) => {
    setCatalogueCategory(categoryTarget);
    setCatalogueModalOpen(true);
  };

  const handleOrderViaWhatsApp = (productName: string) => {
    const message = encodeURIComponent(
      `Hello Lohia Ayurvedic Pharmacy,\nI would like to enquire about the availability and price of: "${productName}". Please let me know if it is currently in stock at your Guwahati store.`
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div id="top" className="site-wrap min-h-screen flex flex-col">
      {/* Accessible Skip Link */}
      <a
        href="#story"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--primary)] focus:text-[var(--ivory)] focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Lovable Header */}
      <Header
        onNavigate={scrollToHref}
        onOpenEnquiry={() => setEnquiryModalOpen(true)}
      />

      <main>
        {/* 1. Lovable Hero */}
        <Hero onDiscover={() => scrollToHref('#story')} />

        {/* 2. Lovable Story / Heritage */}
        <HeritageStory onExplorePharmacy={() => scrollToHref('#pharmacy')} />

        {/* 3. Lovable Pharmacy / Products */}
        <PharmacyProducts
          onSelectCategory={handleSelectCategory}
          onOpenCatalogue={() => {
            setCatalogueCategory('All');
            setCatalogueModalOpen(true);
          }}
        />

        {/* 4. Lovable Ayurvedic Library */}
        <AyurvedicLibrary
          onSelectHerb={handleSelectHerbById}
          onOpenFullLibrary={() => setFullHerbariumOpen(true)}
        />

        {/* 5. Lovable Visit / Guwahati Store */}
        <VisitStore onOpenEnquiry={() => setEnquiryModalOpen(true)} />

        {/* 6. Lovable Trust Band */}
        <TrustBand />
      </main>

      {/* 7. Lovable Footer */}
      <Footer
        onNavigate={scrollToHref}
        onOpenEnquiry={() => setEnquiryModalOpen(true)}
      />

      {/* AI Studio Interactive Functionality Modals (Lovable-styled) */}
      <HerbDetailModal
        herb={selectedHerb}
        onClose={() => setSelectedHerb(null)}
      />

      <FullHerbariumModal
        isOpen={fullHerbariumOpen}
        onClose={() => setFullHerbariumOpen(false)}
        onSelectHerb={(herb) => {
          setSelectedHerb(herb);
          setFullHerbariumOpen(false);
        }}
      />

      <CatalogueModal
        isOpen={catalogueModalOpen}
        initialCategory={catalogueCategory}
        onClose={() => setCatalogueModalOpen(false)}
        onSelectProduct={(product) => {
          setSelectedProduct(product);
          setCatalogueModalOpen(false);
        }}
        onOpenEnquiry={() => {
          setCatalogueModalOpen(false);
          setEnquiryModalOpen(true);
        }}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOrderViaWhatsApp={handleOrderViaWhatsApp}
      />

      <PrescriptionModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
      />
    </div>
  );
}

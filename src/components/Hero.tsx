import React from 'react';
import { ArrowDown, ArrowUpRight, MessageSquare, MapPin } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onVisitStore: () => void;
  onOpenPrescription: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onVisitStore,
  onOpenPrescription,
}) => {
  return (
    <section id="hero" className="relative bg-[#FAF7F2] overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#0F281E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Eyebrow & Provenance */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-8 border-b border-[#0F281E]/10">
          <div className="flex items-center gap-2.5 text-xs tracking-[0.18em] uppercase font-semibold text-[#8C6D46]">
            <span>ESTD. 1988</span>
            <span aria-hidden="true" className="text-[#8C6D46]/40">·</span>
            <span>GUWAHATI, ASSAM</span>
            <span aria-hidden="true" className="text-[#8C6D46]/40">·</span>
            <span className="text-[#0F281E]">TRADITIONAL AYURVEDIC PHARMACY</span>
          </div>

          <div className="text-xs text-[#526359] font-serif italic flex items-center gap-2">
            <span>Traditional Indian Herbal Medicine & Wellness Retailer</span>
          </div>
        </div>

        {/* Asymmetrical Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & Practical CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Classical Sanskrit Proverb */}
              <div className="text-xs tracking-[0.16em] uppercase text-[#B4533C] font-semibold mb-3 flex items-center gap-2">
                <span>सर्वे सन्तु निरामयाः</span>
                <span className="text-[11px] text-[#7A604A] font-normal normal-case italic font-serif">
                  — May all be free from illness
                </span>
              </div>

              {/* Central Headline */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#0F281E] leading-[1.08] tracking-tight">
                Ancient wisdom.
                <br />
                <span className="font-normal italic text-[#234A38]">Rooted in trust</span>
                <br />
                <span className="font-serif font-semibold text-[#B4533C]">since 1988.</span>
              </h1>

              {/* Grounded, Truthful Sub-headline */}
              <p className="mt-5 text-base sm:text-lg text-[#3E4D44] max-w-xl font-normal leading-relaxed">
                Serving customers in Guwahati, Assam for nearly four decades. Lohia Ayurvedic Pharmacy
                provides traditional Ayurvedic medicines, pure single herbs, classical oils, and botanical
                wellness preparations rooted in time-tested knowledge.
              </p>

              {/* Practical Pharmacy CTAs */}
              <div className="mt-8 sm:mt-9 flex flex-wrap items-center gap-4">
                <button
                  onClick={onExploreProducts}
                  className="px-6 py-3.5 bg-[#0F281E] hover:bg-[#183F30] text-[#FAF7F2] text-xs uppercase tracking-[0.16em] font-semibold transition-all border border-[#C5A572]/50 shadow-xs flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#8C6D46] group"
                >
                  <span>Explore Products</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#C5A572] group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
                </button>

                <button
                  onClick={onVisitStore}
                  className="px-6 py-3.5 bg-transparent hover:bg-[#F4EFE6] text-[#0F281E] text-xs uppercase tracking-[0.16em] font-semibold transition-all border border-[#0F281E]/30 hover:border-[#0F281E] flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#8C6D46] group"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#8C6D46]" aria-hidden="true" />
                  <span>Visit Store</span>
                </button>

                <button
                  onClick={onOpenPrescription}
                  className="text-xs uppercase tracking-[0.12em] font-semibold text-[#B4533C] hover:text-[#9E422C] underline underline-offset-4 py-2 px-1 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B4533C]"
                >
                  Enquire About Medicines →
                </button>
              </div>
            </div>

            {/* Grounded Truthful Key Points (No fabricated counts or certifications) */}
            <div className="mt-10 pt-6 border-t border-[#0F281E]/10 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-normal text-[#0F281E]">1988</span>
                <span className="block text-[11px] tracking-wider uppercase text-[#6B7C72] mt-0.5">Established in Guwahati</span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-normal text-[#0F281E]">Retail</span>
                <span className="block text-[11px] tracking-wider uppercase text-[#6B7C72] mt-0.5">Ayurvedic Pharmacy</span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-normal text-[#0F281E]">Traditional</span>
                <span className="block text-[11px] tracking-wider uppercase text-[#6B7C72] mt-0.5">Classical Formulations</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Editorial Botanical Composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="border border-[#0F281E]/15 bg-[#EFE9DE] p-2.5 shadow-xs">
              <div className="relative aspect-[4/5] overflow-hidden image-editorial-wrap">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=85"
                  alt="Traditional Ayurvedic dried botanicals, brass utensils, and herbs"
                  width="1000"
                  height="1250"
                  className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.02]"
                />
                {/* Botanical Label Overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#0E241B]/95 text-[#FAF7F2] p-3 border border-[#C5A572]/30">
                  <div className="flex items-center justify-between text-[10px] tracking-[0.18em] uppercase text-[#C5A572]">
                    <span>Traditional Botanical Archive</span>
                    <span>Guwahati, Assam</span>
                  </div>
                  <div className="font-serif text-base mt-1 text-[#FAF7F2]">
                    Medicinal Herbs & Classical Formulations
                  </div>
                  <div className="text-[11px] text-[#C4D0C9] mt-0.5 font-light">
                    Serving the local community with authentic Ayurvedic preparations since 1988.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

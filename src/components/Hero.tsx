import React from 'react';
import { ArrowDown, ArrowUpRight, Compass, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreAyurveda: () => void;
  onDiscoverLohia: () => void;
  onOpenPrescription: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreAyurveda,
  onDiscoverLohia,
  onOpenPrescription,
}) => {
  return (
    <section id="hero" className="relative bg-[#FAF7F2] overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-28">
      {/* Background Subtle Watermark Pattern (Sacred Geometry / Botanical Leaf Grain) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none flex items-center justify-center">
        <svg viewBox="0 0 1000 1000" className="w-[1200px] h-[1200px]" fill="none" stroke="#0F281E" strokeWidth="1">
          <circle cx="500" cy="500" r="450" />
          <circle cx="500" cy="500" r="320" />
          <circle cx="500" cy="500" r="180" />
          <polygon points="500,50 890,725 110,725" />
          <polygon points="500,950 110,275 890,275" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Eyebrow & Provenance */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#0F281E]/10">
          <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-semibold text-[#8C6D46]">
            <span>ESTD. 1988</span>
            <span aria-hidden="true" className="text-[#8C6D46]/40">·</span>
            <span>GUWAHATI, ASSAM</span>
            <span aria-hidden="true" className="text-[#8C6D46]/40">·</span>
            <span className="text-[#0F281E]">SHASTRIYA AYURVEDA</span>
          </div>

          <div className="text-xs text-[#526359] font-serif italic flex items-center gap-2">
            <span>Brahmaputra Valley Botanical Apothecary</span>
            <span aria-hidden="true">·</span>
            <span>Classical Pharmacopoeia</span>
          </div>
        </div>

        {/* Asymmetrical Editorial Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col justify-between pt-2">
            <div>
              {/* Sanskrit invocation */}
              <div className="text-xs tracking-[0.18em] uppercase text-[#B4533C] font-semibold mb-4 flex items-center gap-2">
                <span>सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः</span>
                <span className="w-8 h-[1px] bg-[#B4533C]/40 inline-block"></span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#0F281E] leading-[1.08] tracking-tight">
                Ancient wisdom.
                <br />
                <span className="font-normal italic text-[#234A38]">Rooted in trust</span>
                <br />
                <span className="font-serif font-semibold text-[#B4533C]">since 1988.</span>
              </h1>

              {/* Editorial Sub-headline */}
              <p className="mt-6 text-base sm:text-lg text-[#3E4D44] max-w-xl font-normal leading-relaxed">
                For thirty-eight uninterrupted years in Guwahati, Lohia Ayurvedic Pharmacy has safeguarded
                the unadulterated integrity of classical Ayurvedic medicines. From wildcrafted roots of
                the Assam hills to time-honored slow decoctions, we serve those who seek genuine healing.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                <button
                  onClick={onExploreAyurveda}
                  className="px-7 py-3.5 bg-[#0F281E] hover:bg-[#183F30] text-[#FAF7F2] text-xs uppercase tracking-[0.18em] font-semibold transition-all border border-[#C5A572]/50 shadow-sm flex items-center gap-2 cursor-pointer group"
                >
                  <span>Explore Ayurveda</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#C5A572] group-hover:translate-y-0.5 transition-transform" />
                </button>

                <button
                  onClick={onDiscoverLohia}
                  className="px-7 py-3.5 bg-transparent hover:bg-[#FAF7F2] text-[#0F281E] text-xs uppercase tracking-[0.18em] font-semibold transition-all border border-[#0F281E]/30 hover:border-[#0F281E] flex items-center gap-2 cursor-pointer group"
                >
                  <span>Discover Lohia</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8C6D46] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <button
                  onClick={onOpenPrescription}
                  className="text-xs uppercase tracking-[0.14em] font-semibold text-[#B4533C] hover:text-[#9E422C] underline underline-offset-4 py-2 px-1 transition-colors"
                >
                  Upload Prescription / Vaidya Advice →
                </button>
              </div>
            </div>

            {/* Quiet Editorial Footnotes / Trust Markers */}
            <div className="mt-12 pt-8 border-t border-[#0F281E]/10 grid grid-cols-3 gap-6">
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-normal text-[#0F281E]">1988</span>
                <span className="block text-[11px] tracking-wider uppercase text-[#6B7C72] mt-0.5">Founding Lineage</span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-normal text-[#0F281E]">450+</span>
                <span className="block text-[11px] tracking-wider uppercase text-[#6B7C72] mt-0.5">Classical Formulations</span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-normal text-[#0F281E]">100%</span>
                <span className="block text-[11px] tracking-wider uppercase text-[#6B7C72] mt-0.5">Authentic Shastriya</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Botanical Diptych with Specimen Notes */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Main Primary Image */}
            <div className="relative border border-[#0F281E]/15 bg-[#EFE9DE] p-2.5 shadow-sm">
              <div className="relative aspect-[4/5] overflow-hidden image-editorial-wrap">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=85"
                  alt="Ayurvedic dried botanical roots, brass mortar, and restorative herbs at Lohia Pharmacy"
                  className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.03]"
                />
                {/* Botanical Label Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0E241B]/90 backdrop-blur-xs text-[#FAF7F2] p-3 border border-[#C5A572]/30">
                  <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#C5A572]">
                    <span>Plate No. 01 / Botanical Sourcing</span>
                    <span>Guwahati Dispensary</span>
                  </div>
                  <div className="font-serif text-base sm:text-lg mt-1 text-[#FAF7F2]">
                    Himalayan Roots & Brahmaputra Flora
                  </div>
                  <div className="text-[11px] text-[#C4D0C9] mt-0.5 font-light">
                    Hand-inspected Withania somnifera, Curcuma longa & Classical decoction herbs.
                  </div>
                </div>
              </div>

              {/* Antique Seal Stamp */}
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-[#B4533C] text-[#FAF7F2] flex flex-col items-center justify-center text-center border-2 border-[#FAF7F2] shadow-md transform rotate-12">
                <span className="text-[9px] uppercase tracking-widest font-semibold">SINCE</span>
                <span className="font-serif text-sm font-bold leading-none">1988</span>
                <span className="text-[8px] uppercase tracking-tighter">ASSAM</span>
              </div>
            </div>

            {/* Asymmetric Overlapping Secondary Inset */}
            <div className="hidden sm:block absolute -bottom-8 -left-10 w-48 border border-[#0F281E]/20 bg-[#FAF7F2] p-2 shadow-lg">
              <div className="aspect-square overflow-hidden mb-2">
                <img
                  src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=85"
                  alt="Ayurvedic classical medicated oil preparation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[10px] tracking-wider uppercase text-[#8C6D46] font-semibold">
                Siddha Tailas
              </div>
              <div className="text-[11px] text-[#2C3831] font-serif italic">
                3-Day Slow Copper Simmer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useEffect } from 'react';
import { Herb } from '../types';
import { X, Sun, Moon, Info } from 'lucide-react';

interface HerbDetailModalProps {
  herb: Herb | null;
  onClose: () => void;
}

export const HerbDetailModal: React.FC<HerbDetailModalProps> = ({ herb, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (herb) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [herb, onClose]);

  if (!herb) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="herb-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#08150E]/80 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#FAF7F2] border border-[#C5A572]/40 shadow-2xl my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#0E241B] text-[#FAF7F2] px-5 sm:px-6 py-4 flex items-center justify-between border-b border-[#C5A572]/30">
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg text-[#C5A572]">{herb.devanagari}</span>
            <span className="text-[#C5A572]/40" aria-hidden="true">/</span>
            <span className="text-xs uppercase tracking-[0.16em] text-[#EFE8DC]">
              Traditional Botanical Monograph
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#C4D0C9] hover:text-[#FAF7F2] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C5A572] rounded-xs"
            aria-label="Close botanical monograph"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 max-h-[78vh] overflow-y-auto">
          {/* Traditional Knowledge Advisory Notice */}
          <div className="mb-6 p-3.5 bg-[#F4EFE6] border-l-3 border-[#8C6D46] text-xs text-[#4F5E55] flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#8C6D46] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong className="text-[#0F281E]">Traditional Knowledge Context:</strong> The properties described below are derived from classical Ayurvedic texts (Dravya Guna Shastra) for educational and cultural appreciation. They do not constitute modern pharmacological or medical claims. Consult a licensed medical practitioner for health concerns.
            </div>
          </div>

          {/* Title & Botanical Taxonomy */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-6 border-b border-[#0F281E]/10">
            <div className="md:col-span-8">
              <div className="text-xs uppercase tracking-widest text-[#B4533C] font-semibold">
                {herb.family} Botanical Family
              </div>
              <h2 id="herb-modal-title" className="font-serif text-3xl sm:text-4xl text-[#0F281E] mt-1 font-medium">
                {herb.sanskritName}
              </h2>
              <div className="text-sm font-serif italic text-[#6B7C72] mt-0.5">
                {herb.botanicalName} ({herb.commonName})
              </div>
              <p className="mt-3 text-sm text-[#415046] leading-relaxed">
                {herb.summary}
              </p>
            </div>

            <div className="md:col-span-4 bg-[#F4EFE6] p-4 border border-[#0F281E]/10">
              <div className="text-[11px] uppercase tracking-wider text-[#8C6D46] font-semibold mb-2">
                Habitat & Traditional Provenance
              </div>
              <div className="text-xs text-[#2C3831] leading-relaxed">
                {herb.origin}
              </div>
              <div className="mt-3 text-[11px] text-[#6A7A70] italic">
                {herb.harvestingNotes}
              </div>
            </div>
          </div>

          {/* Ayurvedic Energetics Matrix */}
          <div className="py-6 border-b border-[#0F281E]/10">
            <div className="text-xs uppercase tracking-[0.16em] text-[#8C6D46] font-semibold mb-4">
              Classical Ayurvedic Energetics (Dravya Guna)
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="bg-[#FAF7F2] p-3 border border-[#0F281E]/10">
                <div className="text-[10px] uppercase tracking-wider text-[#6B7C72]">Rasa (Tastes)</div>
                <div className="text-xs font-serif font-medium text-[#0F281E] mt-1">
                  {herb.rasa.join(', ')}
                </div>
              </div>

              <div className="bg-[#FAF7F2] p-3 border border-[#0F281E]/10">
                <div className="text-[10px] uppercase tracking-wider text-[#6B7C72]">Virya (Potency)</div>
                <div className="text-xs font-serif font-medium text-[#0F281E] mt-1 flex items-center gap-1.5">
                  {herb.virya.includes('Warm') || herb.virya.includes('Heating') ? (
                    <Sun className="w-3.5 h-3.5 text-[#B4533C]" aria-hidden="true" />
                  ) : (
                    <Moon className="w-3.5 h-3.5 text-[#2A5A46]" aria-hidden="true" />
                  )}
                  <span>{herb.virya}</span>
                </div>
              </div>

              <div className="bg-[#FAF7F2] p-3 border border-[#0F281E]/10">
                <div className="text-[10px] uppercase tracking-wider text-[#6B7C72]">Vipaka (Post-Digestive)</div>
                <div className="text-xs font-serif font-medium text-[#0F281E] mt-1">
                  {herb.vipaka} Vipaka
                </div>
              </div>

              <div className="bg-[#FAF7F2] p-3 border border-[#0F281E]/10">
                <div className="text-[10px] uppercase tracking-wider text-[#6B7C72]">Dosha Modulation</div>
                <div className="text-[11px] text-[#0F281E] mt-1 space-y-0.5">
                  <div>Vata: <span className="font-medium">{herb.doshaBalancing.vata}</span></div>
                  <div>Pitta: <span className="font-medium">{herb.doshaBalancing.pitta}</span></div>
                  <div>Kapha: <span className="font-medium">{herb.doshaBalancing.kapha}</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Classical Shloka */}
          <div className="my-6 bg-[#0E241B] text-[#FAF7F2] p-4 sm:p-5 border-l-4 border-[#C5A572]">
            <div className="text-[10px] uppercase tracking-[0.18em] text-[#C5A572] mb-1">
              Traditional Textual Citation
            </div>
            <div className="font-serif text-base sm:text-lg italic text-[#F4EFE6] leading-relaxed">
              {herb.classicalCitation}
            </div>
          </div>

          {/* Traditional Uses & Classical Preparations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-[#8C6D46] font-semibold mb-3">
                Traditional Ayurvedic Attributes
              </div>
              <ul className="space-y-2">
                {herb.keyBenefits.map((benefit, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[#3E4E44] flex items-start gap-2">
                    <span className="text-[#8C6D46] mt-0.5" aria-hidden="true">✦</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-[#8C6D46] font-semibold mb-3">
                Traditional Preparation Forms (Kalpanas)
              </div>
              <div className="space-y-2.5">
                {herb.traditionalPreparations.map((prep, i) => (
                  <div key={i} className="bg-[#F4EFE6] p-2.5 border border-[#0F281E]/08">
                    <div className="text-xs font-serif font-semibold text-[#0F281E]">
                      {prep.type}
                    </div>
                    <div className="text-xs text-[#526359] mt-0.5">
                      {prep.details}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#F4EFE6] px-5 sm:px-6 py-4 border-t border-[#0F281E]/10 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#6A7B71] italic font-serif">
            Lohia Ayurvedic Pharmacy Botanical Compendium · Educational Resource
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#0F281E] text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold hover:bg-[#193F2F] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
          >
            Close Monograph
          </button>
        </div>
      </div>
    </div>
  );
};

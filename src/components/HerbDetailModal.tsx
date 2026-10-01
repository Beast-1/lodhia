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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[oklch(0.16_0.029_146_/_0.85)] backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[var(--ivory)] border border-[var(--border)] shadow-2xl my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[var(--primary)] text-[var(--ivory)] px-6 py-4 flex items-center justify-between border-b border-[var(--gold)]/30">
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-display)] text-xl text-[var(--gold)] font-medium">{herb.devanagari}</span>
            <span className="text-[var(--gold)]/40" aria-hidden="true">/</span>
            <span className="text-xs uppercase tracking-[0.16em] text-[var(--ivory)]/90">
              Traditional Botanical Monograph
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[var(--ivory)]/70 hover:text-[var(--ivory)] transition-colors cursor-pointer bg-transparent border-none"
            aria-label="Close botanical monograph"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[78vh] overflow-y-auto bg-[var(--ivory)]">
          {/* Traditional Knowledge Notice */}
          <div className="mb-6 p-3.5 bg-[var(--accent)]/30 border-l-3 border-[var(--terracotta)] text-xs text-[var(--foreground)] flex items-start gap-2.5">
            <Info size={16} className="text-[var(--terracotta)] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong>Traditional Knowledge Context:</strong> The botanical properties described below are sourced from classical Ayurvedic texts (Dravya Guna Shastra) for educational and cultural appreciation. They do not constitute modern pharmacological or medical claims.
            </div>
          </div>

          {/* Title & Taxonomy */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-6 border-b border-[var(--border)]">
            <div className="md:col-span-8">
              <div className="text-xs uppercase tracking-widest text-[var(--terracotta)] font-bold">
                {herb.family} Botanical Family
              </div>
              <h2 id="herb-modal-title" className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-[var(--foreground)] mt-1 font-medium m-0">
                {herb.sanskritName}
              </h2>
              <div className="text-sm font-serif italic text-[var(--olive)] mt-0.5">
                {herb.botanicalName} ({herb.commonName})
              </div>
              <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
                {herb.summary}
              </p>
            </div>

            <div className="md:col-span-4 bg-[var(--background)] p-4 border border-[var(--border)]">
              <div className="text-[11px] uppercase tracking-wider text-[var(--olive)] font-bold mb-2">
                Habitat & Traditional Provenance
              </div>
              <div className="text-xs text-[var(--foreground)] leading-relaxed">
                {herb.origin}
              </div>
              <div className="mt-2.5 text-[11px] text-[var(--muted-foreground)] italic">
                {herb.harvestingNotes}
              </div>
            </div>
          </div>

          {/* Classical Energetics */}
          <div className="py-6 border-b border-[var(--border)]">
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--olive)] font-bold mb-3">
              Classical Ayurvedic Energetics (Dravya Guna)
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-[var(--background)] p-3 border border-[var(--border)]">
                <div className="text-[10px] uppercase tracking-wider text-[var(--muted-foreground)]">Rasa (Tastes)</div>
                <div className="text-xs font-[family-name:var(--font-display)] font-semibold text-[var(--foreground)] mt-1">
                  {herb.rasa.join(', ')}
                </div>
              </div>

              <div className="bg-[var(--background)] p-3 border border-[var(--border)]">
                <div className="text-[10px] uppercase tracking-wider text-[var(--muted-foreground)]">Virya (Potency)</div>
                <div className="text-xs font-[family-name:var(--font-display)] font-semibold text-[var(--foreground)] mt-1 flex items-center gap-1.5">
                  {herb.virya.includes('Warm') || herb.virya.includes('Heating') ? (
                    <Sun size={14} className="text-[var(--terracotta)]" aria-hidden="true" />
                  ) : (
                    <Moon size={14} className="text-[var(--olive)]" aria-hidden="true" />
                  )}
                  <span>{herb.virya}</span>
                </div>
              </div>

              <div className="bg-[var(--background)] p-3 border border-[var(--border)]">
                <div className="text-[10px] uppercase tracking-wider text-[var(--muted-foreground)]">Vipaka (Post-Digestive)</div>
                <div className="text-xs font-[family-name:var(--font-display)] font-semibold text-[var(--foreground)] mt-1">
                  {herb.vipaka}
                </div>
              </div>

              <div className="bg-[var(--background)] p-3 border border-[var(--border)]">
                <div className="text-[10px] uppercase tracking-wider text-[var(--muted-foreground)]">Dosha Balance</div>
                <div className="text-[11px] text-[var(--foreground)] mt-1 space-y-0.5">
                  <div>Vata: <span className="font-semibold">{herb.doshaBalancing.vata}</span></div>
                  <div>Pitta: <span className="font-semibold">{herb.doshaBalancing.pitta}</span></div>
                  <div>Kapha: <span className="font-semibold">{herb.doshaBalancing.kapha}</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Classical Shloka */}
          <div className="my-6 bg-[var(--primary)] text-[var(--ivory)] p-5 border-l-4 border-[var(--gold)]">
            <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--gold)] mb-1 font-bold">
              Traditional Textual Citation
            </div>
            <div className="font-[family-name:var(--font-display)] text-base sm:text-lg italic text-[var(--ivory)] leading-relaxed">
              {herb.classicalCitation}
            </div>
          </div>

          {/* Traditional Uses & Preparations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-[var(--olive)] font-bold mb-3">
                Traditional Ayurvedic Attributes
              </div>
              <ul className="space-y-2 p-0 m-0 list-none">
                {herb.keyBenefits.map((benefit, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[var(--foreground)] flex items-start gap-2">
                    <span className="text-[var(--terracotta)] mt-0.5" aria-hidden="true">✦</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-[var(--olive)] font-bold mb-3">
                Traditional Preparation Forms (Kalpanas)
              </div>
              <div className="space-y-2.5">
                {herb.traditionalPreparations.map((prep, i) => (
                  <div key={i} className="bg-[var(--background)] p-2.5 border border-[var(--border)]">
                    <div className="text-xs font-[family-name:var(--font-display)] font-semibold text-[var(--foreground)]">
                      {prep.type}
                    </div>
                    <div className="text-xs text-[var(--muted-foreground)] mt-0.5">
                      {prep.details}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[var(--background)] px-6 py-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[var(--muted-foreground)] italic font-serif">
            Lohia Ayurvedic Pharmacy Botanical Compendium · Educational Resource
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-[var(--primary)] text-[var(--ivory)] text-xs uppercase tracking-widest font-semibold hover:bg-[var(--primary)]/90 transition-colors cursor-pointer border-none"
          >
            Close Monograph
          </button>
        </div>
      </div>
    </div>
  );
};

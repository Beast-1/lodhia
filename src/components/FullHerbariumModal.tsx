import React, { useState, useEffect } from 'react';
import { X, Search, BookOpen, ArrowUpRight, Info, Leaf } from 'lucide-react';
import { HERBS_DATA } from '../data/herbsData';
import { Herb } from '../types';

interface FullHerbariumModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectHerb: (herb: Herb) => void;
}

export const FullHerbariumModal: React.FC<FullHerbariumModalProps> = ({
  isOpen,
  onClose,
  onSelectHerb,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [doshaFilter, setDoshaFilter] = useState<'all' | 'vata' | 'pitta' | 'kapha'>('all');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredHerbs = HERBS_DATA.filter((herb) => {
    const matchesSearch =
      herb.sanskritName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      herb.botanicalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      herb.commonName.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;
    if (doshaFilter === 'all') return true;
    if (doshaFilter === 'vata') return herb.doshaBalancing.vata === 'Pacifies';
    if (doshaFilter === 'pitta') return herb.doshaBalancing.pitta === 'Pacifies';
    if (doshaFilter === 'kapha') return herb.doshaBalancing.kapha === 'Pacifies';
    return true;
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="herbarium-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[oklch(0.16_0.029_146_/_0.85)] backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[var(--ivory)] border border-[var(--border)] shadow-2xl my-6 overflow-hidden flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[var(--primary)] text-[var(--ivory)] px-6 py-5 flex items-center justify-between border-b border-[var(--gold)]/30">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold)] font-bold">
              LOHIA AYURVEDIC PHARMACY · BOTANICAL COMPENDIUM
            </div>
            <h2 id="herbarium-title" className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-[var(--ivory)] font-normal m-0 mt-0.5">
              The Living Herbarium
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[var(--ivory)]/70 hover:text-[var(--ivory)] transition-colors cursor-pointer bg-transparent border-none"
            aria-label="Close herbarium"
          >
            <X size={22} />
          </button>
        </div>

        {/* Filter bar */}
        <div className="p-5 sm:p-6 bg-[var(--background)] border-b border-[var(--border)] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 p-1 bg-[var(--ivory)] border border-[var(--border)]">
            {(['all', 'vata', 'pitta', 'kapha'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setDoshaFilter(filter)}
                className={`px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors cursor-pointer border-none ${
                  doshaFilter === filter
                    ? 'bg-[var(--primary)] text-[var(--ivory)]'
                    : 'bg-transparent text-[var(--foreground)] hover:text-[var(--olive)]'
                }`}
              >
                {filter === 'all' ? 'All Flora' : `${filter} dosha`}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search botanical name or Sanskrit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64 text-xs px-3.5 py-2 bg-[var(--ivory)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--olive)]"
            />
            <Search size={14} className="text-[var(--muted-foreground)] absolute right-3 top-2.5 pointer-events-none" />
          </div>
        </div>

        {/* Traditional Knowledge Notice */}
        <div className="px-6 py-2.5 bg-[var(--accent)]/30 border-b border-[var(--border)] text-[11px] text-[var(--foreground)] flex items-center gap-2">
          <Info size={14} className="text-[var(--terracotta)] shrink-0" />
          <span>
            Botanical attributes are derived from classical Ayurvedic texts (Dravya Guna) for educational appreciation and cultural preservation.
          </span>
        </div>

        {/* Grid of Herb Cards */}
        <div className="p-6 overflow-y-auto flex-1 bg-[var(--ivory)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHerbs.map((herb) => (
              <div
                key={herb.id}
                className="border border-[var(--border)] bg-[var(--background)] p-4 flex flex-col justify-between hover:border-[var(--olive)] transition-colors group cursor-pointer"
                onClick={() => onSelectHerb(herb)}
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden border border-[var(--border)] mb-3 bg-[var(--muted)]">
                    <img
                      src={herb.imageUrl}
                      alt={herb.sanskritName}
                      width={400}
                      height={300}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-[var(--terracotta)] uppercase tracking-wider font-bold mb-1">
                    <span>{herb.family}</span>
                    <span className="text-[var(--olive)] font-serif italic normal-case">{herb.devanagari}</span>
                  </div>

                  <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--foreground)] font-medium m-0 leading-tight">
                    {herb.sanskritName}
                  </h3>
                  <div className="text-xs text-[var(--muted-foreground)] font-serif italic mt-0.5">
                    {herb.botanicalName}
                  </div>

                  <p className="text-xs text-[var(--muted-foreground)] mt-2.5 line-clamp-3 leading-relaxed">
                    {herb.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs">
                  <span className="text-[var(--foreground)] font-semibold flex items-center gap-1 group-hover:text-[var(--terracotta)] transition-colors">
                    <span>Inspect Monograph</span>
                    <ArrowUpRight size={14} />
                  </span>
                  <span className="text-[11px] text-[var(--olive)] font-medium">
                    {herb.virya.split(' ')[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-[var(--background)] border-t border-[var(--border)] flex items-center justify-between text-xs">
          <span className="text-[var(--muted-foreground)] italic font-serif">
            Lohia Botanical Archives · Guwahati, Assam
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[var(--primary)] text-[var(--ivory)] text-[11px] uppercase tracking-widest font-semibold cursor-pointer border-none"
          >
            Close Herbarium
          </button>
        </div>
      </div>
    </div>
  );
};

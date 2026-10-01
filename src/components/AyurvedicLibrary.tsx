import React, { useState } from 'react';
import { HERBS_DATA } from '../data/herbsData';
import { Herb } from '../types';
import { HerbDetailModal } from './HerbDetailModal';
import { BookOpen, Search, Leaf, Info } from 'lucide-react';

export const AyurvedicLibrary: React.FC = () => {
  const [selectedHerbId, setSelectedHerbId] = useState<string>('ashwagandha');
  const [modalHerb, setModalHerb] = useState<Herb | null>(null);
  const [doshaFilter, setDoshaFilter] = useState<'all' | 'vata' | 'pitta' | 'kapha'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const currentHerb = HERBS_DATA.find((h) => h.id === selectedHerbId) || HERBS_DATA[0];

  // Filtering herbs
  const filteredHerbs = HERBS_DATA.filter((herb) => {
    const matchesSearch =
      herb.sanskritName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      herb.botanicalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      herb.commonName.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;
    if (doshaFilter === 'all') return true;
    if (doshaFilter === 'vata') return herb.doshaBalancing.vata === 'Pacifies';
    if (doshaFilter === 'pitta') return herb.doshaBalancing.pitta === 'Pacifies';
    if (doshaFilter === 'kapha') return herb.doshaBalancing.kapha === 'Pacifies';
    return true;
  });

  return (
    <section id="library" className="py-18 lg:py-24 bg-[#FAF7F2] border-b border-[#0F281E]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 border-b border-[#0F281E]/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-semibold text-[#B4533C] mb-2.5">
              <span>TRADITIONAL BOTANICAL COMPENDIUM</span>
              <span aria-hidden="true" className="text-[#B4533C]/40">/</span>
              <span>EDUCATIONAL ARCHIVE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#0F281E] leading-[1.12]">
              The Ayurvedic Library
            </h2>

            <p className="mt-2.5 text-sm sm:text-base text-[#4E5E54] max-w-xl">
              An educational compendium exploring traditional Ayurvedic medicinal plants, classical tastes (Rasa), post-digestive effects (Vipaka), and traditional preparations documented in historical Shastras.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <label htmlFor="herb-search-input" className="sr-only">Search botanical herb</label>
              <input
                id="herb-search-input"
                type="text"
                placeholder="Search herb or binomial..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-56 text-xs px-3 py-2.5 bg-[#F4EFE6] border border-[#0F281E]/20 text-[#0F281E] placeholder:text-[#8C9B92] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
              />
              <Search className="w-3.5 h-3.5 text-[#8C9B92] absolute right-3 top-3 pointer-events-none" aria-hidden="true" />
            </div>

            <div className="flex items-center p-1 bg-[#F4EFE6] border border-[#0F281E]/15 text-xs">
              {(['all', 'vata', 'pitta', 'kapha'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setDoshaFilter(filter)}
                  className={`px-3 py-1.5 font-medium transition-colors cursor-pointer capitalize focus-visible:ring-2 focus-visible:ring-[#8C6D46] ${
                    doshaFilter === filter
                      ? 'bg-[#0F281E] text-[#FAF7F2]'
                      : 'text-[#4A5A50] hover:text-[#0F281E]'
                  }`}
                >
                  {filter === 'all' ? 'All' : filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Traditional Knowledge Disclaimer Banner */}
        <div className="mb-10 p-3.5 bg-[#F4EFE6] border border-[#0F281E]/10 flex items-start gap-2.5 text-xs text-[#526359]">
          <Info className="w-4 h-4 text-[#8C6D46] shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            <strong>Educational Notice:</strong> Botanical information is cataloged from classical Ayurvedic texts (e.g. <em>Charaka Samhita</em>, <em>Bhava Prakasha</em>) for cultural and traditional preservation. These are traditional concepts and not modern medical claims. Please consult a qualified doctor for health concerns.
          </span>
        </div>

        {/* Botanical Herbarium Plate Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Specimen Index Rail (Left on desktop) */}
          <div className="lg:col-span-4 flex flex-col gap-2 order-2 lg:order-1">
            <div className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#8C6D46] px-1 pb-1">
              Select Botanical Herb:
            </div>

            <div className="space-y-2">
              {filteredHerbs.map((herb) => {
                const isSelected = herb.id === currentHerb.id;
                return (
                  <button
                    key={herb.id}
                    onClick={() => setSelectedHerbId(herb.id)}
                    className={`w-full text-left p-3.5 transition-all border flex items-center justify-between cursor-pointer focus-visible:ring-2 focus-visible:ring-[#8C6D46] ${
                      isSelected
                        ? 'bg-[#0F281E] text-[#FAF7F2] border-[#0F281E] shadow-xs'
                        : 'bg-[#F4EFE6] text-[#2C3831] border-[#0F281E]/10 hover:border-[#8C6D46] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`font-serif text-base font-medium ${isSelected ? 'text-[#FAF7F2]' : 'text-[#0F281E]'}`}>
                          {herb.sanskritName}
                        </span>
                        <span className={`text-xs font-serif ${isSelected ? 'text-[#C5A572]' : 'text-[#8C6D46]'}`}>
                          ({herb.devanagari})
                        </span>
                      </div>
                      <div className={`text-[11px] italic font-serif mt-0.5 ${isSelected ? 'text-[#C4D0C9]' : 'text-[#6A7B71]'}`}>
                        {herb.botanicalName}
                      </div>
                    </div>

                    <div className="text-right">
                      <span className={`text-[10px] uppercase tracking-wider block ${isSelected ? 'text-[#C5A572]' : 'text-[#8C6D46]'}`}>
                        {herb.family}
                      </span>
                      <span className="text-[10px] opacity-75">
                        {herb.virya.split(' ')[0]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 p-4 bg-[#F4EFE6] border border-[#0F281E]/10">
              <div className="flex items-center gap-2 text-xs font-serif italic text-[#8C6D46]">
                <Leaf className="w-4 h-4 text-[#2A5A46]" aria-hidden="true" />
                <span>Regional Ayurvedic Flora Documentation</span>
              </div>
              <p className="mt-1 text-[11px] text-[#55645B] leading-relaxed">
                Documenting indigenous botanicals of Northeast India and classical Ayurvedic texts for educational preservation.
              </p>
            </div>
          </div>

          {/* Focal Herbarium Specimen Plate */}
          <div className="lg:col-span-8 order-1 lg:order-2 border border-[#0F281E]/20 bg-[#FAF7F2] p-5 sm:p-7 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-7 items-center">
              {/* Botanical Specimen Image */}
              <div className="md:col-span-5 relative">
                <div className="aspect-[3/4] overflow-hidden border border-[#0F281E]/15 bg-[#EFE9DF] image-editorial-wrap">
                  <img
                    src={currentHerb.imageUrl}
                    alt={`${currentHerb.sanskritName} botanical specimen`}
                    width="600"
                    height="800"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#0F281E]/90 text-[#FAF7F2] text-[10px] tracking-widest uppercase px-2 py-0.5 font-mono">
                    HERBARIUM REF #{currentHerb.id.toUpperCase()}
                  </div>
                </div>
              </div>

              {/* Herb Botanical Information */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#B4533C] font-semibold tracking-widest uppercase">
                    <span>{currentHerb.devanagari}</span>
                    <span aria-hidden="true">·</span>
                    <span>{currentHerb.family}</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#0F281E] mt-1 font-medium">
                    {currentHerb.sanskritName}
                  </h3>

                  <div className="text-sm font-serif italic text-[#6B7B71] mt-0.5">
                    {currentHerb.botanicalName} — {currentHerb.commonName}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-[#3E4E44] leading-relaxed">
                    {currentHerb.summary}
                  </p>

                  {/* Classical Energetics */}
                  <div className="mt-4 pt-3.5 border-t border-[#0F281E]/10 grid grid-cols-3 gap-2.5 text-xs">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#8C6D46]">Rasa (Taste)</span>
                      <span className="font-serif text-[#0F281E] font-medium leading-tight text-xs">
                        {currentHerb.rasa[0]}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#8C6D46]">Virya (Potency)</span>
                      <span className="font-serif text-[#0F281E] font-medium leading-tight text-xs">
                        {currentHerb.virya}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#8C6D46]">Dosha Influence</span>
                      <span className="font-serif text-[#0F281E] font-medium leading-tight text-xs">
                        Vata {currentHerb.doshaBalancing.vata}
                      </span>
                    </div>
                  </div>

                  {/* Classical Shloka Quote */}
                  <div className="mt-4 p-3 bg-[#F4EFE6] border-l-2 border-[#8C6D46] text-xs font-serif italic text-[#4A5A50] leading-snug">
                    {currentHerb.classicalCitation}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#0F281E]/10 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setModalHerb(currentHerb)}
                    className="px-5 py-2.5 bg-[#0F281E] hover:bg-[#183F2F] text-[#FAF7F2] text-xs uppercase tracking-[0.14em] font-semibold transition-all flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#C5A572]" aria-hidden="true" />
                    <span>View Monograph & Shloka</span>
                  </button>

                  <span className="text-xs text-[#7B8B82] font-serif italic">
                    Traditional Indian Herbalism Archive
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Botanical Volumes Note */}
        <div className="pt-8 border-t border-[#0F281E]/15">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <span className="text-xs uppercase tracking-[0.18em] text-[#8C6D46] font-semibold">
              BOTANICAL ARCHIVES & FUTURE COMPILATIONS
            </span>
            <span className="text-xs font-serif italic text-[#6B7C72]">
              Educational material in continuous development
            </span>
          </div>
          <p className="text-xs text-[#526359] leading-relaxed max-w-3xl">
            This library is designed as an expanding educational portal for the study of Indian medicinal plants, including regional species of the Brahmaputra valley and classical formulations. Content is reviewed alongside traditional texts for cultural and historical accuracy.
          </p>
        </div>
      </div>

      {/* Monograph Modal */}
      {modalHerb && (
        <HerbDetailModal
          herb={modalHerb}
          onClose={() => setModalHerb(null)}
        />
      )}
    </section>
  );
};

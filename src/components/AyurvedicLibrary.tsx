import React, { useState } from 'react';
import { HERBS_DATA } from '../data/herbsData';
import { Herb } from '../types';
import { HerbDetailModal } from './HerbDetailModal';
import { BookOpen, Sparkles, Droplets, Compass, ArrowUpRight, Search, Leaf } from 'lucide-react';

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
    <section id="library" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#0F281E]/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#B4533C] mb-3">
              <span>DIGITAL BOTANICAL HERBARIUM</span>
              <span aria-hidden="true" className="text-[#B4533C]/40">/</span>
              <span>LOHIA HERBAL ARCHIVE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#0F281E] leading-[1.12]">
              The Ayurvedic Library
            </h2>

            <p className="mt-3 text-sm sm:text-base text-[#4E5E54] max-w-xl">
              An encyclopedic catalog of medicinal plants, forest barks, and sacred roots.
              Explore botanical classifications, classical tastes (Rasa), doshic affinities, and traditional preparation rituals.
            </p>
          </div>

          {/* Interactive Filter Buttons (functional button controls with distinct states) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search herb or binomial..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-56 text-xs px-3 py-2 bg-[#F4EFE6] border border-[#0F281E]/20 text-[#0F281E] placeholder:text-[#8C9B92] focus:outline-none focus:border-[#0F281E]"
              />
              <Search className="w-3.5 h-3.5 text-[#8C9B92] absolute right-3 top-2.5" />
            </div>

            <div className="flex items-center p-1 bg-[#F4EFE6] border border-[#0F281E]/15 text-xs">
              <button
                onClick={() => setDoshaFilter('all')}
                className={`px-3 py-1.5 font-medium transition-colors cursor-pointer ${
                  doshaFilter === 'all'
                    ? 'bg-[#0F281E] text-[#FAF7F2]'
                    : 'text-[#4A5A50] hover:text-[#0F281E]'
                }`}
              >
                All Flora
              </button>
              <button
                onClick={() => setDoshaFilter('vata')}
                className={`px-3 py-1.5 font-medium transition-colors cursor-pointer ${
                  doshaFilter === 'vata'
                    ? 'bg-[#0F281E] text-[#FAF7F2]'
                    : 'text-[#4A5A50] hover:text-[#0F281E]'
                }`}
              >
                Vata
              </button>
              <button
                onClick={() => setDoshaFilter('pitta')}
                className={`px-3 py-1.5 font-medium transition-colors cursor-pointer ${
                  doshaFilter === 'pitta'
                    ? 'bg-[#0F281E] text-[#FAF7F2]'
                    : 'text-[#4A5A50] hover:text-[#0F281E]'
                }`}
              >
                Pitta
              </button>
              <button
                onClick={() => setDoshaFilter('kapha')}
                className={`px-3 py-1.5 font-medium transition-colors cursor-pointer ${
                  doshaFilter === 'kapha'
                    ? 'bg-[#0F281E] text-[#FAF7F2]'
                    : 'text-[#4A5A50] hover:text-[#0F281E]'
                }`}
              >
                Kapha
              </button>
            </div>
          </div>
        </div>

        {/* Botanical Herbarium Plate Showcase (Asymmetric Luxury Presentation) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Specimen Index Rail (Left) */}
          <div className="lg:col-span-4 flex flex-col gap-2 order-2 lg:order-1">
            <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#8C6D46] px-1 pb-2">
              Select Botanical Specimen:
            </div>

            <div className="space-y-2">
              {filteredHerbs.map((herb) => {
                const isSelected = herb.id === currentHerb.id;
                return (
                  <button
                    key={herb.id}
                    onClick={() => setSelectedHerbId(herb.id)}
                    className={`w-full text-left p-3.5 transition-all border flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[#0F281E] text-[#FAF7F2] border-[#0F281E] shadow-sm'
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
                <Leaf className="w-4 h-4 text-[#2A5A46]" />
                <span>Northeast India Herbarium Ingestion</span>
              </div>
              <p className="mt-1 text-[11px] text-[#55645B] leading-relaxed">
                Over 120 indigenous Assamese botanicals are currently being documented by our Vaidyas for inclusion in the 2027 compendium.
              </p>
            </div>
          </div>

          {/* Focal Herbarium Specimen Plate (Center/Right) */}
          <div className="lg:col-span-8 order-1 lg:order-2 border border-[#0F281E]/20 bg-[#FAF7F2] p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Botanical Specimen Image */}
              <div className="md:col-span-5 relative">
                <div className="aspect-[3/4] overflow-hidden border border-[#0F281E]/15 bg-[#EFE9DF] image-editorial-wrap">
                  <img
                    src={currentHerb.imageUrl}
                    alt={currentHerb.sanskritName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#0F281E]/90 text-[#FAF7F2] text-[10px] tracking-widest uppercase px-2.5 py-1 font-mono">
                    CAT. #{currentHerb.id.toUpperCase()}
                  </div>
                </div>
              </div>

              {/* Herb Deep Botanical Information */}
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

                  <p className="mt-4 text-xs sm:text-sm text-[#3E4E44] leading-relaxed">
                    {currentHerb.summary}
                  </p>

                  {/* Classical Energetics Matrix */}
                  <div className="mt-5 pt-4 border-t border-[#0F281E]/10 grid grid-cols-3 gap-3 text-xs">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#8C6D46]">Rasa (Taste)</span>
                      <span className="font-serif text-[#0F281E] font-medium leading-tight">
                        {currentHerb.rasa[0]}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#8C6D46]">Virya (Potency)</span>
                      <span className="font-serif text-[#0F281E] font-medium leading-tight">
                        {currentHerb.virya}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#8C6D46]">Dosha Affinity</span>
                      <span className="font-serif text-[#0F281E] font-medium leading-tight">
                        Vata {currentHerb.doshaBalancing.vata}
                      </span>
                    </div>
                  </div>

                  {/* Classical Text Quote Snippet */}
                  <div className="mt-5 p-3.5 bg-[#F4EFE6] border-l-2 border-[#8C6D46] text-xs font-serif italic text-[#4A5A50] leading-snug">
                    {currentHerb.classicalCitation}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0F281E]/10 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setModalHerb(currentHerb)}
                    className="px-6 py-2.5 bg-[#0F281E] hover:bg-[#183F2F] text-[#FAF7F2] text-xs uppercase tracking-[0.16em] font-semibold transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#C5A572]" />
                    <span>View Botanical Monograph</span>
                  </button>

                  <span className="text-xs text-[#7B8B82] font-serif italic">
                    Provenance: {currentHerb.origin.split('&')[0]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Botanical Volumes & Living Herbarium Expansion Preview */}
        <div className="mt-16 pt-12 border-t border-[#0F281E]/15">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#8C6D46] font-semibold">
                FORTHCOMING EXPANSIONS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#0F281E] font-light mt-1">
                The Living Herbal Archives of Northeast India
              </h3>
            </div>
            <span className="hidden sm:inline text-xs font-serif italic text-[#55655C]">
              Continuous Botanical Research by Lohia Vaidyas
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FAF7F2] border border-[#0F281E]/15 p-6 relative">
              <div className="text-[10px] uppercase tracking-widest text-[#B4533C] font-semibold mb-2">
                Volume II · In Compilation
              </div>
              <h4 className="font-serif text-xl text-[#0F281E] font-medium mb-2">
                The Wetland & River Flora of Assam
              </h4>
              <p className="text-xs text-[#526258] leading-relaxed mb-4">
                Documenting amphibious flora harvested along the Brahmaputra: Brahmi, Mandukaparni, aquatic vetiver roots, and water lilies.
              </p>
              <div className="text-[11px] text-[#8C6D46] font-medium flex items-center gap-1">
                <span>Release: Spring 2027</span>
              </div>
            </div>

            <div className="bg-[#FAF7F2] border border-[#0F281E]/15 p-6 relative">
              <div className="text-[10px] uppercase tracking-widest text-[#B4533C] font-semibold mb-2">
                Volume III · Field Research
              </div>
              <h4 className="font-serif text-xl text-[#0F281E] font-medium mb-2">
                High-Altitude Himalayan Adaptogens
              </h4>
              <p className="text-xs text-[#526258] leading-relaxed mb-4">
                Cataloging high-altitude rhizomes gathered near the Arunachal and Bhutan ridges: Kutki, Jatamansi, and Himalayan Rhubarb.
              </p>
              <div className="text-[11px] text-[#8C6D46] font-medium flex items-center gap-1">
                <span>Release: Monsoon 2027</span>
              </div>
            </div>

            <div className="bg-[#FAF7F2] border border-[#0F281E]/15 p-6 relative">
              <div className="text-[10px] uppercase tracking-widest text-[#B4533C] font-semibold mb-2">
                Volume IV · Classical Alchemy
              </div>
              <h4 className="font-serif text-xl text-[#0F281E] font-medium mb-2">
                Rasashastra: Sacred Resins & Bhasmas
              </h4>
              <p className="text-xs text-[#526258] leading-relaxed mb-4">
                The purification (Shodhana) and calcination (Marana) of minerals, natural Shilajit exudates, and Commiphora mukul resins.
              </p>
              <div className="text-[11px] text-[#8C6D46] font-medium flex items-center gap-1">
                <span>Release: Winter 2027</span>
              </div>
            </div>
          </div>
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

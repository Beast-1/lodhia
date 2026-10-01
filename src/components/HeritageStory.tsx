import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Clock, Heart, Leaf, ShieldCheck } from 'lucide-react';

export const HeritageStory: React.FC = () => {
  const [activeEra, setActiveEra] = useState<'1988' | '2004' | 'Today'>('1988');

  const milestones = [
    {
      year: '1988',
      title: 'The Foundation in Guwahati',
      desc: 'Established on Station Road as a dedicated apothecary for authentic Shastriya formulations, answering the plea of Assam’s Vaidyas for untampered classical preparations.'
    },
    {
      year: '2004',
      title: 'Regional Botanical Network',
      desc: 'Formed direct partnerships with wild harvesters across the Brahmaputra basin, Karbi Anglong, and Meghalaya highlands to source unpolluted wild roots and bark.'
    },
    {
      year: 'Today',
      title: 'The Living Digital Flagship',
      desc: 'Serving third-generation families, modern Ayurvedic doctors, and conscious seekers worldwide while keeping the Guwahati dispensary’s handcrafted purity sacred.'
    }
  ];

  return (
    <section id="heritage" className="py-20 lg:py-28 bg-[#F4EFE6] border-t border-b border-[#0F281E]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#8C6D46] mb-3">
            <span>CHRONICLES OF LOHIA</span>
            <span aria-hidden="true" className="text-[#8C6D46]/40">/</span>
            <span>THREE DECADES IN ASSAM</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#0F281E] leading-[1.15]">
            Guardians of the classical flame in the Brahmaputra valley.
          </h2>

          <p className="mt-5 text-[#4A5950] text-base sm:text-lg leading-relaxed font-normal">
            When Lohia Ayurvedic Pharmacy opened its doors in Guwahati in 1988, modern commercialism
            was rapidly industrializing herbal remedies into sugary tonics and synthetic tinctures.
            We made a solemn covenant: to remain true to the classical Shastras, preserving the time,
            fire, and patience that authentic Ayurvedic alchemy demands.
          </p>
        </div>

        {/* Asymmetrical Editorial Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authentic Photography Composition */}
          <div className="lg:col-span-6 relative">
            <div className="border border-[#0F281E]/15 bg-[#FAF7F2] p-3 shadow-xs">
              <div className="aspect-[4/3] overflow-hidden image-editorial-wrap">
                <img
                  src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=1200&q=85"
                  alt="Raw botanical herbs and traditional Ayurvedic dispensary utensils"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption */}
              <div className="pt-3 px-1 flex items-center justify-between text-xs text-[#6A7B71]">
                <span className="font-serif italic">Fresh Brahmi & Wild Medicinal Leaves</span>
                <span className="text-[11px] uppercase tracking-wider text-[#8C6D46]">Guwahati Apothecary Archive</span>
              </div>
            </div>

            {/* Overlapping Antique Card */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-8 sm:-right-6 sm:max-w-xs bg-[#0E241B] text-[#FAF7F2] p-5 border border-[#C5A572]/40 shadow-xl">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#C5A572] mb-1">
                The Founder’s Principle
              </div>
              <p className="font-serif text-sm italic text-[#E5DDCF] leading-snug">
                “If a medicine requires forty-five days of subterranean fermentation, we will never bottle it on day forty-four.”
              </p>
              <div className="text-[11px] text-[#A6B6AD] mt-2">
                — Shri S. C. Lohia, Guwahati, 1988
              </div>
            </div>
          </div>

          {/* Right Column: Three Tenets of Classical Integrity */}
          <div className="lg:col-span-6 flex flex-col gap-8 pt-4 lg:pt-0">
            <div className="border-b border-[#0F281E]/10 pb-6">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-2xl text-[#8C6D46] font-light">01</span>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#0F281E] font-medium">
                    Sourcing from the Eastern Himalayan Foothills
                  </h3>
                  <p className="mt-2 text-sm text-[#48564D] leading-relaxed">
                    Guwahati stands at the crossroads of the Eastern Himalayas and the Brahmaputra alluvial basin.
                    We procure raw medicinal flora from trusted forest dwellers in Karbi Anglong, Meghalaya, and upper Assam—wildcrafted
                    at the precise astrological hour and season mandated by Charaka.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-[#0F281E]/10 pb-6">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-2xl text-[#8C6D46] font-light">02</span>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#0F281E] font-medium">
                    Classical Copper & Earthen Kalpanas
                  </h3>
                  <p className="mt-2 text-sm text-[#48564D] leading-relaxed">
                    We adhere strictly to Shastriya manufacturing protocols: Ksheerapaka in brass vessels,
                    Taila Paka simmered over wood coals across seventy-two hours, and Asavas nurtured in seasoned
                    earthen vessels sealed with clay-smeared linen strips.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-2xl text-[#8C6D46] font-light">03</span>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#0F281E] font-medium">
                    Three Decades of Multi-Generational Trust
                  </h3>
                  <p className="mt-2 text-sm text-[#48564D] leading-relaxed">
                    Over 38 years, our dispensary has become an integral sanctuary for Guwahati families.
                    Vaidyas write prescriptions with the exact words: <span className="italic font-serif">"Lohia se lana"</span> (procure from Lohia),
                    knowing our shelves carry no unlisted fillers, chemical preservatives, or compromised potency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Heritage Timeline Band */}
        <div className="mt-20 pt-10 border-t border-[#0F281E]/15">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((item) => (
              <div
                key={item.year}
                className="bg-[#FAF7F2] p-6 border border-[#0F281E]/10 relative group hover:border-[#8C6D46] transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif text-3xl font-light text-[#B4533C]">
                    {item.year}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#8C6D46] font-medium">
                    Heritage Milestone
                  </span>
                </div>
                <h4 className="font-serif text-lg font-medium text-[#0F281E] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#526359] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Leaf, Clock, MapPin, Shield } from 'lucide-react';

export const HeritageStory: React.FC = () => {
  return (
    <section id="heritage" className="py-18 lg:py-24 bg-[#F4EFE6] border-b border-[#0F281E]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-semibold text-[#8C6D46] mb-3">
            <span>ABOUT LOHIA AYURVEDIC PHARMACY</span>
            <span aria-hidden="true" className="text-[#8C6D46]/40">/</span>
            <span>SERVING SINCE 1988</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#0F281E] leading-[1.15]">
            A respected presence in Guwahati for nearly four decades.
          </h2>

          <p className="mt-4 text-[#4A5950] text-base sm:text-lg leading-relaxed font-normal">
            Established in 1988 in Guwahati, Assam, Lohia Ayurvedic Pharmacy has built its reputation
            on providing genuine traditional Ayurvedic medicines, single herbs, and wellness products
            to generations of local families and patrons.
          </p>
        </div>

        {/* Story Composition: Photography & Grounded Tenets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authentic Photography */}
          <div className="lg:col-span-6 relative">
            <div className="border border-[#0F281E]/15 bg-[#FAF7F2] p-3 shadow-xs">
              <div className="aspect-[4/3] overflow-hidden image-editorial-wrap">
                <img
                  src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=1000&q=85"
                  alt="Ayurvedic raw herbs and mortar representing traditional herbalism"
                  width="1000"
                  height="750"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption */}
              <div className="pt-3 px-1 flex items-center justify-between text-xs text-[#6A7B71]">
                <span className="font-serif italic">Traditional Ayurvedic Herbs & Preparations</span>
                <span className="text-[11px] uppercase tracking-wider text-[#8C6D46]">Guwahati, Assam</span>
              </div>
            </div>

            {/* Note box */}
            <div className="mt-4 bg-[#0E241B] text-[#FAF7F2] p-4 sm:p-5 border border-[#C5A572]/40">
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#C5A572] mb-1">
                Heritage Commitment
              </div>
              <p className="font-serif text-sm italic text-[#E5DDCF] leading-snug">
                “Committed to providing authentic Ayurvedic products and serving the community with integrity since 1988.”
              </p>
              <div className="text-[11px] text-[#A6B6AD] mt-1.5">
                — Lohia Ayurvedic Pharmacy, Guwahati
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Human Tenets */}
          <div className="lg:col-span-6 flex flex-col gap-6 pt-2 lg:pt-0">
            <div className="border-b border-[#0F281E]/10 pb-5">
              <div className="flex items-baseline gap-3.5">
                <span className="font-serif text-2xl text-[#8C6D46] font-light">01</span>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#0F281E] font-medium">
                    Rooted in Guwahati Since 1988
                  </h3>
                  <p className="mt-1.5 text-sm text-[#48564D] leading-relaxed">
                    For thirty-eight continuous years, Lohia Ayurvedic Pharmacy has remained an established
                    fixture in Guwahati, assisting local customers seeking authentic Ayurvedic remedies
                    and time-honored herbal supplements.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-[#0F281E]/10 pb-5">
              <div className="flex items-baseline gap-3.5">
                <span className="font-serif text-2xl text-[#8C6D46] font-light">02</span>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#0F281E] font-medium">
                    Classical Medicines & Trusted Brands
                  </h3>
                  <p className="mt-1.5 text-sm text-[#48564D] leading-relaxed">
                    Our retail pharmacy shelves stock classical Shastriya preparations—including Asavas,
                    Arishtas, Tailas, Churnas, and Rasayanas—sourced from recognized, licensed Ayurvedic
                    manufacturers meeting statutory standards.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-3.5">
                <span className="font-serif text-2xl text-[#8C6D46] font-light">03</span>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#0F281E] font-medium">
                    Personal Customer Care & Accessibility
                  </h3>
                  <p className="mt-1.5 text-sm text-[#48564D] leading-relaxed">
                    We assist patrons in finding the specific classical preparations and single herbs
                    recommended by their doctors. Additional archival history and store specifics are
                    available directly upon visiting our Guwahati location.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-2 p-3.5 bg-[#FAF7F2] border border-[#0F281E]/10 text-xs text-[#6A7B71] italic">
              Note: Historical archives, complete founder profiles, and store documentation to be confirmed directly with Lohia Ayurvedic Pharmacy.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

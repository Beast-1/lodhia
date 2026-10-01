import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import { ChevronLeft, ChevronRight, Quote, Shield } from 'lucide-react';

export const TrustAndLegacy: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[activeTestimonial];

  return (
    <section className="py-18 lg:py-24 bg-[#0E241B] text-[#FAF7F2] relative overflow-hidden border-b border-[#0F281E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-semibold text-[#C5A572] mb-2.5">
            <span>HERITAGE & STANDARDS</span>
            <span aria-hidden="true" className="text-[#C5A572]/40">/</span>
            <span>SERVING SINCE 1988</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#FAF7F2] leading-[1.12]">
            Thirty-eight years of trust in Guwahati.
          </h2>

          <p className="mt-3.5 text-[#C4D0C9] text-sm sm:text-base leading-relaxed">
            As an established Ayurvedic pharmacy in Guwahati, Assam, Lohia Ayurvedic Pharmacy is committed
            to stocking and supplying authentic traditional remedies, single herbs, and classical preparations
            meeting statutory standards.
          </p>
        </div>

        {/* 4 Grounded Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="border border-[#C5A572]/20 bg-[#132F23]/60 p-6 relative">
            <span className="font-serif text-3xl text-[#C5A572] font-light block mb-2">01</span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-1.5">
              Traditional Herbalism
            </h3>
            <p className="text-xs text-[#C4D0C9] leading-relaxed">
              Focusing on traditional single herbs, classical churnas, and herbal formulations documented across classical Ayurvedic canons.
            </p>
          </div>

          <div className="border border-[#C5A572]/20 bg-[#132F23]/60 p-6 relative">
            <span className="font-serif text-3xl text-[#C5A572] font-light block mb-2">02</span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-1.5">
              Licensed Manufacturers
            </h3>
            <p className="text-xs text-[#C4D0C9] leading-relaxed">
              Formulations and classical lines stocked are sourced from licensed Ayurvedic pharmaceutical producers compliant with statutory regulations.
            </p>
          </div>

          <div className="border border-[#C5A572]/20 bg-[#132F23]/60 p-6 relative">
            <span className="font-serif text-3xl text-[#C5A572] font-light block mb-2">03</span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-1.5">
              Guwahati Community Trust
            </h3>
            <p className="text-xs text-[#C4D0C9] leading-relaxed">
              Serving continuous generations of local patrons, families, and Ayurvedic medicine seekers in Assam since our founding in 1988.
            </p>
          </div>

          <div className="border border-[#C5A572]/20 bg-[#132F23]/60 p-6 relative">
            <span className="font-serif text-3xl text-[#C5A572] font-light block mb-2">04</span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-1.5">
              Authentic Retail Service
            </h3>
            <p className="text-xs text-[#C4D0C9] leading-relaxed">
              Dedicated to assisting customers in finding the specific classical preparations and single herbs recommended by their doctors.
            </p>
          </div>
        </div>

        {/* Community Feedback */}
        <div className="border-t border-[#C5A572]/20 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.18em] text-[#C5A572] font-semibold mb-2">
                Customer & Patron Experiences
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF7F2] font-light">
                Voices of the Community
              </h3>
              <p className="mt-2.5 text-xs text-[#A7B8AF] leading-relaxed">
                Reflections from patrons who have relied on Lohia Ayurvedic Pharmacy in Guwahati across decades.
              </p>

              <div className="flex items-center gap-3 mt-5">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 border border-[#C5A572]/40 flex items-center justify-center text-[#C5A572] hover:bg-[#C5A572] hover:text-[#0E241B] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C5A572]"
                  aria-label="Previous customer experience"
                >
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 border border-[#C5A572]/40 flex items-center justify-center text-[#C5A572] hover:bg-[#C5A572] hover:text-[#0E241B] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C5A572]"
                  aria-label="Next customer experience"
                >
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <span className="text-xs text-[#A7B8AF] ml-2 font-mono">
                  0{activeTestimonial + 1} / 0{TESTIMONIALS_DATA.length}
                </span>
              </div>
            </div>

            <div className="lg:col-span-8 bg-[#132F23]/80 border border-[#C5A572]/30 p-6 sm:p-8 relative">
              <Quote className="w-10 h-10 text-[#C5A572]/20 absolute top-5 right-5" aria-hidden="true" />

              <p className="font-serif text-base sm:text-xl text-[#F4EFE6] italic leading-relaxed relative z-10">
                “{current.quote}”
              </p>

              <div className="mt-6 pt-5 border-t border-[#C5A572]/20 flex flex-wrap items-center justify-between gap-3 relative z-10">
                <div>
                  <div className="font-serif text-base text-[#C5A572] font-medium">
                    {current.author}
                  </div>
                  <div className="text-xs text-[#C4D0C9] mt-0.5">
                    {current.role} · {current.location}
                  </div>
                </div>

                <div className="text-xs text-[#C5A572]/80 font-serif italic">
                  {current.patronSince}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

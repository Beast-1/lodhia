import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import { ShieldCheck, Award, Heart, CheckCircle2, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

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
    <section className="py-20 lg:py-28 bg-[#0E241B] text-[#FAF7F2] relative overflow-hidden">
      {/* Background Subtle Geometry */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none flex items-center justify-center">
        <svg viewBox="0 0 800 800" className="w-[1000px] h-[1000px]" fill="none" stroke="#FAF7F2" strokeWidth="1">
          <circle cx="400" cy="400" r="380" />
          <circle cx="400" cy="400" r="260" />
          <circle cx="400" cy="400" r="140" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#C5A572] mb-3">
            <span>UNCOMPROMISED STANDARDS</span>
            <span aria-hidden="true" className="text-[#C5A572]/40">/</span>
            <span>CLINICAL REPUTATION</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#FAF7F2] leading-[1.12]">
            Thirty-eight years of trust cannot be engineered overnight.
          </h2>

          <p className="mt-4 text-[#C4D0C9] text-sm sm:text-base leading-relaxed">
            In Ayurvedic medicine, the efficacy of a formulation rests entirely on the integrity of the hands that prepare it. For nearly four decades, physicians and families across Northeast India have placed their faith in Lohia Pharmacy.
          </p>
        </div>

        {/* 4 Pillars of Classical Integrity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="border border-[#C5A572]/20 bg-[#132F23]/60 p-6 relative">
            <span className="font-serif text-3xl text-[#C5A572] font-light block mb-2">01</span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">
              Unadulterated Botanicals
            </h3>
            <p className="text-xs text-[#C4D0C9] leading-relaxed">
              Every lot of raw bark, dried rhizome, and wild seed is hand-inspected by senior Vaidyas before entering our copper decoction cauldrons.
            </p>
          </div>

          <div className="border border-[#C5A572]/20 bg-[#132F23]/60 p-6 relative">
            <span className="font-serif text-3xl text-[#C5A572] font-light block mb-2">02</span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">
              Shastriya Textual Fidelity
            </h3>
            <p className="text-xs text-[#C4D0C9] leading-relaxed">
              We never take commercial shortcuts. Formulations strictly follow Charaka Samhita, Sushruta Samhita, and Bhaishajya Ratnavali canons.
            </p>
          </div>

          <div className="border border-[#C5A572]/20 bg-[#132F23]/60 p-6 relative">
            <span className="font-serif text-3xl text-[#C5A572] font-light block mb-2">03</span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">
              AYUSH GMP Certified
            </h3>
            <p className="text-xs text-[#C4D0C9] leading-relaxed">
              Licensed pharmacy facilities meeting rigorous hygienic standards, batch microbial testing, and heavy-metal safety thresholds.
            </p>
          </div>

          <div className="border border-[#C5A572]/20 bg-[#132F23]/60 p-6 relative">
            <span className="font-serif text-3xl text-[#C5A572] font-light block mb-2">04</span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">
              Brahmaputra Heritage
            </h3>
            <p className="text-xs text-[#C4D0C9] leading-relaxed">
              Rooted in Guwahati since 1988, championing the sustainable wildcrafting traditions of Assam’s indigenous forest communities.
            </p>
          </div>
        </div>

        {/* Editorial Testimonial Showcase */}
        <div className="border-t border-[#C5A572]/20 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Header */}
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-[#C5A572] font-semibold mb-2">
                Words of Patrons & Vaidyas
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF7F2] font-light">
                Generations of Healing in Guwahati
              </h3>
              <p className="mt-3 text-xs text-[#A7B8AF] leading-relaxed">
                Voices of the physicians who prescribe our medicines and the families whose health has been nurtured by our counter since 1988.
              </p>

              <div className="flex items-center gap-3 mt-6">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 border border-[#C5A572]/40 flex items-center justify-center text-[#C5A572] hover:bg-[#C5A572] hover:text-[#0E241B] transition-colors cursor-pointer"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 border border-[#C5A572]/40 flex items-center justify-center text-[#C5A572] hover:bg-[#C5A572] hover:text-[#0E241B] transition-colors cursor-pointer"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-[#A7B8AF] ml-2 font-mono">
                  0{activeTestimonial + 1} / 0{TESTIMONIALS_DATA.length}
                </span>
              </div>
            </div>

            {/* Right Quote Plate */}
            <div className="lg:col-span-8 bg-[#132F23]/80 border border-[#C5A572]/30 p-8 sm:p-10 relative">
              <Quote className="w-12 h-12 text-[#C5A572]/20 absolute top-6 right-6" />

              <p className="font-serif text-lg sm:text-2xl text-[#F4EFE6] italic leading-relaxed relative z-10">
                “{current.quote}”
              </p>

              <div className="mt-8 pt-6 border-t border-[#C5A572]/20 flex flex-wrap items-center justify-between gap-3 relative z-10">
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

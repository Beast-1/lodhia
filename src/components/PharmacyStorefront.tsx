import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, Compass, ShieldCheck, ArrowUpRight, Navigation } from 'lucide-react';

interface PharmacyStorefrontProps {
  onOpenPrescription: () => void;
}

export const PharmacyStorefront: React.FC<PharmacyStorefrontProps> = ({ onOpenPrescription }) => {
  const handleDirectWhatsApp = () => {
    const msg = encodeURIComponent(
      'Namaskar Lohia Pharmacy Guwahati. I would like to inquire about visiting your dispensary or ordering Ayurvedic medicine.'
    );
    window.open(`https://wa.me/919435019888?text=${msg}`, '_blank');
  };

  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Panbazar+Guwahati+Assam', '_blank');
  };

  return (
    <section id="dispensary" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#8C6D46] mb-3">
            <span>THE GUWAHATI FLAGSHIP DISPENSARY</span>
            <span aria-hidden="true" className="text-[#8C6D46]/40">/</span>
            <span>SERVING SINCE 1988</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#0F281E] leading-[1.12]">
            Step into our living sanctuary of healing on the banks of the Brahmaputra.
          </h2>

          <p className="mt-4 text-[#47574D] text-sm sm:text-base leading-relaxed">
            Our physical pharmacy in Guwahati is an authentic sensory experience. The fragrance of dried
            vetiver, aged cedarwood, and camphor permeates the air. Teakwood cabinetry housing over 450 classical
            formulations lines the walls, alongside our dedicated Vaidya consultation chamber.
          </p>
        </div>

        {/* Storefront Photography & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Primary Storefront Image Frame */}
            <div className="border border-[#0F281E]/15 bg-[#EFE8DC] p-2.5 shadow-xs relative">
              <div className="aspect-[16/10] overflow-hidden image-editorial-wrap">
                <img
                  src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=85"
                  alt="Traditional Ayurvedic apothecary dispensary interior with wooden apothecary drawers and glass jars"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay Badge */}
              <div className="absolute top-5 left-5 bg-[#0E241B]/95 text-[#FAF7F2] px-3.5 py-1.5 border border-[#C5A572]/40 text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C5A572] animate-pulse"></span>
                <span className="font-serif italic">Open for Consultations Today</span>
              </div>
            </div>

            {/* Two Secondary Editorial Insets */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-[#0F281E]/15 bg-[#FAF7F2] p-2">
                <div className="aspect-[4/3] overflow-hidden mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=85"
                    alt="Authentic Vaidya consultation desk and raw herbal roots"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[#8C6D46] font-semibold">
                  Chamber 01
                </div>
                <div className="text-xs font-serif text-[#0F281E]">
                  In-House Vaidya Nadi Pariksha Desk
                </div>
              </div>

              <div className="border border-[#0F281E]/15 bg-[#FAF7F2] p-2">
                <div className="aspect-[4/3] overflow-hidden mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=85"
                    alt="Classical earthen and copper preparation vessels"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[#8C6D46] font-semibold">
                  Dispensary Counter
                </div>
                <div className="text-xs font-serif text-[#0F281E]">
                  Fresh Kwath & Decoction Compounding
                </div>
              </div>
            </div>
          </div>

          {/* Location & Interaction Information (5 cols) */}
          <div className="lg:col-span-5 bg-[#F4EFE6] border border-[#0F281E]/15 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="pb-6 border-b border-[#0F281E]/10">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#8C6D46] font-semibold mb-2">
                  <MapPin className="w-4 h-4 text-[#B4533C]" />
                  <span>Physical Address</span>
                </div>
                <div className="font-serif text-xl sm:text-2xl text-[#0F281E]">
                  Lohia Ayurvedic Pharmacy
                </div>
                <div className="text-xs sm:text-sm text-[#4E5E55] mt-1 leading-relaxed">
                  Ground Floor, Station Road, Panbazar Commercial Heritage Quarter,
                  <br />
                  Guwahati, Assam 781001, India
                </div>
                <div className="text-xs text-[#8C6D46] mt-2 font-serif italic">
                  Landmark: Near Guwahati Railway Station / Panbazar Post Office
                </div>
              </div>

              {/* Operating Hours */}
              <div className="py-6 border-b border-[#0F281E]/10">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#8C6D46] font-semibold mb-3">
                  <Clock className="w-4 h-4 text-[#8C6D46]" />
                  <span>Pharmacy & Dispensary Hours</span>
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm text-[#2C3831]">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Monday – Saturday:</span>
                    <span className="font-serif text-[#0F281E]">9:30 AM – 8:30 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span className="font-serif text-[#0F281E]">10:00 AM – 2:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#73847B] pt-1">
                    <span>Vaidya Consultations:</span>
                    <span>11:00 AM – 5:00 PM (Daily)</span>
                  </div>
                </div>
              </div>

              {/* Phone & Direct Contact */}
              <div className="py-6 border-b border-[#0F281E]/10">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#8C6D46] font-semibold mb-2">
                  <Phone className="w-4 h-4 text-[#8C6D46]" />
                  <span>Direct Dispensary Lines</span>
                </div>
                <div className="space-y-1 text-xs sm:text-sm">
                  <div>
                    <a href="tel:+913612540000" className="text-[#0F281E] font-medium hover:underline">
                      +91 (0361) 254-1988 (Dispensary Desk)
                    </a>
                  </div>
                  <div>
                    <a href="tel:+919435019888" className="text-[#0F281E] font-medium hover:underline">
                      +91 94350 19888 (WhatsApp & Prescriptions)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleDirectWhatsApp}
                className="flex-1 py-3 px-4 bg-[#0F281E] hover:bg-[#183F2F] text-[#FAF7F2] text-xs uppercase tracking-[0.16em] font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A572]" />
                <span>Chat on WhatsApp</span>
              </button>

              <button
                onClick={handleDirections}
                className="py-3 px-4 bg-transparent hover:bg-[#FAF7F2] text-[#0F281E] text-xs uppercase tracking-[0.16em] font-semibold border border-[#0F281E]/30 flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#8C6D46]" />
                <span>Get Directions</span>
              </button>
            </div>
          </div>
        </div>

        {/* Home Delivery Radius Bar */}
        <div className="border border-[#0F281E]/15 bg-[#FAF7F2] p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <span className="font-serif text-2xl font-light text-[#B4533C]">Same-Day</span>
            <div className="text-xs text-[#526359]">
              Guwahati Metro Delivery across Dispur, Panbazar, Uzanbazar, Beltola, & Jalukbari.
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <span className="font-serif text-2xl font-light text-[#8C6D46]">24-48 Hrs</span>
            <div className="text-xs text-[#526359]">
              Express botanical dispatch across Assam, Meghalaya, Arunachal & Northeast states.
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <span className="font-serif text-2xl font-light text-[#0F281E]">Pan-India</span>
            <div className="text-xs text-[#526359]">
              Secure glass-packaging courier for classical Asavas, Arishtas & Tailas nationwide.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

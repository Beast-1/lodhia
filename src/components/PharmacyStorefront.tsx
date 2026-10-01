import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, Navigation, Info } from 'lucide-react';

interface PharmacyStorefrontProps {
  onOpenPrescription: () => void;
}

export const PharmacyStorefront: React.FC<PharmacyStorefrontProps> = ({ onOpenPrescription }) => {
  const handleWhatsAppEnquiry = () => {
    const msg = encodeURIComponent(
      'Hello Lohia Ayurvedic Pharmacy Guwahati,\nI would like to enquire about your store location, visiting hours, or available Ayurvedic medicines.'
    );
    window.open(`https://wa.me/?text=${msg}`, '_blank');
  };

  return (
    <section id="store" className="py-18 lg:py-24 bg-[#FAF7F2] border-b border-[#0F281E]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-semibold text-[#8C6D46] mb-2.5">
            <span>STORE & LOCATION</span>
            <span aria-hidden="true" className="text-[#8C6D46]/40">/</span>
            <span>SERVING GUWAHATI SINCE 1988</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#0F281E] leading-[1.12]">
            Visiting the Guwahati Pharmacy
          </h2>

          <p className="mt-3 text-[#47574D] text-sm sm:text-base leading-relaxed">
            Lohia Ayurvedic Pharmacy has served customers and traditional wellness seekers in Guwahati, Assam
            since 1988. We welcome patrons seeking authentic herbal preparations, classical oils, and traditional remedies.
          </p>
        </div>

        {/* Storefront Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Storefront Photography (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="border border-[#0F281E]/15 bg-[#EFE8DC] p-2.5 shadow-xs relative">
              <div className="aspect-[16/10] overflow-hidden image-editorial-wrap">
                <img
                  src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=85"
                  alt="Ayurvedic pharmacy counter and traditional apothecary shelving"
                  width="1000"
                  height="625"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-4 left-4 bg-[#0E241B]/95 text-[#FAF7F2] px-3 py-1.5 border border-[#C5A572]/40 text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C5A572]" aria-hidden="true"></span>
                <span className="font-serif italic">Guwahati Store Location</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-[#0F281E]/15 bg-[#FAF7F2] p-2.5">
                <div className="aspect-[4/3] overflow-hidden mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=85"
                    alt="Herbal botanicals on pharmacy display"
                    width="600"
                    height="450"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[#8C6D46] font-semibold">
                  Botanical Display
                </div>
                <div className="text-xs font-serif text-[#0F281E]">
                  Traditional Single Herbs & Churnas
                </div>
              </div>

              <div className="border border-[#0F281E]/15 bg-[#FAF7F2] p-2.5">
                <div className="aspect-[4/3] overflow-hidden mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=85"
                    alt="Classical Ayurvedic medicine shelf"
                    width="600"
                    height="450"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[#8C6D46] font-semibold">
                  Pharmacy Counter
                </div>
                <div className="text-xs font-serif text-[#0F281E]">
                  Classical Oils, Asavas & Arishtas
                </div>
              </div>
            </div>
          </div>

          {/* Location & Contact Information (5 cols) */}
          <div className="lg:col-span-5 bg-[#F4EFE6] border border-[#0F281E]/15 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="pb-5 border-b border-[#0F281E]/10">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#8C6D46] font-semibold mb-2">
                  <MapPin className="w-4 h-4 text-[#B4533C]" aria-hidden="true" />
                  <span>City & Storefront Location</span>
                </div>
                <h3 className="font-serif text-2xl text-[#0F281E]">
                  Lohia Ayurvedic Pharmacy
                </h3>
                <div className="text-xs sm:text-sm text-[#4E5E55] mt-1.5 leading-relaxed">
                  Guwahati, Assam, India
                </div>
                <div className="mt-2 text-xs text-[#8C6D46] bg-[#FAF7F2] p-2.5 border border-[#0F281E]/10 flex items-start gap-2">
                  <Info className="w-3.5 h-3.5 text-[#8C6D46] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    Exact street address, landmarks, and route directions to be confirmed directly with Lohia Ayurvedic Pharmacy.
                  </span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="py-5 border-b border-[#0F281E]/10">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#8C6D46] font-semibold mb-2.5">
                  <Clock className="w-4 h-4 text-[#8C6D46]" aria-hidden="true" />
                  <span>Store Hours</span>
                </div>
                <div className="space-y-1.5 text-xs text-[#2C3831]">
                  <div className="flex items-center justify-between">
                    <span>Monday – Saturday:</span>
                    <span className="font-serif text-[#0F281E]">Standard Business Hours *</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sunday:</span>
                    <span className="font-serif text-[#0F281E]">Limited Hours / Closed *</span>
                  </div>
                  <div className="text-[11px] text-[#7A8A80] pt-1 italic">
                    * Specific opening hours to be confirmed with store staff before visiting.
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="py-5 border-b border-[#0F281E]/10">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#8C6D46] font-semibold mb-2">
                  <Phone className="w-4 h-4 text-[#8C6D46]" aria-hidden="true" />
                  <span>Contact & Enquiries</span>
                </div>
                <p className="text-xs text-[#4E5E55] leading-relaxed">
                  Telephone numbers and contact information to be confirmed with Lohia Ayurvedic Pharmacy. Use the enquiry button below to send product queries.
                </p>
              </div>
            </div>

            {/* Practical Actions */}
            <div className="pt-5 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsAppEnquiry}
                className="flex-1 py-3 px-4 bg-[#0F281E] hover:bg-[#183F2F] text-[#FAF7F2] text-xs uppercase tracking-[0.14em] font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A572]" aria-hidden="true" />
                <span>WhatsApp Enquiry</span>
              </button>

              <button
                onClick={onOpenPrescription}
                className="py-3 px-4 bg-transparent hover:bg-[#FAF7F2] text-[#0F281E] text-xs uppercase tracking-[0.14em] font-semibold border border-[#0F281E]/30 flex items-center justify-center gap-2 cursor-pointer transition-colors focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
              >
                <span>Send Enquiry Form</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

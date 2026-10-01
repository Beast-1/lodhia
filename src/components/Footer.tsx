import React, { useState } from 'react';
import { Mail, MapPin, MessageSquare, Check, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPrescription: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrescription }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#091811] text-[#FAF7F2] border-t border-[#C5A572]/20 relative">
      {/* Top Newsletter / Compendium Bar */}
      <div className="border-b border-[#FAF7F2]/10 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.18em] text-[#C5A572] font-semibold block mb-1.5">
              Ayurvedic Knowledge Updates
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#FAF7F2]">
              Receive Traditional Botanical & Seasonal Notes
            </h3>
            <p className="text-xs text-[#A8B9AF] mt-1.5 max-w-lg leading-relaxed">
              Periodic educational dispatches on traditional Ayurvedic lifestyle routines (Dinacharya), seasonal transitions (Ritucharya), and classical plant profiles.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="bg-[#132F23] border border-[#C5A572]/40 p-3.5 text-xs text-[#EFE8DC] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C5A572]" aria-hidden="true" />
                <span>Thank you. You have been added to our educational reader list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <label htmlFor="newsletter-email" className="sr-only">Email address for educational newsletter</label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 text-xs px-4 py-2.5 bg-[#132F23] border border-[#C5A572]/30 text-[#FAF7F2] placeholder:text-[#7A8E82] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A572]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#C5A572] hover:bg-[#B38E55] text-[#0A1A13] text-xs uppercase tracking-[0.14em] font-bold transition-colors cursor-pointer shrink-0 focus-visible:ring-2 focus-visible:ring-[#FAF7F2]"
                >
                  Subscribe
                </button>
              </form>
            )}
            <div className="text-[10px] text-[#7A8E82] mt-2 font-mono">
              Educational updates only. No commercial spam.
            </div>
          </div>
        </div>
      </div>

      {/* Main Directory Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xs border border-[#C5A572]/40 bg-[#0E241B] flex items-center justify-center text-[#C5A572]">
                <span className="font-serif text-lg font-bold">लो</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-[0.08em] text-[#FAF7F2] leading-none">
                  LOHIA
                </span>
                <span className="block text-[10px] tracking-[0.2em] uppercase font-medium text-[#C5A572] mt-1">
                  Ayurvedic Pharmacy · Guwahati (Estd. 1988)
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A8B9AF] leading-relaxed max-w-sm mb-5">
              An established Ayurvedic pharmacy in Guwahati, Assam, providing traditional Ayurvedic medicines, single herbs, and classical remedies since 1988.
            </p>

            <div className="space-y-1.5 text-xs text-[#D8E4DC]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A572] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Guwahati, Assam, India (Street address to be confirmed with store)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A572] shrink-0" aria-hidden="true" />
                <span>Telephone: To be confirmed with Lohia Ayurvedic Pharmacy</span>
              </div>
            </div>
          </div>

          {/* Directory Column 1: Pharmacy & Catalogue */}
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-[#C5A572] font-semibold mb-3">
              Pharmacy & Products
            </div>
            <ul className="space-y-2 text-xs text-[#A8B9AF]">
              <li>
                <button
                  onClick={() => onNavigate('formulations')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left focus-visible:ring-1 focus-visible:ring-[#C5A572]"
                >
                  Classical Asavas & Arishtas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('formulations')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left focus-visible:ring-1 focus-visible:ring-[#C5A572]"
                >
                  Medicated Oils (Tailas)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('formulations')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left focus-visible:ring-1 focus-visible:ring-[#C5A572]"
                >
                  Herbal Churnas & Single Herbs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('formulations')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left focus-visible:ring-1 focus-visible:ring-[#C5A572]"
                >
                  Classical Rasayanas
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrescription}
                  className="text-[#C5A572] hover:underline transition-colors cursor-pointer text-left block focus-visible:ring-1 focus-visible:ring-[#C5A572]"
                >
                  Send Medicine Enquiry →
                </button>
              </li>
            </ul>
          </div>

          {/* Directory Column 2: Ayurvedic Library */}
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-[#C5A572] font-semibold mb-3">
              Ayurvedic Library
            </div>
            <ul className="space-y-2 text-xs text-[#A8B9AF]">
              <li>
                <button
                  onClick={() => onNavigate('library')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left focus-visible:ring-1 focus-visible:ring-[#C5A572]"
                >
                  Ashwagandha Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('library')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left focus-visible:ring-1 focus-visible:ring-[#C5A572]"
                >
                  Brahmi & Memory Herbs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('library')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left focus-visible:ring-1 focus-visible:ring-[#C5A572]"
                >
                  Tulsi & Respiratory Herbs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('library')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left focus-visible:ring-1 focus-visible:ring-[#C5A572]"
                >
                  Classical Energetics (Dravya Guna)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('articles')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left focus-visible:ring-1 focus-visible:ring-[#C5A572]"
                >
                  Educational Articles
                </button>
              </li>
            </ul>
          </div>

          {/* Directory Column 3: Heritage & Store */}
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-[#C5A572] font-semibold mb-3">
              Heritage & Store
            </div>
            <ul className="space-y-2 text-xs text-[#A8B9AF]">
              <li>
                <button
                  onClick={() => onNavigate('heritage')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left focus-visible:ring-1 focus-visible:ring-[#C5A572]"
                >
                  About Lohia (Estd. 1988)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('store')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left focus-visible:ring-1 focus-visible:ring-[#C5A572]"
                >
                  Guwahati Store Location
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrescription}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left focus-visible:ring-1 focus-visible:ring-[#C5A572]"
                >
                  Check Stock / Availability
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A572] hover:underline block focus-visible:ring-1 focus-visible:ring-[#C5A572]"
                >
                  Direct WhatsApp Enquiry →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Medical Notice */}
        <div className="mt-12 pt-6 border-t border-[#FAF7F2]/10 text-[11px] text-[#7E9185] leading-relaxed">
          <p className="mb-2">
            <strong>Medical & Educational Disclaimer:</strong> All information provided in the Ayurvedic Library and product previews is derived from historical and classical Ayurvedic literature for educational, cultural, and informational purposes only. It is not intended to diagnose, treat, cure, or prevent any illness or replace professional medical guidance. Always consult a qualified physician or registered Ayurvedic doctor regarding health conditions or before beginning any herbal regimen. Product availability, brands, and prices are subject to confirmation with Lohia Ayurvedic Pharmacy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-5 pt-5 border-t border-[#FAF7F2]/05 text-[#6D7F74]">
            <div>
              © 1988 – {new Date().getFullYear()} Lohia Ayurvedic Pharmacy, Guwahati, Assam. All Rights Reserved.
            </div>
            <div className="flex items-center gap-3">
              <span>Guwahati, Assam</span>
              <span aria-hidden="true">·</span>
              <span>Traditional Ayurvedic Pharmacy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

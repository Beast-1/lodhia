import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight, Check, Heart } from 'lucide-react';

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
      <div className="border-b border-[#FAF7F2]/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A572] font-semibold block mb-2">
              The Seasonal Compendium
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#FAF7F2]">
              Receive Ayurvedic Dinacharya & Ritu Sandhi Guidance.
            </h3>
            <p className="text-xs text-[#A8B9AF] mt-2 max-w-lg leading-relaxed">
              Curated quarterly by our Guwahati Vaidyas: seasonal herbal decoctions, dietary adjustments according to Assam’s monsoons, and rare plant monographs.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="bg-[#132F23] border border-[#C5A572]/40 p-4 text-xs text-[#EFE8DC] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C5A572]" />
                <span>You have been enrolled in the Lohia Botanical Dispatch. First edition arriving on the next new moon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 text-xs px-4 py-3 bg-[#132F23] border border-[#C5A572]/30 text-[#FAF7F2] placeholder:text-[#7A8E82] focus:outline-none focus:border-[#C5A572]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#C5A572] hover:bg-[#B38E55] text-[#0A1A13] text-xs uppercase tracking-[0.16em] font-bold transition-colors cursor-pointer shrink-0"
                >
                  Join Compendium
                </button>
              </form>
            )}
            <div className="text-[10px] text-[#7A8E82] mt-2 font-mono">
              Zero advertisements or commercial spam. Strictly authentic Ayurvedic literature.
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Directory (Architecture for Future Expansion) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-sm border border-[#C5A572]/40 bg-[#0E241B] flex items-center justify-center text-[#C5A572]">
                <span className="font-serif text-lg font-bold">लो</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-[0.08em] text-[#FAF7F2] leading-none">
                  LOHIA
                </span>
                <span className="block text-[10px] tracking-[0.22em] uppercase font-medium text-[#C5A572] mt-1">
                  Ayurvedic Pharmacy · Estd. 1988
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A8B9AF] leading-relaxed max-w-sm mb-6">
              Guwahati’s premier institution for Shastriya Ayurvedic medicines, rare single-herb churnas, medicated tailas, and classical asavas. Serving multi-generational families and practitioners with unbroken devotion since 1988.
            </p>

            <div className="space-y-2 text-xs text-[#D8E4DC]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A572] shrink-0 mt-0.5" />
                <span>Station Road, Panbazar Heritage Quarter, Guwahati, Assam 781001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A572] shrink-0" />
                <span>+91 (0361) 254-1988 / +91 94350 19888</span>
              </div>
            </div>
          </div>

          {/* Directory Column 1: Pharmacy & Catalogue */}
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-[#C5A572] font-semibold mb-4">
              Pharmacy & Catalogue
            </div>
            <ul className="space-y-2 text-xs text-[#A8B9AF]">
              <li>
                <button
                  onClick={() => onNavigate('formulations')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left"
                >
                  Classical Asavas & Arishtas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('formulations')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left"
                >
                  Medicated Tailas (Siddha Oils)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('formulations')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left"
                >
                  Churna, Kwatha & Bhasmas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('formulations')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left"
                >
                  Rasayanas & Avalehas
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrescription}
                  className="text-[#C5A572] hover:underline transition-colors cursor-pointer text-left block"
                >
                  Online Prescription Ordering →
                </button>
              </li>
            </ul>
          </div>

          {/* Directory Column 2: Ayurvedic Library & Flora */}
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-[#C5A572] font-semibold mb-4">
              Ayurvedic Library
            </div>
            <ul className="space-y-2 text-xs text-[#A8B9AF]">
              <li>
                <button
                  onClick={() => onNavigate('library')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left"
                >
                  Botanical Herbarium (Ashwagandha)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('library')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left"
                >
                  Brahmi & Cognitive Herbs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('library')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left"
                >
                  Brahmaputra Valley River Flora
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('library')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left"
                >
                  Dravya Guna Shastra (Rasa, Virya)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('articles')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left"
                >
                  Dispensary Articles & Shlokas
                </button>
              </li>
            </ul>
          </div>

          {/* Directory Column 3: Heritage & Visit Us */}
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-[#C5A572] font-semibold mb-4">
              Heritage & Visit Us
            </div>
            <ul className="space-y-2 text-xs text-[#A8B9AF]">
              <li>
                <button
                  onClick={() => onNavigate('heritage')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left"
                >
                  Our 1988 Founding Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('dispensary')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left"
                >
                  Guwahati Storefront & Timings
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrescription}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left"
                >
                  Vaidya Consultation Booking
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('dispensary')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer text-left"
                >
                  Doorstep Delivery in Assam
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/919435019888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A572] hover:underline block"
                >
                  Direct WhatsApp Desk →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & AYUSH Disclaimer */}
        <div className="mt-14 pt-8 border-t border-[#FAF7F2]/10 text-[11px] text-[#7E9185] leading-relaxed">
          <p className="mb-2">
            <strong>Dispensary Notice & Shastriya Advisory:</strong> Information presented in the Ayurvedic Library and product profiles is derived from classical texts (Charaka Samhita, Sushruta Samhita, Ashtanga Hridaya, Bhaishajya Ratnavali) and traditional Ayurvedic literature for educational and preservation purposes. Classical Ayurvedic medicines are prepared under valid AYUSH manufacturing licenses. We encourage patrons to consult a qualified Ayurvedic physician (Vaidya) for personalized health assessments, accurate Rogadhikar diagnosis, and tailored dosage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-6 border-t border-[#FAF7F2]/05 text-[#6D7F74]">
            <div>
              © 1988 – {new Date().getFullYear()} Lohia Ayurvedic Pharmacy, Guwahati. All Rights Reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Station Road, Guwahati, Assam</span>
              <span aria-hidden="true">·</span>
              <span>Authentic Shastriya Pharmacopoeia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

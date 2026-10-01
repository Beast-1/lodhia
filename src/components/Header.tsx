import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenPrescription: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPrescription, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About 1988', id: 'heritage' },
    { label: 'Ayurvedic Library', id: 'library' },
    { label: 'Products Preview', id: 'formulations' },
    { label: 'Guwahati Store', id: 'store' },
    { label: 'Knowledge', id: 'articles' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Notice Bar */}
      <div className="bg-[#0A1A13] text-[#E5D7C0] text-[11px] sm:text-xs py-2 px-4 border-b border-[#C5A572]/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="font-serif italic text-[#C5A572] tracking-wide">Guwahati, Assam</span>
            <span className="text-[#C5A572]/40" aria-hidden="true">·</span>
            <span className="tracking-wider uppercase text-[10px] sm:text-[11px] text-[#D8C7AC]">
              Traditional Ayurvedic Pharmacy & Retailer · Serving Since 1988
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#D8C7AC]">
            <span className="text-[10px] sm:text-[11px] text-[#C5A572]">
              Store details to be confirmed with Lohia Ayurvedic Pharmacy
            </span>
            <span className="hidden sm:inline text-[#C5A572]/40" aria-hidden="true">·</span>
            <button
              onClick={onOpenPrescription}
              className="text-[11px] text-[#FAF7F2] underline hover:text-[#C5A572] transition-colors focus-visible:ring-1 focus-visible:ring-[#C5A572]"
            >
              Send Enquiry
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#0F281E]/10 py-3'
            : 'bg-[#FAF7F2] border-b border-[#0F281E]/05 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo Lockup */}
            <button
              onClick={() => handleLinkClick('hero')}
              className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46] rounded-xs p-1 -m-1"
              aria-label="Lohia Ayurvedic Pharmacy Home"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xs border border-[#0F281E]/30 bg-[#0F281E] flex items-center justify-center text-[#EFE8DC]">
                  <span className="font-serif text-lg font-bold tracking-widest text-[#C5A572]">लो</span>
                </div>
                <div>
                  <span className="block font-serif text-xl sm:text-2xl font-bold tracking-[0.08em] text-[#0F281E] leading-none">
                    LOHIA
                  </span>
                  <span className="block text-[10px] tracking-[0.2em] uppercase font-medium text-[#73583C] mt-1">
                    Ayurvedic Pharmacy · Guwahati
                  </span>
                </div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className="text-xs uppercase tracking-[0.14em] font-medium text-[#2C3831] hover:text-[#9E422C] transition-colors py-1 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46] rounded-xs cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Header Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenPrescription}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-[#0F281E] hover:bg-[#16382B] text-[#FAF7F2] text-xs uppercase tracking-[0.14em] font-semibold transition-all border border-[#C5A572]/40 shadow-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C5A572]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#C5A572]" aria-hidden="true" />
                <span>Product Enquiry</span>
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#0F281E] hover:text-[#9E422C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46] rounded-xs cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#0F281E]/15 px-6 py-6 animate-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#73583C] font-semibold pb-2 border-b border-[#0F281E]/10">
                Lohia Ayurvedic Pharmacy · Guwahati
              </div>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className="text-left text-base font-serif text-[#0F281E] hover:text-[#9E422C] py-2 border-b border-[#0F281E]/05 focus-visible:ring-2 focus-visible:ring-[#8C6D46] cursor-pointer"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPrescription();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#0F281E] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold border border-[#C5A572]/40 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#C5A572]" aria-hidden="true" />
                  <span>Send Product or Prescription Enquiry</span>
                </button>

                <div className="flex items-center justify-between text-xs text-[#5D6B63] pt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A572]" aria-hidden="true" />
                    Guwahati, Assam
                  </span>
                  <span className="text-[11px] text-[#73583C]">
                    Est. 1988
                  </span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

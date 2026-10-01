import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (href: string) => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  const navItems = [
    { label: 'Our story', href: '#story' },
    { label: 'The pharmacy', href: '#pharmacy' },
    { label: 'Ayurvedic library', href: '#library' },
    { label: 'Visit us', href: '#visit' },
  ];

  return (
    <footer className="footer">
      <div className="section-inner">
        <div className="footer-top">
          <div>
            <a
              className="footer-brand"
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('#top');
              }}
            >
              LOHIA<span>AYURVEDIC PHARMACY</span>
            </a>
            <p>
              A familiar name in Ayurvedic wellness.<br />
              Proudly rooted in Guwahati since 1988.
            </p>
          </div>

          <div className="footer-links">
            <span>EXPLORE</span>
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={onOpenEnquiry}
              className="footer-link-btn"
            >
              Medicine Enquiry
            </button>
          </div>

          <div className="footer-links">
            <span>FIND US</span>
            <p>Guwahati, Assam, India</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Lohia+Ayurvedic+Pharmacy+Guwahati"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View on Google Maps</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <button
              onClick={onOpenEnquiry}
              className="footer-link-btn text-[var(--gold)]"
            >
              WhatsApp Enquiry ↗
            </button>
          </div>
        </div>

        {/* Medical & Traditional Knowledge Advisory */}
        <div className="py-6 border-t border-[oklch(0.95_0.02_90_/_0.15)] text-[11px] text-[oklch(0.96_0.015_90_/_0.5)] leading-relaxed">
          <p className="m-0">
            <strong>Advisory Notice:</strong> Information provided across this website is for educational and cultural appreciation of traditional Ayurvedic literature. Classical medicines should be taken as recommended by your physician. Product availability, packaging, and details to be confirmed with Lohia Ayurvedic Pharmacy.
          </p>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} LOHIA AYURVEDIC PHARMACY</span>
          <span>MADE WITH RESPECT FOR NATURE & TRADITION</span>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('#top');
            }}
          >
            BACK TO TOP ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

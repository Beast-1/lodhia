import React from 'react';
import { ArrowUpRight, MapPin, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { SectionLabel } from './SectionLabel';

interface VisitStoreProps {
  onOpenEnquiry: () => void;
}

export const VisitStore: React.FC<VisitStoreProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="visit" className="visit-section section-pad">
      <div className="section-inner">
        <SectionLabel number="04">VISIT LOHIA</SectionLabel>
        <div className="visit-grid">
          <div className="visit-copy" data-reveal>
            <span className="small-kicker">OUR HOME, YOUR PHARMACY</span>
            <h2>
              Find us in<br />
              <em>Guwahati.</em>
            </h2>
            <p>
              Good care begins with a conversation. Come discover the Lohia pharmacy and its world of Ayurveda in the city we’ve called home since 1988.
            </p>
            <div className="visit-location">
              <MapPin size={21} strokeWidth={1.4} aria-hidden="true" />
              <span>Guwahati, Assam, India</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild variant="editorial" size="editorial">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Lohia+Ayurvedic+Pharmacy+Guwahati"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Find us on Google Maps</span>
                  <ArrowUpRight size={17} strokeWidth={1.6} aria-hidden="true" />
                </a>
              </Button>
              <button
                onClick={onOpenEnquiry}
                className="h-12 sm:h-14 px-6 text-[11px] uppercase tracking-[0.16em] font-semibold text-[var(--foreground)] border border-[var(--foreground)] bg-transparent hover:bg-[var(--foreground)] hover:text-[var(--ivory)] transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <MessageSquare size={15} aria-hidden="true" />
                <span>Contact Pharmacy</span>
              </button>
            </div>
          </div>

          <div className="storefront-space" data-reveal>
            <div className="storefront-inner">
              <span>LOHIA</span>
              <span>AYURVEDIC PHARMACY</span>
            </div>
            <div className="storefront-caption">
              <span>THE PHARMACY · GUWAHATI</span>
              <span>STORE PHOTOGRAPHY COMING SOON</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

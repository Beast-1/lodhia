import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import libraryImage from '../assets/library-botanicals.jpg';
import { Herb } from '../types';

interface AyurvedicLibraryProps {
  onSelectHerb: (herbId: string) => void;
  onOpenFullLibrary: () => void;
}

export const AyurvedicLibrary: React.FC<AyurvedicLibraryProps> = ({
  onSelectHerb,
  onOpenFullLibrary,
}) => {
  return (
    <section id="library" className="library-section section-pad">
      <div className="section-inner">
        <SectionLabel number="03">THE AYURVEDIC LIBRARY</SectionLabel>
        <div className="library-head" data-reveal>
          <div>
            <span className="small-kicker">AN OPEN BOOK OF NATURE</span>
            <h2>
              Every leaf has<br />
              <em>a story to tell.</em>
            </h2>
          </div>
          <p>
            A growing collection of the plants, herbs and ingredients that shape Ayurveda — their traditional uses, preparations, and the knowledge behind them.
          </p>
        </div>

        <div className="library-feature" data-reveal>
          <div className="library-image">
            <img
              src={libraryImage}
              alt="Botanical arrangement of tulsi, neem, amla, turmeric and ginger"
              loading="lazy"
              width={1408}
              height={1008}
            />
            <span className="image-index">BOTANICAL STUDIES / 001</span>
          </div>

          <div className="library-aside">
            <span className="aside-top">A FIELD GUIDE TO AYURVEDA</span>

            {/* Herb Entry 1: Tulsi */}
            <div
              className="library-entry"
              onClick={() => onSelectHerb('tulsi')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectHerb('tulsi');
                }
              }}
              aria-label="Inspect Tulsi botanical monograph"
            >
              <span>01 — PLANTS & HERBS</span>
              <h3>Tulsi</h3>
              <p>
                The revered holy basil, woven into daily life and traditional wellness practices.
              </p>
            </div>

            {/* Herb Entry 2: Turmeric / Ashwagandha */}
            <div
              className="library-entry"
              onClick={() => onSelectHerb('ashwagandha')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectHerb('ashwagandha');
                }
              }}
              aria-label="Inspect Ashwagandha botanical monograph"
            >
              <span>02 — ROOTS & INGREDIENTS</span>
              <h3>Ashwagandha</h3>
              <p>
                A grounding root with a lasting place in classical Ayurvedic rasayana tradition.
              </p>
            </div>

            {/* Open Full Compendium */}
            <button
              onClick={onOpenFullLibrary}
              className="aside-bottom"
              aria-label="Open complete Ayurvedic botanical compendium"
            >
              <span>MORE STORIES ARE TAKING ROOT</span>
              <ArrowRight size={20} strokeWidth={1.4} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="library-bottom">
          <span>PLANTS & HERBS&nbsp;&nbsp; · &nbsp;&nbsp;INGREDIENTS&nbsp;&nbsp; · &nbsp;&nbsp;TRADITIONAL KNOWLEDGE</span>
          <button
            onClick={onOpenFullLibrary}
            className="text-[9px] font-bold tracking-[0.13em] uppercase text-[var(--muted-foreground)] hover:text-[var(--terracotta)] bg-transparent border-none cursor-pointer transition-colors p-0"
          >
            THE LIBRARY IS GROWING (VIEW ALL FLORA →)
          </button>
        </div>
      </div>
    </section>
  );
};

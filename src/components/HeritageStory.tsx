import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import heritageImage from '../assets/heritage-still-life.jpg';

interface HeritageStoryProps {
  onExplorePharmacy: () => void;
}

export const HeritageStory: React.FC<HeritageStoryProps> = ({ onExplorePharmacy }) => {
  return (
    <section id="story" className="story-section section-pad">
      <div className="section-inner">
        <SectionLabel number="01">A LIVING LEGACY</SectionLabel>
        <div className="story-grid">
          <div className="story-copy" data-reveal>
            <span className="small-kicker">ROOTED IN GUWAHATI SINCE 1988</span>
            <h2>
              Wellness has always<br />
              been <em>in our nature.</em>
            </h2>
            <p className="lead">
              Some things are worth passing down. A belief in nature. A respect for time-honoured knowledge. And the care of a neighbourhood pharmacy that knows its community.
            </p>
            <p>
              Since 1988, Lohia Ayurvedic Pharmacy has been a part of Guwahati’s wellness story — bringing the wisdom of Ayurveda closer to everyday life.
            </p>
            <button
              onClick={onExplorePharmacy}
              className="text-link"
            >
              <span>Explore the pharmacy</span>
              <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
          <div className="story-visual" data-reveal>
            <div className="story-image-frame">
              <img
                src={heritageImage}
                alt="Traditional brass mortar and pestle with Ayurvedic herbs and roots"
                loading="lazy"
                width={1008}
                height={1264}
              />
            </div>
            <div className="story-year">
              <span>EST.</span>
              <strong>1988</strong>
              <span>GUWAHATI, INDIA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

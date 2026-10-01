import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import heroImage from '../assets/hero-botanicals.jpg';

interface HeroProps {
  onDiscover: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscover }) => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img
        className="hero-photo"
        src={heroImage}
        alt="Fresh Ayurvedic herbs, amla and turmeric arranged with a brass bowl"
        width={1600}
        height={1104}
        loading="eager"
      />
      <div className="hero-shade" />
      <div className="hero-content page-gutter">
        <div className="hero-eyebrow">
          <span className="eyebrow-line" aria-hidden="true" /> AN AYURVEDIC INSTITUTION · GUWAHATI, INDIA
        </div>
        <h1 id="hero-title">
          Ancient wisdom.<br />
          <em>Rooted in trust</em><br />
          since 1988.
        </h1>
        <p>
          Nature’s knowledge, thoughtfully carried forward. A familiar name in Ayurvedic wellness for generations.
        </p>
        <Button asChild variant="editorialLight" size="editorial">
          <a
            href="#story"
            onClick={(e) => {
              e.preventDefault();
              onDiscover();
            }}
          >
            <span>Discover Lohia</span>
            <ArrowUpRight size={17} strokeWidth={1.6} aria-hidden="true" />
          </a>
        </Button>
      </div>
      <div className="hero-bottom page-gutter">
        <span>EST. 1988 <span className="hero-bottom-divider" aria-hidden="true">/</span> GUWAHATI</span>
        <a
          href="#story"
          aria-label="Scroll to our story"
          onClick={(e) => {
            e.preventDefault();
            onDiscover();
          }}
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={14} aria-hidden="true" />
        </a>
        <span>01 / 05</span>
      </div>
    </section>
  );
};

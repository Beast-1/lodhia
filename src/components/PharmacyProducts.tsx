import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import productsImage from '../assets/products-still-life.jpg';

interface PharmacyProductsProps {
  onSelectCategory: (categoryName: string) => void;
  onOpenCatalogue: () => void;
}

export const PharmacyProducts: React.FC<PharmacyProductsProps> = ({
  onSelectCategory,
  onOpenCatalogue,
}) => {
  const categories = [
    {
      number: '01',
      title: 'Ayurvedic medicines',
      description: 'Traditional formulations for considered care',
      target: 'Asava & Arishta',
    },
    {
      number: '02',
      title: 'Herbs & botanicals',
      description: 'Ingredients from nature’s abundant pharmacy',
      target: 'Churna & Bhasma',
    },
    {
      number: '03',
      title: 'Everyday wellness',
      description: 'Rituals for a more balanced life',
      target: 'Daily Wellness',
    },
  ];

  return (
    <section id="pharmacy" className="products-section section-pad">
      <div className="section-inner">
        <SectionLabel number="02" light>THE PHARMACY</SectionLabel>
        <div className="products-heading" data-reveal>
          <h2>
            Wellness, the<br />
            <em>Ayurvedic way.</em>
          </h2>
          <p>
            A thoughtful world of traditional Ayurvedic medicines and everyday wellness essentials, guided by nature and generations of knowledge.
          </p>
        </div>
        <div className="products-grid">
          <div className="products-photo" data-reveal>
            <img
              src={productsImage}
              alt="Amber apothecary bottles with neem, amla and turmeric"
              loading="lazy"
              width={1264}
              height={960}
            />
            <button
              onClick={onOpenCatalogue}
              className="photo-caption cursor-pointer hover:bg-[var(--gold)] hover:text-[var(--primary)] transition-colors text-left w-full border-none"
            >
              <span>NATURE AT THE HEART OF IT ALL</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </button>
          </div>
          <div className="product-categories" data-reveal>
            <p className="category-intro">A CLOSER LOOK AT OUR WORLD</p>
            {categories.map((item) => (
              <div
                className="category-row"
                key={item.number}
                onClick={() => onSelectCategory(item.target)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectCategory(item.target);
                  }
                }}
                aria-label={`Browse ${item.title}`}
              >
                <span className="category-number">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <ArrowUpRight size={20} strokeWidth={1.2} aria-hidden="true" />
              </div>
            ))}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-6">
              <span className="products-footnote">
                Discover the pharmacy in person in Guwahati.
              </span>
              <button
                onClick={onOpenCatalogue}
                className="text-xs uppercase tracking-[0.14em] font-semibold text-[var(--gold)] hover:underline inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0 text-left"
              >
                <span>Browse Sample Catalogue</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

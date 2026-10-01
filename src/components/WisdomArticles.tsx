import React, { useState, useEffect } from 'react';
import { ARTICLES_DATA } from '../data/articlesData';
import { Article } from '../types';
import { ArrowUpRight, BookOpen, X, Info } from 'lucide-react';

export const WisdomArticles: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedArticle(null);
    };
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedArticle]);

  return (
    <section id="articles" className="py-18 lg:py-24 bg-[#FAF7F2] border-b border-[#0F281E]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-10 border-b border-[#0F281E]/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-semibold text-[#8C6D46] mb-2.5">
              <span>TRADITIONAL AYURVEDIC KNOWLEDGE</span>
              <span aria-hidden="true" className="text-[#8C6D46]/40">/</span>
              <span>EDUCATIONAL ARTICLES</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#0F281E] leading-[1.12]">
              Ayurvedic Literature & Heritage
            </h2>

            <p className="mt-2.5 text-sm sm:text-base text-[#4E5E54] max-w-xl">
              Educational discussions on classical medicine preparation traditions, Brahmaputra basin botany, and the foundational philosophical principles of Ayurveda.
            </p>
          </div>

          <div className="text-xs text-[#7B8C82] font-serif italic">
            Educational Compendium
          </div>
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {ARTICLES_DATA.map((article) => (
            <article
              key={article.id}
              className="bg-[#F4EFE6] border border-[#0F281E]/15 p-5 flex flex-col justify-between group hover:border-[#8C6D46] transition-all cursor-pointer focus-within:ring-2 focus-within:ring-[#8C6D46]"
              onClick={() => setSelectedArticle(article)}
            >
              <div>
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden mb-4 border border-[#0F281E]/10 image-editorial-wrap">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    width="600"
                    height="375"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Metadata */}
                <div className="flex items-center gap-2 text-xs text-[#8C6D46] font-semibold tracking-wider uppercase mb-2">
                  <span>{article.category}</span>
                  <span aria-hidden="true" className="text-[#8C6D46]/40">·</span>
                  <span className="font-normal normal-case text-[#6B7C72]">{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-[#0F281E] font-medium leading-snug group-hover:text-[#B4533C] transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-2.5 text-xs sm:text-sm text-[#4E5E54] leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Read Action */}
              <div className="mt-5 pt-3.5 border-t border-[#0F281E]/10 flex items-center justify-between">
                <span className="text-xs font-serif italic text-[#728379]">
                  {article.publishedDate}
                </span>

                <button
                  type="button"
                  className="text-xs uppercase tracking-wider font-semibold text-[#0F281E] group-hover:text-[#B4533C] flex items-center gap-1 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedArticle(article);
                  }}
                  aria-label={`Read article: ${article.title}`}
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#08150E]/80 backdrop-blur-xs overflow-y-auto"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#FAF7F2] border border-[#C5A572]/40 shadow-2xl my-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="bg-[#0E241B] text-[#FAF7F2] px-5 sm:px-6 py-4 flex items-center justify-between border-b border-[#C5A572]/30">
              <span className="text-xs uppercase tracking-[0.18em] text-[#C5A572]">
                {selectedArticle.category} · Educational Article
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1 text-[#C4D0C9] hover:text-[#FAF7F2] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C5A572] rounded-xs"
                aria-label="Close article"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Article Content */}
            <div className="p-5 sm:p-8 max-h-[78vh] overflow-y-auto">
              <div className="text-xs text-[#8C6D46] uppercase tracking-widest font-semibold">
                {selectedArticle.publishedDate} · {selectedArticle.readTime}
              </div>
              <h2 id="article-modal-title" className="font-serif text-3xl sm:text-4xl text-[#0F281E] font-normal mt-2 leading-tight">
                {selectedArticle.title}
              </h2>
              <div className="text-sm font-serif italic text-[#6B7C72] mt-1.5 pb-4 border-b border-[#0F281E]/10">
                Source: {selectedArticle.author}
              </div>

              <div className="aspect-[16/9] overflow-hidden my-5 border border-[#0F281E]/10">
                <img
                  src={selectedArticle.imageUrl}
                  alt={selectedArticle.title}
                  width="800"
                  height="450"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose max-w-none text-sm sm:text-base text-[#3A4940] leading-relaxed space-y-4">
                <p className="font-serif text-lg text-[#0F281E] italic leading-relaxed">
                  {selectedArticle.subtitle}
                </p>
                <p>
                  {selectedArticle.excerpt}
                </p>
                <p>
                  In the classical texts of Ayurveda, plant properties are meticulously systematized through five fundamental concepts: Rasa (taste), Guna (quality), Virya (thermal potential), Vipaka (post-digestive effect), and Prabhava (specific distinct action).
                </p>
                <p>
                  Classical preparation techniques (such as Kashaya decoctions, Sneha Paka lipid infusions, and Sandhana bio-fermentations) are designed to preserve the active water-soluble, alcohol-soluble, and lipid-soluble principles of botanicals in a shelf-stable manner.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0F281E]/10 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 bg-[#0F281E] text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold cursor-pointer focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

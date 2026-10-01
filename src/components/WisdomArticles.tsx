import React, { useState } from 'react';
import { ARTICLES_DATA } from '../data/articlesData';
import { Article } from '../types';
import { ArrowUpRight, BookOpen, Clock, X } from 'lucide-react';

export const WisdomArticles: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="articles" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#0F281E]/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#8C6D46] mb-3">
              <span>LIVING AYURVEDIC WISDOM</span>
              <span aria-hidden="true" className="text-[#8C6D46]/40">/</span>
              <span>PHARMACY ARCHIVE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#0F281E] leading-[1.12]">
              Chronicles from the Dispensary
            </h2>

            <p className="mt-3 text-sm sm:text-base text-[#4E5E54] max-w-xl">
              Reflections on classical medicine-making, Brahmaputra valley flora, and the profound science of cellular rejuvenation (Rasayana).
            </p>
          </div>

          <div className="text-xs text-[#7B8C82] font-serif italic">
            Curated by the Vaidyas of Lohia Pharmacy, Guwahati
          </div>
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES_DATA.map((article) => (
            <article
              key={article.id}
              className="bg-[#F4EFE6] border border-[#0F281E]/15 p-5 flex flex-col justify-between group hover:border-[#8C6D46] transition-all cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              <div>
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden mb-4 border border-[#0F281E]/10 image-editorial-wrap">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
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
                <p className="mt-3 text-xs sm:text-sm text-[#4E5E54] leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Read Action */}
              <div className="mt-6 pt-4 border-t border-[#0F281E]/10 flex items-center justify-between">
                <span className="text-xs font-serif italic text-[#728379]">
                  By {article.author}
                </span>

                <span className="text-xs uppercase tracking-wider font-semibold text-[#0F281E] group-hover:text-[#B4533C] flex items-center gap-1 transition-colors">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#08150E]/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#FAF7F2] border border-[#C5A572]/40 shadow-2xl my-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="bg-[#0E241B] text-[#FAF7F2] px-6 py-4 flex items-center justify-between border-b border-[#C5A572]/30">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A572]">
                {selectedArticle.category} · Lohia Editorial
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1 text-[#C4D0C9] hover:text-[#FAF7F2] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto">
              <div className="text-xs text-[#8C6D46] uppercase tracking-widest font-semibold">
                {selectedArticle.publishedDate} · {selectedArticle.readTime}
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0F281E] font-normal mt-2 leading-tight">
                {selectedArticle.title}
              </h2>
              <div className="text-sm font-serif italic text-[#6B7C72] mt-2 pb-6 border-b border-[#0F281E]/10">
                Author: {selectedArticle.author} · Dispensary Archives, Guwahati
              </div>

              <div className="aspect-[16/9] overflow-hidden my-6 border border-[#0F281E]/10">
                <img
                  src={selectedArticle.imageUrl}
                  alt={selectedArticle.title}
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
                  In the traditional texts of Charaka and Vagbhata, great care is taken to explain that plants are not mere chemical assemblages of raw molecules; they are living manifestations of Soma (lunar nurturing energy) and Agni (solar metabolic fire). When grown in the nutrient-dense soils of the Brahmaputra alluvial basin, surrounded by pristine mist and dense seasonal monsoons, these plants concentrate an extraordinary spectrum of bioactive rasas.
                </p>
                <p>
                  At Lohia Ayurvedic Pharmacy, our medicine preparation mirrors these classical dictums. We do not extract isolated chemicals using petrochemical solvents. Instead, we use cold-pressed black sesame oil, indigenous Gir cow ghee, raw unprocessed honey, and slow boiling in tin-coated brass vessels to coax out the plant's complete healing spectrum.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#0F281E]/10 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2 bg-[#0F281E] text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold cursor-pointer"
                >
                  Close Reading
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

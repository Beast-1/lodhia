import React, { useState } from 'react';
import { FORMULATIONS_DATA } from '../data/productsData';
import { Formulation } from '../types';
import { ProductDetailModal } from './ProductDetailModal';
import { Search, ArrowUpRight, MessageSquare, BookOpen, ShieldCheck } from 'lucide-react';

interface ProductsShowcaseProps {
  onOpenPrescription: () => void;
}

export const ProductsShowcase: React.FC<ProductsShowcaseProps> = ({ onOpenPrescription }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeProduct, setActiveProduct] = useState<Formulation | null>(null);

  const categories = [
    'All',
    'Asava & Arishta',
    'Medicated Oils',
    'Rasayana',
    'Churna & Bhasma',
    'Daily Wellness',
  ];

  const filteredProducts = FORMULATIONS_DATA.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sanskritName.includes(searchTerm) ||
      item.indication.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppOrder = (productName: string) => {
    const message = encodeURIComponent(
      `Hello Lohia Ayurvedic Pharmacy Guwahati,\nI would like to inquire about procuring: "${productName}". Please let me know the availability, price, and dispatch to my location.`
    );
    window.open(`https://wa.me/919435019888?text=${message}`, '_blank');
  };

  return (
    <section id="formulations" className="py-20 lg:py-28 bg-[#F4EFE6] border-t border-[#0F281E]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 border-b border-[#0F281E]/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#8C6D46] mb-3">
              <span>DISPENSARY FORMULATIONS</span>
              <span aria-hidden="true" className="text-[#8C6D46]/40">/</span>
              <span>ESTD. 1988 GUWAHATI</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#0F281E] leading-[1.12]">
              Classical Ayurvedic Medicines
            </h2>

            <p className="mt-3 text-sm sm:text-base text-[#4E5E54] max-w-xl">
              Authentic Shastriya preparations formulated according to Charaka Samhita, Bhaishajya Ratnavali, and Sharangadhara Samhita. Available at our Guwahati counter and through certified doorstep dispatch.
            </p>
          </div>

          {/* Quick Prescription Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPrescription}
              className="px-5 py-3 bg-[#0F281E] hover:bg-[#183F2F] text-[#FAF7F2] text-xs uppercase tracking-[0.16em] font-semibold transition-all flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C5A572]" />
              <span>Have a Vaidya's Prescription?</span>
            </button>
          </div>
        </div>

        {/* Filter Toolbar: Category Tabs + Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10">
          {/* Functional Button Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#FAF7F2] border border-[#0F281E]/15">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0F281E] text-[#FAF7F2]'
                    : 'text-[#47574D] hover:text-[#0F281E]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, Rogadhikar (ailment), herb..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-80 text-xs px-3.5 py-2.5 bg-[#FAF7F2] border border-[#0F281E]/20 text-[#0F281E] placeholder:text-[#88978E] focus:outline-none focus:border-[#0F281E]"
            />
            <Search className="w-4 h-4 text-[#88978E] absolute right-3 top-2.5" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#FAF7F2] border border-[#0F281E]/15 p-4 flex flex-col justify-between group hover:border-[#8C6D46] transition-all hover:shadow-sm"
            >
              <div>
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden border border-[#0F281E]/10 mb-4 bg-[#EDE5D6] image-editorial-wrap">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Subtitle / Category */}
                <div className="flex items-center justify-between text-[11px] text-[#8C6D46] mb-1 font-semibold tracking-wider uppercase">
                  <span>{product.category}</span>
                  <span className="font-serif italic normal-case text-[#6B7B71]">{product.size}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-[#0F281E] font-medium leading-snug">
                  {product.name}
                </h3>
                <div className="text-xs font-serif text-[#B4533C] mt-0.5">
                  {product.sanskritName}
                </div>

                {/* Indication */}
                <div className="mt-3 pt-3 border-t border-[#0F281E]/10">
                  <div className="text-[10px] uppercase tracking-wider text-[#6B7C72]">
                    Classical Indication
                  </div>
                  <p className="text-xs text-[#2C3831] line-clamp-2 mt-0.5">
                    {product.indication}
                  </p>
                </div>

                {/* Classical Reference */}
                <div className="text-[11px] text-[#7A8A80] italic font-serif mt-2">
                  {product.classicalText}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-5 pt-3 border-t border-[#0F281E]/10 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveProduct(product)}
                  className="text-xs font-medium text-[#0F281E] hover:text-[#B4533C] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#8C6D46]" />
                  <span>Inspect Details</span>
                </button>

                <button
                  onClick={() => handleWhatsAppOrder(product.name)}
                  className="p-2 text-[#0F281E] hover:text-[#B4533C] transition-colors cursor-pointer"
                  title="Inquire via WhatsApp"
                  aria-label={`Inquire about ${product.name} on WhatsApp`}
                >
                  <MessageSquare className="w-4 h-4 text-[#8C6D46]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-16 text-center bg-[#FAF7F2] border border-[#0F281E]/10 p-8">
            <p className="font-serif text-xl text-[#0F281E]">
              No formulation found matching your search.
            </p>
            <p className="text-xs text-[#6B7C72] mt-1 max-w-md mx-auto">
              Our Guwahati dispensary stocks over 450 classical preparations including rare Bhasmas, Asavas, and custom Kwaths. Send us a message on WhatsApp for custom compounding.
            </p>
            <button
              onClick={onOpenPrescription}
              className="mt-4 px-6 py-2.5 bg-[#0F281E] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold cursor-pointer"
            >
              Inquire with Dispensary Team
            </button>
          </div>
        )}

        {/* Bottom Dispensary Quality Guarantee */}
        <div className="mt-14 p-6 bg-[#0E241B] text-[#FAF7F2] border border-[#C5A572]/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#C5A572]/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#C5A572]" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-[#C5A572] font-semibold">
                Guaranteed Shastriya Pharmacopoeia
              </div>
              <p className="text-xs text-[#C4D0C9] mt-0.5">
                Every Asava is tested for self-generated natural alcohol levels. Medicated oils are prepared strictly through Sneha Kalpana without cheap paraffin bases.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenPrescription}
            className="shrink-0 px-6 py-2.5 bg-[#C5A572] hover:bg-[#B38E55] text-[#0A1A13] text-xs uppercase tracking-[0.16em] font-bold transition-colors cursor-pointer"
          >
            Prescription Dispatch Service
          </button>
        </div>
      </div>

      {/* Modal */}
      {activeProduct && (
        <ProductDetailModal
          product={activeProduct}
          onClose={() => setActiveProduct(null)}
          onOrderViaWhatsApp={handleWhatsAppOrder}
        />
      )}
    </section>
  );
};

import React, { useState } from 'react';
import { FORMULATIONS_DATA } from '../data/productsData';
import { Formulation } from '../types';
import { ProductDetailModal } from './ProductDetailModal';
import { Search, MessageSquare, BookOpen, Info, ShieldCheck } from 'lucide-react';

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
      `Hello Lohia Ayurvedic Pharmacy,\nI would like to enquire about the availability and price of: "${productName}". Please let me know if it is currently in stock.`
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <section id="formulations" className="py-18 lg:py-24 bg-[#F4EFE6] border-b border-[#0F281E]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 border-b border-[#0F281E]/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-semibold text-[#8C6D46] mb-2.5">
              <span>PRODUCTS & FORMULATIONS</span>
              <span aria-hidden="true" className="text-[#8C6D46]/40">/</span>
              <span>SAMPLE PREVIEW CATALOGUE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#0F281E] leading-[1.12]">
              Traditional Ayurvedic Products
            </h2>

            <p className="mt-2.5 text-sm sm:text-base text-[#4E5E54] max-w-xl">
              An illustrative preview of classical Ayurvedic formulations and herbal wellness products stocked by traditional pharmacies. Specific brands, prices, and stock availability to be verified with our Guwahati store.
            </p>
          </div>

          {/* Quick Prescription Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPrescription}
              className="px-5 py-3 bg-[#0F281E] hover:bg-[#183F2F] text-[#FAF7F2] text-xs uppercase tracking-[0.14em] font-semibold transition-all flex items-center gap-2 shadow-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C5A572]" aria-hidden="true" />
              <span>Have a Prescription or Enquiry?</span>
            </button>
          </div>
        </div>

        {/* Sample Notice */}
        <div className="mb-8 p-3.5 bg-[#FAF7F2] border border-[#0F281E]/10 text-xs text-[#5D6D63] flex items-center gap-2">
          <Info className="w-4 h-4 text-[#8C6D46] shrink-0" aria-hidden="true" />
          <span>
            <strong>Note on Catalogue:</strong> The medicines shown below represent classical formulas from standard Ayurvedic texts. Lohia Ayurvedic Pharmacy acts as a retail stockist and supplier of certified Ayurvedic brands. Contact us to verify brand names and current inventory.
          </span>
        </div>

        {/* Filter Toolbar: Category Tabs + Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          {/* Functional Button Tabs */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-[#FAF7F2] border border-[#0F281E]/15">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#8C6D46] ${
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
            <label htmlFor="product-search-input" className="sr-only">Search products and formulations</label>
            <input
              id="product-search-input"
              type="text"
              placeholder="Search by name, classical category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-72 text-xs px-3.5 py-2.5 bg-[#FAF7F2] border border-[#0F281E]/20 text-[#0F281E] placeholder:text-[#88978E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
            />
            <Search className="w-4 h-4 text-[#88978E] absolute right-3 top-2.5 pointer-events-none" aria-hidden="true" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#FAF7F2] border border-[#0F281E]/15 p-4 flex flex-col justify-between group hover:border-[#8C6D46] transition-all hover:shadow-xs"
            >
              <div>
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden border border-[#0F281E]/10 mb-3 bg-[#EDE5D6] image-editorial-wrap">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    width="400"
                    height="300"
                    loading="lazy"
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
                <div className="mt-2.5 pt-2.5 border-t border-[#0F281E]/10">
                  <div className="text-[10px] uppercase tracking-wider text-[#6B7C72]">
                    Classical Context
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
              <div className="mt-4 pt-3 border-t border-[#0F281E]/10 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveProduct(product)}
                  className="text-xs font-medium text-[#0F281E] hover:text-[#B4533C] flex items-center gap-1 cursor-pointer transition-colors focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#8C6D46]" aria-hidden="true" />
                  <span>Inspect Details</span>
                </button>

                <button
                  onClick={() => handleWhatsAppOrder(product.name)}
                  className="p-2 text-[#0F281E] hover:text-[#B4533C] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#8C6D46] rounded-xs"
                  title="Enquire on WhatsApp"
                  aria-label={`Enquire about ${product.name} on WhatsApp`}
                >
                  <MessageSquare className="w-4 h-4 text-[#8C6D46]" aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-12 text-center bg-[#FAF7F2] border border-[#0F281E]/10 p-6">
            <p className="font-serif text-xl text-[#0F281E]">
              No formulation found matching your search.
            </p>
            <p className="text-xs text-[#6B7C72] mt-1 max-w-md mx-auto">
              Looking for a specific classical medicine or herb? Send an inquiry directly to our pharmacy counter to check availability.
            </p>
            <button
              onClick={onOpenPrescription}
              className="mt-4 px-6 py-2.5 bg-[#0F281E] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold cursor-pointer focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
            >
              Send Medicine Enquiry
            </button>
          </div>
        )}
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

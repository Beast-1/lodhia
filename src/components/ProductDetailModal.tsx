import React, { useEffect } from 'react';
import { Formulation } from '../types';
import { X, MessageSquare, Info, ShieldCheck } from 'lucide-react';

interface ProductDetailModalProps {
  product: Formulation | null;
  onClose: () => void;
  onOrderViaWhatsApp: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOrderViaWhatsApp,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#08150E]/80 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#FAF7F2] border border-[#C5A572]/40 shadow-2xl my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#0E241B] text-[#FAF7F2] px-5 sm:px-6 py-4 flex items-center justify-between border-b border-[#C5A572]/30">
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg text-[#C5A572]">{product.sanskritName}</span>
            <span className="text-[#C5A572]/40" aria-hidden="true">/</span>
            <span className="text-xs uppercase tracking-[0.16em] text-[#EFE8DC]">
              Classical Formulation Profile (Sample Preview)
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#C4D0C9] hover:text-[#FAF7F2] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C5A572] rounded-xs"
            aria-label="Close formulation details"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8 max-h-[78vh] overflow-y-auto">
          {/* Sample Catalogue Notice */}
          <div className="mb-5 p-3 bg-[#F4EFE6] border-l-3 border-[#8C6D46] text-xs text-[#526359] flex items-start gap-2">
            <Info className="w-4 h-4 text-[#8C6D46] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong>Sample Catalogue Notice:</strong> Formulation details, indications, and dosages are for illustrative and educational reference. Specific brands, prices, sizes, and stock availability must be verified directly with Lohia Ayurvedic Pharmacy.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-6 border-b border-[#0F281E]/10">
            {/* Image */}
            <div className="md:col-span-5">
              <div className="aspect-[4/5] overflow-hidden border border-[#0F281E]/15 bg-[#EFE9DF]">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  width="400"
                  height="500"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2 text-center">
                <span className="text-[11px] uppercase tracking-wider text-[#6B7C72]">
                  Packaging format: {product.size}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="md:col-span-7">
              <div className="text-xs uppercase tracking-widest text-[#B4533C] font-semibold">
                {product.category} · {product.form}
              </div>

              <h2 id="product-modal-title" className="font-serif text-3xl text-[#0F281E] mt-1 font-medium">
                {product.name}
              </h2>

              <div className="text-sm font-serif italic text-[#8C6D46] mt-0.5">
                Classical Text: {product.classicalText}
              </div>

              <div className="mt-3.5 p-3 bg-[#F4EFE6] border-l-2 border-[#8C6D46]">
                <div className="text-[10px] uppercase tracking-wider text-[#8C6D46] font-semibold">
                  Traditional Classical Indication
                </div>
                <div className="text-xs sm:text-sm text-[#0F281E] font-medium mt-0.5">
                  {product.indication}
                </div>
              </div>

              <p className="mt-3.5 text-xs sm:text-sm text-[#3E4E44] leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Key Botanicals */}
          <div className="py-5 border-b border-[#0F281E]/10">
            <div className="text-xs uppercase tracking-[0.16em] text-[#8C6D46] font-semibold mb-2.5">
              Principal Classical Botanicals
            </div>

            <div className="flex flex-wrap gap-2">
              {product.keyIngredients.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs text-[#2C3831] bg-[#F4EFE6] border border-[#0F281E]/10 px-3 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Anupana & Dosage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5">
            <div className="bg-[#FAF7F2] p-3.5 border border-[#0F281E]/10">
              <div className="text-[11px] uppercase tracking-wider text-[#6B7C72] font-semibold">
                Traditional Anupana (Adjuvant)
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#0F281E] mt-1">
                {product.anupana}
              </div>
            </div>

            <div className="bg-[#FAF7F2] p-3.5 border border-[#0F281E]/10">
              <div className="text-[11px] uppercase tracking-wider text-[#6B7C72] font-semibold">
                Usage Guidelines
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#0F281E] mt-1">
                {product.dosage}
              </div>
            </div>
          </div>

          {/* Assurance Note */}
          <div className="bg-[#0E241B] text-[#FAF7F2] p-4 text-xs flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C5A572] shrink-0" aria-hidden="true" />
            <span className="text-[#EFE8DC]">
              Classical formulations are sourced from licensed Ayurvedic manufacturers. Stocked and provided at Lohia Ayurvedic Pharmacy, Guwahati.
            </span>
          </div>
        </div>

        {/* Action Bar */}
        <div className="bg-[#F4EFE6] px-5 sm:px-6 py-4 border-t border-[#0F281E]/10 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#526359]">
            Enquire directly with our Guwahati pharmacy counter for stock and pricing.
          </div>

          <button
            onClick={() => onOrderViaWhatsApp(product.name)}
            className="px-5 py-2.5 bg-[#0F281E] hover:bg-[#183F2F] text-[#FAF7F2] text-xs uppercase tracking-[0.14em] font-semibold transition-all flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#C5A572]" aria-hidden="true" />
            <span>Check Availability on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

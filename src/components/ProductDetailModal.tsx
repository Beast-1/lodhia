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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[oklch(0.16_0.029_146_/_0.85)] backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[var(--ivory)] border border-[var(--border)] shadow-2xl my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[var(--primary)] text-[var(--ivory)] px-6 py-4 flex items-center justify-between border-b border-[var(--gold)]/30">
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-display)] text-xl text-[var(--gold)] font-medium">{product.sanskritName}</span>
            <span className="text-[var(--gold)]/40" aria-hidden="true">/</span>
            <span className="text-xs uppercase tracking-[0.16em] text-[var(--ivory)]/90">
              Classical Formulation Profile
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[var(--ivory)]/70 hover:text-[var(--ivory)] transition-colors cursor-pointer bg-transparent border-none"
            aria-label="Close formulation details"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[78vh] overflow-y-auto bg-[var(--ivory)]">
          {/* Sample Catalogue Notice */}
          <div className="mb-5 p-3.5 bg-[var(--accent)]/30 border-l-3 border-[var(--terracotta)] text-xs text-[var(--foreground)] flex items-start gap-2">
            <Info size={16} className="text-[var(--terracotta)] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong>Sample Catalogue Notice:</strong> Formulation details, indications, and traditional usages are for educational reference. Specific brands, prices, sizes, and stock availability must be verified directly with Lohia Ayurvedic Pharmacy.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-6 border-b border-[var(--border)]">
            {/* Image */}
            <div className="md:col-span-5">
              <div className="aspect-[4/5] overflow-hidden border border-[var(--border)] bg-[var(--muted)]">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  width="400"
                  height="500"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2.5 text-center">
                <span className="text-[11px] uppercase tracking-wider text-[var(--muted-foreground)] font-semibold">
                  Packaging format: {product.size}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="md:col-span-7">
              <div className="text-xs uppercase tracking-widest text-[var(--terracotta)] font-bold">
                {product.category} · {product.form}
              </div>

              <h2 id="product-modal-title" className="font-[family-name:var(--font-display)] text-3xl text-[var(--foreground)] mt-1 font-medium m-0">
                {product.name}
              </h2>

              <div className="text-sm font-serif italic text-[var(--olive)] mt-0.5">
                Classical Text: {product.classicalText}
              </div>

              <div className="mt-4 p-3.5 bg-[var(--background)] border-l-2 border-[var(--olive)]">
                <div className="text-[10px] uppercase tracking-wider text-[var(--olive)] font-bold">
                  Traditional Classical Indication
                </div>
                <div className="text-xs sm:text-sm text-[var(--foreground)] font-medium mt-0.5 leading-relaxed">
                  {product.indication}
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Key Botanicals */}
          <div className="py-5 border-b border-[var(--border)]">
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--olive)] font-bold mb-2.5">
              Principal Classical Botanicals
            </div>

            <div className="flex flex-wrap gap-2">
              {product.keyIngredients.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs text-[var(--foreground)] bg-[var(--background)] border border-[var(--border)] px-3 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Anupana & Dosage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 border-b border-[var(--border)]">
            <div className="bg-[var(--background)] p-3.5 border border-[var(--border)]">
              <div className="text-[10px] uppercase tracking-wider text-[var(--muted-foreground)] font-bold">
                Traditional Anupana (Adjuvant)
              </div>
              <div className="text-xs sm:text-sm font-medium text-[var(--foreground)] mt-1">
                {product.anupana}
              </div>
            </div>

            <div className="bg-[var(--background)] p-3.5 border border-[var(--border)]">
              <div className="text-[10px] uppercase tracking-wider text-[var(--muted-foreground)] font-bold">
                Usage Guidelines
              </div>
              <div className="text-xs sm:text-sm font-medium text-[var(--foreground)] mt-1">
                {product.dosage}
              </div>
            </div>
          </div>

          {/* Assurance Note */}
          <div className="mt-5 bg-[var(--primary)] text-[var(--ivory)] p-4 text-xs flex items-center gap-3">
            <ShieldCheck size={20} className="text-[var(--gold)] shrink-0" aria-hidden="true" />
            <span className="text-[var(--ivory)]/90">
              Classical formulations are sourced from licensed Ayurvedic manufacturers. Stocked and provided at Lohia Ayurvedic Pharmacy, Guwahati.
            </span>
          </div>
        </div>

        {/* Action Bar */}
        <div className="bg-[var(--background)] px-6 py-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[var(--muted-foreground)]">
            Enquire directly with our Guwahati pharmacy counter for stock and pricing.
          </div>

          <button
            onClick={() => onOrderViaWhatsApp(product.name)}
            className="px-6 py-2.5 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--ivory)] text-xs uppercase tracking-[0.14em] font-semibold transition-all flex items-center gap-2 cursor-pointer border-none"
          >
            <MessageSquare size={14} className="text-[var(--gold)]" aria-hidden="true" />
            <span>Check Availability on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

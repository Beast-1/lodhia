import React, { useState, useEffect } from 'react';
import { X, Search, BookOpen, MessageSquare, ArrowUpRight, Info } from 'lucide-react';
import { FORMULATIONS_DATA } from '../data/productsData';
import { Formulation } from '../types';

interface CatalogueModalProps {
  isOpen: boolean;
  initialCategory?: string;
  onClose: () => void;
  onSelectProduct: (product: Formulation) => void;
  onOpenEnquiry: () => void;
}

export const CatalogueModal: React.FC<CatalogueModalProps> = ({
  isOpen,
  initialCategory = 'All',
  onClose,
  onSelectProduct,
  onOpenEnquiry,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="catalogue-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[oklch(0.16_0.029_146_/_0.85)] backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[var(--ivory)] border border-[var(--border)] shadow-2xl my-6 overflow-hidden flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[var(--primary)] text-[var(--ivory)] px-6 py-5 flex items-center justify-between border-b border-[var(--gold)]/30">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold)] font-bold">
              EST. 1988 · GUWAHATI, ASSAM
            </div>
            <h2 id="catalogue-title" className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-[var(--ivory)] font-normal m-0 mt-0.5">
              Traditional Formulations Catalogue
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[var(--ivory)]/70 hover:text-[var(--ivory)] transition-colors cursor-pointer bg-transparent border-none"
            aria-label="Close catalogue"
          >
            <X size={22} />
          </button>
        </div>

        {/* Toolbar */}
        <div className="p-5 sm:p-6 bg-[var(--background)] border-b border-[var(--border)] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] font-semibold transition-colors cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-[var(--primary)] text-[var(--ivory)] border-[var(--primary)]'
                    : 'bg-[var(--ivory)] text-[var(--foreground)] border-[var(--border)] hover:border-[var(--olive)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search formulations or herbs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64 text-xs px-3.5 py-2 bg-[var(--ivory)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--olive)]"
            />
            <Search size={14} className="text-[var(--muted-foreground)] absolute right-3 top-2.5 pointer-events-none" />
          </div>
        </div>

        {/* Sample Catalogue Notice */}
        <div className="px-6 py-2.5 bg-[var(--accent)]/30 border-b border-[var(--border)] text-[11px] text-[var(--foreground)] flex items-center gap-2">
          <Info size={14} className="text-[var(--terracotta)] shrink-0" />
          <span>
            Sample catalogue preview. Specific licensed brands, packaging, and in-store availability to be verified with Lohia Ayurvedic Pharmacy.
          </span>
        </div>

        {/* Grid */}
        <div className="p-6 overflow-y-auto flex-1 bg-[var(--ivory)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border border-[var(--border)] bg-[var(--background)] p-4 flex flex-col justify-between hover:border-[var(--olive)] transition-colors group cursor-pointer"
                onClick={() => onSelectProduct(product)}
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden border border-[var(--border)] mb-3 bg-[var(--muted)]">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      width={400}
                      height={300}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-[var(--terracotta)] uppercase tracking-wider font-bold mb-1">
                    <span>{product.category}</span>
                    <span className="text-[var(--muted-foreground)] normal-case font-normal italic">{product.size}</span>
                  </div>

                  <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--foreground)] font-medium m-0 leading-tight">
                    {product.name}
                  </h3>
                  <div className="text-xs text-[var(--olive)] font-serif mt-0.5">
                    {product.sanskritName}
                  </div>

                  <p className="text-xs text-[var(--muted-foreground)] mt-2.5 line-clamp-2 leading-relaxed">
                    {product.indication}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs">
                  <span className="text-[var(--foreground)] font-semibold flex items-center gap-1 group-hover:text-[var(--terracotta)] transition-colors">
                    <span>Inspect Details</span>
                    <ArrowUpRight size={14} />
                  </span>
                  <span className="text-[11px] text-[var(--muted-foreground)] italic font-serif">
                    {product.classicalText.split('/')[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-12 text-center">
              <p className="font-[family-name:var(--font-display)] text-xl text-[var(--foreground)] m-0">
                No formulation found matching your search.
              </p>
              <button
                onClick={onOpenEnquiry}
                className="mt-4 px-6 py-2.5 bg-[var(--primary)] text-[var(--ivory)] text-xs uppercase tracking-widest font-semibold cursor-pointer border-none"
              >
                Send Medicine Enquiry
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-[var(--background)] border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-[var(--muted-foreground)]">
            Looking for a specific classical preparation? We assist customers with custom requests.
          </span>
          <button
            onClick={onOpenEnquiry}
            className="px-5 py-2.5 bg-[var(--primary)] text-[var(--ivory)] text-[11px] uppercase tracking-[0.14em] font-semibold hover:bg-[var(--primary)]/90 transition-colors cursor-pointer border-none flex items-center gap-2"
          >
            <MessageSquare size={14} className="text-[var(--gold)]" />
            <span>Send Stock Enquiry</span>
          </button>
        </div>
      </div>
    </div>
  );
};

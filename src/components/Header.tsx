import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  onNavigate: (href: string) => void;
  onOpenEnquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Our story', href: '#story' },
    { label: 'The pharmacy', href: '#pharmacy' },
    { label: 'Ayurvedic library', href: '#library' },
    { label: 'Visit us', href: '#visit' },
  ];

  const handleLinkClick = (href: string) => {
    onNavigate(href);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      {/* Brand */}
      <a
        className="brand"
        href="#top"
        aria-label="Lohia Ayurvedic Pharmacy, back to top"
        onClick={(e) => {
          e.preventDefault();
          handleLinkClick('#top');
        }}
      >
        <span className="brand-mark" aria-hidden="true">✳</span>
        <span className="brand-type">
          <strong>LOHIA</strong>
          <small>AYURVEDIC PHARMACY</small>
        </span>
      </a>

      {/* Desktop Navigation */}
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            href={item.href}
            key={item.href}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(item.href);
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Header Right Action */}
      <div className="flex items-center gap-4 justify-self-end">
        <a
          className="header-visit"
          href="#visit"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#visit');
          }}
        >
          Find us in Guwahati <ArrowUpRight size={15} strokeWidth={1.7} aria-hidden="true" />
        </a>

        <button
          onClick={onOpenEnquiry}
          className="hidden xl:inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--terracotta)] hover:opacity-75 transition-opacity"
        >
          Enquire
        </button>
      </div>

      {/* Mobile Menu Toggle Button */}
      <Button
        className="mobile-menu-toggle"
        variant="ghost"
        size="icon"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.href);
              }}
            >
              <span>{item.label}</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              onOpenEnquiry();
            }}
            className="flex justify-between items-center text-[var(--foreground)] py-4 font-[family-name:var(--font-display)] text-2xl border-none bg-transparent text-left cursor-pointer"
          >
            <span>Medicine Enquiry</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </button>
        </nav>
      )}
    </header>
  );
};

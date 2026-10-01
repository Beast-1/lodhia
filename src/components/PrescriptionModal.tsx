import React, { useState, useEffect } from 'react';
import { X, Upload, MessageSquare, CheckCircle2, ShieldCheck, Info } from 'lucide-react';

interface PrescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrescriptionModal: React.FC<PrescriptionModalProps> = ({ isOpen, onClose }) => {
  const [inquirerName, setInquirerName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Guwahati');
  const [queryNotes, setQueryNotes] = useState('');
  const [fileUploaded, setFileUploaded] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileUploaded(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enquiryText =
      `*Lohia Ayurvedic Pharmacy - Product / Medicine Enquiry*\n\n` +
      `*Name:* ${inquirerName || 'Not specified'}\n` +
      `*Phone:* ${phone || 'Not specified'}\n` +
      `*Location:* ${city}\n` +
      `*Medicine / Product Required:* ${queryNotes || 'See attached prescription/slip'}\n` +
      `*Document Reference:* ${fileUploaded ? fileUploaded : 'Ready to share on chat'}\n\n` +
      `_Enquiry initiated via website. Please let me know stock availability and pricing._`;

    const encoded = encodeURIComponent(enquiryText);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[oklch(0.16_0.029_146_/_0.85)] backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[var(--ivory)] border border-[var(--border)] shadow-2xl my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[var(--primary)] text-[var(--ivory)] px-6 py-4 flex items-center justify-between border-b border-[var(--gold)]/30">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold)] font-bold">
              EST. 1988 · GUWAHATI, ASSAM
            </div>
            <h2 id="enquiry-modal-title" className="font-[family-name:var(--font-display)] text-xl text-[var(--ivory)] mt-0.5 m-0 font-normal">
              Product & Stock Enquiry
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[var(--ivory)]/70 hover:text-[var(--ivory)] transition-colors cursor-pointer bg-transparent border-none"
            aria-label="Close enquiry modal"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Modal Form */}
        <div className="p-6 sm:p-8 bg-[var(--ivory)]">
          {/* Important Advisory */}
          <div className="mb-5 p-3.5 bg-[var(--accent)]/30 border-l-3 border-[var(--terracotta)] text-xs text-[var(--foreground)] flex items-start gap-2.5">
            <Info size={16} className="text-[var(--terracotta)] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong>Enquiry Service:</strong> This is an availability and pricing enquiry workflow for classical Ayurvedic medicines and herbs. Lohia Ayurvedic Pharmacy is a retail pharmacy and does not provide emergency medical care.
            </div>
          </div>

          {isSubmitted ? (
            <div className="py-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-[var(--gold)] flex items-center justify-center mx-auto mb-3 border border-[var(--gold)]/30">
                <CheckCircle2 size={24} aria-hidden="true" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--foreground)] font-medium m-0">
                Enquiry Ready on WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-[var(--muted-foreground)] mt-2 max-w-md mx-auto leading-relaxed">
                Thank you, {inquirerName || 'patron'}. Your enquiry draft has been prepared to open directly in WhatsApp to send to Lohia Ayurvedic Pharmacy for stock checking and price confirmation.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 bg-[var(--primary)] text-[var(--ivory)] text-xs uppercase tracking-widest font-semibold cursor-pointer border-none"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="inquirer-name" className="block text-[11px] uppercase tracking-wider text-[var(--olive)] font-bold mb-1">
                  Your Name *
                </label>
                <input
                  id="inquirer-name"
                  type="text"
                  required
                  placeholder="e.g. D. Sharma"
                  value={inquirerName}
                  onChange={(e) => setInquirerName(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] focus:outline-none focus:border-[var(--olive)]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inquirer-phone" className="block text-[11px] uppercase tracking-wider text-[var(--olive)] font-bold mb-1">
                    Phone / Contact Number *
                  </label>
                  <input
                    id="inquirer-phone"
                    type="tel"
                    required
                    placeholder="e.g. Mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] focus:outline-none focus:border-[var(--olive)]"
                  />
                </div>

                <div>
                  <label htmlFor="inquirer-city" className="block text-[11px] uppercase tracking-wider text-[var(--olive)] font-bold mb-1">
                    City / Locality
                  </label>
                  <input
                    id="inquirer-city"
                    type="text"
                    placeholder="e.g. Guwahati or other"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] focus:outline-none focus:border-[var(--olive)]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="enquiry-notes" className="block text-[11px] uppercase tracking-wider text-[var(--olive)] font-bold mb-1">
                  Medicine Names or Products to Check
                </label>
                <textarea
                  id="enquiry-notes"
                  rows={3}
                  placeholder="List the classical Ayurvedic medicines, herbs, or products you are looking for..."
                  value={queryNotes}
                  onChange={(e) => setQueryNotes(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] focus:outline-none focus:border-[var(--olive)]"
                />
              </div>

              {/* Prescription Attachment */}
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[var(--olive)] font-bold mb-1">
                  Attach Prescription Slip / Medicine List (Optional)
                </span>
                <label className="relative block border-2 border-dashed border-[var(--border)] bg-[var(--background)] p-4 text-center cursor-pointer hover:border-[var(--olive)] transition-colors">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileUpload}
                    className="sr-only"
                  />
                  <div className="flex flex-col items-center justify-center gap-1.5">
                    <Upload size={18} className="text-[var(--olive)]" aria-hidden="true" />
                    <span className="text-xs text-[var(--foreground)] font-medium">
                      {fileUploaded ? fileUploaded : 'Tap to select photo of prescription or medicine slip'}
                    </span>
                    <span className="text-[10px] text-[var(--muted-foreground)]">
                      JPG, PNG, PDF up to 10MB
                    </span>
                  </div>
                </label>
              </div>

              {/* Privacy Notice */}
              <div className="p-3 bg-[var(--background)] border border-[var(--border)] text-[11px] text-[var(--muted-foreground)] flex items-start gap-2">
                <ShieldCheck size={16} className="text-[var(--olive)] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong>Privacy Safeguard:</strong> Any attached slip or medicine details are used solely to verify product stock with the pharmacy. We do not store or share personal health records.
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--ivory)] text-xs uppercase tracking-[0.16em] font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer border-none shadow-xs"
                >
                  <MessageSquare size={16} className="text-[var(--gold)]" aria-hidden="true" />
                  <span>Send Product Availability Enquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

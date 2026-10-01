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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#08150E]/80 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#FAF7F2] border border-[#C5A572]/40 shadow-2xl my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#0E241B] text-[#FAF7F2] px-5 sm:px-6 py-4 flex items-center justify-between border-b border-[#C5A572]/30">
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-[#C5A572] font-semibold">
              Lohia Ayurvedic Pharmacy · Guwahati (Estd. 1988)
            </div>
            <h2 id="enquiry-modal-title" className="font-serif text-lg text-[#FAF7F2] mt-0.5">
              Product & Medicine Stock Enquiry
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#C4D0C9] hover:text-[#FAF7F2] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C5A572] rounded-xs"
            aria-label="Close enquiry modal"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Form */}
        <div className="p-5 sm:p-8">
          {/* Important Advisory */}
          <div className="mb-5 p-3 bg-[#F4EFE6] border-l-3 border-[#8C6D46] text-xs text-[#4F5E55] flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#8C6D46] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong className="text-[#0F281E]">Enquiry Workflow Notice:</strong> This is a medicine stock and availability enquiry service. Lohia Ayurvedic Pharmacy is a retail pharmacy and does not provide emergency medical care or diagnosis. Always consult a qualified medical doctor or Vaidya for health advice.
            </div>
          </div>

          {isSubmitted ? (
            <div className="py-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#0E241B] text-[#C5A572] flex items-center justify-center mx-auto mb-3 border border-[#C5A572]/30">
                <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-2xl text-[#0F281E] font-medium">
                Enquiry Ready on WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-[#4E5E55] mt-2 max-w-md mx-auto leading-relaxed">
                Thank you, {inquirerName || 'patron'}. Your enquiry draft has been prepared to open directly in WhatsApp to send to Lohia Ayurvedic Pharmacy for stock checking and price confirmation.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 bg-[#0F281E] text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold cursor-pointer focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="inquirer-name" className="block text-[11px] uppercase tracking-wider text-[#8C6D46] font-semibold mb-1">
                  Your Name *
                </label>
                <input
                  id="inquirer-name"
                  type="text"
                  required
                  placeholder="e.g. D. Sharma"
                  value={inquirerName}
                  onChange={(e) => setInquirerName(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 bg-[#F4EFE6] border border-[#0F281E]/20 text-[#0F281E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inquirer-phone" className="block text-[11px] uppercase tracking-wider text-[#8C6D46] font-semibold mb-1">
                    Phone / Contact Number *
                  </label>
                  <input
                    id="inquirer-phone"
                    type="tel"
                    required
                    placeholder="e.g. Mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 bg-[#F4EFE6] border border-[#0F281E]/20 text-[#0F281E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
                  />
                </div>

                <div>
                  <label htmlFor="inquirer-city" className="block text-[11px] uppercase tracking-wider text-[#8C6D46] font-semibold mb-1">
                    City / Locality
                  </label>
                  <input
                    id="inquirer-city"
                    type="text"
                    placeholder="e.g. Guwahati or other"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 bg-[#F4EFE6] border border-[#0F281E]/20 text-[#0F281E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="enquiry-notes" className="block text-[11px] uppercase tracking-wider text-[#8C6D46] font-semibold mb-1">
                  Medicine Names or Products to Check
                </label>
                <textarea
                  id="enquiry-notes"
                  rows={3}
                  placeholder="List the classical Ayurvedic medicines, herbs, or products you are looking for..."
                  value={queryNotes}
                  onChange={(e) => setQueryNotes(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 bg-[#F4EFE6] border border-[#0F281E]/20 text-[#0F281E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
                />
              </div>

              {/* Prescription Attachment Zone */}
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#8C6D46] font-semibold mb-1">
                  Attach Prescription Slip / Medicine List (Optional)
                </span>
                <label className="relative block border-2 border-dashed border-[#0F281E]/20 bg-[#F4EFE6]/60 p-4 text-center cursor-pointer hover:bg-[#F4EFE6] transition-colors focus-within:ring-2 focus-within:ring-[#8C6D46]">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileUpload}
                    className="sr-only"
                  />
                  <div className="flex flex-col items-center justify-center gap-1.5">
                    <Upload className="w-5 h-5 text-[#8C6D46]" aria-hidden="true" />
                    <span className="text-xs text-[#2C3831] font-medium">
                      {fileUploaded ? fileUploaded : 'Tap to select photo of prescription or medicine slip'}
                    </span>
                    <span className="text-[10px] text-[#73847A]">
                      JPG, PNG, PDF up to 10MB
                    </span>
                  </div>
                </label>
              </div>

              {/* Privacy Notice */}
              <div className="p-3 bg-[#FAF7F2] border border-[#0F281E]/10 text-[11px] text-[#6A7B71] flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8C6D46] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong>Privacy Safeguard:</strong> Any attached slip or medicine details are used solely to check product availability with the pharmacy. We do not store or share personal health information.
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#0F281E] hover:bg-[#183F2F] text-[#FAF7F2] text-xs uppercase tracking-[0.14em] font-semibold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
                >
                  <MessageSquare className="w-4 h-4 text-[#C5A572]" aria-hidden="true" />
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

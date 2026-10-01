import React, { useState } from 'react';
import { X, Upload, MessageSquare, CheckCircle2, ShieldCheck, FileText, Phone } from 'lucide-react';

interface PrescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrescriptionModal: React.FC<PrescriptionModalProps> = ({ isOpen, onClose }) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Guwahati');
  const [notes, setNotes] = useState('');
  const [fileUploaded, setFileUploaded] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileUploaded(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const prescriptionText = `*Lohia Ayurvedic Pharmacy - Prescription Dispatch Request*\n\n` +
      `*Patient Name:* ${patientName || 'Not specified'}\n` +
      `*Contact Phone:* ${phone || 'Not specified'}\n` +
      `*City/Locality:* ${city}\n` +
      `*Medicines / Notes:* ${notes || 'Prescription attached/to be sent on chat'}\n` +
      `*Document Status:* ${fileUploaded ? `File prepared (${fileUploaded})` : 'Prescription image ready to attach'}\n\n` +
      `_Sent from Lohia Digital Flagship (Estd. 1988, Guwahati)_`;

    const encoded = encodeURIComponent(prescriptionText);
    window.open(`https://wa.me/919435019888?text=${encoded}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#08150E]/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#FAF7F2] border border-[#C5A572]/40 shadow-2xl my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#0E241B] text-[#FAF7F2] px-6 py-4 flex items-center justify-between border-b border-[#C5A572]/30">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#C5A572] font-semibold">
              Estd. 1988 · Guwahati Dispensary
            </div>
            <div className="font-serif text-lg text-[#FAF7F2] mt-0.5">
              Prescription Fulfillment & Vaidya Consultation
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#C4D0C9] hover:text-[#FAF7F2] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-8 text-center">
              <div className="w-14 h-14 rounded-full bg-[#0E241B] text-[#C5A572] flex items-center justify-center mx-auto mb-4 border border-[#C5A572]/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-[#0F281E] font-medium">
                Prescription Connected to WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-[#4E5E55] mt-2 max-w-md mx-auto leading-relaxed">
                Thank you, {patientName || 'esteemed patron'}. Your inquiry has opened directly with our Guwahati dispensary counter. Our registered pharmacist or Vaidya will confirm availability, dosage, and delivery timeline shortly.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 bg-[#0F281E] text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold cursor-pointer"
                >
                  Return to Compendium
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#526359] leading-relaxed">
                Send your Ayurvedic doctor’s prescription slip or list of required classical formulations directly to our dispensing team in Panbazar, Guwahati.
              </p>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#8C6D46] font-semibold mb-1">
                  Patient or Inquirer Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Baruah"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 bg-[#F4EFE6] border border-[#0F281E]/20 text-[#0F281E] focus:outline-none focus:border-[#0F281E]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#8C6D46] font-semibold mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 94350 XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 bg-[#F4EFE6] border border-[#0F281E]/20 text-[#0F281E] focus:outline-none focus:border-[#0F281E]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#8C6D46] font-semibold mb-1">
                    City / Delivery Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Guwahati (Beltola, Uzanbazar) or Other"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 bg-[#F4EFE6] border border-[#0F281E]/20 text-[#0F281E] focus:outline-none focus:border-[#0F281E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#8C6D46] font-semibold mb-1">
                  Required Formulations / Health Query
                </label>
                <textarea
                  rows={3}
                  placeholder="List medicines (e.g. Draksharishta, Mahanarayan Taila, Triphala) or health concern..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 bg-[#F4EFE6] border border-[#0F281E]/20 text-[#0F281E] focus:outline-none focus:border-[#0F281E]"
                />
              </div>

              {/* Prescription File Upload Zone */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#8C6D46] font-semibold mb-1">
                  Upload Prescription Slip (Image / PDF)
                </label>
                <div className="relative border-2 border-dashed border-[#0F281E]/20 bg-[#F4EFE6]/60 p-4 text-center cursor-pointer hover:bg-[#F4EFE6] transition-colors">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="flex flex-col items-center justify-center gap-1.5 pointer-events-none">
                    <Upload className="w-5 h-5 text-[#8C6D46]" />
                    <span className="text-xs text-[#2C3831] font-medium">
                      {fileUploaded ? fileUploaded : 'Tap to select or take photo of prescription'}
                    </span>
                    <span className="text-[10px] text-[#73847A]">
                      JPG, PNG, PDF up to 10MB
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-2 text-[11px] text-[#6A7B71] pt-1">
                <ShieldCheck className="w-4 h-4 text-[#8C6D46] shrink-0" />
                <span>Reviewed only by registered Ayurvedic pharmacists. Strict confidentiality.</span>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#0F281E] hover:bg-[#183F2F] text-[#FAF7F2] text-xs uppercase tracking-[0.16em] font-semibold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#C5A572]" />
                  <span>Send to Guwahati Dispensary via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

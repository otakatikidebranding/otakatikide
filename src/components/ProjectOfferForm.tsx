import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, ChevronDown, Send } from 'lucide-react';

export const ProjectOfferForm: React.FC = () => {
  const [nama, setNama] = useState('');
  const [budget, setBudget] = useState('');
  const [penjelasan, setPenjelasan] = useState('');
  const [kategori, setKategori] = useState('Logo & Visual Identity');
  const [isSending, setIsSending] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const kategoriOptions = [
    'Logo & Visual Identity',
    'Packaging / Label',
    'Rebranding Total',
    'Social Media Brand Kit',
  ];

  // Auto-resize textarea dynamically based on typed content
  const handlePenjelasanChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPenjelasan(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.max(38, textareaRef.current.scrollHeight)}px`;
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.max(38, textareaRef.current.scrollHeight)}px`;
    }
  }, [penjelasan]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const messageLines = [
      'Halo Admin Otakatikide, saya ingin mengajukan penawaran project:',
      '',
      `• *Nama / Brand*: ${nama.trim() ? nama.trim() : '-'}`,
      `• *Budget / Anggaran*: ${budget.trim() ? budget.trim() : '-'}`,
      `• *Kategori Layanan*: ${kategori}`,
      `• *Penjelasan Singkat*: ${penjelasan.trim() ? penjelasan.trim() : '-'}`,
      '',
      'Mohon informasi dan ketersediaannya, terima kasih!',
    ];

    const encodedText = encodeURIComponent(messageLines.join('\n'));
    const waUrl = `https://wa.me/6287719613858?text=${encodedText}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSending(false);
    }, 1500);
  };

  return (
    <div
      id="project-offer-form-section"
      className="w-full mt-4 p-4 sm:p-5 rounded-2xl bg-[#F5F5F7] border border-black text-left shadow-sm"
    >
      {/* Form Heading */}
      <div className="mb-3.5">
        <h3 className="text-black font-extrabold text-sm sm:text-[15px] leading-snug tracking-wider uppercase">
          AJUKAN PENAWARAN
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Field 1: Nama / Brand */}
        <div>
          <label
            htmlFor="input-nama-brand"
            className="block text-[10.5px] sm:text-[11px] font-bold tracking-wider text-black uppercase mb-1.5"
          >
            NAMA ANDA / BRAND
          </label>
          <input
            id="input-nama-brand"
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Contoh: Andi Wijaya / Kopi Nusantara"
            className="w-full min-h-[42px] bg-white border border-black/30 focus:border-black focus:ring-1 focus:ring-black text-black placeholder:text-gray-400 font-medium text-sm rounded-xl px-3.5 py-2.5 outline-none transition-all duration-150"
          />
        </div>

        {/* Field 2: Budget / Anggaran */}
        <div>
          <label
            htmlFor="input-budget"
            className="block text-[10.5px] sm:text-[11px] font-bold tracking-wider text-black uppercase mb-1.5"
          >
            BUDGET / ANGGARAN
          </label>
          <input
            id="input-budget"
            type="text"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Contoh: Rp.450.000"
            className="w-full min-h-[42px] bg-white border border-black/30 focus:border-black focus:ring-1 focus:ring-black text-black placeholder:text-gray-400 font-medium text-sm rounded-xl px-3.5 py-2.5 outline-none transition-all duration-150"
          />
        </div>

        {/* Field 3: Penjelasan Singkat */}
        <div>
          <label
            htmlFor="input-penjelasan"
            className="block text-[10.5px] sm:text-[11px] font-bold tracking-wider text-black uppercase mb-1.5"
          >
            PENJELASAN SINGKAT
          </label>
          <textarea
            ref={textareaRef}
            id="input-penjelasan"
            rows={1}
            value={penjelasan}
            onChange={handlePenjelasanChange}
            placeholder="Konsep, warna, lampiran file."
            className="w-full min-h-[42px] bg-white border border-black/30 focus:border-black focus:ring-1 focus:ring-black text-black placeholder:text-gray-400 font-medium text-sm rounded-xl px-3.5 py-2.5 outline-none transition-all duration-150 resize-none overflow-hidden leading-relaxed block"
          />
        </div>

        {/* Field 4: Kategori Layanan */}
        <div>
          <label
            htmlFor="select-kategori"
            className="block text-[10.5px] sm:text-[11px] font-bold tracking-wider text-black uppercase mb-1.5"
          >
            KATEGORI LAYANAN
          </label>
          <div className="relative">
            <select
              id="select-kategori"
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
              className="w-full min-h-[42px] appearance-none bg-white border border-black/30 focus:border-black focus:ring-1 focus:ring-black text-black font-medium text-sm rounded-xl px-3.5 py-2.5 pr-9 outline-none transition-all duration-150 cursor-pointer"
            >
              {kategoriOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-white text-black py-1">
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
          </div>
        </div>

        {/* Submit Button: Kirim via WhatsApp (Warna Senada dengan tombol lainnya) */}
        <button
          id="btn-kirim-whatsapp-offer"
          type="submit"
          disabled={isSending}
          className="w-full mt-2 py-3.5 px-4 rounded-xl bg-[#24113D] hover:bg-[#1B0B2E] active:scale-[0.98] text-white font-semibold text-xs sm:text-[13.5px] flex items-center justify-center gap-2.5 shadow-md shadow-[#24113D]/25 transition-all duration-150 cursor-pointer min-h-[46px]"
        >
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-white/10 text-white">
            <MessageCircle className="w-3.5 h-3.5" />
          </span>
          <span className="tracking-wide">{isSending ? 'Membuka WhatsApp...' : 'Kirim via WhatsApp'}</span>
        </button>
      </form>
    </div>
  );
};

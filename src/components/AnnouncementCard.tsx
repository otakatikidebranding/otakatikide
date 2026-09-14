import React, { useState } from 'react';
import { Globe, Tag, ChevronRight, ChevronDown, AlertTriangle, MessageCircle } from 'lucide-react';
import { ProjectOfferForm } from './ProjectOfferForm.tsx';

interface AnnouncementCardProps {
  onVisit?: () => void;
}

export const AnnouncementCard: React.FC<AnnouncementCardProps> = () => {
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const targetUrl = 'https://otakatikidebranding.github.io/profil';

  const promoList = [
    {
      kategori: 'Logo',
      harga: 'Rp.200.000',
      waText: 'Halo Admin Otakatikide, saya ingin ambil Promo Logo Rp.200.000',
    },
    {
      kategori: 'Label',
      harga: 'Rp.300.000',
      waText: 'Halo Admin Otakatikide, saya ingin ambil Promo Label Rp.300.000',
    },
    {
      kategori: 'Kemasan',
      harga: 'Rp.480.000',
      waText: 'Halo Admin Otakatikide, saya ingin ambil Promo Kemasan Rp.480.000',
    },
    {
      kategori: 'Sosmed',
      harga: 'Rp.280.000',
      waText: 'Halo Admin Otakatikide, saya ingin ambil Promo Sosmed Rp.280.000',
    },
  ];

  const handleOpenLink = () => {
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="announcement-story-card"
      className="relative w-full max-w-[430px] rounded-3xl sm:rounded-[36px] bg-gradient-to-b from-[#24133B] via-[#1C0E30] to-[#150926] p-4 sm:p-7 text-white shadow-2xl overflow-hidden border border-purple-900/30 select-none"
    >
      {/* Harmonious Subtle Ambient Glows */}
      <div
        className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-purple-600/10 pointer-events-none blur-2xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-indigo-600/10 pointer-events-none blur-2xl"
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Top Logo / Brand Title */}
        <header className="pt-1 sm:pt-2 pb-3.5 sm:pb-5 text-center">
          <h1
            id="brand-logo-text"
            className="text-white font-black text-xl sm:text-2xl tracking-[0.2em] sm:tracking-[0.22em] uppercase drop-shadow-sm font-sans"
          >
            OTAKATIKIDE
          </h1>
        </header>

        {/* Center Card - Clean, Elevated, Professional */}
        <div
          id="main-content-card"
          className="w-full bg-white text-[#1e293b] rounded-2xl sm:rounded-[28px] p-4 sm:p-6 shadow-xl shadow-black/25 flex flex-col items-center text-center transition-all duration-300 border border-slate-100"
        >
          {/* Badge: INFO PENTING 🚀 - Harmonious Lavender Tint */}
          <div
            id="badge-info-penting"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EBF9] text-[#4A2574] border border-[#E7D6F3] font-bold text-[11px] sm:text-xs tracking-wider uppercase mb-2.5 sm:mb-3.5"
          >
            <span>INFO PENTING</span>
            <span role="img" aria-label="rocket" className="text-xs leading-none">
              🚀
            </span>
          </div>

          {/* Heading */}
          <h2
            id="announcement-title"
            className="text-[#1E1133] font-extrabold text-xl sm:text-[25px] leading-tight tracking-tight mb-2.5 sm:mb-3.5"
          >
            Wajah Baru Otakatikide!
          </h2>

          {/* Body Paragraphs */}
          <div className="text-[13px] sm:text-[14.5px] text-[#475569] leading-relaxed space-y-2.5 sm:space-y-3 font-normal max-w-[320px]">
            <p>
              Halo Mitra! <span role="img" aria-label="love">❤️</span>
              <br />
              Kami resmi pindah ke rumah web baru nih.
            </p>

            <p>
              Buat kamu yang mau lihat portofolio,
              <br />
              cek layanan, atau mau diskusi project,
              <br />
              <strong className="text-[#1E1133] font-bold">
                sekarang bisa langsung akses via:
              </strong>
            </p>
          </div>

          {/* Tombol KUNJUNGI WEBSITE (Digeser naik menggantikan kotak tautan) */}
          <div className="w-full mt-3 sm:mt-4 mb-2.5 sm:mb-3">
            <a
              id="btn-kunjungi-website"
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleOpenLink}
              className="group w-full py-3.5 px-4 rounded-xl bg-[#24113D] hover:bg-[#1B0B2E] active:scale-[0.98] text-white font-semibold text-[13px] sm:text-[13.5px] flex items-center justify-between shadow-md shadow-[#24113D]/20 transition-all duration-150 cursor-pointer min-h-[44px]"
            >
              <span className="flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-white/10 text-white shrink-0">
                  <Globe className="w-3.5 h-3.5" />
                </span>
                <span className="tracking-wide">Kunjungi Website</span>
              </span>
              <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
            </a>
          </div>

          {/* Catatan Penting - Red Warning for Prominent Alert */}
          <div
            id="warning-box"
            className="w-full bg-[#FEF2F2] border border-[#FECACA] rounded-xl py-2.5 px-3.5 mb-3 text-center shadow-xs"
          >
            <div className="flex items-center justify-center gap-1.5 text-[#DC2626] font-bold text-xs sm:text-[13px]">
              <AlertTriangle className="w-4 h-4 text-[#DC2626] stroke-[2.5]" />
              <span className="tracking-wide">Catatan PENTING:</span>
            </div>
            <p className="text-[#991B1B]/90 text-[11.5px] sm:text-xs mt-0.5 leading-snug font-medium">
              <strong className="font-bold text-[#991B1B]">otakatikide(dot)com, Bukan website kami</strong> lagi, dan berada di luar kepemilikan kami.
            </p>
          </div>

          {/* Action Button: Info Promo Bulanan (Pop Up Menurun / Accordion) */}
          <div className="w-full">
            <button
              id="btn-info-promo-toggle"
              type="button"
              onClick={() => setIsPromoOpen((prev) => !prev)}
              aria-expanded={isPromoOpen}
              className="group w-full py-3.5 px-4 rounded-xl bg-[#41236B] hover:bg-[#361B5A] active:scale-[0.98] text-white font-semibold text-[13px] sm:text-[13.5px] flex items-center justify-between shadow-sm transition-all duration-150 cursor-pointer min-h-[44px]"
            >
              <span className="flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-white/10 text-white shrink-0">
                  <Tag className="w-3.5 h-3.5" />
                </span>
                <span className="tracking-wide">Info Promo Bulanan</span>
              </span>
              <ChevronDown
                className={`w-4 h-4 text-white/70 group-hover:text-white transition-transform duration-200 shrink-0 ${
                  isPromoOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Pop Up Menurun: List Kategori & Harga Promo dengan Link ke WA */}
            {isPromoOpen && (
              <div
                id="promo-dropdown-container"
                className="mt-2 w-full bg-[#F5F5F7] border border-black rounded-2xl p-2 sm:p-3 flex flex-col gap-1.5 shadow-sm transition-all animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="px-1.5 pt-0.5 pb-1 flex items-center justify-between">
                  <span className="text-[10.5px] sm:text-[11px] font-extrabold text-black uppercase tracking-wider">
                    PILIH PAKET PROMO
                  </span>
                  <span className="text-[10px] text-gray-500 font-medium">
                    Order via WhatsApp
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  {promoList.map((promo, idx) => (
                    <a
                      key={idx}
                      id={`promo-item-${promo.kategori.toLowerCase().replace(/\s+/g, '-')}`}
                      href={`https://wa.me/6287719613858?text=${encodeURIComponent(promo.waText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-2.5 px-3 rounded-xl bg-white hover:bg-[#24113D] border border-black/20 hover:border-[#24113D] transition-all duration-150 shadow-2xs cursor-pointer min-h-[44px]"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs sm:text-[13px] text-black group-hover:text-[#FACC15] transition-colors">
                          {promo.kategori}
                        </span>
                        <span className="text-gray-300 group-hover:text-yellow-400/50 text-xs">|</span>
                        <span className="font-extrabold text-xs sm:text-[13px] text-[#41236B] group-hover:text-[#FACC15] transition-colors">
                          {promo.harga}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-bold py-1.5 px-2.5 rounded-lg bg-[#25D366] text-white group-hover:bg-[#FACC15] group-hover:text-[#24113D] shadow-2xs transition-all shrink-0">
                        <MessageCircle className="w-3 h-3 fill-current" />
                        <span>Order</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Section: Ajukan Penawaran Project & Budget Anda */}
          <ProjectOfferForm />
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";

interface OfferCardProps {
  onCtaClick: () => void;
  bundleImgUrl: string;
}

export default function OfferCard({ onCtaClick, bundleImgUrl }: OfferCardProps) {
  // Timer ticks down from 1h 30m 04s (5404s), saving remainder to sessionStorage
  const [secondsLeft, setSecondsLeft] = useState(() => {
    try {
      const saved = sessionStorage.getItem("missa_explicada_timer_main");
      if (saved) {
        const val = parseInt(saved, 10);
        return val > 0 ? val : 5404;
      }
    } catch (e) {}
    return 5404;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          try {
            sessionStorage.setItem("missa_explicada_timer_main", "5404");
          } catch (e) {}
          return 5404; // reset
        }
        try {
          sessionStorage.setItem("missa_explicada_timer_main", next.toString());
        } catch (e) {}
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    const pad = (num: number) => num.toString().padStart(2, "0");
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
  };

  const includedBenefits = [
    "Missa Explicada - Completo",
    "Bônus: O Valor do Silêncio",
    "Bônus: Guia da Confissão",
    "Bônus: Orações Eucarísticas",
    "Bônus: Posturas na Missa",
    "Bônus: Antigo e Novo Testamento",
    "Bônus: Ano Litúrgico Completo",
    "Acesso Imediato",
    "Garantia de 15 Dias",
  ];

  return (
    <section id="pricing-section" className="bg-[#f5efe4] py-16 px-4 text-center relative select-none">
      
      <div className="max-w-xl mx-auto space-y-6 relative z-10">
        
        {/* Scarcity Banner Title */}
        <div className="space-y-1">
          <span className="text-[#581c1c] text-xs font-black uppercase tracking-wider block font-sans">
            Oferta Especial por Tempo Limitado
          </span>
          
          {/* Main big timer ticking live in classical serif numerals */}
          <div id="countdown-timer-display" className="font-sans text-[36px] sm:text-[44px] font-black text-[#581c1c] tracking-widest leading-none py-1">
            {formatTime(secondsLeft)}
          </div>
        </div>

        {/* High-fidelity Sales Card Container with gold border */}
        <div className="bg-white border-[6px] border-[#b58c30] rounded-[36px] p-5 sm:p-8 max-w-sm sm:max-w-[440px] mx-auto shadow-2xl space-y-6 text-center text-[#3c2a26]">
          
          {/* Display the unified mockup image directly inside the card */}
          <div className="relative select-none cursor-pointer transition-transform duration-300 hover:scale-[1.015] pt-2" onClick={onCtaClick}>
            <div className="absolute -inset-1 rounded-3xl bg-radial from-amber-600/5 to-transparent blur-xl opacity-60"></div>
            <img
              src={bundleImgUrl}
              alt="Missa Explicada Premium Kit"
              referrerPolicy="no-referrer"
              loading="lazy"
              width="400"
              height="280"
              className="w-full h-auto max-h-[300px] object-contain drop-shadow-lg relative z-10 mx-auto"
            />
          </div>

          {/* Elegant title of the kit */}
          <div className="pt-2">
            <h3 className="text-[#581c1c] font-black text-2xl sm:text-3xl tracking-wider uppercase font-serif">
              MISSA EXPLICADA
            </h3>
          </div>

          {/* List of high-fidelity checked benefits */}
          <div className="space-y-3 text-left max-w-xs sm:max-w-sm mx-auto pt-2 pb-6 border-b border-stone-200">
            {includedBenefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-[20px] h-[20px] bg-[#00b31e] rounded flex items-center justify-center shrink-0 shadow-xs">
                  <svg className="w-3.5 h-3.5 text-white stroke-[3.5] font-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-stone-600 font-sans font-semibold text-[13.5px] sm:text-[14.5px] leading-tight">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* Beautiful Gold/Bronze Pricing fold exactly as in the mockups */}
          <div className="pt-2">
            <span className="text-stone-400 font-sans font-bold text-xs sm:text-sm line-through block">
              De R$97,00
            </span>
            
            <div className="flex items-baseline justify-center text-[#b58c30] select-none leading-none pt-1">
              <span className="text-2xl sm:text-3xl font-black font-serif pr-1">R$</span>
              <span className="text-[52px] sm:text-[62px] font-black font-serif tracking-tight">17,00</span>
            </div>

            <span className="text-stone-500 font-sans font-bold text-xs sm:text-sm block mt-2">
              Pagamento Único
            </span>
          </div>

          {/* Reverted original style gold high-converting buttons with purple✝ */}
          <div className="pt-1 max-w-sm mx-auto">
            <button
              id="btn-card-checkout-cta"
              onClick={onCtaClick}
              className="w-full py-4.5 bg-[#b58c30] hover:bg-[#a17a26] text-white font-black rounded-2xl shadow-md hover:shadow-lg border-b-4 border-[#8c671b] uppercase text-[11px] sm:text-xs md:text-sm tracking-widest flex items-center justify-center transition-all duration-150 active:scale-98 cursor-pointer relative overflow-hidden group/btn font-sans"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-30deg] -translate-x-full group-hover/btn:animate-shine"></div>
              <span>ADQUIRIR MISSA EXPLICADA</span>
            </button>
          </div>

          {/* Subtext info indicators */}
          <div className="flex items-center justify-center gap-2 text-stone-500 text-[10px] sm:text-xs font-bold pt-1">
            <span>🔒 Pagamento 100% Seguro</span>
            <span>|</span>
            <span>📱 Acesso Imediato</span>
          </div>

        </div>

      </div>
    </section>
  );
}

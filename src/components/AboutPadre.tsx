import React from "react";

interface AboutPadreProps {
  onCtaClick: () => void;
  padreImgUrl: string;
}

export default function AboutPadre({ onCtaClick, padreImgUrl }: AboutPadreProps) {
  return (
    <section id="leader-section" className="bg-[#FAF8F5] py-16 px-4 text-center">
      <div className="max-w-xl mx-auto space-y-8">
        
        {/* Centered Circle Photo of Padre João */}
        <div className="flex justify-center select-none">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-[#b58c30]/20 blur-md"></div>
            <img
              id="padre-portrait-circle"
              src={padreImgUrl}
              alt="Padre João"
              referrerPolicy="no-referrer"
              loading="lazy"
              width="144"
              height="144"
              className="w-36 h-36 rounded-full object-cover border-4 border-[#b58c30] shadow-lg relative z-10"
            />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <span className="text-[#b58c30] text-xs font-bold uppercase tracking-wider block">
            QUEM ESTÁ POR TRÁS DISSO
          </span>
          <h2 className="font-serif text-[26px] sm:text-[32px] font-black text-[#581c1c] leading-tight">
            Padre João
          </h2>
        </div>

        {/* Biography texts */}
        <div className="space-y-4 text-[#3c2a26] text-xs sm:text-[13.5px] leading-relaxed font-semibold text-left max-w-md mx-auto">
          <p>
            Oi, eu sou o <strong className="text-[#581c1c] font-bold">Padre João</strong>.
          </p>
          
          <p>
            Sou Sacerdote há alguns anos e, no dia a dia das paróquias, percebi que muitos fiéis vão à Missa todos os domingos cheios de fé, mas com dúvidas sobre o significado de cada gesto, oração e parte da celebração — e quase nunca têm com quem conversar sobre isso.
          </p>

          <p>
            Foi pensando em quem quer entender e viver a Missa com mais consciência que eu reuni neste material, de forma simples, tudo o que estudei e aprendi sobre <strong className="text-[#581c1c]">liturgia e espiritualidade</strong>.
          </p>

          <p>
            A ideia é só uma: te ajudar a participar da Missa com mais sentido e mais fé. 🙏
          </p>
        </div>

        {/* Gold button with clean requested phrase */}
        <div className="pt-2 flex justify-center">
          <button
            id="btn-padre-section-cta"
            onClick={onCtaClick}
            className="w-full max-w-sm py-4.5 bg-[#b58c30] hover:bg-[#a17a26] text-white font-extrabold rounded-xl shadow-md border-b-4 border-[#8c671b] uppercase text-[11px] sm:text-xs tracking-wider flex items-center justify-center transition-all duration-150 active:scale-98 cursor-pointer relative overflow-hidden group font-sans animate-pulse-slow"
          >
            <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-30deg] -translate-x-full group-hover:animate-shine"></div>
            <span>ADQUIRIR MISSA EXPLICADA</span>
          </button>
        </div>

      </div>
    </section>
  );
}

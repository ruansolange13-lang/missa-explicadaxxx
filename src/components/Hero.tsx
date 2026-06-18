import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

interface HeroProps {
  onCtaClick: () => void;
  bundleImgUrl: string;
}

export default function Hero({ onCtaClick, bundleImgUrl }: HeroProps) {
  return (
    <section id="hero-section" className="relative bg-[#f5efe4] pt-12 pb-16 px-4">
      
      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        
        {/* Master Headlines styled exactly like the screenshot */}
        <h1 id="hero-title" className="font-serif text-3xl sm:text-4.5xl md:text-5xl lg:text-[49px] font-extrabold text-[#231815] leading-[1.12] tracking-tight max-w-3xl mx-auto">
          Você Participa da Missa Todo <br className="hidden sm:inline" />
          Domingo
        </h1>
        
        <h2 id="hero-subtitle" className="font-serif text-xl sm:text-2xl md:text-[27px] text-[#581c1c] tracking-normal font-medium max-w-3xl mx-auto leading-tight">
          Mas Entende o Que Acontece em Cada <br className="hidden sm:inline" />
          Momento?
        </h2>

        {/* Mockup Showcase without "Mais Vendido" sticker */}
        <div id="hero-showcase" className="relative max-w-xl mx-auto py-2 animate-fade-in flex justify-center">
          
          {/* Main Book Bundle Image */}
          <div className="relative group p-2 w-full">
            
            {/* Soft Ambient Shadow Backdrop */}
            <div className="absolute -inset-1 rounded-3xl bg-radial from-amber-600/10 to-transparent blur-3xl opacity-60 group-hover:scale-105 transition-all duration-500"></div>

            <img
              id="hero-bundle-mockup"
              src={bundleImgUrl}
              alt="Missa Explicada Coleção Premium"
              referrerPolicy="no-referrer"
              fetchPriority="high"
              width="500"
              height="430"
              className="w-full h-auto object-contain max-h-[460px] drop-shadow-2xl relative z-10"
            />
          </div>
        </div>

        {/* Subtitle descrip styled precisely as in screenshot */}
        <p id="hero-desc" className="max-w-xl mx-auto text-[#3c2a26] text-xs sm:text-sm md:text-base leading-relaxed font-sans font-medium">
          Descubra o <strong className="font-bold text-[#231815]">significado profundo</strong> de cada gesto, oração e <br className="hidden sm:inline" />
          ritual da Santa Missa e viva a fé de forma <strong className="font-bold text-[#231815]">Consciente</strong>
        </p>

        {/* Hero Call To Action with Gold Button cleanly displaying specified phrase */}
        <div id="hero-action-container" className="pt-2 flex flex-col items-center gap-3">
          <button
            id="btn-hero-cta"
            onClick={onCtaClick}
            className="w-full max-w-md py-4 px-6 bg-[#b58c30] hover:bg-[#a17a26] text-white font-extrabold rounded-xl shadow-md border-b-4 border-[#8c671b] uppercase text-xs sm:text-sm tracking-wider flex items-center justify-center transition-all duration-150 active:scale-98 cursor-pointer relative overflow-hidden group/btn animate-pulse-slow font-sans"
          >
            {/* Elegant glass shimmer sheen */}
            <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-30deg] -translate-x-full group-hover/btn:animate-shine"></div>
            <span>ADQUIRIR MISSA EXPLICADA</span>
          </button>
        </div>

      </div>
    </section>
  );
}

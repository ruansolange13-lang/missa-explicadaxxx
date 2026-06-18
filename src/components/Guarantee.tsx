import React from "react";

export default function Guarantee() {
  return (
    <section id="guarantee-section" className="bg-[#FAF8F5] py-16 px-4 text-center">
      <div className="max-w-xl mx-auto">
        
        {/* Full-width elegant guarantee border box */}
        <div className="bg-white border-2 border-[#b58c30] rounded-3xl p-6 sm:p-10 shadow-xl space-y-6 relative overflow-hidden">
          
          {/* Accent decoration ribbon */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-[#b58c30]"></div>

          {/* Main Guarantee Seal Image */}
          <div className="mx-auto select-none max-w-[150px] sm:max-w-[180px] h-auto relative flex items-center justify-center z-10 transition-transform hover:scale-[1.03] duration-300">
            <img
              src="https://i.imgur.com/3XACsfB.png"
              alt="Selo de Garantia de 15 Dias"
              referrerPolicy="no-referrer"
              loading="lazy"
              width="180"
              height="180"
              className="w-full h-auto drop-shadow-md"
            />
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl font-black text-[#581c1c] tracking-wide">
              Garantia Incondicional de 15 Dias
            </h3>
            
            <p className="text-[#3c2a26] text-xs sm:text-[13px] font-semibold leading-relaxed max-w-sm mx-auto">
              Se por qualquer motivo você não ficar satisfeito com o material, basta nos enviar um email dentro de 15 dias e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
            
            <p className="text-[#b58c30] font-black text-xs sm:text-sm uppercase tracking-wide">
              Seu investimento está 100% protegido!
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

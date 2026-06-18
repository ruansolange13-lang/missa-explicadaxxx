import React from "react";

export default function BonusSection() {
  const bonuses = [
    {
      id: 1,
      title: "O Valor do Silêncio",
      description: "Descubra a importância do silêncio na vida espiritual e na oração",
      originalPrice: "R$ 27,00",
      emoji: "🤫",
      coverBg: "bg-[#1c1816]",
      imageUrl: "https://i.imgur.com/jogL4bD.png",
    },
    {
      id: 2,
      title: "Guia da Confissão",
      description: "Passo a passo para uma confissão completa e verdadeira",
      originalPrice: "R$ 27,00",
      emoji: "🙏",
      coverBg: "bg-[#2d1211]",
      imageUrl: "https://i.imgur.com/AfWqG9Z.png",
    },
    {
      id: 3,
      title: "Orações Eucarísticas",
      description: "As principais orações para antes e depois da Comunhão",
      originalPrice: "R$ 27,00",
      emoji: "🕯️",
      coverBg: "bg-[#331111]",
      imageUrl: "https://i.imgur.com/NQuZk91.png",
    },
    {
      id: 4,
      title: "Posturas na Missa",
      description: "Quando sentar, levantar e ajoelhar durante a Missa",
      originalPrice: "R$ 27,00",
      emoji: "⛪",
      coverBg: "bg-[#182618]",
      imageUrl: "https://i.imgur.com/zioPKxK.png",
    },
    {
      id: 5,
      title: "Antigo e Novo Testamento",
      description: "Entenda a conexão entre os dois testamentos na liturgia",
      originalPrice: "R$ 27,00",
      emoji: "📜",
      coverBg: "bg-[#331f13]",
      imageUrl: "https://i.imgur.com/I8KaVbb.png",
    },
    {
      id: 6,
      title: "Ano Litúrgico Completo",
      description: "Conheça todos os tempos litúrgicos e suas celebrações",
      originalPrice: "R$ 27,00",
      emoji: "📅",
      coverBg: "bg-[#1c142c]",
      imageUrl: "https://i.imgur.com/2Byvr0W.png",
    },
  ];

  return (
    <section id="bonuses-section" className="bg-[#581c1c] py-16 px-4 text-center text-white relative">
      
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div className="space-y-2">
          <span className="text-[#b58c30] text-[13px] sm:text-sm font-black uppercase tracking-widest block font-serif">
            RECEBA AINDA
          </span>
          <h2 className="font-serif text-[28px] sm:text-[44px] font-black tracking-tight leading-tight uppercase text-amber-100">
            + 6 BÔNUS EXCLUSIVOS
          </h2>
        </div>

        {/* Grid Matching the user request perfectly with beautiful 3D books */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-12 max-w-2xl mx-auto pt-4">
          {bonuses.map((bonus) => (
            <div
              key={bonus.id}
              id={`bonus-card-${bonus.id}`}
              className="bg-white rounded-[24px] p-6 pt-8 pb-5 shadow-xl flex flex-col justify-between items-center text-center space-y-4 relative"
            >
              {/* BÔNUS HOJE Pill - Overflowing perfectly at the top */}
              <div className="bg-[#61b846] text-white text-[9.5px] font-black uppercase tracking-[0.2em] px-4.5 py-1.5 rounded-full absolute -top-3 left-1/2 -translate-x-1/2 shadow-md border border-[#52af36]/30 select-none">
                BÔNUS HOJE
              </div>

              {/* High-quality Pre-rendered 3D Mockup Cover */}
              <div className="pt-4 pb-2 w-full flex justify-center h-[200px] items-center">
                <img
                  src={bonus.imageUrl}
                  alt={bonus.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width="140"
                  height="185"
                  className="max-h-[185px] w-auto object-contain drop-shadow-xl transition-transform duration-300 hover:scale-[1.05] select-none"
                />
              </div>

              {/* Book description panel below cover */}
              <div className="space-y-1.5">
                <h3 className="font-serif text-[15px] sm:text-[16px] font-black text-[#581c1c] tracking-tight leading-tight">
                  {bonus.title}
                </h3>
                <p className="text-[#3c2a26] text-[11.5px] sm:text-xs leading-relaxed font-semibold max-w-[220px] mx-auto opacity-90">
                  {bonus.description}
                </p>
              </div>

              {/* Price Tag & GRÁTIS Green stamp */}
              <div className="flex items-center justify-center gap-3.5 pt-3 border-t border-stone-100 w-full">
                <span className="text-stone-400 line-through text-xs font-semibold">
                  {bonus.originalPrice}
                </span>
                <span className="bg-[#61b846] text-white text-[10.5px] font-extrabold px-3 py-1 rounded uppercase tracking-[0.05em] shadow-xs select-none">
                  GRÁTIS
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

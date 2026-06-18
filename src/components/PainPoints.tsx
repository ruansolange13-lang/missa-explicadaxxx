import React from "react";

export default function PainPoints() {
  const points = [
    {
      id: 1,
      emoji: "😞",
      text: "Vai à Missa todo domingo mas sente que falta algo para se conectar de verdade",
    },
    {
      id: 2,
      emoji: "🤷",
      text: "Quer entender os gestos e rituais mas nunca teve quem explicasse",
    },
    {
      id: 3,
      emoji: "❓",
      text: "Tem dúvidas sobre partes da Missa mas não sabe a quem perguntar",
    },
  ];

  return (
    <section id="pain-points-section" className="bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto space-y-10">
        
        {/* Section Title */}
        <div className="text-center space-y-2">
          <h2 className="font-serif text-[26px] sm:text-[32px] font-extrabold text-[#581c1c] leading-tight">
            Você se Identifica com Isso?
          </h2>
        </div>

        {/* Cards Stack styled as simple wide items */}
        <div className="space-y-4 max-w-xl mx-auto">
          {points.map((point) => (
            <div
              key={point.id}
              id={`pain-point-card-${point.id}`}
              className="flex items-center gap-5 p-5 bg-[#FAF3E8] border border-stone-200/50 rounded-2xl shadow-xs transition-transform duration-200"
            >
              <div className="w-10 h-10 bg-[#fbf7f0] rounded-full flex items-center justify-center shrink-0 border border-stone-200/40 text-xl shadow-xs">
                {point.emoji}
              </div>
              <p className="text-[#3c2a26] text-xs sm:text-[13.5px] leading-relaxed font-semibold">
                {point.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


import React from "react";
import { ChevronDown } from "lucide-react";

export default function DiscoveryList() {
  const topics = [
    { text: "O significado dos ", bold: "Ritos Iniciais", footer: " e por que começamos assim" },
    { text: "Por que a ", bold: "Liturgia da Palavra", footer: " é tão importante" },
    { text: "O mistério da ", bold: "Liturgia Eucarística", footer: " explicado" },
    { text: "O que acontece no momento da ", bold: "Consagração", footer: "" },
    { text: "Como se preparar para receber a ", bold: "Comunhão", footer: "" },
    { text: "O significado dos ", bold: "Ritos Finais", footer: " e a bênção" },
    { text: "Por que usamos ", bold: "cores litúrgicas", footer: " diferentes" },
    { text: "O Papel do ", bold: "Cristão", footer: " durante a Missa" },
  ];

  return (
    <section id="discovery-section" className="bg-[#f5efe4] py-16 px-4">
      <div className="max-w-xl mx-auto space-y-10">
        
        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="font-serif text-[26px] sm:text-[32px] font-extrabold text-[#581c1c] leading-tight mb-4">
            O Que Você Vai Descobrir
          </h2>
        </div>

        {/* List representation with golden dots */}
        <div className="max-w-xl mx-auto pl-4">
          <ul className="space-y-4">
            {topics.map((topic, index) => (
              <li
                key={index}
                id={`discovery-item-${index}`}
                className="flex items-start gap-3.5 text-[#3c2a26] text-xs sm:text-[14px] leading-relaxed font-semibold"
              >
                {/* Tiny golden circle item */}
                <span className="w-2.5 h-2.5 bg-[#b58c30] rounded-full shrink-0 mt-1.5 shadow-sm"></span>
                <span>
                  {topic.text}
                  <strong className="text-[#a62b2b] font-black">{topic.bold}</strong>
                  {topic.footer}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Dynamic +Bonus below indicator */}
        <div id="bonus-divider-indicator" className="flex flex-col items-center gap-1 pt-6 text-[#581c1c] font-black">
          <span className="text-xs sm:text-sm tracking-widest uppercase font-serif-[#2c1a17] text-stone-800">
            +BÔNUS ABAIXO
          </span>
          <ChevronDown className="w-5 h-5 text-amber-600 animate-bounce stroke-[3.5]" />
        </div>

      </div>
    </section>
  );
}

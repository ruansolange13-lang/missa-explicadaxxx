import React from "react";
import { BookOpen, HelpCircle, Lightbulb, Heart } from "lucide-react";

export default function MissaFeatures() {
  const items = [
    {
      id: 1,
      title: "Explicação Completa",
      description: "Cada parte da Missa explicada em detalhes, 100% fiel à Doutrina Católica e ao Catecismo",
      icon: <BookOpen className="w-5 h-5 text-white" />,
    },
    {
      id: 2,
      title: "Significado Profundo",
      description: "Descubra o que está por trás de cada gesto, palavra e símbolo sagrado",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Linguagem Acessível",
      description: "Sem linguagem teológica complicada, qualquer pessoa consegue ler e entender",
      icon: <Lightbulb className="w-5 h-5 text-white" />,
    },
    {
      id: 4,
      title: "Viva a Fé Plenamente",
      description: "Participe da Missa com total entendimento e se conecte de verdade com Deus",
      icon: <Heart className="w-5 h-5 text-white" />,
    },
  ];

  return (
    <section id="features-section" className="bg-[#f5efe4] py-16 px-4">
      <div className="max-w-xl mx-auto space-y-10 text-center">
        
        {/* Header Title */}
        <div className="space-y-4">
          <h2 className="font-serif text-[28px] sm:text-[36px] font-extrabold text-[#581c1c] uppercase tracking-wide">
            MISSA EXPLICADA
          </h2>
          <p className="text-[#3c2a26] text-[13px] sm:text-sm font-medium leading-relaxed max-w-md mx-auto">
            Um Material Prático que explica cada parte da Missa de forma simples e direta.
          </p>
        </div>

        {/* Features Cards Stack (Vertical Layout matching screenshot) */}
        <div className="space-y-4 pt-2">
          {items.map((item) => (
            <div
              key={item.id}
              id={`feature-card-${item.id}`}
              className="bg-white border border-stone-200/50 p-6 sm:p-8 rounded-2xl shadow-xs transition-shadow duration-300 flex flex-col items-center text-center space-y-3"
            >
              <div className="w-11 h-11 bg-[#b58c30] rounded-xl flex items-center justify-center shadow-xs shrink-0">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-[#581c1c]">{item.title}</h3>
              <p className="text-[#3c2a26] text-xs sm:text-[13px] leading-relaxed font-semibold max-w-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

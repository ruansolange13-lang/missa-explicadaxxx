import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como vou receber o ebook?",
      answer: "O acesso é imediato e 100% digital. Logo após a aprovação do pagamento simulado, você terá os botões de download ativos e também receberá as instruções em seu e-mail.",
    },
    {
      question: "Posso ler no celular?",
      answer: "Sim, absolutamente. Todos os materiais (livro principal e os 6 bônus) são fornecidos em formato PDF de excelente qualidade, otimizados para smartphones, e-readers, computadores, tablets ou para e-mails.",
    },
    {
      question: "O conteúdo segue a doutrina católica?",
      answer: "Sim, com total compromisso e fidelidade. Todo o material é redigido em perfeita harmonia com os ensinamentos oficiais da Santa Sé, o Sagrado Magistério, a Patrística Eclesial e o Catecismo da Igreja Católica.",
    },
    {
      question: "E se eu não gostar?",
      answer: "Não há problema. Você possui 15 dias corridos de garantia incondicional de satisfação. Se sentir que o material não atendeu ao que você esperava, basta nos contatar que devolvemos todo o seu dinheiro na hora.",
    },
    {
      question: "O pagamento é seguro?",
      answer: "Sim, totalmente. As transações utilizam criptografia de segurança ponta a ponta SSL padrão de bancos internacionais, garantindo total anonimato e blindagem de dados pessoais e de pagamento.",
    },
  ];

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="bg-[#FAF8F5] py-16 px-4">
      <div className="max-w-xl mx-auto space-y-10">
        
        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="font-serif text-[26px] sm:text-[32px] font-extrabold text-[#581c1c]">
            Perguntas Frequentes
          </h2>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-3 max-w-lg mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className="border border-stone-300/30 rounded-xl overflow-hidden transition-all bg-white"
              >
                <button
                  id={`btn-faq-toggle-${idx}`}
                  onClick={() => toggleIndex(idx)}
                  className="w-full py-4.5 px-5 flex items-center justify-between text-left gap-4 font-serif text-[#3c2a26] hover:text-[#581c1c] font-black text-xs sm:text-[14.5px] cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span className="shrink-0 text-amber-600 font-extrabold pl-1 text-[16px]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer box with height transition */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-48 border-t border-stone-100" : "max-h-0"
                  }`}
                >
                  <p className="p-5 text-[#3c2a26] text-xs sm:text-[13px] leading-relaxed font-semibold bg-[#FAFBFD]/60">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

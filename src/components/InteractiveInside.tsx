import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface InteractiveInsideProps {
  onCtaClick: () => void;
  milagreImgUrl: string;
}

export default function InteractiveInside({ onCtaClick, milagreImgUrl }: InteractiveInsideProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      tag: "A SANTA MISSA EXPLICADA",
      title: "O Grande Milagre",
      excerpt: "A Missa é a maior, a mais completa e a mais poderosa Oração da qual dispõe o católico!",
      image: "https://i.imgur.com/FDq7IHX.png",
    },
    {
      id: 2,
      tag: "SINAIS E GESTOS",
      title: "Os Ritos Iniciais",
      excerpt: "O Sinal de Cruz e a entrada do Sacerdote. Não são gestos mecânicos, mas a preparação de nossa alma para adentrar na Jerusalém Celeste.",
      image: "https://i.imgur.com/UDOBvHN.png",
    },
    {
      id: 3,
      tag: "ESCUTANDO A VOZ DO PAI",
      title: "A Liturgia da Palavra",
      excerpt: "Quando a Sagrada Escritura é proclamada na Missa, é o próprio Deus que fala com Seu Povo. Descubra o mistério das leituras e aclamação.",
      image: "https://i.imgur.com/dE6b8oX.png",
    },
    {
      id: 4,
      tag: "O ÁPICE DO MISTÉRIO",
      title: "A Consagração & Transubstanciação",
      excerpt: "O pão e o vinho tornam-se VERDADEIRAMENTE o Corpo, Sangue, Alma e Divindade de Jesus Cristo. Não é símbolo, é presença real de Deus.",
      image: "https://i.imgur.com/De8mP3k.png",
    },
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Automatic carousel rotation every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [activeSlide]);

  return (
    <section id="interactive-preview-section" className="bg-[#FAF8F5] py-16 px-4 text-center">
      <div className="max-w-2xl mx-auto space-y-10">
        
        {/* Title Block */}
        <div className="space-y-3">
          <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#581c1c] leading-tight">
            Veja Um Dos Materiais Que Você Vai Receber Na Prática
          </h2>
        </div>

        {/* Carousel Container */}
        <div id="carousel-outer" className="relative max-w-sm sm:max-w-md mx-auto px-4">
          
          {/* Circular Navigation Buttons on the sides */}
          <button
            id="btn-carousel-prev"
            onClick={handlePrev}
            aria-label="Slide anterior"
            className="absolute left-[-12px] sm:left-[-24px] top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 bg-white hover:bg-stone-50 border border-stone-200/80 rounded-full shadow-lg flex items-center justify-center text-stone-600 hover:text-[#581c1c] active:scale-95 transition-all z-30 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>

          <button
            id="btn-carousel-next"
            onClick={handleNext}
            aria-label="Próximo slide"
            className="absolute right-[-12px] sm:right-[-24px] top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 bg-white hover:bg-stone-50 border border-stone-200/80 rounded-full shadow-lg flex items-center justify-center text-stone-600 hover:text-[#581c1c] active:scale-95 transition-all z-30 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>

          {/* Slide content without artificial card boundaries or dashed lines */}
          <div className="overflow-hidden flex flex-col relative w-full pt-1">
            
            {/* Slide Body - Vertically Stacked */}
            <div className="p-2 sm:p-4 flex flex-col gap-4 text-center">
              
              {/* Image representing page artwork */}
              <div className="w-full h-[220px] sm:h-[280px] rounded-[24px] overflow-hidden shadow-lg relative bg-stone-50 group cursor-pointer" onClick={handleNext}>
                <img
                  src={slides[activeSlide].image}
                  alt={slides[activeSlide].title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width="440"
                  height="280"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                
                {/* Subtle visual touch to emphasize book texture */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>

            </div>

          </div>

          {/* Slider dots below */}
          <div id="carousel-dots-wrapper" className="flex items-center justify-center gap-2 mt-5">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setActiveSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  index === activeSlide 
                    ? "bg-[#581c1c] w-6" 
                    : "bg-stone-300 hover:bg-stone-400 w-2.5"
                }`}
              ></button>
            ))}
          </div>

        </div>

        {/* Action Button styled as the gold CTA button with purple ✝ */}
        <div className="pt-2 flex justify-center">
          <button
            id="btn-interactive-cta"
            onClick={onCtaClick}
            className="w-full max-w-sm py-4 bg-[#b58c30] hover:bg-[#a17a26] text-white font-extrabold rounded-xl shadow-md border-b-4 border-[#8c671b] uppercase text-xs sm:text-sm tracking-wider flex items-center justify-center transition-all duration-150 active:scale-98 cursor-pointer relative overflow-hidden group animate-pulse-slow"
          >
            <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-30deg] -translate-x-full group-hover:animate-shine"></div>
            <span>ADQUIRIR MISSA EXPLICADA</span>
          </button>
        </div>

      </div>
    </section>
  );
}

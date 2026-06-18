import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    "https://i.imgur.com/tT5YEqC.png",
    "https://i.imgur.com/zNO3cho.png",
    "https://i.imgur.com/GsYOjlO.png",
    "https://i.imgur.com/0VEJYdq.png",
    "https://i.imgur.com/zNO3cho.png"
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.7; // scroll 70% of view
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="testimonials-section" className="bg-[#f5efe4] py-16 px-4 text-center select-none overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-8 relative">
        
        {/* Title */}
        <div className="space-y-2">
          <h2 className="font-serif text-[26px] sm:text-[32px] font-extrabold text-[#581c1c] leading-tight">
            Veja o que as pessoas dizem
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative group max-w-4xl mx-auto">
          
          {/* Gradient Fades for Premium Look (as requested in screenshot) */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#f5efe4] to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#f5efe4] to-transparent pointer-events-none z-10" />

          {/* Navigation Buttons (Desktop only, visible on hover) */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#581c1c] p-3 rounded-full shadow-md hover:scale-110 transition-all cursor-pointer opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center border border-stone-200"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
          
          <button
            onClick={() => scroll("right")}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#581c1c] p-3 rounded-full shadow-md hover:scale-110 transition-all cursor-pointer opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center border border-stone-200"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Horizontal Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory px-12 sm:px-24 py-4 scroll-smooth"
          >
            {testimonials.map((url, idx) => (
              <div
                key={idx}
                className="snap-center shrink-0 w-[180px] sm:w-[220px] aspect-[180/280] rounded-[24px] overflow-hidden shadow-lg border border-stone-200/40 bg-[#1e1e1e] transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
              >
                <img
                  src={url}
                  alt={`Depoimento ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Small interaction indicator for touch screens */}
        <p className="text-stone-500/80 text-xs font-semibold block md:hidden">
          Arraste para o lado para ver mais depoimentos
        </p>

      </div>
    </section>
  );
}

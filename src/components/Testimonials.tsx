import React from "react";

export default function Testimonials() {
  const testimonials = [
    "https://i.imgur.com/tT5YEqC.png",
    "https://i.imgur.com/zNO3cho.png",
    "https://i.imgur.com/GsYOjlO.png",
    "https://i.imgur.com/0VEJYdq.png",
    "https://i.imgur.com/zNO3cho.png"
  ];

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
        <div className="relative group max-w-5xl mx-auto overflow-hidden">
          
          {/* Gradient Fades for Premium Look (as requested in screenshot) */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#f5efe4] to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#f5efe4] to-transparent pointer-events-none z-10" />

          {/* Marquee Flex Container */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee">
              
              {/* First Copy */}
              <div className="flex gap-6 pr-6 shrink-0">
                {testimonials.map((url, idx) => (
                  <div
                    key={`copy1-${idx}`}
                    className="shrink-0 w-[220px] sm:w-[270px] rounded-[24px] overflow-hidden shadow-lg border border-stone-200/40 bg-[#1e1e1e] transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
                  >
                    <img
                      src={url}
                      alt={`Depoimento ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-auto block"
                    />
                  </div>
                ))}
              </div>

              {/* Second Copy */}
              <div className="flex gap-6 pr-6 shrink-0">
                {testimonials.map((url, idx) => (
                  <div
                    key={`copy2-${idx}`}
                    className="shrink-0 w-[220px] sm:w-[270px] rounded-[24px] overflow-hidden shadow-lg border border-stone-200/40 bg-[#1e1e1e] transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
                  >
                    <img
                      src={url}
                      alt={`Depoimento ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-auto block"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

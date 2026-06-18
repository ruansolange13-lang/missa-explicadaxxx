import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Maria Clara, SP",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      text: "Depois de ler o ebook, a Missa ganhou um novo significado para mim. Agora participo de forma muito mais consciente!",
    },
    {
      id: 2,
      name: "João Pedro, MG",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      text: "Finalmente entendi coisas que sempre tive curiosidade. Recomendo para toda família católica!",
    },
    {
      id: 3,
      name: "Ana Paula, RJ",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
      text: "Usei para ensinar meus filhos e eles amaram. Agora vão à Missa com muito mais interesse.",
    },
  ];

  return (
    <section id="testimonials-section" className="bg-[#f2eadc]/40 py-16 px-4 text-center">
      <div className="max-w-xl mx-auto space-y-10">
        
        {/* Title */}
        <div className="space-y-2">
          <h2 className="font-serif text-[26px] sm:text-[32px] font-extrabold text-[#581c1c] leading-tight">
            O Que Dizem Nossos Leitores
          </h2>
        </div>

        {/* Reviews Stack - Beautiful vertical list matching screenshot */}
        <div className="space-y-6 max-w-lg mx-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="bg-white rounded-3xl border border-stone-200/40 p-6 sm:p-8 shadow-md flex flex-col items-center space-y-4"
            >
              {/* Centered Avatar */}
              <img
                src={review.avatar}
                alt={review.name}
                referrerPolicy="no-referrer"
                loading="lazy"
                width="64"
                height="64"
                className="w-16 h-16 rounded-full object-cover border-2 border-[#b58c30] shadow-md"
              />

              {/* Gold Stars */}
              <div className="flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 stroke-amber-500 stroke-1" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-[#3c2a26] text-xs sm:text-[13.5px] font-medium leading-relaxed italic px-2">
                "{review.text}"
              </p>

              {/* Author alignment */}
              <span className="text-[#581c1c] text-xs font-bold font-serif">
                - {review.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

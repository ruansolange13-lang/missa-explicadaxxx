import React from "react";
import { Flame } from "lucide-react";

export default function Header() {
  const getDynamicDate = () => {
    const today = new Date();
    const options = { day: "numeric" as const, month: "long" as const };
    return today.toLocaleDateString("pt-BR", options);
  };

  return (
    <div id="announcement-banner" className="bg-[#581c1c] text-white py-2.5 px-4 text-center text-xs md:text-sm font-semibold tracking-wider flex items-center justify-center gap-2 border-b border-white/5 shadow-md">
      <span className="w-5 h-5 bg-[#7c3aed] text-white font-extrabold text-[10px] rounded flex items-center justify-center shadow-sm shrink-0">
        I
      </span>
      <span>
        OFERTA ESPECIAL - Válida até <strong className="text-amber-300 font-bold underline underline-offset-4">{getDynamicDate()}</strong>
      </span>
    </div>
  );
}

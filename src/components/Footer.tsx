import React from "react";

export default function Footer() {
  return (
    <footer id="footer-section" className="bg-[#2c120a] text-stone-400 py-10 px-4 text-center text-xs space-y-4">
      {/* Brand */}
      <div className="font-serif text-[#b58c30] text-base font-bold flex flex-col items-center justify-center gap-1">
        <span className="text-xl">✝ Missa Explicada</span>
        <span className="text-[10px] uppercase font-sans tracking-widest text-stone-500 font-bold">
          Aprofunde sua fé com nossos materiais
        </span>
      </div>

      <div className="w-12 h-px bg-stone-800 mx-auto"></div>

      <div className="space-y-2 text-[10px] text-stone-500 max-w-md mx-auto leading-relaxed">
        <p>© 2025 Missa Explicada. Todos os direitos reservados.</p>
        <p className="font-semibold text-stone-600">
          Este produto é vendido e entregue pela plataforma de pagamento. O acesso é enviado automaticamente após a confirmação do pagamento.
        </p>
      </div>
    </footer>
  );
}

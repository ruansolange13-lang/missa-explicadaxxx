import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import InteractiveInside from "./components/InteractiveInside";
import MissaFeatures from "./components/MissaFeatures";
import DiscoveryList from "./components/DiscoveryList";
import BonusSection from "./components/BonusSection";
import OfferCard from "./components/OfferCard";
import Testimonials from "./components/Testimonials";
import Guarantee from "./components/Guarantee";
import AboutPadre from "./components/AboutPadre";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CheckoutModal from "./components/CheckoutModal";

// Import generated premium graphic assets
const bundleMockupImg = "https://i.imgur.com/O86uJVY.png";
const padrePortraitImg = "https://i.imgur.com/rM6Rvsp.jpeg";
const milagrePaintingImg = "/src/assets/images/missa_milagre_1780967235187.png";

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [secondsLeftBottom, setSecondsLeftBottom] = useState(5396);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const handleRedirectToCheckoutUrl = () => {
    window.location.href = "https://pay.lowify.com.br/checkout?product_id=4mMpj9";
  };

  const handleScrollToOffer = () => {
    const element = document.getElementById("pricing-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Bottom ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeftBottom((prev) => {
        if (prev <= 1) return 7200;
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimeStr = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
  };

  return (
    <div id="app-root-container" className="min-h-screen flex flex-col bg-[#FAF8F5]/10 text-stone-800">
      
      {/* 1. Header ribbon indicator */}
      <Header />

      {/* 2. Hero Header Showcase fold */}
      <Hero onCtaClick={handleScrollToOffer} bundleImgUrl={bundleMockupImg} />

      {/* 3. Pain Points checks lists */}
      <PainPoints />

      {/* 4. Interactive slides carousel of pages */}
      <InteractiveInside onCtaClick={handleScrollToOffer} milagreImgUrl={milagrePaintingImg} />

      {/* 5. Core Textbook features summaries */}
      <MissaFeatures />

      {/* 6. Checklist topics of discovery */}
      <DiscoveryList />

      {/* 7. Grid of 6 exclusive gratis bonuses */}
      <BonusSection />

      {/* 8. Main Offer price tag card & Countdown display */}
      <OfferCard onCtaClick={handleRedirectToCheckoutUrl} bundleImgUrl={bundleMockupImg} />

      {/* 9. Reader testimonials comments */}
      <Testimonials />

      {/* 10. Guarantee Policy security shield */}
      <Guarantee />

      {/* 11. Profile of the author Padre João */}
      <AboutPadre onCtaClick={handleScrollToOffer} padreImgUrl={padrePortraitImg} />

      {/* 12. Accordion Frequently asked inquiries */}
      <FAQ />

      {/* 13. Sub-bottom Scarcity pricing promotion block */}
      <section id="bottom-scarcity-block" className="bg-[#4d1616] py-14 px-4 text-center text-white relative">
        <div className="max-w-xl mx-auto space-y-6 relative z-10">
          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight">Não Perca Esta Oportunidade!</h3>
          <p className="text-stone-300 text-xs sm:text-sm font-sans font-semibold">Transforme sua experiência na Santa Missa</p>
          
          <div className="space-y-1">
            <span className="text-stone-400 text-xs font-bold uppercase tracking-wider block">⏳ Oferta válida até:</span>
            <div id="bottom-timer" className="text-[32px] sm:text-[40px] font-serif text-[#b58c30] font-black tracking-widest leading-none">
              {formatTimeStr(secondsLeftBottom)}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              id="btn-bottom-scarcity-cta"
              onClick={handleScrollToOffer}
              className="w-full max-w-sm py-4.5 bg-[#b58c30] hover:bg-[#a17a26] text-white font-extrabold rounded-xl shadow-md border-b-4 border-[#8c671b] uppercase text-[11px] sm:text-xs tracking-wider flex items-center justify-center transition-all duration-150 active:scale-98 cursor-pointer relative overflow-hidden group animate-pulse-slow"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-30deg] -translate-x-full group-hover:animate-shine"></div>
              <span>ADQUIRIR MISSA EXPLICADA</span>
            </button>
          </div>
        </div>
      </section>

      {/* 14. Standard Legal Footer terms */}
      <Footer />

      {/* 15. The Full-fidelity Interactive simulation Checkout Modal */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} price="R$ 27,00" />

    </div>
  );
}

import React, { useState } from "react";
import { X, ShieldCheck, Mail, User, Phone, CheckCircle, Copy, CreditCard, QrCode, ClipboardCheck } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  price: string;
}

type PaymentMethod = "pix" | "card" | "boleto";

export default function CheckoutModal({ isOpen, onClose, price }: CheckoutModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("pix");
  
  // Card states
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");

  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const validateStep1 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = "Nome completo é indispensável.";
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Insira um e-mail válido.";
    if (phone.replace(/\D/g, "").length < 10) newErrors.phone = "Insira um celular válido com DDD.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const validateCard = () => {
    const newErrors: { [key: string]: string } = {};
    if (cardNumber.replace(/\s/g, "").length < 16) newErrors.cardNumber = "Número de cartão inválido.";
    if (!cardName.trim()) newErrors.cardName = "Nome impresso é necessário.";
    if (!cardExpiry.includes("/")) newErrors.cardExpiry = "Validade necessária (MM/AA).";
    if (cardCVV.length < 3) newErrors.cardCVV = "CVV inválido.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentMethod === "card" && !validateCard()) return;
    
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setStep(3);
    }, 1500);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const formatPhone = (value: string) => {
    const v = value.replace(/\D/g, "");
    if (v.length <= 11) {
      return v
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d{5})(\d{4})/g, "$1-$2");
    }
    return v.substring(0, 11);
  };

  const mockPixKey = "00020101021226830014br.gov.bcb.pix2561lojaprodutosoficial.shop/missaexplicada327.005303986540527.005802BR5915MissaExplicada6009SAO%20PAULO62070503***6304D1B5";
  const mockBoletoBar = "34191.79001 01043.513184 91020.150008 7 93450000002700";

  return (
    <div id="checkout-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div id="checkout-modal" className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden my-8 animate-fade-in">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-liturgic-maroon text-white">
          <div className="flex items-center gap-2">
            <span className="text-xl font-display">✝ Missa Explicada</span>
          </div>
          <button 
            id="btn-close-modal"
            onClick={onClose} 
            className="p-1 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps Info */}
        <div className="px-6 py-3 border-b border-stone-100 bg-stone-50 flex justify-between items-center text-xs font-semibold text-stone-500">
          <div className="flex items-center gap-1.5">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? "bg-liturgic-maroon text-white" : "bg-stone-200 text-stone-600"}`}>1</span>
            <span className={step === 1 ? "text-liturgic-maroon" : ""}>Dados de Acesso</span>
          </div>
          <div className="w-8 h-px bg-stone-200"></div>
          <div className="flex items-center gap-1.5">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? "bg-liturgic-maroon text-white" : "bg-stone-200 text-stone-600"}`}>2</span>
            <span className={step === 2 ? "text-liturgic-maroon" : ""}>Pagamento</span>
          </div>
          <div className="w-8 h-px bg-stone-200"></div>
          <div className="flex items-center gap-1.5">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 3 ? "bg-emerald-500 text-white" : "bg-stone-200 text-stone-600"}`}>3</span>
            <span className={step === 3 ? "text-emerald-600" : ""}>Sucesso</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {step === 1 && (
            <form id="checkout-form-step1" onSubmit={handleStep1Submit} className="space-y-4">
              <h3 className="text-lg font-serif font-bold text-stone-800 mb-1">Insira seus dados para receber o material</h3>
              <p className="text-stone-500 text-xs mb-4">
                O acesso aos arquivos em PDF será enviado imediatamente para o e-mail informado abaixo.
              </p>

              <div>
                <label className="block text-xs font-semibold text-stone-600 mb-1">Nome Completo</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                  <input
                    id="input-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full pl-9 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-liturgic-maroon/20 focus:border-liturgic-maroon transition-all"
                  />
                </div>
                {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-600 mb-1">Seu Melhor E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                  <input
                    id="input-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplo@gmail.com"
                    className="w-full pl-9 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-liturgic-maroon/20 focus:border-liturgic-maroon transition-all"
                  />
                </div>
                {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-600 mb-1">WhatsApp / Celular com DDD</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                  <input
                    id="input-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(formatPhone(e.target.value))}
                    placeholder="(11) 99999-9999"
                    className="w-full pl-9 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-liturgic-maroon/20 focus:border-liturgic-maroon transition-all"
                  />
                </div>
                {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone}</span>}
              </div>

              <button
                id="btn-confirm-step1"
                type="submit"
                className="w-full py-3 bg-liturgic-gold text-white font-semibold rounded-xl shadow-lg shadow-liturgic-gold/20 hover:bg-amber-700 hover:shadow-liturgic-gold/30 active:scale-[0.98] transition-all text-sm mt-6 cursor-pointer"
              >
                PROSSEGUIR PARA PAGAMENTO
              </button>

              <div className="flex items-center justify-center gap-2 text-stone-400 text-[10px] pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Seus dados e pagamentos estão protegidos de forma segura e criptografada</span>
              </div>
            </form>
          )}

          {step === 2 && (
            <form id="checkout-form-step2" onSubmit={handlePaymentSubmit} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                <div>
                  <h4 className="text-sm font-bold text-stone-800">Missa Explicada + 6 Bônus</h4>
                  <p className="text-[11px] text-stone-500">Comprador: {name} ({email})</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold text-liturgic-maroon">{price}</span>
                  <p className="text-[9px] text-stone-400">Total à vista</p>
                </div>
              </div>

              {/* Selector */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  id="tab-payment-pix"
                  type="button"
                  onClick={() => setPaymentMethod("pix")}
                  className={`py-2 px-3 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all text-xs font-semibold cursor-pointer ${
                    paymentMethod === "pix" 
                      ? "border-emerald-500 bg-emerald-50/50 text-emerald-700" 
                      : "border-stone-200 text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  <QrCode className="w-4 h-4" />
                  <span>Pix (Prático)</span>
                </button>
                <button
                  id="tab-payment-card"
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`py-2 px-3 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all text-xs font-semibold cursor-pointer ${
                    paymentMethod === "card" 
                      ? "border-liturgic-maroon bg-liturgic-maroon/5 text-liturgic-maroon" 
                      : "border-stone-200 text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Cartão</span>
                </button>
                <button
                  id="tab-payment-boleto"
                  type="button"
                  onClick={() => setPaymentMethod("boleto")}
                  className={`py-2 px-3 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all text-xs font-semibold cursor-pointer ${
                    paymentMethod === "boleto" 
                      ? "border-amber-600 bg-amber-50/50 text-amber-800" 
                      : "border-stone-200 text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 6h2v12H4V6zm4 0h1v12H8V6zm3 0h3v12h-3V6zm5 0h1v12h-1V6zm3 0h1v12h-1V6z"/>
                  </svg>
                  <span>Boleto</span>
                </button>
              </div>

              {/* PIX Form Content */}
              {paymentMethod === "pix" && (
                <div className="space-y-4 bg-emerald-50/20 border border-emerald-500/20 rounded-xl p-4 text-center">
                  <div className="flex flex-col items-center">
                    <div className="bg-white p-3 rounded-xl shadow-xs border border-emerald-100 mb-2">
                      {/* Realistic simulated QR code blocks */}
                      <div className="w-32 h-32 bg-[#FAF8F5] flex flex-wrap items-center justify-center p-2 relative">
                        <div className="grid grid-cols-6 gap-1 w-full h-full opacity-80">
                          {Array.from({ length: 36 }).map((_, i) => (
                            <div 
                              key={i} 
                              className={`rounded-xs ${
                                (i % 2 === 0 && i % 3 !== 0) || i < 6 || i > 30 || (i % 6 === 0) 
                                  ? "bg-slate-800" 
                                  : "bg-transparent"
                              }`}
                            ></div>
                          ))}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="bg-emerald-500 text-white rounded-lg p-1 text-[10px] font-bold">PIX COPIA E COLA</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-stone-600">Aprovação imediata! Copie o código abaixo e pague no app do seu banco.</span>
                  </div>

                  <div className="flex items-center gap-2 bg-white border border-stone-200 p-2 rounded-lg text-left">
                    <span className="text-[10px] font-mono text-stone-500 truncate flex-1">{mockPixKey}</span>
                    <button
                      id="btn-copy-pix"
                      type="button"
                      onClick={() => handleCopy(mockPixKey)}
                      className="px-2.5 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 rounded-md text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer"
                    >
                      {copied ? <ClipboardCheck className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? "Copiado!" : "Copiar"}</span>
                    </button>
                  </div>

                  <button
                    id="btn-simulate-pix-paid"
                    onClick={handlePaymentSubmit}
                    type="button"
                    className="w-full py-2.5 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    {submitting ? "Confirmando transação..." : "SIMULAR PAGAMENTO DO PIX RECEBIDO ✓"}
                  </button>
                </div>
              )}

              {/* CARD Form Content */}
              {paymentMethod === "card" && (
                <div className="space-y-3.5">
                  {/* Visual Card Representation */}
                  <div className="bg-radial from-stone-800 to-stone-950 p-4 rounded-xl text-yellow-100 shadow-lg relative min-h-[160px] flex flex-col justify-between">
                    <div className="absolute right-4 top-4 text-[10px] text-stone-400 font-mono tracking-widest uppercase">SIMULADOR</div>
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-7 bg-amber-400/80 rounded-md"></div>
                      <span className="text-sm italic font-black font-serif text-white">VISA / MASTER</span>
                    </div>
                    <div className="my-2">
                      <span id="visual-card-number" className="text-base font-mono tracking-widest text-white">
                        {cardNumber || "•••• •••• •••• ••••"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <div className="truncate pr-4">
                        <p className="text-[8px] text-stone-500 uppercase font-mono">Nome do Titular</p>
                        <p id="visual-card-name" className="uppercase font-mono truncate max-w-[150px]">
                          {cardName || "SEU NOME IMPRESSO"}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[8px] text-stone-500 uppercase font-mono">Validade</p>
                        <p id="visual-card-expiry" className="font-mono">
                          {cardExpiry || "MM/AA"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Form Inputs */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="col-span-2">
                      <label className="block text-[10px] font-semibold text-stone-600 mb-0.5">Número do Cartão de Crédito</label>
                      <input
                        id="input-card-number"
                        type="text"
                        maxLength={19}
                        value={cardNumber}
                        onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                        placeholder="0000 0000 0000 0000"
                        className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-liturgic-maroon focus:border-liturgic-maroon"
                      />
                      {errors.cardNumber && <span className="text-red-500 text-[10px]">{errors.cardNumber}</span>}
                    </div>

                    <div className="col-span-2">
                      <label className="block text-[10px] font-semibold text-stone-600 mb-0.5">Nome no Cartão</label>
                      <input
                        id="input-card-name"
                        type="text"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="JOÃO SILVA COSTA"
                        className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-liturgic-maroon focus:border-liturgic-maroon"
                      />
                      {errors.cardName && <span className="text-red-500 text-[10px]">{errors.cardName}</span>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold text-stone-600 mb-0.5">Validade</label>
                      <input
                        id="input-card-expiry"
                        type="text"
                        maxLength={5}
                        placeholder="MM/AA"
                        value={cardExpiry}
                        onChange={(e) => {
                          let v = e.target.value.replace(/\D/g, "");
                          if (v.length > 2) {
                            v = v.substring(0, 2) + "/" + v.substring(2, 4);
                          }
                          setCardExpiry(v);
                        }}
                        className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-liturgic-maroon focus:border-liturgic-maroon text-center"
                      />
                      {errors.cardExpiry && <span className="text-red-500 text-[10px]">{errors.cardExpiry}</span>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold text-stone-600 mb-0.5">Código CVV</label>
                      <input
                        id="input-card-cvv"
                        type="password"
                        maxLength={4}
                        placeholder="123"
                        value={cardCVV}
                        onChange={(e) => setCardCVV(e.target.value.replace(/\D/g, ""))}
                        className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-liturgic-maroon focus:border-liturgic-maroon text-center"
                      />
                      {errors.cardCVV && <span className="text-red-500 text-[10px]">{errors.cardCVV}</span>}
                    </div>
                  </div>

                  <button
                    id="btn-submit-card-pay"
                    type="submit"
                    className="w-full py-3 bg-liturgic-maroon text-white font-semibold rounded-xl hover:bg-red-950 active:scale-[0.98] transition-all text-xs"
                    disabled={submitting}
                  >
                    {submitting ? "Finalizando compra..." : "APROVAR PAGAMENTO SIMULADO POR R$ 27,00 ✝"}
                  </button>
                </div>
              )}

              {/* BOLETO Form Content */}
              {paymentMethod === "boleto" && (
                <div className="space-y-4 bg-amber-500/5 border border-amber-500/20 rounded-xl p-4 text-center">
                  <div className="flex flex-col items-center">
                    <svg className="w-16 h-10 text-stone-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <line x1="6" y1="9" x2="6" y2="15" />
                      <line x1="10" y1="9" x2="10" y2="15" strokeWidth="3" />
                      <line x1="14" y1="9" x2="14" y2="15" strokeWidth="2" />
                      <line x1="18" y1="9" x2="18" y2="15" />
                    </svg>
                    <span className="text-xs text-stone-600 mt-2">Boleto simula compensação em até 48 horas, mas em nosso simulador seu acesso é aprovado na hora!</span>
                  </div>

                  <div className="flex items-center gap-2 bg-white border border-stone-200 p-2 rounded-lg text-left">
                    <span className="text-[10px] font-mono text-stone-500 truncate flex-1">{mockBoletoBar}</span>
                    <button
                      id="btn-copy-boleto"
                      type="button"
                      onClick={() => handleCopy(mockBoletoBar)}
                      className="px-2.5 py-1.5 bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100 rounded-md text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer"
                    >
                      {copied ? <ClipboardCheck className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? "Copiado" : "Copiar"}</span>
                    </button>
                  </div>

                  <button
                    id="btn-simulate-boleto-paid"
                    onClick={handlePaymentSubmit}
                    type="button"
                    className="w-full py-2.5 bg-amber-600 text-white text-xs font-semibold rounded-lg hover:bg-amber-700 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    {submitting ? "Enviando aprovação..." : "SIMULAR COMPENSAÇÃO DE BOLETO IMEDIATA ✓"}
                  </button>
                </div>
              )}
            </form>
          )}

          {step === 3 && (
            <div id="checkout-success-view" className="text-center space-y-5 py-4 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-50 rounded-full text-emerald-500 animate-bounce mb-2">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-1">Pagamento Aprovado com Sucesso!</h3>
                <p className="text-sm text-stone-600 max-w-sm mx-auto">
                  Que alegria! O seu acesso ao guia <b>Missa Explicada</b> e a todos os bônus está ativo e pronto para download.
                </p>
                <p className="text-xs text-[#b38f38] mt-1 font-semibold">Enviamos também um e-mail de cortesia para {email}.</p>
              </div>

              {/* PDF Sample Downloads */}
              <div className="bg-stone-50 rounded-xl p-4 border border-stone-100 text-left space-y-3">
                <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">Seus Materiais Adquiridos:</h4>
                
                <a 
                  id="link-download-main-book"
                  href="/assets/missa_explicada_guia_completo.pdf" 
                  download 
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Seu navegador iniciará o download simulado do arquivo PDF 'Missa Explicada' em formato de alta resolução.");
                  }}
                  className="flex items-center justify-between p-2.5 bg-white border border-stone-200 hover:border-[#b38f38] rounded-lg transition-all text-xs text-stone-800 group"
                >
                  <div className="flex items-center gap-2">
                    <span className="p-1 bg-red-50 text-red-600 font-bold rounded text-[10px]">PDF</span>
                    <span className="font-semibold text-stone-800 group-hover:text-amber-800">📖 Missa Explicada - Volume Principal (Completo)</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#b38f38]">BAIXAR</span>
                </a>

                <a 
                  id="link-download-bonus"
                  href="/assets/missa_explicada_6_bonus.pdf" 
                  download 
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Download simulado do pacote completo contendo os 6 Super Bônus Exclusivos (O Valor do Silêncio, Guia da Confissão, Orações Eucarísticas, Posturas na Missa, Antigo e Novo Testamento, Ano Litúrgico Completo).");
                  }}
                  className="flex items-center justify-between p-2.5 bg-white border border-stone-200 hover:border-[#b38f38] rounded-lg transition-all text-xs text-stone-800 group"
                >
                  <div className="flex items-center gap-2">
                    <span className="p-1 bg-amber-50 text-amber-700 font-bold rounded text-[10px]">ZIP</span>
                    <span className="font-semibold text-stone-800 group-hover:text-amber-800">🎁 Pacote Completo das 6 Obras de Bônus</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#b38f38]">BAIXAR</span>
                </a>
              </div>

              <button
                id="btn-finished-checkout"
                onClick={() => {
                  onClose();
                  setStep(1);
                  setName("");
                  setEmail("");
                  setPhone("");
                  setCardNumber("");
                  setCardName("");
                  setCardExpiry("");
                  setCardCVV("");
                }}
                className="w-full py-3 bg-stone-800 hover:bg-stone-900 text-white font-semibold rounded-xl text-xs"
              >
                FECHAR E VOLTAR AO SITE
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

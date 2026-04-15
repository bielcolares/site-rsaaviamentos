import React from 'react';
import Link from 'next/link';

export default function CtaHome() {
  return (
    <section className="w-full bg-brand-green-dark text-white py-24 font-sans relative overflow-hidden">
      {/* Elementos decorativos bg */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-brand-red/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 text-center relative z-10 max-w-4xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-script)] font-bold text-brand-cream mb-6 tracking-tight">
          Pronto para fazer seu pedido?
        </h2>
        <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-12">
          Entre em contato com nossa equipe. Respondemos por e-mail, telefone ou WhatsApp em horário
          comercial.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link href="/atendimento" className="w-full sm:w-auto">
            <button className="w-full bg-brand-red text-white hover:bg-brand-red/90 px-10 py-4 rounded-full font-bold text-sm md:text-base uppercase tracking-[0.15em] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Fale com a gente
            </button>
          </Link>
          <Link href="/catalogo" className="w-full sm:w-auto">
            <button className="w-full bg-transparent text-brand-cream hover:bg-white/5 border border-white/20 px-10 py-4 rounded-full font-bold text-sm md:text-base uppercase tracking-[0.15em] transition-all">
              Ver catálogo &rarr;
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

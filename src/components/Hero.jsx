import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="hero-conceito"
      className="w-full bg-[#fdf1da] pt-36 md:pt-48 pb-16 md:pb-20 overflow-hidden font-sans border-b border-black/5 flex flex-col items-center text-center px-6"
    >
      <div className="container mx-auto max-w-4xl flex flex-col items-center">
        {/* Tag / Badge */}
        <div className="reveal-up inline-block px-4 py-1.5 rounded-full bg-brand-green-dark/10 border border-brand-green-dark/20 text-brand-green-dark font-black text-[10px] uppercase tracking-[0.25em] mb-8">
          Atacado para confecção e indústria têxtil
        </div>

        {/* Título Monumental */}
        <h1 className="reveal-up delay-100 text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] text-brand-green-dark font-[family-name:var(--font-script)] font-bold leading-[1.1] tracking-tight mb-8">
          Aviamentos de qualidade para{' '}
          <span className="text-brand-red">quem produz de verdade.</span>
        </h1>

        {/* Subtítulo */}
        <p className="reveal-up delay-200 text-brand-green-dark/80 text-lg md:text-xl font-medium leading-[1.8] font-sans max-w-3xl mb-12">
          Na R.SÁ Aviamentos você encontra elásticos, botões, ilhós, cordões, lastex e meia argola —
          direto do atacado, com atendimento especializado e entrega para todo o Brasil.
        </p>

        {/* CTAs */}
        <div className="reveal-up delay-300 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link href="/atendimento" className="w-full sm:w-auto">
            <button className="w-full bg-brand-red text-white hover:bg-brand-red/90 px-8 lg:px-12 py-4 rounded-full font-bold text-sm uppercase tracking-[0.15em] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Fale com um especialista
            </button>
          </Link>
          <Link href="/catalogo" className="w-full sm:w-auto mt-4 sm:mt-0">
            <button className="w-full bg-transparent text-brand-green-dark hover:bg-brand-green-dark/5 border-2 border-brand-green-dark/20 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-[0.15em] transition-all">
              Ver catálogo completo
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

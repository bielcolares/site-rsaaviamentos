import React from 'react';

export default function HeroSobre() {
  return (
    <section className="w-full bg-[#fdf1da] pt-48 pb-20 overflow-hidden font-sans border-b border-black/5 text-center px-6">
      <div className="container mx-auto max-w-4xl flex flex-col items-center">
        {/* Breadcrumb / Tag */}
        <div className="reveal-up inline-block px-5 py-2 rounded-full bg-brand-green-dark text-white font-bold text-[11px] uppercase tracking-[0.25em] mb-8 shadow-md">
          A empresa
        </div>

        {/* Título Principal */}
        <h1 className="reveal-up delay-100 text-[2.5rem] md:text-[4rem] text-brand-green-dark font-[family-name:var(--font-script)] font-bold leading-[1.1] tracking-tight mb-8">
          Mais de 20 anos abastecendo{' '}
          <span className="block text-brand-red mt-2">quem faz acontecer.</span>
        </h1>

        {/* Subtítulo */}
        <p className="reveal-up delay-200 text-brand-green-dark/80 text-lg md:text-xl font-medium leading-[1.8] font-sans max-w-3xl">
          A R.SÁ Aviamentos nasceu no coração do Brás para ser o fornecedor de confiança de
          confecções, ateliês e indústrias têxteis de todo o Brasil.
        </p>
      </div>
    </section>
  );
}

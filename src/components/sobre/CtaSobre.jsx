import React from 'react';
import Link from 'next/link';

export default function CtaSobre() {
  return (
    <section className="w-full bg-brand-cream py-24 md:py-32 font-sans border-t border-black/5 flex flex-col items-center px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-script)] font-bold text-brand-green-dark mb-6 tracking-tight">
          Quer conhecer nosso catálogo?
        </h2>
        <p className="text-brand-green-dark/80 text-lg md:text-xl font-medium leading-[1.8] font-sans max-w-xl mx-auto mb-12">
          Consulte os produtos disponíveis ou entre em contato direto com nossa equipe.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link href="/catalogo" className="w-full sm:w-auto">
            <button className="w-full bg-brand-green-dark text-white hover:bg-brand-green-dark/90 px-10 py-4 rounded-full font-bold text-sm uppercase tracking-[0.15em] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Ver catálogo completo &rarr;
            </button>
          </Link>
          <Link href="/atendimento" className="w-full sm:w-auto mt-2 sm:mt-0">
            <button className="w-full bg-transparent text-brand-green-dark hover:bg-black/5 border-2 border-brand-green-dark/20 px-10 py-4 rounded-full font-bold text-sm uppercase tracking-[0.15em] transition-all">
              Fale conosco
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

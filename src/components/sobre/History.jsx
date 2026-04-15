import React from 'react';
import Image from 'next/image';

export default function History() {
  return (
    <section className="w-full bg-[#fdf1da] py-20 md:py-32 font-sans overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
        {/* TEXT CONTENT */}
        <div className="flex-1 w-full text-left flex flex-col gap-8">
          <p className="reveal-up text-[#3b2b2b] text-lg md:text-xl font-medium leading-[1.9] font-sans">
            Fundada há mais de duas décadas na Rua Dr. Carlos Botelho, no Brás — o maior polo de
            moda e aviamentos do Brasil —, a R.SÁ Aviamentos cresceu com um propósito simples:{' '}
            <strong className="text-brand-red font-bold">
              oferecer produtos de qualidade comprovada para quem vive de costura.
            </strong>
          </p>

          <p className="reveal-up delay-100 text-brand-green-dark/80 text-lg md:text-xl font-medium leading-[1.9] font-sans">
            Trabalhamos com marcas reconhecidas pelo setor, como Zanotti, Baxmann, Aliança e
            Cardenas, e mantemos estoque constante para garantir que a produção dos nossos clientes
            nunca pare. Do pequeno ateliê à confecção de médio porte, atendemos com o mesmo cuidado
            e agilidade.
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none relative mb-8 lg:mb-0">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-brand-cream rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
            <Image
              src="/images/fachada.png"
              alt="Fachada exterior da loja R.SÁ Aviamentos no Brás"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          {/* Decorative element background */}
          <div className="absolute -bottom-8 -left-8 w-full h-full bg-brand-green-dark/10 rounded-3xl -z-10 transform -rotate-3"></div>
        </div>
      </div>
    </section>
  );
}

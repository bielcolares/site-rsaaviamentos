import React from 'react';

export default function Testimonial() {
  const testimonials = [
    {
      text: 'Loja de aviamentos em geral, onde destaca-se as vendas atacadistas para grande números de pequenas oficinas de costuras e empresas do ramo, possui um quadro de funcionários conhecedores e antigos do ramo, boa loja com bons preços.',
      name: 'Zé Cleide Pereira',
      tag: 'Local Guide · Google · 379 avaliações',
      rating: 5,
    },
    // Placeholders removed as requested: "Se não houver mais avaliações disponíveis agora, exibir apenas 1 card centralizado. Não criar depoimentos fictícios."
  ];

  return (
    <section className="w-full bg-[#fdf1da] py-20 font-sans border-b border-black/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Título de Seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-script)] font-bold text-brand-green-dark mb-4 tracking-tight">
            O que dizem nossos clientes
          </h2>
        </div>

        {/* Avaliação Geral */}
        <div className="inline-flex flex-col items-center justify-center p-6 bg-white/50 border border-brand-green-dark/10 rounded-2xl mb-12 shadow-sm">
          <div className="flex bg-[#3b2b2b] text-white px-4 py-1.5 rounded-full items-center gap-2 font-bold mb-3">
            <span className="text-amber-400">★</span> 4.5
          </div>
          <p className="text-brand-green-dark font-bold text-sm tracking-widest uppercase">
            Avaliação no Google
          </p>
        </div>

        {/* Grid de Depoimentos (Centrado quando apenas 1) */}
        <div
          className={`grid grid-cols-1 ${testimonials.length > 1 ? 'md:grid-cols-3' : 'max-w-2xl'} gap-8 w-full`}
        >
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-brand-cream border shadow-md border-brand-brown/10 p-8 md:p-10 rounded-3xl relative"
            >
              {/* Aspas decorativas */}
              <div className="absolute top-6 left-8 text-6xl text-brand-red opacity-20 font-[family-name:var(--font-script)] leading-none">
                &quot;
              </div>

              {/* Avaliação do Card */}
              <div className="flex gap-1 mb-6 mt-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-amber-500 text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Texto do Depoimento */}
              <p className="text-[#3b2b2b] text-base md:text-lg leading-relaxed font-medium mb-8 relative z-10 italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Assinatura */}
              <div className="flex items-center gap-4 border-t border-brand-brown/10 pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl uppercase shrink-0 shadow-inner">
                  {testimonial.name.slice(0, 1)}
                </div>
                <div>
                  <h4 className="font-bold text-[#3b2b2b]">{testimonial.name}</h4>
                  <p className="text-xs text-brand-green-dark/60 font-semibold uppercase tracking-wider mt-1">
                    {testimonial.tag}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

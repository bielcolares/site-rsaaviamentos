import React from 'react';

export default function Differentials() {
  const cards = [
    {
      icon: '🏆',
      title: 'Marcas de referência',
      text: 'Trabalhamos apenas com fornecedores reconhecidos pela indústria têxtil brasileira. Qualidade verificada em cada lote.',
    },
    {
      icon: '📦',
      title: 'Estoque disponível',
      text: 'Produtos com disponibilidade regular, sem surpresas na hora do pedido. Atendemos demandas pontuais e recorrentes.',
    },
    {
      icon: '🤝',
      title: 'Atendimento especializado',
      text: 'Nossa equipe conhece o setor de aviamentos há décadas. Estamos prontos para indicar o produto certo para cada aplicação.',
    },
  ];

  return (
    <section className="w-full bg-white py-24 md:py-32 font-sans border-y border-black/5">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-script)] font-bold text-brand-green-dark mb-16 tracking-tight">
          Por que comprar com a R.SÁ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="text-5xl mb-6 bg-[#fdf1da] w-24 h-24 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-[#3b2b2b] mb-4">{card.title}</h3>
              <p className="text-brand-green-dark/70 font-medium leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

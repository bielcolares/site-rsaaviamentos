import React from 'react';

export default function Metrics() {
  const metrics = [
    {
      number: '+20 anos',
      label: 'de experiência no setor',
    },
    {
      number: '4.5 ★',
      label: 'avaliação no Google',
    },
    {
      number: '6',
      label: 'linhas de produtos',
    },
    {
      number: 'Todo o Brasil',
      label: 'entrega para todo o país',
    },
  ];

  return (
    <section className="w-full bg-[#f4e6cc] py-12 md:py-16 font-sans border-b border-black/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 divide-x-0 lg:divide-x divide-brand-green-dark/10">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              <span className="text-3xl md:text-4xl font-black text-brand-green-dark mb-2 tracking-tight">
                {metric.number}
              </span>
              <span className="text-brand-green-dark/70 text-sm md:text-base font-bold uppercase tracking-widest">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Link from 'next/link';

export default function CategoriesHome() {
  const categories = [
    {
      icon: '🧶',
      title: 'Lastex',
      description:
        'Fios de alta elasticidade para moda praia, lingerie e fitness. Marcas Zanotti e São José.',
    },
    {
      icon: '🔘',
      title: 'Botões',
      description:
        'Botões bombê em plástico, disponíveis em múltiplos tamanhos. Fornecedor Cardenas.',
    },
    {
      icon: '📏',
      title: 'Elásticos',
      description: 'Elásticos chatos Zanotti Savana, do 8 ao 20, em rolos de 25 a 100 metros.',
    },
    {
      icon: '⭕',
      title: 'Ilhós',
      description: 'Ilhós de ferro niquelado Baxmann, N° 45 e N° 51, em caixas de 1000 peças.',
    },
    {
      icon: '〰️',
      title: 'Cordões',
      description: 'Cordões Aliança em algodão 100%, diâmetros 3 mm e 4 mm, cru, branco e preto.',
    },
    {
      icon: '⚙️',
      title: 'Meia Argola',
      description: 'Meia argola Zamac em acabamentos dourado e níquel, 20 mm e 25 mm.',
    },
  ];

  return (
    <section className="w-full bg-[#fdf1da] py-20 md:py-24 font-sans">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-script)] font-bold text-brand-green-dark mb-4 tracking-tight">
            O que você encontra aqui
          </h2>
          <p className="text-brand-green-dark/70 text-lg font-bold">
            Produtos selecionados das melhores marcas do mercado têxtil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white/50 backdrop-blur-sm border border-brand-green-dark/10 p-8 rounded-2xl flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl bg-brand-cream w-16 h-16 rounded-full flex items-center justify-center shadow-inner">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#3b2b2b]">{cat.title}</h3>
              <p className="text-brand-green-dark/70 font-medium leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-brand-green-dark font-bold text-lg mb-2">
            Não encontrou o que precisa?
          </p>
          <Link
            href="/atendimento"
            className="inline-flex items-center gap-2 text-brand-red font-bold uppercase tracking-widest hover:text-red-700 transition-colors"
          >
            Consulte nossa equipe <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

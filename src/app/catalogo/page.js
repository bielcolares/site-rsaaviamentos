'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

const CATEGORIAS = [
  {
    id: 'lastex',
    nome: 'Lastex',
    emoji: '🧶',
    cor: 'bg-[#eaf1e7]',
    corBorda: 'border-brand-green-dark/20',
    corLabel: 'text-brand-green-dark',
    produtos: [
      {
        nome: 'Lastex 260tex Zanotti Preto',
        detalhes: '64% Elast / 36% Pol',
        unidade: '500 MTS',
        variante: 'Preto',
      },
      {
        nome: 'Lastex 260tex Zanotti Branco/Cru',
        detalhes: '64% Elast / 36% Pol',
        unidade: '500 MTS',
        variante: 'Branco/Cru',
      },
      {
        nome: 'Lastex São José Preto',
        detalhes: '58% Elast / 42% Pol',
        unidade: '500 MTS',
        variante: 'Preto',
      },
      {
        nome: 'Lastex São José Branco',
        detalhes: '58% Elast / 42% Pol',
        unidade: '500 MTS',
        variante: 'Branco',
      },
    ],
  },
  {
    id: 'botoes',
    nome: 'Botões',
    emoji: '🔘',
    cor: 'bg-[#f5e1dd]',
    corBorda: 'border-brand-red/20',
    corLabel: 'text-brand-red',
    produtos: [
      {
        nome: 'Botão Bombê PL Cardenas Branco',
        detalhes: '18 mm',
        unidade: '144 unid.',
        variante: '18 mm',
      },
      {
        nome: 'Botão Bombê PL Cardenas Branco',
        detalhes: '20 mm',
        unidade: '144 unid.',
        variante: '20 mm',
      },
      {
        nome: 'Botão Bombê PL Cardenas Branco',
        detalhes: '24 mm',
        unidade: '144 unid.',
        variante: '24 mm',
      },
    ],
  },
  {
    id: 'elastico',
    nome: 'Elásticos',
    emoji: '📏',
    cor: 'bg-[#fffbe6]',
    corBorda: 'border-amber-400/30',
    corLabel: 'text-amber-700',
    produtos: [
      {
        nome: 'Elástico Zanotti Savana 20',
        detalhes: '19 mm — 73% Pol / 27% Elast',
        unidade: '25 MTS',
        variante: 'Branco/Cru',
      },
      {
        nome: 'Elástico Zanotti Savana 12',
        detalhes: '11 mm — 71% Pol / 29% Elast',
        unidade: '100 MTS',
        variante: 'Branco/Cru',
      },
      {
        nome: 'Elástico Zanotti Savana 8',
        detalhes: '7 mm — 67% Pol / 33% Elast',
        unidade: '100 MTS',
        variante: 'Branco/Cru',
      },
    ],
  },
  {
    id: 'ilhos',
    nome: 'Ilhós',
    emoji: '⭕',
    cor: 'bg-[#e8e8e8]',
    corBorda: 'border-gray-400/30',
    corLabel: 'text-gray-600',
    produtos: [
      {
        nome: 'Ilhós Baxmann Ferro N° 45',
        detalhes: 'Niquelado',
        unidade: '1000 PCS',
        variante: 'N° 45',
      },
      {
        nome: 'Ilhós Baxmann Ferro N° 51',
        detalhes: 'Niquelado',
        unidade: '1000 PCS',
        variante: 'N° 51',
      },
    ],
  },
  {
    id: 'cordao',
    nome: 'Cordões',
    emoji: '〰️',
    cor: 'bg-[#f0ebe3]',
    corBorda: 'border-brand-brown/20',
    corLabel: 'text-brand-brown',
    produtos: [
      {
        nome: 'Cordão Aliança A6 Cru',
        detalhes: '3 mm — 100% Algodão',
        unidade: '100 MTS',
        variante: 'Cru',
      },
      {
        nome: 'Cordão Aliança A6 Branco',
        detalhes: '3 mm — 100% Algodão',
        unidade: '100 MTS',
        variante: 'Branco',
      },
      {
        nome: 'Cordão Aliança A8 Preto',
        detalhes: '4 mm — 100% Algodão',
        unidade: '100 MTS',
        variante: 'Preto',
      },
    ],
  },
  {
    id: 'argola',
    nome: 'Meia Argola',
    emoji: '⚙️',
    cor: 'bg-[#fefce8]',
    corBorda: 'border-yellow-400/30',
    corLabel: 'text-yellow-700',
    produtos: [
      {
        nome: 'Meia Argola Zamac Dourada',
        detalhes: '20 mm',
        unidade: '1000 unid.',
        variante: 'Dourada',
      },
      {
        nome: 'Meia Argola Zamac Níquel',
        detalhes: '25 mm',
        unidade: '1000 unid.',
        variante: 'Níquel',
      },
    ],
  },
];

export default function CatalogoPage() {
  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans overflow-x-hidden">
      <Header />

      <main className="flex-grow w-full pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-[4rem] font-[family-name:var(--font-script)] font-bold text-brand-green-dark mb-4 tracking-tight leading-tight">
              Catálogo Completo
            </h1>
            <p className="text-lg text-brand-green-dark/70 font-bold max-w-xl mx-auto">
              Aviamentos de alta qualidade para confecções, ateliês e indústrias têxteis.
            </p>
          </div>

          {/* Categorias */}
          <div className="flex flex-col gap-16">
            {CATEGORIAS.map((cat) => (
              <div key={cat.id}>
                {/* Título da Categoria */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-2xl">{cat.emoji}</span>
                  <h2
                    className={`font-[family-name:var(--font-script)] font-bold text-2xl md:text-3xl ${cat.corLabel}`}
                  >
                    {cat.nome}
                  </h2>
                  <div className="flex-1 h-px bg-black/8 ml-2"></div>
                </div>

                {/* Grid de Produtos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {cat.produtos.map((prod, i) => (
                    <div
                      key={i}
                      className={`${cat.cor} border ${cat.corBorda} rounded-2xl p-5 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-md transition-all duration-300`}
                    >
                      {/* Variante Badge */}
                      <span
                        className={`text-[10px] font-extrabold uppercase tracking-[0.2em] ${cat.corLabel} opacity-70`}
                      >
                        {cat.variante || prod.variante}
                      </span>

                      {/* Nome */}
                      <h3 className="font-bold text-[#3b2b2b] text-base leading-snug">
                        {prod.nome}
                      </h3>

                      {/* Detalhes técnicos */}
                      <p className="text-sm text-gray-500 font-medium leading-relaxed">
                        {prod.detalhes}
                      </p>

                      {/* Unidade */}
                      <div className="mt-auto pt-3 border-t border-black/5">
                        <span className="text-[11px] font-extrabold uppercase tracking-widest text-gray-400">
                          {prod.unidade}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <p className="text-brand-green-dark/70 font-bold mb-6 text-lg">
              Não encontrou o que procurava? Consulte nossa equipe.
            </p>
            <Link href="/atendimento">
              <button className="bg-brand-red text-white hover:bg-brand-red/90 px-12 py-4 rounded-full font-bold text-sm uppercase tracking-[0.2em] transition-colors shadow-lg shadow-brand-red/20">
                Fale com um Especialista
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

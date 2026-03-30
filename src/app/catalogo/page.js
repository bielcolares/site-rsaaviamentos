'use client';
import Link from 'next/link';

// Array de 12 Produtos gerados para o Catálogo Oficial
const PRODUTOS_COMPLETO = [
  { id: 1, nome: "Sintético Brilho Mágico", categoria: "Sintético Premium", corBg: "bg-[#eaf1e7]", imagem: "/images/sintetico.png", urlML: "https://mercadolivre.com.br", urlShopee: "https://shopee.com.br" },
  { id: 2, nome: "Algodão 100% Puro", categoria: "Fio Orgânico", corBg: "bg-[#f5e1dd]", imagem: "/images/algodao.png", urlML: "https://mercadolivre.com.br", urlShopee: "https://shopee.com.br" },
  { id: 3, nome: "Lã Merino Soft Escura", categoria: "Lã Especial", corBg: "bg-[#e2e9f0]", imagem: "/images/merino.png", urlML: "https://mercadolivre.com.br", urlShopee: "https://shopee.com.br" },
  { id: 4, nome: "Sintético Premium Preto", categoria: "Sintético Premium", corBg: "bg-[#eaf1e7]", imagem: "/images/sintetico.png", urlML: "https://mercadolivre.com.br", urlShopee: "https://shopee.com.br" },
  { id: 5, nome: "Algodão Penteado Natural", categoria: "Fio Orgânico", corBg: "bg-[#f5e1dd]", imagem: "/images/algodao.png", urlML: "https://mercadolivre.com.br", urlShopee: "https://shopee.com.br" },
  { id: 6, nome: "Fio de Inverno Grosso", categoria: "Lã Especial", corBg: "bg-[#e2e9f0]", imagem: "/images/merino.png", urlML: "https://mercadolivre.com.br", urlShopee: "https://shopee.com.br" },
  { id: 7, nome: "Sintético Brilho Prata", categoria: "Sintético Premium", corBg: "bg-[#eaf1e7]", imagem: "/images/sintetico.png", urlML: "https://mercadolivre.com.br", urlShopee: "https://shopee.com.br" },
  { id: 8, nome: "Algodão Natural Fino", categoria: "Fio Orgânico", corBg: "bg-[#f5e1dd]", imagem: "/images/algodao.png", urlML: "https://mercadolivre.com.br", urlShopee: "https://shopee.com.br" },
  { id: 9, nome: "Lã Merino Alpaca", categoria: "Lã Especial", corBg: "bg-[#e2e9f0]", imagem: "/images/merino.png", urlML: "https://mercadolivre.com.br", urlShopee: "https://shopee.com.br" },
  { id: 10, nome: "Linha de Pesponto Forte", categoria: "Sintético Premium", corBg: "bg-[#eaf1e7]", imagem: "/images/sintetico.png", urlML: "https://mercadolivre.com.br", urlShopee: "https://shopee.com.br" },
  { id: 11, nome: "Fio Ecológico Reforçado", categoria: "Fio Orgânico", corBg: "bg-[#f5e1dd]", imagem: "/images/algodao.png", urlML: "https://mercadolivre.com.br", urlShopee: "https://shopee.com.br" },
  { id: 12, nome: "Mescla Artesanal Outono", categoria: "Lã Especial", corBg: "bg-[#e2e9f0]", imagem: "/images/merino.png", urlML: "https://mercadolivre.com.br", urlShopee: "https://shopee.com.br" }
];

export default function CatalogoPage() {
  return (
    <div className="min-h-screen bg-brand-cream pt-52 pb-24 font-sans">
      
      {/* Cabeçalho da Página */}
      <div className="container mx-auto px-6 md:px-12 text-center mb-20 animate-fade-in-up">
         <h1 className="text-5xl md:text-[6rem] font-[family-name:var(--font-script)] font-bold text-brand-green-dark mb-4 leading-none">
           Nossos Fios Premium
         </h1>
         <p className="text-xl md:text-2xl text-brand-green-dark/70 font-bold max-w-2xl mx-auto">
           A coleção completa de matéria-prima para quem não abre mão da excelência orgânica.
         </p>
      </div>

      {/* Grid de Produtos - Exatamente a estética do Home, mas com botões ML/Shopee em cada */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {PRODUTOS_COMPLETO.map((produto) => (
            <div key={produto.id} className="group cursor-pointer relative animate-fade-in-up" style={{animationDelay: `${(produto.id % 4) * 100}ms`}}>
               
               <div className={`w-full h-auto min-h-[500px] ${produto.corBg} rounded-t-[3rem] rounded-b-[1.5rem] pt-10 px-5 flex flex-col items-center hover:-translate-y-2 transition-transform duration-500`}>
                  
                  {/* Imagem do Produto */}
                  <div className="w-full flex items-center justify-center relative mb-6 group-hover:scale-105 transition-transform duration-700">
                     <img 
                       src={produto.imagem} 
                       alt={produto.nome} 
                       className="w-auto h-[180px] object-cover rounded-2xl shadow-xl z-20"
                     />
                  </div>

                  {/* Detalhes Minimalistas */}
                  <span className="text-brand-green-dark/60 font-extrabold text-[10px] uppercase tracking-[0.2em] mb-2">{produto.categoria}</span>
                  <h3 className="font-[family-name:var(--font-script)] font-bold text-2xl text-brand-green-dark mb-6 leading-tight text-center">
                    {produto.nome}
                  </h3>

                  {/* Dois Botões Focados na Ação */}
                  <div className="mt-auto w-full flex flex-col gap-3 pb-6 opacity-90 group-hover:opacity-100 transition-opacity">
                     <a href={produto.urlML} target="_blank" rel="noopener noreferrer" className="w-full bg-[#ffe600] text-[#2d3277] hover:bg-[#ffeb33] hover:text-[#1d204a] flex items-center justify-center py-3 rounded-full font-extrabold text-[11px] uppercase tracking-wider transition-colors shadow-md">
                        Comprar Mercado Livre
                     </a>
                     <a href={produto.urlShopee} target="_blank" rel="noopener noreferrer" className="w-full bg-[#ee4d2d] text-white hover:bg-[#f36b51] flex items-center justify-center py-3 rounded-full font-extrabold text-[11px] uppercase tracking-wider transition-colors shadow-md">
                        Comprar Shopee
                     </a>
                  </div>

               </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

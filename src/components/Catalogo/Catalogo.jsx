import Link from 'next/link';

const PRODUTOS = [
  { 
    id: 1, 
    nome: "Sintético Brilho Mágico", 
    categoria: "Sintético Premium", 
    preco: "R$ 18,90", 
    corBg: "bg-[#eaf1e7]",
    imagem: "/images/sintetico.png"
  },
  { 
    id: 2, 
    nome: "Algodão 100% Puro", 
    categoria: "Fio Orgânico", 
    preco: "R$ 25,50", 
    corBg: "bg-[#f5e1dd]",
    imagem: "/images/algodao.png"
  },
  { 
    id: 3, 
    nome: "Lã Merino Soft", 
    categoria: "Lã Especial", 
    preco: "R$ 45,00", 
    corBg: "bg-[#e2e9f0]",
    imagem: "/images/merino.png"
  },
];

export default function Catalogo() {
  return (
    <section id="catalogo" className="py-24 md:py-32 bg-[#fdf1da] relative overflow-hidden flex flex-col items-center">
      
      {/* Título de Referência - Espaço Monumental acima das caixas */}
      <div className="text-center mb-20 px-6 z-10 w-full">
        <h2 className="reveal-up text-4xl md:text-[5rem] font-[family-name:var(--font-script)] font-bold text-brand-green-dark mb-4 tracking-tight leading-tight">
          Nossa Coleção
        </h2>
        <p className="reveal-up delay-100 text-xl md:text-2xl text-brand-green-dark/70 font-bold font-sans">Fios funcionais e luxuosos.</p>
      </div>

      <div className="container mx-auto px-6 md:px-12 w-full z-10">
        
        {/* O Grid Famoso "Float Flat" - Imagens vazando do Container Natural */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {PRODUTOS.map((produto, index) => (
            <div key={produto.id} className={`reveal-up delay-${((index % 3) + 1) * 100} group cursor-pointer relative`}>
               
               {/* Fundo Arredondado - Exato Estilo da Referência, emulando caixa fotográfica pastel */}
               <div className={`w-full h-[550px] ${produto.corBg} rounded-t-[5rem] rounded-b-[2rem] pt-12 px-6 flex flex-col items-center group-hover:-translate-y-4 transition-transform duration-500 ease-in-out`}>
                  
                  {/* Foto Hiper-Realista Central */}
                  <div className="w-full h-1/2 flex items-center justify-center relative mb-8 group-hover:scale-105 transition-transform duration-[1.5s]">
                     <img 
                       src={produto.imagem} 
                       alt={produto.nome} 
                       className="w-auto max-h-[220px] object-cover rounded-2xl md:rounded-3xl shadow-2xl drop-shadow-xl z-20"
                     />
                  </div>

                  {/* Informações Minimalistas Flutuando abaixo */}
                  <span className="text-brand-green-dark/60 font-extrabold text-[11px] uppercase tracking-[0.25em] mb-3">{produto.categoria}</span>
                  <h3 className="font-[family-name:var(--font-script)] font-bold text-[32px] text-brand-green-dark mb-2 leading-tight tracking-tight text-center">
                    {produto.nome}
                  </h3>



               </div>

            </div>
          ))}
        </div>
      </div>

      <Link href="/catalogo">
        <button className="reveal-up delay-300 mt-28 border-2 border-brand-green-dark text-brand-green-dark hover:bg-brand-green-dark hover:text-white px-12 py-5 rounded-full font-bold text-sm uppercase tracking-[0.2em] transition-colors relative z-10 shadow-md">
          Ver Catálogo Completo
        </button>
      </Link>
      
    </section>
  );
}

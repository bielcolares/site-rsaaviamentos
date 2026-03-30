import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-auto pt-28 pb-6 overflow-hidden text-brand-brown">
      
      {/* Container Fundo Limpo e Quente - Ocultando tudo menos o centro para foco extremo no produto */}
      <div className="absolute inset-0 bg-brand-cream pointer-events-none z-[-2]"></div>
      
      {/* Luz orgânica de estúdio */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-white rounded-full blur-[140px] opacity-80 z-[-1]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-6 h-full mt-8 md:mt-24">
        
        {/* Esquerda - Título Misto Exato "Seja natural com..." */}
        <div className="flex-1 w-full max-w-2xl xl:max-w-xl text-left flex flex-col justify-center relative">
          
          {/* Logo Completo como H1 Visual */}
          <div className="reveal-up relative mb-6">
            <img 
              src="/images/logo-completo.png" 
              alt="R.SÁ Aviamentos" 
              className="w-full max-w-[380px] md:max-w-[500px] h-auto object-contain drop-shadow-sm"
            />
          </div>

        </div>

        {/* Direita - O Famoso "Trio de Produtos" num Pedestal de Madeira estilo Extratos Funcionais */}
        <div className="flex-1 w-full flex items-center justify-center relative xl:h-[600px] mt-16 xl:mt-0">
           
           {/* O "Tronco de Madeira / Pedestal" Fotográfico Falso Atrás */}
           <div className="absolute bottom-[5%] w-[120%] h-[30%] bg-[#cfbba6]/40 rounded-[100%] blur-[40px] z-0"></div>
           
           {/* O Bloco Decorativo Simulando Base Natural da Fotografia */}
           <div className="absolute bottom-[2%] w-[85%] h-[20%] bg-gradient-to-t from-[#ab886b]/20 to-transparent rounded-[50%] blur-md z-0"></div>

           {/* Logo Símbolo como Marca d'água atrás dos produtos */}
           <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
             <img src="/images/logo-simbolo.png" alt="" className="w-[90%] h-[90%] object-contain opacity-[0.12]" />
           </div>

           <div className="relative z-10 flex items-end justify-center gap-1 md:gap-4 w-full h-full pb-8">
              
              {/* Produto 1 (Sintético - A Imagem que gerei) */}
              <div className="w-[30%] opacity-0 animate-[fadeUp_1s_ease-out_0.3s_forwards] flex flex-col items-center hover:-translate-y-4 transition-transform duration-500 z-10">
                 <img src="/images/sintetico.png" alt="Sintético Brilho" className="w-full h-auto object-cover rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl drop-shadow-[0_20px_20px_rgba(205,85,66,0.2)]" />
              </div>
              
              {/* Produto 2 (Algodão Premium - A Imagem que gerei - Destacada) */}
              <div className="w-[40%] opacity-0 animate-[fadeUp_1s_ease-out_0.6s_forwards] flex flex-col items-center hover:-translate-y-8 transition-transform duration-500 z-20 transform translate-y-[-20px]">
                 <img src="/images/algodao.png" alt="Algodão Premium" className="w-full h-auto object-cover rounded-[2rem] md:rounded-[3.5rem] shadow-[0_30px_50px_rgba(74,118,71,0.3)] border-4 border-white/50" />
              </div>
              
              {/* Produto 3 (Lã Merino - A Imagem que gerei) */}
              <div className="w-[30%] opacity-0 animate-[fadeUp_1s_ease-out_0.9s_forwards] flex flex-col items-center hover:-translate-y-4 transition-transform duration-500 z-10 relative">
                 <img src="/images/merino.png" alt="Lã Merino" className="w-full h-auto object-cover rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl drop-shadow-[0_20px_20px_rgba(186,206,118,0.2)]" />
              </div>

           </div>
           
           <span className="absolute bottom-[-20px] md:bottom-[-40px] right-0 font-sans text-xs font-extrabold text-[#4a7647]/50 tracking-[0.25em] transform uppercase text-center w-full">
              Matérias-Primas Premium da <span className="text-brand-red opacity-100">R.SÁ Aviamentos</span>
           </span>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(80px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

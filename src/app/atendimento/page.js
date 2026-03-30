export default function AtendimentoPage() {
  const whatsappUrl = "https://wa.me/5511946103562?text=Olá,%20vim%20pelo%20site%20da%20R.SÁ%20Aviamentos";
  const googleReview = "https://share.google/39KGxl7Nb9mXkyItx";

  return (
    <div className="min-h-screen bg-brand-cream pt-48 pb-24 font-sans text-brand-green-dark">
      
      {/* Mega Cabeçalho Conceitual - Inspirado na Cogumelos Canção */}
      <div className="container mx-auto px-6 md:px-12 text-center mb-16 animate-fade-in-up">
         <span className="font-bold uppercase tracking-[0.3em] text-brand-green-dark/60 text-xs mb-4 block">Central de Experiência</span>
         <h1 className="text-5xl md:text-[6.5rem] font-[family-name:var(--font-script)] font-bold text-brand-green-dark mb-4 leading-none select-none">
           Fale Conosco
         </h1>
         <p className="text-xl md:text-2xl text-brand-green-dark/80 font-bold max-w-2xl mx-auto tracking-tight">
           Estamos prontos para ouvir seu ateliê, tirar suas dúvidas de produção e conduzir seu pedido à perfeição.
         </p>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
           
           {/* COLUNA ESQUERDA - Mensagem Rápida e Formulário SimpleMail */}
           <div className="flex flex-col gap-10 bg-white/40 p-10 md:p-14 rounded-[3rem] shadow-xl border border-white border-t-brand-green-dark/10">
              
              <div className="mb-2">
                 <h2 className="text-4xl font-[family-name:var(--font-script)] font-bold tracking-tight mb-2">Fale com a Gente</h2>
                 <p className="text-base text-brand-green-dark/70 font-bold">Envie um e-mail ou entre em contato pelo nosso WhatsApp.</p>
              </div>
              
              {/* O Botão de Venda Direta / App */}
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group relative w-full flex items-center justify-between p-6 bg-[#25D366] text-white rounded-3xl hover:-translate-y-2 transition-transform duration-300 shadow-[0_15px_30px_rgba(37,211,102,0.3)] border-2 border-[#22c55e]">
                 <div className="flex flex-col items-start text-left">
                    <span className="text-2xl font-black mb-1">WhatsApp de Vendas</span>
                    <span className="text-sm font-bold opacity-90 uppercase tracking-widest">+55 (11) 94610-3562</span>
                 </div>
                 <div className="bg-white/20 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.299-.018-.461.13-.611.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
                 </div>
              </a>

              {/* O Fluxo Antigo de Email com Form Básico */}
              <form action="mailto:sac@rsaaviamentos.com.br" method="post" encType="text/plain" className="flex flex-col gap-6 mt-6">
                 <div>
                    <input type="text" placeholder="Nome do seu Ateliê ou Nome Próprio" className="w-full bg-white px-8 py-5 rounded-full font-bold text-sm text-brand-green-dark placeholder:text-brand-green-dark/30 shadow-inner border border-transparent focus:border-brand-green-dark/20 focus:outline-none transition-all" required/>
                 </div>
                 <div>
                    <textarea rows="4" placeholder="Sua Mensagem Oficial..." className="w-full bg-white px-8 py-6 rounded-3xl font-bold text-sm text-brand-green-dark placeholder:text-brand-green-dark/30 shadow-inner resize-none border border-transparent focus:border-brand-green-dark/20 focus:outline-none transition-all" required></textarea>
                 </div>
                 <button type="submit" className="w-full bg-brand-green-dark text-white rounded-full py-5 font-bold uppercase tracking-widest hover:bg-brand-red transition-all shadow-xl hover:-translate-y-1 mt-2">
                    Enviar E-mail
                 </button>
              </form>
           </div>

           {/* COLUNA DIREITA - A Lojinha Física e Autoridade de Localização */}
           <div className="flex flex-col gap-8 lg:mt-[80px]">
              
              <div className="flex flex-col gap-2 relative">
                 <div className="w-3 h-3 bg-brand-red rounded-full animate-ping absolute -left-6 top-3 hidden md:block"></div>
                 <div className="w-3 h-3 bg-brand-red rounded-full absolute -left-6 top-3 hidden md:block"></div>
                 <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-red">Matriz São Paulo</span>
                 <h2 className="text-4xl lg:text-5xl font-[family-name:var(--font-script)] font-bold text-brand-green-dark leading-tight">Venha Sentir Nossos Fios</h2>
                 <p className="text-xl font-bold text-brand-green-dark/70 mt-2">Visite nossa estrutura física com tranquilidade. Atacado, varejo e recepção.</p>
              </div>

              {/* A Fachada Dinâmica aguardando a imagem `fachada.png` na pasta public */}
              <div className="w-full h-[350px] lg:h-[450px] bg-brand-green-dark/10 rounded-[3rem] overflow-hidden shadow-2xl relative group border-8 border-white">
                 <img src="/images/fachada.png" alt="Fachada Entrada da R.SÁ Aviamentos" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] contrast-125" />
                 
                 {/* Fallback de Texto pro User se Imagem Nao tiver la */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center -z-10 text-brand-green-dark/30">
                    <span className="text-center font-bold px-10">Assim que você salvar "fachada.jpg" na pasta /public/images/, a foto da sua loja física maravilhosa cobrirá este quadro inteirinho.</span>
                 </div>
              </div>

              {/* O Mega Botão do Google Forms/Review */}
              <a href={googleReview} target="_blank" rel="noopener noreferrer" className="bg-[#4285F4] hover:bg-[#3367d6] text-white flex flex-col sm:flex-row items-center justify-between gap-4 p-8 rounded-full shadow-[0_20px_40px_rgba(66,133,244,0.3)] transition-transform hover:-translate-y-2 mt-4 text-center sm:text-left">
                 <div className="flex items-center gap-4">
                    <div className="bg-white p-3 rounded-full hidden sm:block">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#4285F4]"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    </div>
                    <div className="flex flex-col">
                       <span className="text-xl lg:text-2xl font-black mb-1">Avalie & Encontre Nossa Loja</span>
                       <span className="text-sm font-bold opacity-90 uppercase tracking-widest text-[#e8f0fe]">Ver rota, horários e avaliações</span>
                    </div>
                 </div>
                 <div className="hidden sm:block">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                 </div>
              </a>

           </div>

        </div>
      </div>

    </div>
  );
}

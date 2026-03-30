export default function Conceito() {
  return (
    <section id="conceito" className="w-full bg-[#fdf1da] pt-8 pb-24 md:pb-32 overflow-hidden font-sans border-b border-black/5">
      
      {/* Transição Suave do Fundo Superior */}
      <div className="w-full h-2 bg-gradient-to-r from-[#cd5542] via-[#edaa68] to-[#bace76] opacity-30 mb-24"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-32">
        
        {/* Título Monumental — mais contido e elegante */}
        <div className="flex-1 w-full max-w-2xl">
          <h2 className="reveal-up text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] text-brand-green-dark font-[family-name:var(--font-script)] font-bold leading-[1.2] tracking-tight max-w-lg">
            Fios de altíssima resistência para
            <span className="text-brand-red"> a evolução da sua costura.</span>
          </h2>
        </div>

        {/* Copy Comercial à Direita — diferencial da loja */}
        <div className="flex-1 w-full lg:mt-[120px] xl:max-w-lg text-left flex flex-col gap-8">
          
          <p className="reveal-up delay-100 text-brand-green-dark/90 text-lg md:text-xl font-bold leading-[1.8] font-sans">
            Na R.SÁ Aviamentos, cada fio conta uma história de qualidade. 
            Trabalhamos com <strong className="text-brand-red">linhas sintéticas, algodões e lãs selecionadas</strong> para 
            confeccionistas, ateliês e indústrias que não aceitam menos do que o melhor.
          </p>

          <p className="reveal-up delay-200 text-brand-green-dark/70 text-base font-semibold leading-[1.8] font-sans">
            Mais de <strong className="text-brand-green-dark">20 anos de experiência</strong> em aviamentos garante 
            que você encontre a matéria-prima certa — da linha de pesponto ao fio de tricô mais delicado — 
            tudo em um só lugar, com atendimento especializado e entrega para todo o Brasil.
          </p>

          <div className="reveal-up delay-300 flex items-center gap-4 mt-2">
            <span className="h-[3px] w-10 bg-brand-red rounded-full"></span>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-brand-green-dark/50 font-sans">
              Nossa Especialidade
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-green-dark text-white/90 pt-12 font-sans relative overflow-hidden">
      
      {/* Faixa Colorida Gradiente exata do pé do site */}
      <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-brand-red via-amber-500 to-brand-green-light"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-10 pb-8 border-b border-white/5">
          
          <div className="flex flex-col gap-6">
            <div className="bg-brand-cream rounded-2xl p-4 w-fit">
              <img src="/images/logo-completo.png" alt="R.SÁ Aviamentos" className="h-24 w-auto object-contain" />
            </div>
            <p className="text-white/70 font-semibold text-sm leading-relaxed pr-4">
              Equilíbrio diário para confecções orgânicas, indústrias de larga escala e ateliês criativos.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h5 className="font-bold tracking-widest uppercase text-xs text-white/40 mb-2">Empresa</h5>
            <Link href="/" className="hover:text-amber-500 hover:tracking-wide w-max transition-all text-base font-semibold">Inicial</Link>
            <Link href="/catalogo" className="hover:text-amber-500 hover:tracking-wide w-max transition-all text-base font-semibold">Catálogo</Link>
            <Link href="/atendimento" className="hover:text-amber-500 hover:tracking-wide w-max transition-all text-base font-semibold">Atendimento</Link>
          </div>

          <div className="flex flex-col gap-5">
            <h5 className="font-bold tracking-widest uppercase text-xs text-white/40 mb-2">Atendimento</h5>
            <a href="mailto:sac@rsaaviamentos.com.br" className="text-base font-semibold hover:text-amber-500 transition-colors">sac@rsaaviamentos.com.br</a>
            <span className="text-base font-semibold text-white/80">+55 (11) 94610-3562</span>
            <span className="text-sm font-semibold text-white/50 mt-2 block leading-relaxed">São Paulo - SP <br/> Enviamos para todo Brasil.</span>
          </div>

          <div className="flex flex-col gap-6 items-start">
             <h5 className="font-bold tracking-widest uppercase text-[10px] text-white/30 mb-2">Social</h5>
             <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 px-8 py-3 rounded-full transition-colors text-[11px] font-bold border border-white/5 uppercase tracking-wider">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                   <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram
             </a>
          </div>

        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between text-white/30 text-[11px] font-semibold pb-6 gap-4 uppercase tracking-widest">
          <p>&copy; {year} R.SA Aviamentos.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

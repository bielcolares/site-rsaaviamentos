'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import classNames from 'classnames';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={classNames(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans border-b border-brand-cream/5 text-[#fdf1da]",
        {
          "bg-brand-red/95 backdrop-blur-md shadow-lg py-3": isScrolled,
          "bg-brand-red py-5": !isScrolled 
        }
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Navegação Esquerda */}
        <nav className="hidden lg:flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-amber-500 transition-colors text-sm tracking-wide">
            Inicial
          </Link>
          <Link href="/catalogo" className="hover:text-amber-500 transition-colors text-sm tracking-wide">
            Catálogo
          </Link>
          <Link href="/atendimento" className="hover:text-amber-500 transition-colors text-sm tracking-wide">
            Atendimento
          </Link>
        </nav>

        {/* Logo Completo no Centro - Corrigindo o corte superior */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[60]">
          <Link href="/">
             <div className="w-[180px] md:w-[240px] bg-brand-cream rounded-b-xl px-4 pt-6 pb-4 transition-transform hover:scale-105 shadow-[0_15px_30px_rgba(205,85,66,0.3)] translate-y-3">
               <img src="/images/logo-completo.png" alt="R.SA Aviamentos" className="w-full h-auto object-contain opacity-95 hover:opacity-100" />
             </div>
          </Link>
        </div>

        {/* Links Externos - Redes e Lojas */}
        <div className="flex items-center gap-6 lg:gap-8 ml-auto font-sans font-bold uppercase tracking-wider text-[11px] text-[#fdf1da]">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hidden sm:block hover:text-amber-300 hover:scale-105 transition-all">
             Instagram
          </a>
          <a href="https://www.mercadolivre.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffe600] flex items-center gap-2 hover:scale-105 transition-all">
             Mercado Livre
          </a>
          <a href="https://shopee.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2 hover:scale-105 transition-all text-[#ffe8df]">
             Oficial Shopee
          </a>
        </div>
      </div>
    </header>
  );
}

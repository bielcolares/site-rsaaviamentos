'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={classNames(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans border-b text-[#fdf1da]',
        {
          'bg-brand-red/95 backdrop-blur-md shadow-lg py-3 border-brand-cream/5': isScrolled,
          'bg-brand-red py-5 border-transparent': !isScrolled,
        }
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Navegação Esquerda */}
        <nav className="hidden lg:flex items-center gap-10 font-medium">
          <Link href="/" className="hover:text-amber-500 transition-colors text-sm tracking-wide">
            Inicial
          </Link>
          <Link
            href="/catalogo"
            className="hover:text-amber-500 transition-colors text-sm tracking-wide"
          >
            Catálogo
          </Link>
          <Link
            href="/atendimento"
            className="hover:text-amber-500 transition-colors text-sm tracking-wide"
          >
            Atendimento
          </Link>
        </nav>

        {/* Logo Completo no Centro */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[60]">
          <Link href="/">
            <div className="w-[140px] md:w-[180px] lg:w-[240px] bg-brand-cream rounded-b-xl px-4 pt-6 pb-4 transition-transform hover:scale-105 shadow-[0_15px_30px_rgba(205,85,66,0.3)] translate-y-3">
              <img
                src="/images/logo-completo.png"
                alt="R.SA Aviamentos"
                className="w-full h-auto object-contain opacity-95 hover:opacity-100"
              />
            </div>
          </Link>
        </div>

        {/* CTA Desktop */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/atendimento"
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-[#fdf1da] text-[11px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-full transition-all hover:scale-105"
          >
            Fale Conosco
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center w-full justify-start z-10 relative">
          <button onClick={toggleMenu} className="text-[#fdf1da] focus:outline-none">
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-brand-red/95 backdrop-blur-md border-t border-brand-cream/10 absolute top-full left-0 w-full shadow-xl">
          <div className="px-6 py-8 flex flex-col space-y-5">
            <Link
              href="/"
              onClick={toggleMenu}
              className="block text-lg font-medium text-brand-cream hover:text-amber-500 rounded-md"
            >
              Inicial
            </Link>
            <Link
              href="/catalogo"
              onClick={toggleMenu}
              className="block text-lg font-medium text-brand-cream hover:text-amber-500 rounded-md"
            >
              Catálogo
            </Link>
            <Link
              href="/atendimento"
              onClick={toggleMenu}
              className="block text-lg font-medium text-brand-cream hover:text-amber-500 rounded-md"
            >
              Atendimento
            </Link>
            <hr className="border-brand-cream/10 my-2" />
            <Link
              href="/atendimento"
              onClick={toggleMenu}
              className="inline-block bg-white/10 border border-white/20 text-brand-cream text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-full text-center"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

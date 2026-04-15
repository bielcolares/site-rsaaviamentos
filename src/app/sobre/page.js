'use client';
import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppFloating from '../../components/WhatsAppFloating';
import HeroSobre from '../../components/sobre/HeroSobre';
import History from '../../components/sobre/History';
import Differentials from '../../components/sobre/Differentials';
import BrandsBar from '../../components/sobre/BrandsBar';
import Location from '../../components/sobre/Location';
import CtaSobre from '../../components/sobre/CtaSobre';

export default function SobrePage() {
  // Motor de animação bidirecional — sincronizado com scroll para cima e para baixo
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            if (entry.boundingClientRect.top > 0) {
              entry.target.classList.remove('visible');
            }
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal-up');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans overflow-x-hidden">
      {/* Navegação Global */}
      <Header />

      <main className="flex-grow w-full">
        {/* Bloco 1 - Hero Interno */}
        <HeroSobre />

        {/* Bloco 2 - História com foto da Fachada */}
        <History />

        {/* Bloco 3 - Diferenciais de compra */}
        <Differentials />

        {/* Bloco 4 - Parcerias / Marcas */}
        <BrandsBar />

        {/* Bloco 5 - Mapa / Card de Localização */}
        <Location />

        {/* Bloco 6 - Despedida / CTA */}
        <CtaSobre />
      </main>

      {/* Footer corporativo */}
      <Footer />

      {/* Flutuante Global */}
      <WhatsAppFloating />
    </div>
  );
}

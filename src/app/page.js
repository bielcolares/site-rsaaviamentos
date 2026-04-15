'use client';
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import CategoriesHome from '../components/CategoriesHome';
import HowItWorks from '../components/HowItWorks';
import Testimonial from '../components/Testimonial';
import CtaHome from '../components/CtaHome';
import Footer from '../components/Footer';
import WhatsAppFloating from '../components/WhatsAppFloating';

export default function Home() {
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
      {/* Barra de Navegação Superior */}
      <Header />

      <main className="flex-grow w-full">
        {/* Bloco 1: Hero Principal */}
        <Hero />

        {/* Bloco 2: Métricas / Confiança */}
        <Metrics />

        {/* Bloco 3: Categorias Principais */}
        <CategoriesHome />

        {/* Bloco 4: Como Comprar (Atacado) */}
        <HowItWorks />

        {/* Bloco 5: Depoimentos Reais */}
        <Testimonial />

        {/* Bloco 6: CTA Final */}
        <CtaHome />
      </main>

      {/* Rodapé Corporativo */}
      <Footer />

      {/* Botão Flutuante de Conversão Rápida */}
      <WhatsAppFloating />
    </div>
  );
}

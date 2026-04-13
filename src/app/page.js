'use client';
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CatalogoHome from '../components/CatalogoHome';
import ContactForm from '../components/ContactForm';
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
        {/* Primeira Dobra de Impacto */}
        <Hero />

        {/* Seção de Benefícios e Diferenciais (Conceito) */}
        <Features />

        {/* Catálogo Home */}
        <CatalogoHome />

        {/* Formulário de Contato Direto na Home (Estratégia Landing Page) */}
        <ContactForm />
      </main>

      {/* Rodapé Corporativo */}
      <Footer />

      {/* Botão Flutuante de Conversão Rápida */}
      <WhatsAppFloating />
    </div>
  );
}

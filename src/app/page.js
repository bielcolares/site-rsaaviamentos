'use client';
import { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import Conceito from '../components/Conceito/Conceito';
import Catalogo from '../components/Catalogo/Catalogo';

export default function Home() {
  
  // Motor de animação bidirecional — sincronizado com scroll para cima e para baixo
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Entrando na tela → anima para dentro
            entry.target.classList.add('visible');
          } else {
            // Saindo da tela pelo TOPO (scroll para cima) → reseta para animar de novo
            if (entry.boundingClientRect.top > 0) {
              entry.target.classList.remove('visible');
            }
          }
        });
      },
      { 
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const elements = document.querySelectorAll('.reveal-up');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <Conceito />
      <Catalogo />
    </>
  );
}

import React from 'react';

export default function Testimonial() {
  return (
    <section className="py-20 md:py-28 bg-brand-cream border-t border-black/5 flex flex-col items-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 z-10 max-w-4xl">
        {/* Cabecalho - Estrelas e Nota */}
        <div className="flex flex-col items-center justify-center mb-10 text-center reveal-up">
          <div className="flex items-center gap-2 mb-3">
            {/* Estrela Google */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <h3 className="text-brand-green-dark font-extrabold text-3xl font-sans">4.5</h3>
          </div>

          <div className="flex items-center gap-1 text-[#fbbc04]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
            </svg>
          </div>

          <p className="text-sm font-bold text-brand-green-dark/60 mt-3 font-sans uppercase tracking-widest">
            Avaliações Reais do Google
          </p>
        </div>

        {/* Depoimento Card */}
        <div className="reveal-up delay-100 bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 relative">
          {/* Aspas */}
          <div className="absolute top-8 left-8 md:top-12 md:left-12 text-black/5 hidden md:block">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <blockquote className="text-lg md:text-xl font-bold font-sans text-brand-green-dark/80 leading-relaxed max-w-2xl mb-8">
              &ldquo;Loja de aviamentos em geral, onde destaca-se as vendas atacadistas para grande
              números de pequenas oficinas de costuras e empresas do ramo, possui um quadro de
              funcionários conhecedores e antigos do ramo, boa loja com bons preços&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center font-bold text-brand-green-dark/50 text-xl border-2 border-brand-cream uppercase shrink-0">
                ZC
              </div>
              <div className="text-left font-sans">
                <h4 className="font-extrabold text-brand-green-dark text-base">
                  Zé Cleide Pereira
                </h4>
                <p className="text-[11px] font-bold text-brand-green-dark/50 tracking-wider">
                  Local Guide • 379 avaliações • 11 meses atrás
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

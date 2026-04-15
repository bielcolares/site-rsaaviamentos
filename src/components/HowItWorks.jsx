import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Pedido mínimo acessível',
      description:
        'Sem exigência de grandes volumes para começar. Consulte as condições para o seu perfil de compra.',
    },
    {
      title: 'Nota fiscal em toda compra',
      description:
        'Emitimos NF-e para pessoa jurídica e pessoa física. Trabalhamos com CNPJ e CPF.',
    },
    {
      title: 'Entregamos para todo o Brasil',
      description:
        'Despacho via transportadora ou Correios. Consulte prazo e frete para sua região.',
    },
    {
      title: 'Atendimento por WhatsApp',
      description:
        'Nossa equipe responde pelo WhatsApp em horário comercial. Agilidade de ponta a ponta.',
    },
  ];

  return (
    <section className="w-full bg-[#f4e6cc] py-20 md:py-24 font-sans border-t border-black/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        {/* Left side text */}
        <div className="flex-1 w-full max-w-xl text-left">
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-script)] font-bold text-brand-green-dark mb-6 tracking-tight leading-tight">
            Simples de comprar, fácil de revender
          </h2>
          <p className="text-brand-green-dark/80 text-lg md:text-xl font-medium leading-relaxed mb-10">
            Atendemos confecções, ateliês e revendedores de aviamentos em todo o Brasil.
          </p>
          <a
            href="https://wa.me/5511946103562"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#20bd5a] px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Falar pelo WhatsApp
          </a>
        </div>

        {/* Right side list */}
        <div className="flex-1 w-full flex flex-col gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-white/40 p-6 rounded-2xl border border-white/60"
            >
              <CheckCircle2 className="w-8 h-8 text-brand-green-dark shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-[#3b2b2b] mb-2">{step.title}</h4>
                <p className="text-brand-green-dark/70 font-medium leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

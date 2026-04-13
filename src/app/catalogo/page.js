'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CatalogoPage() {
  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans overflow-x-hidden">
      <Header />

      <main className="flex-grow w-full pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-[4rem] font-[family-name:var(--font-script)] font-bold text-brand-green-dark mb-4 tracking-tight leading-tight">
            Catálogo Completo
          </h1>
          <p className="text-xl text-brand-green-dark/70 font-bold mb-12">
            Todas as nossas linhas e fios.
          </p>

          <div className="bg-white/50 border border-brand-green-dark/10 rounded-2xl p-12 text-center shadow-sm">
            <p className="text-brand-green-dark text-lg font-medium">
              Estamos atualizando nosso catálogo digital.
            </p>
            <p className="text-brand-green-dark/70 mt-2">
              Por favor, acesse nosso Atendimento para solicitar a tabela atualizada.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

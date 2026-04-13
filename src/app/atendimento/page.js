'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';

export default function AtendimentoPage() {
  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans overflow-x-hidden">
      <Header />

      <main className="flex-grow w-full pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12 text-center mb-12">
          <h1 className="text-4xl md:text-[4rem] font-[family-name:var(--font-script)] font-bold text-brand-green-dark mb-4 tracking-tight leading-tight">
            Atendimento R.SÁ
          </h1>
          <p className="text-xl text-brand-green-dark/70 font-bold max-w-2xl mx-auto">
            Fale diretamente com nossa equipe de especialistas corporativos.
          </p>
        </div>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

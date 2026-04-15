'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function AtendimentoPage() {
  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans overflow-x-hidden">
      <Header />

      <main className="flex-grow w-full pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12 text-center mb-16">
          <h1 className="text-4xl md:text-[4rem] font-[family-name:var(--font-script)] font-bold text-brand-green-dark mb-4 tracking-tight leading-tight">
            Atendimento R.SÁ
          </h1>
          <p className="text-xl text-brand-green-dark/70 font-bold max-w-2xl mx-auto">
            Fale diretamente com nossa equipe de especialistas corporativos.
          </p>
        </div>

        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Informacoes de Contato e Localizacao */}
            <div className="flex-1 w-full flex flex-col gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg flex flex-col gap-6">
                <h3 className="text-2xl font-bold text-brand-green-dark font-sans border-b border-gray-100 pb-4">
                  Nossa Central Física
                </h3>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-cream p-3 rounded-xl text-brand-red shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-800">Endereço Principal</h4>
                    <p className="text-gray-600 mt-1 font-medium text-sm leading-relaxed">
                      R. Dr. Carlos Botelho, 97 - Brás
                      <br />
                      São Paulo - SP, 03017-010
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-cream p-3 rounded-xl text-brand-red shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-800">Telefone Fixo</h4>
                    <p className="text-gray-600 mt-1 font-medium text-sm">(11) 2692-0623</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-cream p-3 rounded-xl text-brand-red shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-800">E-mail Corporativo</h4>
                    <p className="text-gray-600 mt-1 font-medium text-sm">
                      rsa@rsaaviamentos.com.br
                    </p>
                  </div>
                </div>
              </div>

              {/* Foto da Fachada */}
              <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src="/images/fachada.png"
                  alt="Fachada R.SÁ Aviamentos"
                  width={800}
                  height={300}
                  className="w-full object-cover max-h-[300px]"
                />
              </div>

              {/* Mapa do Google */}
              <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-white h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.4916892550186!2d-46.61111!3d-23.5507421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce590b07b1fb93%3A0xc3f5ce402d2fc76c!2sR.%20Dr.%20Carlos%20Botelho%2C%2097%20-%20Br%C3%A1s%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003017-010!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa R.SÁ Aviamentos"
                ></iframe>
              </div>
            </div>

            {/* Formulário de Contato à Direita */}
            <div className="flex-1 w-full bg-white rounded-3xl overflow-hidden shadow-2xl pb-10">
              {/* O ContactForm tem o proprio padding e titulo, mas podemos deixar ele como vem para reuso, ou ajustar algo especifico. No caso, ele já tem um bg-gray-50 bg-opacity-50 interno, combinara bem. */}
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

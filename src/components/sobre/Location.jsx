import React from 'react';

export default function Location() {
  return (
    <section className="w-full bg-white py-24 md:py-32 font-sans border-b border-black/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-20 items-center justify-between">
        {/* Info Card */}
        <div className="flex-1 w-full max-w-lg text-left">
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-script)] font-bold text-brand-green-dark mb-10 tracking-tight">
            Onde estamos
          </h2>

          <div className="bg-[#fdf1da] border border-brand-brown/10 p-10 md:p-12 rounded-3xl shadow-sm flex flex-col gap-8">
            <div>
              <h3 className="font-bold text-xl text-[#3b2b2b] mb-3">R.SÁ Aviamentos</h3>
              <p className="text-brand-green-dark/80 font-medium leading-relaxed">
                R. Dr. Carlos Botelho, 95
                <br />
                Brás — São Paulo, SP
                <br />
                CEP 03017-010
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-brand-brown/10">
              <span className="flex items-center gap-3 text-brand-green-dark/90 font-bold hover:text-brand-red transition-colors">
                <span className="text-lg">📞</span> (11) 2692-0623
              </span>
              <a
                href="https://wa.me/5511996315891"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-brand-green-dark/90 font-bold hover:text-green-600 transition-colors"
              >
                <span className="text-lg">📱</span> (11) 99631-5891
              </a>
              <a
                href="mailto:aviamentosrsa@gmail.com"
                className="flex items-center gap-3 text-brand-green-dark/90 font-bold hover:text-brand-red transition-colors break-all"
              >
                <span className="text-lg">✉️</span> aviamentosrsa@gmail.com
              </a>
            </div>

            <div className="pt-6 border-t border-brand-brown/10">
              <p className="text-brand-green-dark/70 font-semibold text-sm">
                Segunda a sexta, 8h às 17h
                <br />
                Sábados, 8h às 12h
              </p>
            </div>
          </div>
        </div>

        {/* Map Embed */}
        <div className="flex-1 w-full bg-brand-cream/50 rounded-3xl overflow-hidden shadow-lg border border-brand-green-dark/5 min-h-[400px] h-full lg:h-[600px] relative">
          <iframe
            src="https://maps.google.com/maps?q=R.+Dr.+Carlos+Botelho,+97+-+Brás,+São+Paulo+-+SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de localização R.SÁ Aviamentos"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

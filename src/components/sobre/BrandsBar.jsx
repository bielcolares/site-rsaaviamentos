import React from 'react';

export default function BrandsBar() {
  const brands = ['Zanotti', 'Baxmann', 'Aliança', 'Cardenas', 'São José'];

  return (
    <section className="w-full bg-[#fdf1da] py-20 font-sans border-b border-black/5 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h3 className="text-sm md:text-base font-bold text-brand-green-dark/50 uppercase tracking-[0.3em] mb-12">
          Marcas do nosso portfólio
        </h3>

        {/* Usamos flex wrap com gap grande ou um grid dependendo da estética. Flex wrap fica mais natural. */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24 opacity-80">
          {brands.map((brand, i) => (
            <React.Fragment key={i}>
              <span className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-script)] font-bold text-brand-green-dark hover:text-brand-red transition-colors duration-300">
                {brand}
              </span>
              {i < brands.length - 1 && (
                <span className="text-brand-green-dark/20 text-3xl hidden md:inline-block font-sans">
                  &middot;
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

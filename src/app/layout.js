import { Nunito, Cinzel } from 'next/font/google';
import './globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import WhatsApp from '../components/WhatsApp/WhatsApp';

// The body typography - Nunito Bold specific request
const fontNunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'], // Garantindo o Bold
  variable: '--font-sans', // Substitui a 'sans' padrão do tailwind globalmente
});

// The Epic Title typography - Cinzel
const fontCinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-script', // Vamos usar no lugar do script cursivo
});

export const metadata = {
  title: 'R.SÁ Aviamentos | Costure com Perfeição Orgânica',
  description: 'Fios, linhas e lãs exclusivas de altíssima resistência para a evolução da sua confecção.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${fontNunito.variable} ${fontCinzel.variable} font-sans antialiased text-brand-green-dark bg-brand-cream flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1 overflow-hidden w-full flex flex-col">
          {children}
        </main>
        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}

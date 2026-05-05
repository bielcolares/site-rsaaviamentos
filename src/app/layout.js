import { Analytics } from '@vercel/analytics/next';
import { Nunito, Cinzel } from 'next/font/google';
import './globals.css';

const fontNunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sans',
});

const fontCinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-script',
});

export const metadata = {
  title: 'R.SÁ Aviamentos | Costure com Perfeição Orgânica',
  description:
    'Fios, linhas e lãs exclusivas de altíssima resistência para a evolução da sua confecção.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${fontNunito.variable} ${fontCinzel.variable} font-sans antialiased text-brand-green-dark bg-brand-cream flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

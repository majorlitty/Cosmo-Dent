import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Cosmo Dent | Luxury Smile Design Studio',
  description: 'Luxury cosmetic dentistry focused on natural-looking smile transformations.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans bg-[#FDFBF7] text-[#1A1A1A] antialiased selection:bg-[#C5A059] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

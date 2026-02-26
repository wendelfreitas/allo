import { ThemeProvider } from '@allo/ui';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Providers } from '../lib/providers';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'allO Eats — Premium Food Delivery',
  description:
    'Discover the finest restaurants and get premium food delivered to your door. Fast, reliable, delicious.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en" className="dark">
        <body
          className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
          style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
        >
          <Providers>{children}</Providers>
        </body>
      </html>
    </ThemeProvider>
  );
}

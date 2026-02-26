import { ThemeProvider } from '@allo/ui';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Providers } from '../../lib/providers';
import '../globals.css';

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'pt')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <ThemeProvider>
      <html lang={locale} className="dark">
        <body
          className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
          style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
        >
          <NextIntlClientProvider messages={messages}>
            <Providers>{children}</Providers>
          </NextIntlClientProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}

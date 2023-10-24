import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import React from 'react';
import './styles/index.css';
import { BaseLayout } from '@/widgets/layouts';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Movies Hub',
  description: 'Find your movie',
  viewport: {
    initialScale: 1,
    width: 'device-width',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" data-theme="dark" className={`${inter.variable} ${roboto.variable}`}>
      <body>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}

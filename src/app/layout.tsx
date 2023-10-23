import type { Metadata } from 'next';
import React from 'react';

import './styles/index.css';

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
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

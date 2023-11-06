import { EffectorNext } from '@effector/next';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import React from 'react';
import './styles/index.css';
import { BaseLayout } from '@/widgets/layouts';

export const metadata: Metadata = {
  title: 'Movies Hub',
  description: 'Find your movie',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" data-theme="acid">
      <body>
        {/* Uncomment for connect to effector logger
        <EffectorLoggerAdapter />
        */}
        <NextTopLoader />
        <EffectorNext>
          <BaseLayout>{children}</BaseLayout>
        </EffectorNext>
      </body>
    </html>
  );
}

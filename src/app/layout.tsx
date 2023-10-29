import { EffectorNext } from '@effector/next';
import type { Metadata } from 'next';
import React from 'react';
import './styles/index.css';
import { BaseLayout } from '@/widgets/layouts';
import { EffectorLoggerAdapter } from '@/shared/logger';

export const metadata: Metadata = {
  title: 'Movies Hub',
  description: 'Find your movie',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" data-theme="dark">
      <body>
        <EffectorLoggerAdapter />
        <EffectorNext>
          <BaseLayout>{children}</BaseLayout>
        </EffectorNext>
      </body>
    </html>
  );
}

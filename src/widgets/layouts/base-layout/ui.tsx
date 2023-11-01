import React, { PropsWithChildren } from 'react';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { Header } from '@/widgets/header';
import { SearchWindow } from '@/entities/search-window';

export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <SearchWindow />
      <main className="px-4 pb-5">{children}</main>
    </>
  );
};

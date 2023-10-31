import React from 'react';
import { sharedConfigRoutes } from '@/shared/config';
import { Logo } from '@/shared/ui/components';
import { SearchButton } from './search-button';

const { routes } = sharedConfigRoutes;

export const Header = () => {
  return (
    <header className="w-full p-4">
      <div className="container navbar mx-auto p-0">
        <div className="flex-1">
          <Logo to={routes.home}>Movies Hub</Logo>
        </div>
        <SearchButton />
      </div>
    </header>
  );
};

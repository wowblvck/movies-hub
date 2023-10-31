import React from 'react';
import { kinopoisk } from '@/shared/api';

type ListProps = {
  items: kinopoisk.types.ItemName[] | kinopoisk.types.PersonInMovie[];
};

export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul className="flex flex-wrap">
      {items.map(({ name }) => (
        <li key={name} className="after:content-[',\00a0'] last:after:content-['']">
          {name}
        </li>
      ))}
    </ul>
  );
};

'use client';

import { useUnit } from 'effector-react';
import { Filters } from '@/features/filters';
import { MovieItem } from '@/entities/movie/item';
import { $catalog } from '../model';

export const Catalog = () => {
  const data = useUnit($catalog);

  return (
    <section className="flex flex-col gap-5 pb-10">
      <Filters />
      <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {data?.docs.map((movie) => (
          <li key={movie.id}>
            <MovieItem item={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
};

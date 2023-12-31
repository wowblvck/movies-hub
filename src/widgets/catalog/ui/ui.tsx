'use client';

import { useEvent, useUnit } from 'effector-react';
import { Filters } from '@/features/filters';
import { MovieItem } from '@/entities/movie';
import { Button } from '@/shared/ui';
import { catalogModel } from '../model';

export const Catalog = () => {
  const data = useUnit(catalogModel.$catalog);
  const loadMore = useEvent(catalogModel.loadMore);
  const hasMore = useUnit(catalogModel.$hasMore);
  const pending = useUnit(catalogModel.$pending);

  const handleShowMore = () => {
    loadMore();
  };

  return (
    <section className="flex flex-col gap-5 pb-10">
      <Filters />
      {data?.total === 0 ? (
        <p className="text-center">Ничего не найдено</p>
      ) : (
        <>
          <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {data?.docs.map((movie) => (
              <li key={movie.id}>
                <MovieItem item={movie} />
              </li>
            ))}
          </ul>
          {hasMore && (
            <Button loading={pending} onClick={handleShowMore}>
              Показать еще
            </Button>
          )}
        </>
      )}
    </section>
  );
};

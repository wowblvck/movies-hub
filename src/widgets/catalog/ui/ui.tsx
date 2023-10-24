import { Filters } from '@/features/filters';
import { MovieItem } from '@/entities/movie/item';

const movies: any[] = [];

export const Catalog = () => {
  return (
    <section className="flex flex-col gap-5 pb-10">
      <Filters />
      {!!movies.length && (
        <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieItem item={movie} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

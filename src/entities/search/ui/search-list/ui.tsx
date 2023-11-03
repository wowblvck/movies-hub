import { useEvent, useUnit } from 'effector-react';
import { Button } from '@/shared/ui';
import { searchModel } from '../../model';
import { SearchItem } from './search-item';

export const SearchList = () => {
  const data = useUnit(searchModel.$searchResults);
  const searchPending = useUnit(searchModel.$searchPending);
  const loading = useUnit(searchModel.$loading);
  const hasMore = useUnit(searchModel.$hasMore);
  const loadMore = useEvent(searchModel.loadMore);

  const Loader = (
    <div className="mt-10 flex justify-center">
      <span className="loading loading-infinity loading-lg text-base-100"></span>
    </div>
  );

  const NoResultsMessage = (
    <p className="font-roboto text-3xl font-bold text-base-100">Ничего не нашлось :(</p>
  );

  const SearchList = (
    <>
      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {data.map((movie) => (
          <li key={movie.id}>
            <SearchItem item={movie} />
          </li>
        ))}
      </ul>
      {hasMore && (
        <Button onClick={loadMore} loading={loading} className="btn-neutral">
          Показать больше
        </Button>
      )}
    </>
  );

  if (!searchPending && !data.length) return NoResultsMessage;

  return searchPending ? Loader : SearchList;
};

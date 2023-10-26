import { attach, combine, createEvent, createStore, restore, sample } from 'effector';
import { kinopoiskApi } from '@/shared/api';

export const catalogPageStarted = createEvent();
const getCatalogFx = attach({ effect: kinopoiskApi.getCatalog });

export const loadMore = createEvent();

export const $hasMore = createStore(false);

export const $limit = createStore(30)
  .on(loadMore, (state) => state + 60)
  .reset(catalogPageStarted);

const $params = combine({ limit: $limit });

export const $catalog = restore(getCatalogFx, null);

sample({
  clock: [catalogPageStarted, loadMore],
  source: $params,
  fn: ({ limit }) => ({ limit }),
  target: getCatalogFx,
});

export const $pending = getCatalogFx.pending;

sample({
  clock: getCatalogFx.doneData,
  source: $limit,
  fn: (limit, { total }) => total > limit,
  target: $hasMore,
});

import { combine, createEvent, createStore, sample } from 'effector';
import { kinopoisk } from '@/shared/api';
import { sharedConfigRoutes } from '@/shared/config';

export const catalogPageStarted = createEvent<sharedConfigRoutes.CatalogParams>();

export const loadMore = createEvent();

export const $hasMore = createStore(false);

export const $limit = createStore(30)
  .on(loadMore, (state) => state + 60)
  .reset(catalogPageStarted);

export const $catalog = kinopoisk.api.catalogQuery.$data;

export const $pageQuery = createStore<sharedConfigRoutes.CatalogParams | null>(null);

export const $params = combine({ query: $pageQuery, limit: $limit });

export const $pending = kinopoisk.api.catalogQuery.$pending;

// kinopoisk.api.catalogQuery.$error.watch(console.log);

sample({
  clock: catalogPageStarted,
  target: $pageQuery,
});

sample({
  clock: [catalogPageStarted, loadMore],
  source: $params,
  fn: ({ limit, query }) => ({ ...query, limit }),
  target: kinopoisk.api.catalogQuery.start,
});

sample({
  clock: kinopoisk.api.catalogQuery.finished.success,
  source: $limit,
  fn: (limit, { result }) => result.total > limit,
  target: $hasMore,
});

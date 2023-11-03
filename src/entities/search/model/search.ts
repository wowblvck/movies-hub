import { createEvent, createStore, sample } from 'effector';
import { debounce, reset } from 'patronum';
import { kinopoisk } from '@/shared/api';
import { createToggler } from '@/shared/lib';

export const searchToggler = createToggler(false);

export const searchChanged = createEvent<string>();

export const $search = createStore('').on(searchChanged, (_, payload) => payload);

export const $query = createStore('');

export const $page = createStore(1);

export const $searchPending = createStore(false);

export const $searchResults = createStore<kinopoisk.types.MeiliMovieEntity[]>([]).on(
  kinopoisk.api.searchByNameQuery.finished.success,
  (state, payload) => [...state, ...payload.result.docs]
);

export const $loading = kinopoisk.api.searchByNameQuery.$pending;

export const loadMore = createEvent();

export const $hasMore = createStore(false);

const debouncedSearchChanged = debounce({
  source: searchChanged,
  timeout: 600,
});

$searchPending
  .on(debouncedSearchChanged, () => true)
  .on(kinopoisk.api.searchByNameQuery.finished.success, () => false);

sample({
  clock: debouncedSearchChanged,
  target: $query,
});

sample({
  clock: $query,
  source: $page,
  fn: (page, query) => ({ page, query }),
  target: kinopoisk.api.searchByNameQuery.start,
});

sample({
  clock: loadMore,
  source: { query: $query, page: $page },
  target: kinopoisk.api.searchByNameQuery.start,
});

reset({
  clock: searchToggler.$isOpen,
  target: [$search, $query],
});

reset({
  clock: debouncedSearchChanged,
  target: [$searchResults, $page],
});

$hasMore.on(
  kinopoisk.api.searchByNameQuery.finished.success,
  (_, { result }) => result.page !== result.pages
);

$page.on(loadMore, (state) => state + 1);

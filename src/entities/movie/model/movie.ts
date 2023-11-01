import { createEvent, sample } from 'effector';
import { kinopoisk } from '@/shared/api';
import { sharedConfigRoutes } from '@/shared/config';

export const moviePageStarted = createEvent<sharedConfigRoutes.MovieParams>();

export const $movie = kinopoisk.api.movieQuery.$data;

export const $pending = kinopoisk.api.movieQuery.$pending;

sample({
  clock: moviePageStarted,
  target: kinopoisk.api.movieQuery.start,
});

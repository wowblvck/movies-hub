/* eslint @conarti/feature-sliced/absolute-relative: 'off' */
import { createJsonQuery, declareParams } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import qs from 'query-string';
import { env } from '@/env.mjs';
import { sharedConfigRoutes } from '@/shared/config';
import { getYears } from '@/shared/lib';
import { DocsMovieRt, MovieRt, SearchDocsRt, SearchParams } from './types';

export const catalogQuery = createJsonQuery({
  params: declareParams<sharedConfigRoutes.CatalogParams>(),
  request: {
    method: 'GET',
    url: ({ limit, genre, sort, rating = '1-10', year = getYears() }) => {
      const baseUrl = env.NEXT_PUBLIC_BASE_URL;
      const queryParams = qs.stringify({
        limit,
        'genres.name': genre,
        'rating.kp': rating,
        year,
        typeNumber: '1',
        'poster.previewUrl': '!null',
        sortField: [sort, 'votes.kp'],
        sortType: ['-1', '-1'],
      });
      return `${baseUrl}/v1.4/movie?${queryParams}`;
    },
    headers: {
      'X-API-KEY': env.NEXT_PUBLIC_API_TOKEN,
    },
  },
  response: {
    contract: runtypeContract(DocsMovieRt),
  },
});

export const searchByNameQuery = createJsonQuery({
  params: declareParams<SearchParams>(),
  request: {
    method: 'GET',
    url: ({ query, page }) => {
      const baseUrl = env.NEXT_PUBLIC_BASE_URL;
      const queryParams = qs.stringify({
        query,
        page,
        limit: 30,
      });
      return `${baseUrl}/v1.4/movie/search?${queryParams}`;
    },
    headers: {
      'X-API-KEY': env.NEXT_PUBLIC_API_TOKEN,
    },
  },
  response: {
    contract: runtypeContract(SearchDocsRt),
  },
});

export const movieQuery = createJsonQuery({
  params: declareParams<sharedConfigRoutes.MovieParams>(),
  request: {
    method: 'GET',
    url: ({ movieId }) => {
      const baseUrl = env.NEXT_PUBLIC_BASE_URL;
      return `${baseUrl}/v1.4/movie/${movieId}`;
    },
    headers: {
      'X-API-KEY': env.NEXT_PUBLIC_API_TOKEN,
    },
  },
  response: {
    contract: runtypeContract(MovieRt),
  },
});

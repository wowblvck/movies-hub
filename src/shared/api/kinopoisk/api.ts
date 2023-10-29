import { createJsonQuery, declareParams } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import qs from 'query-string';
import { env } from '@/env.mjs';
// eslint-disable-next-line @conarti/feature-sliced/absolute-relative
import { getYears } from '@/shared/lib';
import { DocsMovieRt } from './types';
import { CatalogParams } from './types';

export const catalogQuery = createJsonQuery({
  params: declareParams<CatalogParams>(),
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
      return `${baseUrl}/v1.3/movie?${queryParams}`;
    },
    headers: {
      'X-API-KEY': env.NEXT_PUBLIC_API_TOKEN,
    },
  },
  response: {
    contract: runtypeContract(DocsMovieRt),
  },
});

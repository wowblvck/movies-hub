import { http } from './config';
import { Data, MovieEntity, CatalogParams } from './types';

const routesConfig = http.createRoutesConfig({
  getCatalog: http.createRoute<CatalogParams, Data<MovieEntity>>(({ limit }) => ({
    url: '/v1.3/movie',
    params: {
      year: '0-2023',
      typeNumber: 1,
      'poster.previewUrl': '!null',
      sortField: ['votes.kp'],
      sortType: ['-1'],
      limit,
    },
  })),
});

export const api = routesConfig.build();

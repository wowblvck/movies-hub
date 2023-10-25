import { http } from './config';
import { Data, MovieEntity } from './types';

const routesConfig = http.createRoutesConfig({
  getCatalog: http.createRoute<void, Data<MovieEntity>>(() => ({
    url: '/v1.3/movie',
    params: {
      year: '0-2023',
      typeNumber: 1,
      'poster.previewUrl': '!null',
      sortField: ['votes.kp'],
      sortType: ['-1'],
      limit: 30,
    },
  })),
});

export const api = routesConfig.build();

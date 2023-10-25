import { attach, createEvent, restore, sample } from 'effector';
import { kinopoiskApi } from '@/shared/api';

export const pageStarted = createEvent();
export const getCatalogFx = attach({ effect: kinopoiskApi.getCatalog });

export const $catalog = restore(getCatalogFx, null);

sample({
  clock: pageStarted,
  target: getCatalogFx,
});

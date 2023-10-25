import axios from 'axios';
import { createHttp } from 'effector-http-api';
import { env } from '@/env.mjs';

export const kinopoiskInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'X-API-KEY': env.NEXT_PUBLIC_API_TOKEN,
  },
});

export const http = createHttp(kinopoiskInstance);

export type CatalogParams = {
  limit: number;
  genre?: string;
  rating?: string;
  sort?: string;
  year?: string;
};

export type MovieParams = {
  movieId: string;
};

type Id = number;

export const routes = {
  home: '/',
  movie: (id: Id) => `/movie/${id}`,
};

type Id = number;

export const routes = {
  home: '/',
  movie: (id: Id) => `/movie/${id}`,
};

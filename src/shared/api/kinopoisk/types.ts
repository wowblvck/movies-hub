import * as rt from 'runtypes';
import { Static } from 'runtypes';

export const ExternalIdRt = rt.Record({
  kpHD: rt.String.Or(rt.Null),
  imdb: rt.Optional(rt.String.Or(rt.Null)),
  tmdb: rt.Optional(rt.Number.Or(rt.Null)),
});

export const RatingRt = rt.Record({
  kp: rt.Number.Or(rt.Null),
  imdb: rt.Number.Or(rt.Null),
  filmCritics: rt.Number.Or(rt.Null),
  russianFilmCritics: rt.Number.Or(rt.Null),
  await: rt.Number.Or(rt.Null),
});

export const VotesRt = rt.Record({
  kp: rt.Number.Or(rt.Null),
  imdb: rt.Number.Or(rt.Null),
  filmCritics: rt.Number.Or(rt.Null),
  russianFilmCritics: rt.Number.Or(rt.Null),
  await: rt.Number.Or(rt.Null),
});

export const PosterRt = rt.Record({
  url: rt.String.Or(rt.Null),
  previewUrl: rt.String.Or(rt.Null),
});

export const ItemName = rt.Record({ name: rt.String });

export const NameRt = rt.Intersect(
  rt.Record({ name: rt.String }),
  rt.Record({ language: rt.String.Or(rt.Null), type: rt.String.Or(rt.Null) }).asPartial()
);

export const LogoRt = rt.Record({ url: rt.String.Or(rt.Null) });

export const ItemsRt = rt.Record({ name: rt.String, logo: LogoRt, url: rt.String });

export const WatchabilityRt = rt.Record({ items: rt.Array(ItemsRt) });

const MovieEntityRt = rt.Record({
  externalId: ExternalIdRt,
  rating: RatingRt,
  votes: VotesRt,
  movieLength: rt.Number.Or(rt.Null),
  id: rt.Number,
  type: rt.String,
  name: rt.String.Or(rt.Null),
  description: rt.String.Or(rt.Null),
  year: rt.Number.Or(rt.Null),
  poster: PosterRt,
  genres: rt.Array(ItemName),
  countries: rt.Array(ItemName),
  alternativeName: rt.String.Or(rt.Null),
  enName: rt.String.Or(rt.Null),
  names: rt.Array(NameRt),
  shortDescription: rt.String.Or(rt.Null),
  logo: rt.Optional(LogoRt),
  watchability: WatchabilityRt,
});

export type MovieEntity = Static<typeof MovieEntityRt>;

export const DocsMovieRt = rt.Record({
  docs: rt.Array(MovieEntityRt),
  total: rt.Number,
  limit: rt.Number,
  page: rt.Number,
  pages: rt.Number,
});

export type CatalogParams = {
  limit: number;
  genre?: string;
  rating?: string;
  sort?: string;
  year?: string;
};

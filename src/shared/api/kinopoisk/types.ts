import * as rt from 'runtypes';

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

export const ItemNameRt = rt.Record({ name: rt.String });

export type ItemName = rt.Static<typeof ItemNameRt>;

export const NameRt = rt.Intersect(
  rt.Record({ name: rt.Optional(rt.String) }),
  rt.Record({ language: rt.String.Or(rt.Null), type: rt.String.Or(rt.Null) }).asPartial()
);

export const LogoRt = rt.Record({ url: rt.String.Or(rt.Null) });

export const ItemsRt = rt.Record({ name: rt.String.Or(rt.Null), logo: LogoRt, url: rt.String });

export const WatchabilityRt = rt.Record({ items: rt.Array(ItemsRt).Or(rt.Null) });

const MovieEntityRt = rt.Record({
  externalId: rt.Optional(ExternalIdRt),
  rating: RatingRt,
  votes: VotesRt,
  movieLength: rt.Number.Or(rt.Null),
  id: rt.Number,
  type: rt.String,
  name: rt.String.Or(rt.Null),
  description: rt.String.Or(rt.Null),
  year: rt.Number.Or(rt.Null),
  poster: PosterRt,
  genres: rt.Array(ItemNameRt),
  countries: rt.Array(ItemNameRt),
  alternativeName: rt.String.Or(rt.Null),
  enName: rt.String.Or(rt.Null),
  names: rt.Array(NameRt),
  shortDescription: rt.String.Or(rt.Null),
  logo: rt.Optional(LogoRt),
  watchability: rt.Optional(WatchabilityRt),
});

export type MovieEntity = rt.Static<typeof MovieEntityRt>;

const MeiliMovieEntityRt = rt.Record({
  id: rt.Number,
  name: rt.String,
  alternativeName: rt.String,
  enName: rt.String,
  names: rt.Array(rt.String),
  type: rt.String,
  year: rt.Number,
  description: rt.String,
  shortDescription: rt.String,
  logo: rt.String.Or(rt.Null),
  poster: rt.String.Or(rt.Null),
  backdrop: rt.String.Or(rt.Null),
  rating: rt.Number,
  votes: rt.Number,
  movieLength: rt.Number,
  genres: rt.Array(rt.String),
  countries: rt.Array(rt.String),
  releaseYears: rt.Array(rt.Number),
});

export type MeiliMovieEntity = rt.Static<typeof MeiliMovieEntityRt>;

export const DocsMovieRt = rt.Record({
  docs: rt.Array(MovieEntityRt),
  total: rt.Number,
  limit: rt.Number,
  page: rt.Number,
  pages: rt.Number,
});

export const SearchDocsRt = rt.Record({
  docs: rt.Array(MeiliMovieEntityRt),
  total: rt.Number,
  limit: rt.Number,
  page: rt.Number,
  pages: rt.Number,
});

export type SearchDocs = rt.Static<typeof SearchDocsRt>;

export const VideoRt = rt.Record({
  url: rt.String.Or(rt.Null),
  name: rt.String.Or(rt.Null),
  site: rt.String.Or(rt.Null),
  type: rt.Optional(rt.String.Or(rt.Null)),
  size: rt.Optional(rt.Number),
});

export const VideoTypesRt = rt.Record({
  trailers: rt.Array(VideoRt),
  teasers: rt.Array(VideoRt),
});

export const PersonInMovieRt = rt.Record({
  id: rt.Number.Or(rt.Null),
  photo: rt.String.Or(rt.Null),
  name: rt.String.Or(rt.Null),
  enName: rt.String.Or(rt.Null),
  description: rt.Optional(rt.String.Or(rt.Null)),
  profession: rt.String,
  enProfession: rt.String,
});

export type PersonInMovie = rt.Static<typeof PersonInMovieRt>;

export const ReviewInfoRt = rt.Record({
  count: rt.Number.Or(rt.Null),
  positiveCount: rt.Number.Or(rt.Null),
  percentage: rt.String.Or(rt.Null),
});

export const SeasonInfoRt = rt.Record({
  number: rt.Number.Or(rt.Null),
  episodesCount: rt.Number.Or(rt.Null),
});

export const CurrencyValueRt = rt.Record({
  value: rt.Optional(rt.Number.Or(rt.Null)),
  currency: rt.Optional(rt.String.Or(rt.Null)),
});

export const FeesRt = rt.Record({
  world: CurrencyValueRt,
  russia: rt.Optional(CurrencyValueRt),
  usa: rt.Optional(CurrencyValueRt),
});

export const PremiereRt = rt.Record({
  country: rt.Optional(rt.String.Or(rt.Null)),
  world: rt.Optional(rt.String.Or(rt.Null)),
  russia: rt.Optional(rt.String.Or(rt.Null)),
  digital: rt.Optional(rt.String.Or(rt.Null)),
  cinema: rt.Optional(rt.String.Or(rt.Null)),
  bluray: rt.Optional(rt.String),
  dvd: rt.Optional(rt.String),
});

export const LinkedMovieRt = rt.Record({
  id: rt.Number,
  name: rt.String.Or(rt.Null),
  enName: rt.String.Or(rt.Null),
  alternativeName: rt.String.Or(rt.Null),
  type: rt.String,
  poster: PosterRt,
});

export const YearRangeRt = rt.Record({
  start: rt.Number.Or(rt.Null),
  end: rt.Number.Or(rt.Null),
});

export const AudienceRt = rt.Record({
  count: rt.Number,
  country: rt.String,
});

export const FactInMovieRt = rt.Record({
  value: rt.String,
  type: rt.String,
  spoiler: rt.Boolean,
});

export const ImagesRt = rt.Record({
  postersCount: rt.Optional(rt.Number),
  backdropsCount: rt.Optional(rt.Number),
  framesCount: rt.Number,
});

export const VendorImageRt = rt.Record({
  name: rt.String.Or(rt.Null),
  url: rt.String.Or(rt.Null),
  previewUrl: rt.String.Or(rt.Null),
});

export const MovieRt = rt.Record({
  id: rt.Number,
  externalId: ExternalIdRt,
  name: rt.String.Or(rt.Null),
  alternativeName: rt.String.Or(rt.Null),
  enName: rt.String.Or(rt.Null),
  names: NameRt,
  type: rt.String,
  typeNumber: rt.Number,
  year: rt.Number.Or(rt.Null),
  description: rt.String.Or(rt.Null),
  shortDescription: rt.String.Or(rt.Null),
  slogan: rt.String.Or(rt.Null),
  status: rt.String.Or(rt.Null),
  rating: RatingRt,
  votes: VotesRt,
  movieLength: rt.Number.Or(rt.Null),
  ratingMpaa: rt.String.Or(rt.Null),
  ageRating: rt.Number.Or(rt.Null),
  logo: rt.Optional(LogoRt),
  poster: PosterRt,
  backdrop: PosterRt,
  videos: rt.Optional(VideoTypesRt),
  genres: rt.Array(ItemNameRt),
  countries: rt.Array(ItemNameRt),
  persons: rt.Array(PersonInMovieRt),
  reviewInfo: rt.Optional(ReviewInfoRt),
  seasonsInfo: rt.Optional(rt.Array(SeasonInfoRt)),
  budget: rt.Optional(CurrencyValueRt),
  fees: rt.Optional(FeesRt),
  premiere: rt.Optional(PremiereRt),
  similarMovies: rt.Optional(rt.Array(LinkedMovieRt)),
  sequelsAndPrequels: rt.Array(LinkedMovieRt),
  watchability: WatchabilityRt,
  releaseYears: rt.Optional(rt.Array(YearRangeRt)),
  top10: rt.Number.Or(rt.Null),
  top250: rt.Number.Or(rt.Null),
  ticketsOnSale: rt.Boolean.Or(rt.Null),
  totalSeriesLength: rt.Number.Or(rt.Null),
  seriesLength: rt.Number.Or(rt.Null),
  isSeries: rt.Boolean,
  audience: rt.Optional(rt.Array(AudienceRt).Or(rt.Null)),
  facts: rt.Optional(rt.Array(FactInMovieRt).Or(rt.Null)),
  imagesInfo: rt.Optional(ImagesRt),
  productionCompanies: rt.Optional(rt.Array(VendorImageRt)),
});

export type SearchParams = {
  query: string;
  page: number;
};

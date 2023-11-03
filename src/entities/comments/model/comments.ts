import { createEvent, sample } from 'effector';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { movieModel } from '@/entities/movie';
import { local } from '@/shared/api';

export const submitFrom = createEvent<local.types.CommentParams>();

sample({
  clock: submitFrom,
  target: local.api.addComment.start,
});

sample({
  clock: local.api.addComment.finished.success,
  fn: ({ result }) => ({ movieId: result.movieId.toString() }),
  target: local.api.commentsByMovieId.start,
});

export const commentsEvent = () => {
  sample({
    clock: movieModel.moviePageStarted,
    target: local.api.commentsByMovieId.start,
  });
};

export const $comments = local.api.commentsByMovieId.$data;

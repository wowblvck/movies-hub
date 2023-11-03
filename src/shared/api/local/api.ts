import { createJsonMutation, createJsonQuery, declareParams } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { env } from '@/env.mjs';
// eslint-disable-next-line @conarti/feature-sliced/absolute-relative
import { sharedConfigRoutes } from '@/shared/config';
import { CommentEntityRt, CommentParams, CommentsRt } from './types';

export const commentsByMovieId = createJsonQuery({
  params: declareParams<sharedConfigRoutes.MovieParams>(),
  request: {
    method: 'GET',
    url: ({ movieId }) => `${env.NEXT_PUBLIC_SERVER_URL}/api/comments?movie=${movieId}`,
  },
  response: {
    contract: runtypeContract(CommentsRt),
  },
});

export const addComment = createJsonMutation({
  params: declareParams<CommentParams>(),
  request: {
    method: 'POST',
    url: () => `${env.NEXT_PUBLIC_SERVER_URL}/api/comments`,
    body: (data) => data,
  },
  response: {
    contract: runtypeContract(CommentEntityRt),
  },
});

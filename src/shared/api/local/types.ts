import * as rt from 'runtypes';

const CommentTypeRt = rt.Union(
  rt.Literal('positive'),
  rt.Literal('negative'),
  rt.Literal('neutral')
);

export type CommentType = rt.Static<typeof CommentTypeRt>;

export const CommentEntityRt = rt.Record({
  id: rt.Number,
  createdAt: rt.String,
  movieId: rt.Number,
  username: rt.String,
  comment: rt.String,
  type: CommentTypeRt,
});

export type Comment = rt.Static<typeof CommentEntityRt>;

export const CommentsRt = rt.Array(CommentEntityRt);

export type MovieComment = Pick<Comment, 'movieId'>;

export type CommentParams = Pick<Comment, 'movieId' | 'username' | 'comment' | 'type'>;

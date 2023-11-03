'use client';

import { useUnit } from 'effector-react';
import { AddComment } from '@/features/add-comment';
import { commentsModel, CommentItem } from '@/entities/comments';

export const Comments = () => {
  const comments = useUnit(commentsModel.$comments);

  const commentsList = (
    <ul className="flex flex-col gap-2">
      {comments?.map((comment) => (
        <li key={comment.id}>
          <CommentItem item={comment} />
        </li>
      ))}
    </ul>
  );

  const noComments = <p className="font-roboto">Будь первым. Оставь свой комментарий!</p>;

  return (
    <div className="flex flex-col gap-5">
      <p className="font-roboto text-3xl font-bold">Комментарии</p>
      <AddComment />
      {!comments?.length ? noComments : commentsList}
    </div>
  );
};

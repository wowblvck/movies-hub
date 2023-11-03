import moment from 'moment';
import 'moment/locale/ru';
import React from 'react';
import { local } from '@/shared/api';
import { cn } from '@/shared/lib';

type CommentItemProps = {
  item: local.types.Comment;
};

export const CommentItem: React.FC<CommentItemProps> = ({ item }) => {
  const { username, comment, createdAt, type } = item;

  const formatDate = moment(createdAt).format('LL');

  return (
    <div
      className={cn('rounded-xl p-3', {
        'bg-base-100': type === 'neutral',
        'bg-error/50': type === 'negative',
        'bg-success/50': type === 'positive',
      })}
    >
      <div className="flex flex-col gap-1 sm:inline-flex sm:w-full sm:flex-row sm:items-center sm:justify-between">
        <p className="font-roboto text-lg font-bold">{username}</p>
        <p className="text-left font-roboto text-sm font-normal sm:text-right">{formatDate}</p>
      </div>
      <div className="divider m-0"></div>
      <p className="font-roboto">{comment}</p>
    </div>
  );
};

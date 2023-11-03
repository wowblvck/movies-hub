'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEvent, useUnit } from 'effector-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { commentsModel } from '@/entities/comments';
import { movieModel } from '@/entities/movie';
import { cn } from '@/shared/lib';
import { Button, Select } from '@/shared/ui';
import { commentsType } from '../config';

const CommentFormSchema = z
  .object({
    username: z.string().min(3).max(20),
    type: z.union([z.literal('positive'), z.literal('negative'), z.literal('neutral')]),
    comment: z.string().min(15).max(200),
  })
  .required();

type CommentFormType = z.infer<typeof CommentFormSchema>;

export const AddComment = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CommentFormType>({ resolver: zodResolver(CommentFormSchema) });

  const submit = useEvent(commentsModel.submitFrom);
  const movie = useUnit(movieModel.$movie);

  const pending = useUnit(commentsModel.$addPending);

  const success = useUnit(commentsModel.$success);

  React.useEffect(() => {
    if (!pending && success) {
      reset();
    }
  }, [pending, success]);

  const onSubmit = (data: CommentFormType) => {
    if (movie) {
      submit({ movieId: movie.id, ...data });
    }
  };

  return (
    <form className="flex flex-col gap-2 font-roboto md:flex-row" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Юзернейм"
        className={cn('input input-bordered w-full max-w-xs', {
          'input-error': errors.username,
        })}
        {...register('username')}
      />
      <Select
        className={cn('select select-bordered w-full max-w-xs', {
          'select-error': errors.type,
        })}
        options={commentsType}
        {...register('type')}
      />
      <textarea
        className={cn('textarea textarea-bordered h-[15px] w-full', {
          'textarea-error': errors.comment,
        })}
        placeholder="Текст комментария"
        {...register('comment')}
      ></textarea>
      <Button className="max-w-xs" loading={pending} loadingPlaceholder="Добавляем">
        Добавить
      </Button>
    </form>
  );
};

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { kinopoisk } from '@/shared/api';
import { sharedConfigRoutes } from '@/shared/config';
import { minutesToHour } from '@/shared/lib';

const { routes } = sharedConfigRoutes;

type MovieItemProps = {
  item: kinopoisk.types.MovieEntity;
};

export const MovieItem: React.FC<MovieItemProps> = ({ item }) => {
  const { id, poster, name, year, movieLength } = item;
  return (
    <Link
      href={routes.movie(id)}
      className="group card card-compact block h-full w-full cursor-pointer shadow-xl duration-300 hover:scale-105"
    >
      <div className="rounded-box relative pt-[150%] after:rounded-box after:absolute after:inset-0 after:block after:border-[1px] after:border-solid after:border-[hsla(0,0%,100%,.1)] after:content-['']">
        {poster && poster.previewUrl && (
          <Image
            src={poster.previewUrl as string}
            alt={`Постер ${name}`}
            fill
            sizes="100%"
            quality={100}
            priority={true}
            className="rounded-box"
          />
        )}
      </div>
      <div className="rounded-box invisible absolute inset-0 z-[2] flex flex-col justify-end gap-2 border-[1px] border-solid border-[hsla(0,0%,100%,.1)] p-5 opacity-0 duration-300 group-hover:visible group-hover:bg-[rgba(0,0,0,.85)] group-hover:opacity-100">
        <h3 className="font-roboto font-bold text-white">{name}</h3>
        <div className="flex gap-2">
          <h3>{year}</h3>
          {movieLength && <span>{minutesToHour(movieLength)}</span>}
        </div>
      </div>
    </Link>
  );
};

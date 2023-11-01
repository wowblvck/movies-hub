import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// eslint-disable-next-line @conarti/feature-sliced/absolute-relative
import { searchModel } from '@/entities/search-window';
import { kinopoisk } from '@/shared/api';
import { sharedConfigRoutes } from '@/shared/config';
import { useToggler } from '@/shared/lib';

type SearchItemProps = {
  item: kinopoisk.types.MeiliMovieEntity;
};

export const SearchItem: React.FC<SearchItemProps> = ({ item }) => {
  const { id, name, poster, year } = item;
  const { close } = useToggler(searchModel.searchToggler);

  return (
    <>
      <Link
        href={sharedConfigRoutes.routes.movie(id)}
        onClick={close}
        className="flex items-center gap-5"
      >
        <div className="relative h-[75px] w-[50px] shrink-0 overflow-hidden rounded-md">
          {poster && <Image sizes="100%" fill quality={80} alt={`${name} постер`} src={poster} />}
        </div>
        <div className="flex flex-col">
          <p className="font-roboto text-lg font-bold text-base-100">{name}</p>
          <p className="font-roboto text-base-300">{year}</p>
        </div>
      </Link>
    </>
  );
};

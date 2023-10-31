'use client';

import { useUnit } from 'effector-react';
import Image from 'next/image';
import { movieModel } from '../../model';

export const Poster = () => {
  const movie = useUnit(movieModel.$movie);

  const { poster, name } = movie || {};

  return (
    <>
      {poster?.url && (
        <div className="relative h-[330px] w-[220px] overflow-hidden rounded-xl lg:min-h-[430px] lg:shrink-0 lg:grow-0 lg:basis-[320px]">
          <Image
            src={poster.url as string}
            alt={`${name} постер`}
            fill
            sizes="100%"
            quality={100}
            priority={true}
          />
        </div>
      )}
    </>
  );
};

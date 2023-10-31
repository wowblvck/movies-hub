'use client';

import { useUnit } from 'effector-react';
import Image from 'next/image';
import { movieModel } from '../../model';

export const Title = () => {
  const movie = useUnit(movieModel.$movie);

  const { logo, name } = movie || {};

  const hasLogo = logo?.url;

  const Logo = (
    <div className="relative h-[100px] w-[170px]">
      <Image
        src={logo?.url as string}
        alt={`${name} логотип`}
        priority
        sizes="100%"
        fill
        style={{ objectFit: 'contain' }}
      />
    </div>
  );

  const Title = (
    <p className="font-roboto text-4xl font-bold lg:text-6xl">
      Фильм {name ? name : 'Без названия'}
    </p>
  );

  return <>{hasLogo ? Logo : Title}</>;
};

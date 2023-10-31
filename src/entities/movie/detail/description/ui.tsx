'use client';

import { useUnit } from 'effector-react';
import React from 'react';
import { movieModel } from '../../model';
import { List } from './list';

export const Description = () => {
  const movie = useUnit(movieModel.$movie);

  const { year, slogan, countries, genres, description, ageRating, persons, budget } = movie || {};

  const producers = persons && persons.filter(({ profession }) => profession === 'продюсеры');

  const directors = persons && persons.filter(({ profession }) => profession === 'режиссеры');

  const countriesList = countries && <List items={countries} />;

  const genresList = genres && <List items={genres} />;

  const producersList = producers && <List items={producers} />;

  const directorsList = directors && <List items={directors} />;

  const fields = [
    { label: 'Год производства:', value: year },
    { label: 'Страна:', value: countriesList },
    { label: 'Жанр:', value: genresList },
    {
      label: 'Продюсер:',
      value: producersList,
    },
    {
      label: 'Режиссер:',
      value: directorsList,
    },
    {
      label: 'Бюджет:',
      value:
        budget && budget.value && `${budget.currency}${Intl.NumberFormat().format(budget.value)}`,
    },
    {
      label: 'Слоган:',
      value: slogan && `«${slogan}»`,
    },
    {
      label: 'Возраст:',
      value: ageRating && (
        <span className="border-[1px] border-solid border-neutral p-1">{ageRating}+</span>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <p className="font-roboto text-2xl font-bold">О фильме</p>
      <div className="flex flex-col gap-3">
        {fields.map(
          (field) =>
            field.value && (
              <div className="flex" key={field.label}>
                <p className="w-[160px] whitespace-nowrap font-roboto">{field.label}</p>
                <div className="flex-1">
                  {typeof field.value === 'string' ? (
                    <p className="font-roboto">{field.value}</p>
                  ) : (
                    field.value
                  )}
                </div>
              </div>
            )
        )}
      </div>
      <p className="font-roboto">{description}</p>
    </div>
  );
};

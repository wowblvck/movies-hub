'use client';

import { useEvent, useUnit } from 'effector-react';
import { FormEvent, useEffect, useRef } from 'react';
import { searchModel } from '../../model';

export const SearchInput = () => {
  const search = useUnit(searchModel.$search);
  const searchChanged = useEvent(searchModel.searchChanged);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputRef.current?.blur();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={search}
        onChange={(e) => searchChanged(e.target.value)}
        type="text"
        placeholder="Название фильма"
        className="input input-bordered w-full font-roboto"
      />
    </form>
  );
};

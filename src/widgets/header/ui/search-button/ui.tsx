'use client';

import { searchModel } from 'src/entities/search';
import { useToggler } from '@/shared/lib';

export const SearchButton = () => {
  const { open } = useToggler(searchModel.searchToggler);

  return (
    <button className="cursor-pointer">
      <svg
        className="h-5 w-5 text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
        onClick={open}
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </button>
  );
};

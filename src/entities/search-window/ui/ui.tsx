'use client';

import { useUnit } from 'effector-react';
import { useToggler } from '@/shared/lib';
import { Modal } from '@/shared/ui';
import { searchModel } from '../model';
import { SearchInput } from './search-input';
import { SearchList } from './search-list';

export const SearchWindow = () => {
  const toggler = useToggler(searchModel.searchToggler);
  const query = useUnit(searchModel.$query);

  return (
    <Modal
      isOpen={toggler.isOpen}
      className="fixed left-0 top-0 z-10 h-[100dvh] w-full overflow-y-auto overflow-x-hidden bg-base-content/95"
    >
      <button onClick={toggler.close} className="btn absolute right-5 top-5">
        Закрыть
      </button>
      <div className="mx-auto flex max-w-[850px] flex-col gap-10 px-[20px] py-[80px]">
        <p className="font-inter text-4xl font-bold text-base-100">Поиск</p>
        <SearchInput />
        {query && <SearchList />}
      </div>
    </Modal>
  );
};

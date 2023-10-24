'use client';

import { filters, sort } from '../config';
import { Select } from './select';

export const Filters = () => {
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      {filters.map((item) => (
        <Select
          key={item.queryName}
          options={item.options}
          onSelect={(option) => console.log(option)}
        />
      ))}
      <Select className="md:ml-auto" options={sort} onSelect={(value) => console.log(value)} />
    </div>
  );
};

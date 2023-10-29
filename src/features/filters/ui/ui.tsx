'use client';

import { filters, sort } from '../config';
import { Select } from './select';

export const Filters = () => {
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      {filters.map(({ queryName, ...rest }) => (
        <Select
          key={queryName}
          onSelect={(value) => console.log(`[${queryName}]: ${value}`)}
          {...rest}
        />
      ))}
      <Select className="md:ml-auto" options={sort} onSelect={(value) => console.log(value)} />
    </div>
  );
};

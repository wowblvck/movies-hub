'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';
import React from 'react';
import { Select } from '@/shared/ui';
import { filters, QueryNamesEnum, sort } from '../config';
import { routerParams } from '../lib';

export const Filters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const parsedParams = qs.parse(searchParams.toString());

  const updateQueryParam = routerParams(router, pathname, parsedParams);

  return (
    <div className="flex flex-col gap-5 md:flex-row">
      {filters.map(({ queryName, ...rest }) => (
        <Select
          className="md:max-w-xs"
          key={queryName}
          value={parsedParams[queryName]}
          optionSelect={(value) => updateQueryParam(queryName, value)}
          {...rest}
        />
      ))}
      <Select
        className="md:ml-auto"
        value={parsedParams[QueryNamesEnum.Sort]}
        options={sort}
        optionSelect={(value) => updateQueryParam(QueryNamesEnum.Sort, value)}
      />
    </div>
  );
};

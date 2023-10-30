import { useRouter, usePathname } from 'next/navigation';
import qs, { ParsedQuery } from 'query-string';
import { QueryNamesEnum } from '../../config';

type Router = ReturnType<typeof useRouter>;
type Pathname = ReturnType<typeof usePathname>;

export const routerParams = (router: Router, pathname: Pathname, parsedParams: ParsedQuery) => {
  return (queryName: QueryNamesEnum, value: string) => {
    if (value === '') {
      delete parsedParams[queryName];
    } else {
      parsedParams[queryName] = value;
    }
    const queryString = qs.stringify(parsedParams);
    return router.push(`${pathname}?${queryString}`);
  };
};

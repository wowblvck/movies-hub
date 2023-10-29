import { EffectorNext } from '@effector/next';
import { allSettled, fork, serialize } from 'effector';
import { Catalog, catalogModel } from '@/widgets/catalog';
import { kinopoisk } from '@/shared/api';

type PageProps = {
  searchParams: kinopoisk.types.CatalogParams;
};

export default async function Home({ searchParams }: PageProps) {
  const scope = fork();

  await allSettled(catalogModel.catalogPageStarted, { scope, params: searchParams });

  const values = serialize(scope);

  return (
    <div className="container mx-auto">
      <EffectorNext values={values}>
        <Catalog />
      </EffectorNext>
    </div>
  );
}

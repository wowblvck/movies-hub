import { EffectorNext } from '@effector/next';
import { allSettled, fork, serialize } from 'effector';
import { Catalog, catalogModel } from '@/widgets/catalog';
import { sharedConfigRoutes } from '@/shared/config';

export const revalidate = 0;

type PageProps = {
  searchParams: sharedConfigRoutes.CatalogParams;
};

export default async function Home({ searchParams }: PageProps) {
  const scope = fork();

  await allSettled(catalogModel.catalogPageStarted, { scope, params: searchParams });

  const values = serialize(scope);

  return (
    <EffectorNext values={values}>
      <div className="container mx-auto">
        <Catalog />
      </div>
    </EffectorNext>
  );
}

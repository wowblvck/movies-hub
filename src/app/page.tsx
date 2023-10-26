import { EffectorNext } from '@effector/next';
import { allSettled, fork, serialize } from 'effector';
import { Catalog, catalogModel } from '@/widgets/catalog';

export default async function Home() {
  const scope = fork();

  await allSettled(catalogModel.catalogPageStarted, { scope });

  const values = serialize(scope);

  return (
    <div className="container mx-auto">
      <EffectorNext values={values}>
        <Catalog />
      </EffectorNext>
    </div>
  );
}

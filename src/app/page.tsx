import { EffectorNext } from '@effector/next';
import { allSettled, fork, serialize } from 'effector';
import { Catalog, pageStarted } from '@/widgets/catalog';

export default async function Home() {
  const scope = fork();

  await allSettled(pageStarted, { scope });

  const values = serialize(scope);

  return (
    <div className="container mx-auto">
      <EffectorNext values={values}>
        <Catalog />
      </EffectorNext>
    </div>
  );
}

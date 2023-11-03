import { EffectorNext } from '@effector/next';
import { allSettled, fork, serialize } from 'effector';
import { Comments } from '@/widgets/comments';
import { commentsModel } from '@/entities/comments';
import { Description, movieModel, Poster, Title } from '@/entities/movie';

commentsModel.commentsEvent();

export const revalidate = 0;

type PageProps = {
  params: {
    id: string;
  };
};

export default async function MoviePage({ params: { id } }: PageProps) {
  const scope = fork();

  await allSettled(movieModel.moviePageStarted, { scope, params: { movieId: id } });

  const values = serialize(scope);

  return (
    <EffectorNext values={values}>
      <div className="container mx-auto flex flex-col gap-5">
        <section className="flex flex-col items-center gap-5 rounded-xl bg-secondary/5 p-5 lg:flex-row lg:items-start lg:gap-20 lg:p-10">
          <Poster />
          <div className="flex flex-col items-center gap-10 lg:items-start">
            <Title />
            <Description />
          </div>
        </section>
        <section className="rounded-xl bg-secondary/5 p-5">
          <Comments />
        </section>
      </div>
    </EffectorNext>
  );
}

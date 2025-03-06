import type { Metadata } from 'next';

import * as Breadcrumb from '@/components/ui/breadcrumb';
import * as ProblemList from '@/components/problem-list';
import { getProgrammersAllProblems } from './_api';

export const metadata = {
  title: 'Programmers 문제 목록',
} satisfies Metadata;

export default async function ProgrammersPage() {
  const problems = await getProgrammersAllProblems();

  return (
    <article className="min-h-(--content-height) w-full min-w-0 pt-4 pb-16">
      <Breadcrumb.Root className="mt-2">
        <Breadcrumb.List>
          <Breadcrumb.Page>Programmers</Breadcrumb.Page>
        </Breadcrumb.List>
      </Breadcrumb.Root>
      <div className="mt-4 mb-8">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-12">문제 목록</h1>
      </div>
      <div className="mt-5">
        <ProblemList.Root>
          {problems.map((problem) => (
            <ProblemList.Item key={problem.id}>
              <ProblemList.Link href={`/solutions/programmers/${problem.id}`}>
                <span>{problem.id}.</span>
                <span>{problem.title}</span>
              </ProblemList.Link>
              <ProblemList.Level level={problem.level} />
            </ProblemList.Item>
          ))}
        </ProblemList.Root>
      </div>
    </article>
  );
}

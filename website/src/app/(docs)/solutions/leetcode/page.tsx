import * as Breadcrumb from '@/components/ui/breadcrumb';
import * as ProblemList from '@/components/problem-list';
import { getLeetCodeAllProblems } from './_api';

export default async function LeetCodePage() {
  const problems = await getLeetCodeAllProblems();

  return (
    <article className="min-h-(--content-height) w-full min-w-0 pt-4 pb-16">
      <Breadcrumb.Root className="mt-2">
        <Breadcrumb.List>
          <Breadcrumb.Page>LeetCode</Breadcrumb.Page>
        </Breadcrumb.List>
      </Breadcrumb.Root>
      <div className="mt-4 mb-8">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-12">문제 목록</h1>
      </div>
      <div className="mt-5">
        <ProblemList.Root>
          {problems.map((problem) => (
            <ProblemList.Item key={problem.id}>
              <ProblemList.Link href={`/solutions/leetcode/${problem.id}`}>
                {problem.id}. {problem.title}
              </ProblemList.Link>
              <ProblemList.Level level={problem.difficulty} />
            </ProblemList.Item>
          ))}
        </ProblemList.Root>
      </div>
    </article>
  );
}

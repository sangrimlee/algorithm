import dedent from 'ts-dedent';

import { createCodeBlockTemplate } from './code-block';
import { LeetCodeSolution, ProgrammersSolution, Solution } from '@/types/types';
import { createFrontMatterTemplate } from './front-matter';
import { createComponentTemplate } from './component';
import { createTableTemplate } from './table';
import { CodingSite } from '@/types';
import { format } from '@/utils/format';

export function createProgrammersSolutionPageTemplate({ title, code, url }: ProgrammersSolution) {
  return format(
    dedent`${createFrontMatterTemplate({
      title,
    })}

# ${title}

## Solution

${createCodeBlockTemplate(code, {
  language: 'typescript',
  fileName: 'solution.ts',
  copy: true,
})}

${createComponentTemplate('ProblemLink', {
  codingSite: 'programmers',
  href: url,
  title,
})}`,
    'mdx',
  );
}

export function createLeetCodeSolutionPageTemplate(
  { id, title, code, url }: LeetCodeSolution,
  difficulty: string,
  topics: { name: string; slug: string }[],
) {
  return format(
    dedent`${createFrontMatterTemplate({
      title,
      tags: topics.map(({ name }) => name),
    })}

# ${id}. ${title}

<Badges>
${createComponentTemplate('LevelBadge', { level: difficulty.toLowerCase() })}
${topics.map((topic) => createComponentTemplate('TopicBadge', topic)).join('\n')}
</Badges>

## Solution

${createCodeBlockTemplate(code, {
  language: 'typescript',
  fileName: 'solution.ts',
  copy: true,
})}

${createComponentTemplate('ProblemLink', {
  codingSite: 'leetcode',
  href: url,
  title,
})}`,
    'mdx',
  );
}

function createIntroductionTableRow({ id, title, url, codingSite }: Solution) {
  return [id, `[${title}](${url})`, `[풀이](/solutions/${codingSite.toLowerCase()}/${id})`];
}

function createIntroductionTableTemplate(solutions?: Solution[]) {
  if (!solutions) {
    return '';
  }
  return createTableTemplate(['#', 'Title', 'Solution'], solutions.map(createIntroductionTableRow));
}

export function createIntroductionPageTemplate(groups: Map<CodingSite, Solution[]>) {
  return format(
    dedent`# Introduction

LeetCode와 Programmers의 문제들을 저만의 방식으로 푼 것을 공유하고 있습니다.

언제든지 더 좋은 방식의 풀이 방법이 있다면, 피드백 해주시면 감사하겠습니다.

## 문제 풀이 목록

<Tabs items={['LeetCode', 'Programmers']}>
  <Tab>
  
${createIntroductionTableTemplate(groups.get(CodingSite.LeetCode) || [])}

  </Tab>
  <Tab>

${createIntroductionTableTemplate(groups.get(CodingSite.Programmers) || [])}

  </Tab>
</Tabs>

[Github에서 보기](https://github.com/sangrimlee/algorithm/tree/main/solution)`,
    'mdx',
  );
}

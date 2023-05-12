import dedent from 'ts-dedent';

import { createCodeBlockTemplate } from './code-block';
import { LeetCodeSolution, ProgrammersSolution } from '@/types/types';
import { createFrontMatterTemplate } from './front-matter';
import { format } from '@/utils/format';
import { createComponentTemplate } from './component';

export function createProgrammersSolutionPageTemplate({ title, code, url }: ProgrammersSolution) {
  return format(
    dedent`
    ${createFrontMatterTemplate({
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
    })}
  `,
    'mdx',
  );
}

export function createLeetCodeSolutionPageTemplate(
  { id, title, code, url }: LeetCodeSolution,
  difficulty: string,
  topics: { name: string; slug: string }[],
) {
  return format(
    dedent`
    ${createFrontMatterTemplate({
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
    })}
  `,
    'mdx',
  );
}

import dedent from 'ts-dedent';

import { createCodeBlockTemplate } from './code-block';
import { LeetCodeSolution, ProgrammersSolution } from '@/types/types';
import { createFrontMatterTemplate } from './front-matter';
import { format } from '@/utils/format';
import { createComponentTemplate } from './component';

export function createProgrammersSolutionPageTemplate({ title, code }: ProgrammersSolution) {
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
  `,
    'mdx',
  );
}

export function createLeetCodeSolutionPageTemplate(
  { id, title, code }: LeetCodeSolution,
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
      ${createComponentTemplate({ name: 'LevelBadge', props: { level: difficulty.toLowerCase() } })}
      ${topics
        .map((topic) => createComponentTemplate({ name: 'TopicBadge', props: topic }))
        .join('\n')}
    </Badges>

    ## Solution

    ${createCodeBlockTemplate(code, {
      language: 'typescript',
      fileName: 'solution.ts',
      copy: true,
    })}
  `,
    'mdx',
  );
}

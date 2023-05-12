import dedent from 'ts-dedent';

import { createCodeBlockTemplate } from './code-block';
import { LeetCodeSolution, ProgrammersSolution } from '@/types/types';

export function createProgrammersSolutionPageTemplate({ title, code }: ProgrammersSolution) {
  return dedent`
    # ${title}

    ## Solution

    ${createCodeBlockTemplate(code, {
      language: 'typescript',
      fileName: 'solution.ts',
      copy: true,
    })}
  `;
}

export function createLeetCodeSolutionPageTemplate(
  { id, title, code }: LeetCodeSolution,
  difficulty: string,
  topics: { name: string; slug: string }[],
) {
  return dedent`
    # ${id}. ${title}

    <LevelBadge level="${difficulty.toLowerCase()}" />
    <TopicBadges
      topics={${JSON.stringify(topics, null, 2)}}
    />

    ## Solution

    ${createCodeBlockTemplate(code, {
      language: 'typescript',
      fileName: 'solution.ts',
      copy: true,
    })}
  `;
}

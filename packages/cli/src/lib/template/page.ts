import dedent from 'ts-dedent';

import { Solution } from '@/types';
import { createCodeBlockTemplate } from './code-block';

export function createSolutionPageTemplate({ title, code }: Solution) {
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

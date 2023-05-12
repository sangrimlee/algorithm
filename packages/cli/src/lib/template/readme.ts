import dedent from 'ts-dedent';

import { format } from '@/utils/format';
import { CodingSite, Solution } from '@/types';

import { createTableTemplate } from './table';

function createSolutionRow({ id, title, url, relativePath }: Solution) {
  return [id, `[${title}](${url})`, `[풀이](${relativePath})`];
}

function createSolutionTableTemplate(codingSite: CodingSite, solutions: Solution[]) {
  return `### ${codingSite}
  
  ${createTableTemplate(['#', 'Title', 'Solution'], solutions.map(createSolutionRow))}
  `;
}

export function createREADMETemplate(groups: Map<CodingSite, Solution[]>) {
  let tableTemplate = '';
  for (const [codingSite, solutions] of groups) {
    tableTemplate += createSolutionTableTemplate(codingSite, solutions);
  }

  return format(
    dedent`# Solution

    ## 문제 풀이 목록

    ${tableTemplate}
    `,
    'markdown',
  );
}

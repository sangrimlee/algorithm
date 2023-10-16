import dedent from 'ts-dedent';

import { format } from '@/utils/format';
import { CodingSite, Solution } from '@/types';

import { createTableTemplate } from './table';

function createSolutionRow({ id, title, url, relativePath }: Solution) {
  return [id, `[${title}](${url})`, `[풀이](${relativePath})`];
}

async function createSolutionTableTemplate(codingSite: CodingSite, solutions: Solution[]) {
  const table = await createTableTemplate(
    ['#', 'Title', 'Solution'],
    solutions.map(createSolutionRow),
  );

  return `### ${codingSite}
  
  ${table}`;
}

export async function createREADMETemplate(groups: Map<CodingSite, Solution[]>) {
  const tableTemplates = await Promise.all(
    [...groups.entries()].map(([codingSite, solutions]) =>
      createSolutionTableTemplate(codingSite, solutions),
    ),
  );
  const template = await format(
    dedent`# Solution

    ## 문제 풀이 목록

    ${tableTemplates.join('')}
    `,
    'markdown',
  );
  return template;
}

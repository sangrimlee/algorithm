import { dedent } from 'ts-dedent';

import { format } from '@/utils/format';
import { CodingSite, Solution } from '@/types';

import { createTableTemplate } from './table';

function createSolutionRow({ id, title, url, relativePath }: Solution) {
  return [id, `[${title}](${url})`, `[보러가기](${relativePath})`];
}

async function createSolutionTableTemplate(codingSite: CodingSite, solutions: Solution[]) {
  const table = await createTableTemplate(
    ['문제 번호', '제목', '풀이'],
    solutions.map(createSolutionRow),
    ['left', 'left', 'center'],
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

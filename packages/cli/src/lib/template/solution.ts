import { dedent } from 'ts-dedent';

import { CODING_SITE_URL } from '@/constants';
import type { CodingSite } from '@/types';

export function createSolutionTemplate(
  codingSite: CodingSite,
  id: string,
  title: string,
  pathname: string,
  codeSnippet = '',
) {
  return dedent`/**
    * ${id}. ${title}
    * ${CODING_SITE_URL[codingSite]}/${pathname}
    */
    ${codeSnippet ? 'export' : ''} ${codeSnippet}
  `;
}

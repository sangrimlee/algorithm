import dedent from 'ts-dedent';

import { CODING_SITE_URL } from '../constants';
import { CodingSite } from '../enums';

export function createSolutionTemplate(
  codingSite: CodingSite,
  id: string,
  title: string,
  pathname: string,
) {
  return dedent`/**
  * ${id}. ${title}
  * ${CODING_SITE_URL[codingSite]}/${pathname}
  */
`;
}

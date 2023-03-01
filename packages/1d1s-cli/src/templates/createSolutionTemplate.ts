import { CODING_SITE_URL } from '../constants';
import { CodingSite } from '../enums';

export function createSolutionTemplate(
  codingSite: CodingSite,
  id: string,
  title: string,
  pathname: string,
) {
  return `/**
  * ${id}. ${title}
  * ${CODING_SITE_URL[codingSite]}/${pathname}
  */
`;
}

import { CODING_SITE_URL } from '../constants';

export function createSolutionTemplate(id: string, title: string, titleSlug: string) {
  return `/**
  * ${id}. ${title}
  * ${CODING_SITE_URL.LeetCode}/${titleSlug}
  */
`;
}

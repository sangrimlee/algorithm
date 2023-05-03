import path from 'node:path';

import { findFirstMatch } from '@/utils/regex';

import { Solution, isCodingSite } from '@/types';

const COMMENT_REGEX = /\/\*(\*(?!\/)|[^*])*\*\//;
const URL_REGEX =
  /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)/;
const TITLE_REGEX = /[0-9]+..*\n/;

function parseSolutionFile(solutionFile: string) {
  const comment = findFirstMatch(solutionFile, COMMENT_REGEX);
  const url = findFirstMatch(comment, URL_REGEX).trim();
  const title = findFirstMatch(comment, TITLE_REGEX)
    .replace(/^[0-9. ]+/, '')
    .trim();
  return { url, title };
}

export async function parseSolution(
  solutionPath: string,
  solutionFile: string,
  outDir: string,
): Promise<Solution> {
  const fileName = path.basename(solutionPath);

  const { url, title } = parseSolutionFile(solutionFile);
  const [source, id] = fileName.replace(/.ts$/, '').split('-');
  const relativePath = path.relative(outDir, solutionPath);

  return {
    id,
    codingSite: isCodingSite(source),
    url,
    title,
    relativePath,
  };
}
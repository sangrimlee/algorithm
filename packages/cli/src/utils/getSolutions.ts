import fs from 'node:fs/promises';
import path from 'node:path';

import { glob } from 'glob';

import { CodingSite, Solution } from '@/types';

import { findFirstPattern } from './find';
import { getCodingSite } from './typeGuard';

const URL_REGEX =
  /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)/;
const TITLE_REGEX = /[0-9]+..*\n/;

async function getSolutionPaths(solutionDir: string) {
  return glob(`${solutionDir}/**/!(*.test).ts`);
}

function parseSolutionFile(solutionFile: string) {
  const url = findFirstPattern(solutionFile, URL_REGEX).trim();
  const title = findFirstPattern(solutionFile, TITLE_REGEX)
    .replace(/^[0-9. ]+/, '')
    .trim();
  return { url, title };
}

async function parseSolution(solutionPath: string, outDir: string): Promise<Solution> {
  const solutionFile = await fs.readFile(solutionPath, 'utf-8');
  const { url, title } = parseSolutionFile(solutionFile);
  const fileName = path.basename(solutionPath);
  const [source, id] = fileName.replace(/.ts$/, '').split('-');
  const relativePath = path.relative(outDir, solutionPath);

  return {
    id,
    codingSite: getCodingSite(source),
    url,
    title,
    relativePath,
  };
}

function groupByCodingSite(solutions: Solution[]) {
  const groups = new Map<CodingSite, Solution[]>();

  for (const solution of solutions) {
    const group = groups.get(solution.codingSite);
    if (group) {
      group.push(solution);
    } else {
      groups.set(solution.codingSite, [solution]);
    }
  }

  return groups;
}

export async function getSolutions(solutionDir: string, outDir: string) {
  const solutionPaths = await getSolutionPaths(path.join(process.cwd(), solutionDir));
  const solutions = await Promise.all(
    solutionPaths.map((solutionPath) => parseSolution(solutionPath, outDir)),
  );
  solutions.sort((a, b) => +a.id - +b.id);
  return groupByCodingSite(solutions);
}

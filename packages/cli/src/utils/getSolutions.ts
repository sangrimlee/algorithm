import fs from 'node:fs/promises';
import { join } from 'node:path';
import { glob } from 'glob';

const URL_REGEX =
  /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)/;
const TITLE_REGEX = (id: string) => new RegExp(`${id}..*\n`);

export async function getSolutionPaths(path: string) {
  return glob(`${path}/**/!(*.test).ts`);
}

export async function parseSolution(path: string) {
  const [yearAndMonth, day, fileName] = path.split('/').slice(-3);
  const [source, id] = fileName.replace(/.ts$/, '').split('-');
  const solutionFile = await fs.readFile(path, 'utf-8');
  const matchedURL = solutionFile.match(URL_REGEX) ?? [''];
  const matchedTitle = solutionFile.match(TITLE_REGEX(id)) ?? [''];

  return {
    yearAndMonth,
    day,
    source,
    id,
    url: matchedURL[0].trim(),
    title: matchedTitle[0].trim(),
  };
}

export async function getSolutions(solutionDir: string) {
  const path = join(process.cwd(), solutionDir);
  const solutionPaths = await getSolutionPaths(path);
  const solutions = await Promise.all(solutionPaths.map(parseSolution));
  return solutions;
}

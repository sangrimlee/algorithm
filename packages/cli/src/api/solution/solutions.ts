import { glob } from 'glob';

import { parseSolution } from '@/lib/parse';
import { readFile } from '@/utils/fs';

async function getSolutionPaths(solutionDir: string) {
  return glob(`${solutionDir}/**/!(*.test).ts`);
}

async function getSolution(solutionPath: string, outDir: string) {
  const solutionFile = await readFile(solutionPath);
  return parseSolution(solutionPath, solutionFile, outDir);
}

export async function getSolutions(solutionDir: string, outDir: string) {
  const solutionPaths = await getSolutionPaths(solutionDir);
  const solutions = await Promise.all(
    solutionPaths.map((solutionPath) => getSolution(solutionPath, outDir)),
  );
  return solutions.sort((a, b) => +a.id - +b.id);
}

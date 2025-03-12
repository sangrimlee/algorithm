import path from 'node:path';

import fg from 'fast-glob';

import type { SolutionMeta } from './get-solution-meta';
import { getSolutionMeta } from './get-solution-meta';

async function getSolution(
  solutionPath: string,
  outDir: string,
): Promise<{ meta: SolutionMeta; relativePath: string }> {
  const meta = await getSolutionMeta(solutionPath);
  const relativePath = path.relative(outDir, solutionPath);
  return {
    meta,
    relativePath,
  };
}

export async function getSolutions(
  solutionDir: string,
  outDir: string,
): Promise<{ meta: SolutionMeta; relativePath: string }[]> {
  const solutionPaths = await fg.glob(path.join(solutionDir, '**/!(*.test).ts'));
  const solutions = await Promise.all(
    solutionPaths.map((solutionPath) => getSolution(solutionPath, outDir)),
  );
  return solutions;
}

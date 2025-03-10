import path from 'node:path';

import fg from 'fast-glob';
import { z } from 'zod';

import { readJsonFile } from '@/utils/fs';

const solutionMetaSchema = z.object({
  id: z.string(),
  title: z.string(),
  url: z.string(),
});

async function getSolution(solutionPath: string, outDir: string) {
  const content = await readJsonFile(path.join(path.dirname(solutionPath), 'meta.json'));
  const meta = solutionMetaSchema.parse(content);
  return {
    ...meta,
    relativePath: path.relative(outDir, solutionPath),
  };
}

export async function getSolutions(solutionDir: string, outDir: string) {
  const solutionPaths = await fg.glob(path.join(solutionDir, '**/!(*.test).ts'));
  const solutions = await Promise.all(
    solutionPaths.map((solutionPath) => getSolution(solutionPath, outDir)),
  );
  return solutions;
}

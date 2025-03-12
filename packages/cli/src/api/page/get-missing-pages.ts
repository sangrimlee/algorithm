import path from 'node:path';

import fg from 'fast-glob';

import type { SolutionMeta } from '@/api/solution';
import { getSolutionMeta } from '@/api/solution';
import { exists, readFile } from '@/utils/fs';

async function isMissingPage(pageDir: string, solutionMeta: SolutionMeta): Promise<boolean> {
  const isExist = await exists(path.join(pageDir, `${solutionMeta.id}.mdx`));
  return !isExist;
}

export async function getMissingPages(
  solutionDir: string,
  outDir: string,
): Promise<{ meta: SolutionMeta; code: string }[]> {
  const solutionPaths = await fg.glob(path.join(solutionDir, '**/!(*.test).ts'));

  const pages = [];
  for (const solutionPath of solutionPaths) {
    const solutionMeta = await getSolutionMeta(solutionPath);
    if (await isMissingPage(outDir, solutionMeta)) {
      const code = await readFile(solutionPath);
      pages.push({ code, meta: solutionMeta });
    }
  }
  return pages;
}

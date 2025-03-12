import path from 'node:path';

import fg from 'fast-glob';

import { exists, readFile, readJsonFile } from '@/utils/fs';

async function getPageMeta(solutionPath: string) {
  const code = await readFile(solutionPath);
  const meta = await readJsonFile(path.join(path.dirname(solutionPath), 'meta.json'));
  const fileName = path.basename(solutionPath, path.extname(solutionPath)).replace(/^0+/, '');
  return {
    code,
    meta,
    fileName,
  };
}

async function isMissingPage(solutionPath: string, outDir: string) {
  const fileName = path.basename(solutionPath, path.extname(solutionPath)).replace(/^0+/, '');
  const isExist = await exists(path.join(outDir, `${fileName}.mdx`));
  return !isExist;
}

export async function getMissingPages(solutionDir: string, outDir: string) {
  const solutionPaths = await fg.glob(path.join(solutionDir, '**/!(*.test).ts'));
  const pages = [];
  for (const solutionPath of solutionPaths) {
    if (await isMissingPage(solutionPath, outDir)) {
      pages.push(await getPageMeta(solutionPath));
    }
  }
  return pages;
}

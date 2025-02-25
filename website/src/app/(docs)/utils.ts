import path from 'node:path';

import { glob } from 'fast-glob';
import { exists, readFile } from '@/utils/fs';

function getStaticParamsFromPath(filePath: string, basePath: string) {
  const relativePath = path.relative(basePath, path.dirname(filePath));
  const fileName = path.basename(filePath, path.extname(filePath));
  if (fileName === 'index') {
    return [...relativePath.split('/')];
  }
  return [...relativePath.split('/'), fileName];
}

export async function generateStaticParamsFor(dirPath: string, key: string) {
  const basePath = path.join('./src/contents', dirPath);
  const mdxFiles = await glob(path.join(basePath, '**/*.mdx'));
  return mdxFiles.map((mdxFile) => ({
    params: {
      [key]: getStaticParamsFromPath(mdxFile, basePath),
    },
  }));
}

export async function readMDXFile(...paths: string[]): Promise<string | null> {
  const basePath = path.join('./src/contents', ...paths);
  const possiblePaths = [path.join(basePath, 'index.mdx'), path.join(basePath) + '.mdx'];
  for (const filePath of possiblePaths) {
    if (await exists(filePath)) {
      return await readFile(filePath);
    }
  }
  return null;
}

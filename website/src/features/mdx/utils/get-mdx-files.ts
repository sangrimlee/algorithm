import path from 'node:path';

import { glob } from 'fast-glob';

export async function getMDXFiles(dirPath: string): Promise<string[]> {
  const mdxFiles = await glob(path.join(dirPath, '*.mdx'));
  return mdxFiles;
}

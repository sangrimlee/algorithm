import path from 'node:path';

import { ProgrammersMetadataSchema } from '@/schemas/programmers';
import { getFileName, readDir } from '@/utils/fs';
import { getMDXFile } from '@/utils/mdx';

export function getProgrammersPageBySlug(slug: string) {
  const filePath = path.join(process.cwd(), './src/contents/solutions/programmers', `${slug}.mdx`);
  return getMDXFile(filePath, ProgrammersMetadataSchema);
}

export async function getProgrammersPageSlugs() {
  const dirPath = path.join(process.cwd(), './src/contents/solutions/programmers');
  const files = await readDir(dirPath, '.mdx');
  return files.map((file) => ({
    slug: getFileName(file),
  }));
}

export async function getProgrammersAllProblems() {
  const slugs = await getProgrammersPageSlugs();
  const problems = await Promise.all(slugs.map(({ slug }) => getProgrammersPageBySlug(slug)));
  return problems
    .filter((problem) => problem !== null)
    .map(({ metadata }) => metadata)
    .sort((a, b) => Number(a.id) - Number(b.id));
}

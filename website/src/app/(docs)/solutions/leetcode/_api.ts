import path from 'node:path';

import { LeetCodeMedataSchema } from '@/schemas/leetcode';
import { getFileName, readDir } from '@/utils/fs';
import { getMDXFile } from '@/utils/mdx';

export function getLeetCodePageBySlug(slug: string) {
  const filePath = path.join(process.cwd(), './src/contents/solutions/leetcode', `${slug}.mdx`);
  return getMDXFile(filePath, LeetCodeMedataSchema);
}

export async function getLeetCodePageSlugs() {
  const dirPath = path.join(process.cwd(), './src/contents/solutions/leetcode');
  const files = await readDir(dirPath, '.mdx');
  return files.map((file) => ({
    slug: getFileName(file),
  }));
}

export async function getLeetCodeAllProblems() {
  const slugs = await getLeetCodePageSlugs();
  const problems = await Promise.all(slugs.map(({ slug }) => getLeetCodePageBySlug(slug)));
  return problems
    .filter((problem) => problem !== null)
    .map(({ metadata }) => metadata)
    .sort((a, b) => Number(a.id) - Number(b.id));
}

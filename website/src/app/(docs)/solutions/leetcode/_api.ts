import path from 'node:path';

import { z } from 'zod';

import { getFileName, readDir } from '@/utils/fs';
import { getMDXFile } from '@/utils/mdx';

const LeetCodeMedata = z.object({
  id: z.string(),
  title: z.string(),
  category: z.string(),
  difficulty: z.enum(['Easy', 'Medium', 'Hard']),
  tags: z.string().array().optional(),
  url: z.string(),
});

export function getLeetCodePageBySlug(slug: string) {
  const filePath = path.join(process.cwd(), './src/contents/solutions/leetcode', `${slug}.mdx`);
  return getMDXFile(filePath, LeetCodeMedata);
}

export async function getLeetCodePageSlugs() {
  const dirPath = path.join(process.cwd(), './src/contents/solutions/leetcode');
  const files = await readDir(dirPath, '.mdx');
  return files.map((file) => ({
    slug: getFileName(file),
  }));
}

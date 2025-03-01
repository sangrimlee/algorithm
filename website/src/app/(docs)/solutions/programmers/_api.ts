import path from 'node:path';

import { z } from 'zod';

import { getFileName, readDir } from '@/utils/fs';
import { getMDXFile } from '@/utils/mdx';

const ProgrammersMetadata = z.object({
  id: z.string(),
  title: z.string(),
  level: z.number().min(1).max(5),
  url: z.string(),
});

export function getProgrammersPageBySlug(slug: string) {
  const filePath = path.join(process.cwd(), './src/contents/solutions/programmers', `${slug}.mdx`);
  return getMDXFile(filePath, ProgrammersMetadata);
}

export async function getProgrammersPageSlugs() {
  const dirPath = path.join(process.cwd(), './src/contents/solutions/programmers');
  const files = await readDir(dirPath, '.mdx');
  return files.map((file) => ({
    slug: getFileName(file),
  }));
}

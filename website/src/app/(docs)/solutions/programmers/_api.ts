import path from 'node:path';

import { z } from 'zod';

import { getMDXFile } from '@/features/mdx';
import { getFileName, readDir } from '@/utils/fs';

const ProgrammersMetadata = z.object({
  id: z.string(),
  title: z.string(),
  level: z.number().min(1).max(5),
  url: z.string(),
});

export async function getProgrammersPageBySlug(slug: string) {
  const filePath = path.join(process.cwd(), './src/contents/solutions/programmers', `${slug}.mdx`);
  const docPage = await getMDXFile(filePath, ProgrammersMetadata);
  return docPage;
}

export async function getProgrammersPageSlugs() {
  const dirPath = path.join(process.cwd(), './src/contents/solutions/programmers');
  const files = await readDir(dirPath, '.mdx');
  return files.map((file) => ({
    slug: getFileName(file),
  }));
}

import path from 'node:path';

import { z } from 'zod';

import { getFileName, readDir } from '@/utils/fs';
import { getMDXFile } from '@/utils/mdx';

const DocMetadata = z.object({
  title: z.string(),
  tags: z.string().array().optional(),
});

export function getDocPageBySlug(slug: string) {
  const filePath = path.join(process.cwd(), './src/contents/docs', `${slug}.mdx`);
  return getMDXFile(filePath, DocMetadata);
}

export async function getDocPageSlugs() {
  const dirPath = path.join(process.cwd(), './src/contents/docs');
  const files = await readDir(dirPath, '.mdx');
  return files.map((file) => ({
    slug: getFileName(file),
  }));
}

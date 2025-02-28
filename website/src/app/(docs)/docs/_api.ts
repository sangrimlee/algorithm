import path from 'node:path';

import { z } from 'zod';

import { getMDXFile } from '@/features/mdx';
import { getFileName, readDir } from '@/utils/fs';

const DocMetadata = z.object({
  title: z.string(),
  tags: z.string().array().optional(),
});

export async function getDocPageBySlug(slug: string) {
  const filePath = path.join(process.cwd(), './src/contents/docs', `${slug}.mdx`);
  const docPage = await getMDXFile(filePath, DocMetadata);
  return docPage;
}

export async function getDocPageSlugs() {
  const dirPath = path.join(process.cwd(), './src/contents/docs');
  const files = await readDir(dirPath, '.mdx');
  return files.map((file) => ({
    slug: getFileName(file),
  }));
}

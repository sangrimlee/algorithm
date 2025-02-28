import type { z } from 'zod';

import { exists, readFile } from '@/utils/fs';
import matter from 'gray-matter';

export async function getMDXFile<T>(
  filePath: string,
  schema: z.Schema<T>,
): Promise<{ content: string; metadata: T } | null> {
  const isExist = await exists(filePath);
  if (!isExist) {
    return null;
  }
  const mdxSource = await readFile(filePath);
  const { content, data } = matter(mdxSource);
  const metadata = await schema.parseAsync(data);
  return { content, metadata };
}

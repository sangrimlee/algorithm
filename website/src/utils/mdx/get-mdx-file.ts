import matter from 'gray-matter';
import type { z } from 'zod';

import { exists, readFile } from '../fs';

export async function getMDXFile<T>(
  filePath: string,
  schema: z.Schema<T>,
): Promise<{ source: string; metadata: T } | null> {
  const isExist = await exists(filePath);
  if (!isExist) {
    return null;
  }
  const mdxSource = await readFile(filePath);
  const { content: source, data } = matter(mdxSource);
  const metadata = await schema.parseAsync(data);
  return { source, metadata };
}

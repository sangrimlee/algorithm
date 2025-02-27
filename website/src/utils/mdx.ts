import matter from 'gray-matter';
import type { z } from 'zod';

import { readFile } from './fs';

export async function readMDXFile<T>(
  filePath: string,
  schema: z.Schema<T>,
): Promise<{ content: string; metadata: T }> {
  const fileContent = await readFile(filePath);
  const { content, data } = matter(fileContent);
  const metadata = await schema.parseAsync(data);
  return { content, metadata };
}

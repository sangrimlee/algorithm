import matter from 'gray-matter';
import type { Schema } from 'zod';

export function parseMDXMetadata<T>(
  mdxSource: string,
  schema: Schema<T>,
): { content: string; metadata: T } {
  const { content, data } = matter(mdxSource);
  const metadata = schema.parse(data);
  return { content, metadata };
}

import matter from 'gray-matter';
import type { Schema } from 'zod';

export function parseMDXMetadata<T>(
  mdxSource: string,
  schema: Schema<T>,
): { source: string; metadata: T } {
  const { content: source, data } = matter(mdxSource);
  const metadata = schema.parse(data);
  return { source, metadata };
}

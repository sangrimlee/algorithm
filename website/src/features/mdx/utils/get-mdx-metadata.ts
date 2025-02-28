import path from 'node:path';

import type { Schema } from 'zod';

import { exists, readFile } from '@/utils/fs';
import { parseMDXMetadata } from './parse-mdx-metadata';

export async function getMDXMetadata<T>(dirPath: string, fileName: string, schema: Schema<T>) {
  const filePath = path.join(dirPath, `${fileName}.mdx`);
  const isExist = await exists(filePath);
  if (!isExist) {
    return null;
  }
  const mdxSource = await readFile(filePath);
  const { metadata } = parseMDXMetadata(mdxSource, schema);
  return {
    metadata,
  };
}

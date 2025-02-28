import path from 'node:path';

import type { Schema } from 'zod';

import { exists, readFile } from '@/utils/fs';
import { parseMDXMetadata } from './parse-mdx-metadata';
import { compileMDX } from './compile-mdx';

export async function getMDXFile<T>(dirPath: string, fileName: string, schema: Schema<T>) {
  const filePath = path.join(dirPath, `${fileName}.mdx`);
  const isExist = await exists(filePath);
  if (!isExist) {
    return null;
  }
  const mdxSource = await readFile(filePath);
  const { source, metadata } = parseMDXMetadata(mdxSource, schema);
  const { content } = await compileMDX(source);
  return {
    content,
    metadata,
  };
}

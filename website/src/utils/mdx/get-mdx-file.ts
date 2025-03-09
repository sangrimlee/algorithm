import matter from 'gray-matter';
import type { z } from 'zod';

import { exists, readFile } from '../fs';
import { getGithubIssueLink, getGithubLink } from '../github';

type MDXFileMetadta<T extends { title: string }> = T & {
  githubLink: string;
  githubIssueLink: string;
};

export async function getMDXFile<T extends { title: string }>(
  filePath: string,
  schema: z.Schema<T>,
): Promise<{ source: string; metadata: MDXFileMetadta<T> } | null> {
  const isExist = await exists(filePath);
  if (!isExist) {
    return null;
  }
  const mdxSource = await readFile(filePath);
  const { content: source, data } = matter(mdxSource);
  const metadata = await schema.parseAsync(data);
  return {
    source,
    metadata: {
      ...metadata,
      githubLink: getGithubLink(filePath),
      githubIssueLink: getGithubIssueLink(metadata.title),
    },
  };
}

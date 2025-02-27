import { z } from 'zod';

import { MDX } from '@/components/mdx';
import { getFileName } from '@/utils/fs';
import { getMDXFiles, readMDXFileBySlug } from '@/utils/mdx';

const DOCS_PATH = './src/contents/docs';

const DocsMeta = z.object({
  title: z.string(),
  tags: z.string().array().optional(),
});

interface PageParams {
  slug: string;
}

export async function generateStaticParams(): Promise<PageParams[]> {
  const mdxFiles = await getMDXFiles(DOCS_PATH);
  return mdxFiles.map((mdxFile) => ({
    slug: getFileName(mdxFile),
  }));
}

interface PageProps {
  params: Promise<PageParams>;
}

export default async function LeetCodePage({ params }: PageProps) {
  const { slug } = await params;
  const { content, metadata } = await readMDXFileBySlug(DOCS_PATH, slug, DocsMeta);

  return (
    <div>
      <h1>{metadata.title}</h1>
      <MDX content={content} />
    </div>
  );
}

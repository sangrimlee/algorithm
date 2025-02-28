import { notFound } from 'next/navigation';

import { z } from 'zod';

import { getMDXFile, getMDXFiles } from '@/features/mdx';
import { getFileName } from '@/utils/fs';

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
  const mdx = await getMDXFile(DOCS_PATH, slug, DocsMeta);
  if (!mdx) {
    notFound();
  }
  const { content, metadata } = mdx;

  return (
    <div>
      <h1>{metadata.title}</h1>
      <div className="markdown">{content}</div>
    </div>
  );
}

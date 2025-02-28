import { z } from 'zod';

import { getFileName } from '@/utils/fs';
import { getMDXFile, getMDXFiles } from '@/features/mdx';
import { notFound } from 'next/navigation';

const PROGRAMMERS_PATH = './src/contents/solutions/programmers';

const ProgrammersMetadata = z.object({
  id: z.string(),
  title: z.string(),
  level: z.number().min(1).max(5),
  url: z.string(),
});

interface PageParams {
  slug: string;
}

export async function generateStaticParams(): Promise<PageParams[]> {
  const mdxFiles = await getMDXFiles(PROGRAMMERS_PATH);
  return mdxFiles.map((mdxFile) => ({
    slug: getFileName(mdxFile),
  }));
}

interface PageProps {
  params: Promise<PageParams>;
}

export default async function LeetCodePage({ params }: PageProps) {
  const { slug } = await params;
  const mdx = await getMDXFile(PROGRAMMERS_PATH, slug, ProgrammersMetadata);
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

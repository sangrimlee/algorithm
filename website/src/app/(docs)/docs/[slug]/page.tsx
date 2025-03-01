import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { compileMDX } from '@/utils/mdx';
import { getDocPageBySlug, getDocPageSlugs } from '../_api';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = getDocPageSlugs;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const docPage = await getDocPageBySlug(slug);
  if (!docPage) {
    notFound();
  }

  const { metadata } = docPage;
  return {
    title: metadata.title,
    keywords: metadata.tags,
    openGraph: {
      title: metadata.title,
      type: 'article',
      url: `/docs/${slug}`,
    },
  } satisfies Metadata;
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const docPage = await getDocPageBySlug(slug);
  if (!docPage) {
    notFound();
  }

  const { source, metadata } = docPage;
  const { content } = await compileMDX(source);

  return (
    <div>
      <h1>{metadata.title}</h1>
      <div className="markdown">{content}</div>
    </div>
  );
}

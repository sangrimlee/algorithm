import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import * as Breadcrumb from '@/components/ui/breadcrumb';
import { compileMDX } from '@/utils/mdx';
import { getProgrammersPageBySlug, getProgrammersPageSlugs } from '../_api';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = getProgrammersPageSlugs;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const programmersPage = await getProgrammersPageBySlug(slug);
  if (!programmersPage) {
    notFound();
  }

  const { metadata } = programmersPage;
  return {
    title: metadata.title,
    openGraph: {
      title: metadata.title,
      type: 'article',
      url: `/solutions/leetcode/${slug}`,
    },
  } satisfies Metadata;
}

export default async function ProgrammersPage({ params }: PageProps) {
  const { slug } = await params;

  const programmersPage = await getProgrammersPageBySlug(slug);
  if (!programmersPage) {
    notFound();
  }

  const { source, metadata } = programmersPage;
  const { content } = await compileMDX(source);
  return (
    <>
      <article className="px-inset min-h-(--content-height) w-full pt-4 pb-8 lg:px-12">
        <Breadcrumb.Root className="mt-2">
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/solutions/programmers">Programmers</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Page>{metadata.title}</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
        <div className="mt-4 mb-8">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-12">{metadata.title}</h1>
        </div>
        <div className="markdown">{content}</div>
      </article>
    </>
  );
}

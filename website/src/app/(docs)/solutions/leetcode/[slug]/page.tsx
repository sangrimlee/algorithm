import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import * as Breadcrumb from '@/components/ui/breadcrumb';
import { TableOfContents } from '@/components/table-of-contents';
import { compileMDX } from '@/utils/mdx';
import { getLeetCodePageBySlug, getLeetCodePageSlugs } from '../_api';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = getLeetCodePageSlugs;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const leetCodePage = await getLeetCodePageBySlug(slug);
  if (!leetCodePage) {
    notFound();
  }

  const { metadata } = leetCodePage;
  return {
    title: metadata.title,
    keywords: metadata.tags,
    openGraph: {
      title: metadata.title,
      type: 'article',
      url: `/solutions/leetcode/${slug}`,
    },
  } satisfies Metadata;
}

export default async function LeetCodePage({ params }: PageProps) {
  const { slug } = await params;

  const leetCodePage = await getLeetCodePageBySlug(slug);
  if (!leetCodePage) {
    notFound();
  }

  const { source, metadata } = leetCodePage;
  const { content, tableOfContents } = await compileMDX(source);
  return (
    <>
      <article className="min-h-(--content-height) w-full min-w-0 pt-4 pb-8">
        <Breadcrumb.Root className="mt-2">
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/solutions/leetcode">LeetCode</Breadcrumb.Link>
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
        <div className="markdown" data-docs="true">
          {content}
        </div>
      </article>
      <TableOfContents
        tableOfContents={tableOfContents}
        githubLink={metadata.githubLink}
        githubIssueLink={metadata.githubIssueLink}
      />
    </>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import * as Breadcrumb from '@/components/ui/breadcrumb';
import { compileMDX } from '@/utils/mdx';
import { getProgrammersPageBySlug, getProgrammersPageSlugs } from '../_api';
import { TableOfContents } from '@/components/table-of-contents';
import { ProblemLink } from '@/components/problem-link';

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
  const { content, tableOfContents } = await compileMDX(source);
  return (
    <>
      <article className="min-h-(--content-height) w-full min-w-0 pt-4 pb-16">
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
        <div className="mt-12 border-t pt-6">
          <ProblemLink site="programmers" title={metadata.title} href={metadata.url} />
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

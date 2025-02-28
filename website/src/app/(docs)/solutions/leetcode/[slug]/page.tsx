import { z } from 'zod';

import * as Breadcrumb from '@/components/ui/breadcrumb';
import { MDX } from '@/components/mdx';
import { getFileName } from '@/utils/fs';
import { getMDXFiles, readMDXFileBySlug } from '@/utils/mdx';

const LEETCODE_PATH = './src/contents/solutions/leetcode';

const LeetCodeMedata = z.object({
  id: z.string(),
  title: z.string(),
  category: z.string(),
  difficulty: z.enum(['Easy', 'Medium', 'Hard']),
  tags: z.string().array().optional(),
  url: z.string(),
});

interface PageParams {
  slug: string;
}

export async function generateStaticParams(): Promise<PageParams[]> {
  const mdxFiles = await getMDXFiles(LEETCODE_PATH);
  return mdxFiles.map((mdxFile) => ({
    slug: getFileName(mdxFile),
  }));
}

interface PageProps {
  params: Promise<PageParams>;
}

export default async function LeetCodePage({ params }: PageProps) {
  const { slug } = await params;
  const { content, metadata } = await readMDXFileBySlug(LEETCODE_PATH, slug, LeetCodeMedata);

  return (
    <>
      <article className="px-inset min-h-(--content-height) w-full pt-4 pb-8 lg:px-12">
        <Breadcrumb.Root className="mt-2">
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/solutions">Solutions</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
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
        <MDX content={content} />
      </article>
    </>
  );
}

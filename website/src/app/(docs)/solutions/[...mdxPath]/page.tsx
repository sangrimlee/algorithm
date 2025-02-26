import { notFound } from 'next/navigation';
import { generateStaticParamsFor, readMDXFile } from '../../utils';
import { MDX } from '@/components/mdx';

export const dynamic = 'force-static';

interface PageProps {
  params: Promise<{
    mdxPath: string[];
  }>;
}

export const generateStaticParams = generateStaticParamsFor('solutions', 'mdxPath');

export default async function Page({ params }: PageProps) {
  const { mdxPath } = await params;
  const content = await readMDXFile('solutions', ...mdxPath);
  if (!content) {
    notFound();
  }
  return (
    <>
      <MDX content={content} />
    </>
  );
}

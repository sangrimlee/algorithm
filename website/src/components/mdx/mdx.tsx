import type { MDXRemoteProps } from 'next-mdx-remote/rsc';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { mdxComponents } from './mdx-components';

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
    format: 'mdx',
  },
} satisfies MDXRemoteProps['options'];

interface MDXProps {
  content: string;
}

export function MDX({ content }: MDXProps) {
  return (
    <div className="markdown">
      <MDXRemote source={content} components={mdxComponents} options={mdxOptions} />
    </div>
  );
}

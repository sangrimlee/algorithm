import type { MDXComponents } from 'mdx/types';

import { mdxComponents } from './mdx-components';
import { compileMDX } from '../utils/compile-mdx';

export interface MDXProps {
  content: string;
  components?: MDXComponents;
}

export async function MDX({ content, components = {} }: MDXProps) {
  const MDXContent = await compileMDX(content);

  return (
    <div className="markdown">
      <MDXContent components={{ ...mdxComponents, ...components }} />
    </div>
  );
}

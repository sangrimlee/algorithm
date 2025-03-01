import NextImage from 'next/image';

import type { MDXComponents } from 'mdx/types';

import { Anchor } from './anchor';
import { CodeBlock, CodeBlockPre } from './code-block';
import { H2, H3, H4, H5, H6 } from './heading';

export const mdxComponents: MDXComponents = {
  Image: NextImage,
  a: Anchor,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,

  // CodeBlock
  figure: CodeBlock,
  pre: CodeBlockPre,
};

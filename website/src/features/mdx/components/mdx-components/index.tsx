import NextImage from 'next/image';

import type { MDXProps } from 'mdx/types';

import { Anchor } from './anchor';
import { Heading } from './heading';
import { CodeBlock, CodeBlockPre } from './code-block';

export const mdxComponents: MDXProps['components'] = {
  Image: NextImage,
  a: Anchor,
  h2: (props) => <Heading tag="h2" {...props} />,
  h3: (props) => <Heading tag="h3" {...props} />,
  h4: (props) => <Heading tag="h4" {...props} />,

  // CodeBlock
  figure: CodeBlock,
  pre: CodeBlockPre,
};

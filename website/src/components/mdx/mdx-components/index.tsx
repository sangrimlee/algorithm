import NextImage from 'next/image';

import type { MDXComponents } from 'mdx/types';
import { Anchor } from './anchor';
import { Heading } from './heading';

export const mdxComponents: MDXComponents = {
  Image: NextImage,
  a: Anchor,
  h2: (props) => <Heading tag="h2" {...props} />,
  h3: (props) => <Heading tag="h3" {...props} />,
  h4: (props) => <Heading tag="h4" {...props} />,
  h5: (props) => <Heading tag="h5" {...props} />,
  h6: (props) => <Heading tag="h6" {...props} />,
};

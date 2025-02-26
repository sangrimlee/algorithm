import NextImage from 'next/image';

import type { MDXComponents } from 'mdx/types';
import { Anchor } from './anchor';

export const mdxComponents: MDXComponents = {
  Image: NextImage,
  a: Anchor,
};

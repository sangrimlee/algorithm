import type { MDXRemoteProps } from 'next-mdx-remote/rsc';
import { MDXRemote } from 'next-mdx-remote/rsc';

import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeSlug from 'rehype-slug';
import rehypeKatex from 'rehype-katex';
import { rehypePrettyCode } from 'rehype-pretty-code';
import type { Options as RehypePrettyCodeOptions } from 'rehype-pretty-code';
import { getSingletonHighlighter } from 'shiki';

import { mdxComponents } from './mdx-components';

const rehypePrettyCodeOptions = {
  grid: true,
  keepBackground: false,
  bypassInlineCode: true,
  defaultLang: 'plaintext',
  theme: {
    dark: 'github-dark',
    light: 'github-light',
  },
  onVisitTitle: (element) => {
    element.tagName = 'div';
    element.properties = {
      class: 'code-block__header',
      'data-language': element.properties['data-language'],
    };
  },
  onVisitCaption: (element) => {
    element.tagName = 'div';
    element.properties = {
      class: 'code-block__footer',
    };
  },
  getHighlighter: (options) => {
    return getSingletonHighlighter(options);
  },
} satisfies RehypePrettyCodeOptions;

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeSlug, rehypeKatex, [rehypePrettyCode, rehypePrettyCodeOptions]],
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

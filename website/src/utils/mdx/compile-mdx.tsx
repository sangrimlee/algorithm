import * as runtime from 'react/jsx-runtime';

import { compile, run } from '@mdx-js/mdx';
import type { MDXComponents } from 'mdx/types';

import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import type { TocEntry } from '@stefanprobst/rehype-extract-toc';
import rehypeExtractToc from '@stefanprobst/rehype-extract-toc';
import rehypeExtractTocMdx from '@stefanprobst/rehype-extract-toc/mdx';
import { rehypePrettyCode } from 'rehype-pretty-code';
import type { Options as RehypePrettyCodeOptions } from 'rehype-pretty-code';
import { getSingletonHighlighter } from 'shiki';

import { mdxComponents } from '@/components/mdx';

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

export async function compileMDX(mdxSource: string, components?: MDXComponents) {
  const code = String(
    await compile(mdxSource, {
      outputFormat: 'function-body',
      remarkPlugins: [remarkGfm, remarkMath],
      rehypePlugins: [
        rehypeSlug,
        rehypeKatex,
        rehypeExtractToc,
        [rehypeExtractTocMdx, { name: 'toc' }],
        [rehypePrettyCode, rehypePrettyCodeOptions],
      ],
    }),
  );

  const { default: MDXContent, toc } = await run(code, {
    ...runtime,
    baseUrl: import.meta.url,
  });
  const tableOfContents = (toc as TocEntry[]).filter((entry) => entry.id !== 'footnote-label');
  return {
    content: <MDXContent components={{ ...mdxComponents, ...components }} />,
    tableOfContents,
  };
}

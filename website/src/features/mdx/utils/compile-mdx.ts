import * as runtime from 'react/jsx-runtime';

import { compile, run } from '@mdx-js/mdx';

import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { rehypePrettyCode } from 'rehype-pretty-code';
import type { Options as RehypePrettyCodeOptions } from 'rehype-pretty-code';
import { getSingletonHighlighter } from 'shiki';

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

export async function compileMDX(mdxSource: string) {
  const code = String(
    await compile(mdxSource, {
      outputFormat: 'function-body',
      remarkPlugins: [remarkGfm, remarkMath],
      rehypePlugins: [rehypeKatex, [rehypePrettyCode, rehypePrettyCodeOptions]],
    }),
  );

  const { default: MDXContent } = await run(code, {
    ...runtime,
    baseUrl: import.meta.url,
  });

  return MDXContent;
}

import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { Tabs } from 'nextra/components';
import { useRouter } from 'next/router';

import { Footer } from './components';
import { Logo } from './components/logos';
import { Badges, LevelBadge, TopicBadge, ProblemLink } from './components/mdx-components';
import { env } from './env.mjs';

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/sangrimlee/algorithm/',
  },
  docsRepositoryBase: 'https://github.com/sangrimlee/algorithm/tree/main/website',
  logo: <Logo />,
  head: function useHead() {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();

    const baseURL = new URL(env.NEXT_PUBLIC_URL);
    const domain = baseURL.hostname;
    const ogImage = new URL('/images/og.png', baseURL).href;
    const url = new URL(asPath, baseURL).href;
    const title = frontMatter.title ? `${frontMatter.title} | Algorithm` : 'Algorithm';
    const description =
      frontMatter.description ??
      'LeetCode와 Programmers의 문제들을 TypeScript를 사용한 문제 풀이 저장소';

    const tags = [
      '알고리즘',
      '코딩테스트',
      'LeetCode',
      'Programmers',
      'TypeScript',
      ...(frontMatter.tags || []),
    ];

    return (
      <>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="author" content="sangrimlee" />
        <meta name="description" content={description} />
        <meta name="keywords" content={tags.join(', ')} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Algorithm" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:url" content={url} />

        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site:domain" content={domain} />
        <meta name="twitter:url" content={url} />

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </>
    );
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: false,
  },
  footer: {
    content: <Footer />,
  },
  search: {
    placeholder: '검색',
  },
  components: {
    Badges,
    LevelBadge,
    TopicBadge,
    ProblemLink,
    Tabs,
  },
};

export default config;

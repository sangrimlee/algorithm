import { DocsThemeConfig, useConfig, Tab, Tabs } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

import { Footer, Logo } from './components';
import { Badges, LevelBadge, TopicBadge, ProblemLink } from './components/mdx-components';

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/sangrimlee/algorithm/',
  },
  docsRepositoryBase: 'https://github.com/sangrimlee/algorithm/tree/main/website',
  useNextSeoProps() {
    const { asPath } = useRouter();

    if (asPath !== '/') {
      return {
        titleTemplate: '%s | Algorithm',
      };
    }
    return {
      titleTemplate: '%s',
    };
  },
  logo: <Logo className="nx-mt-1" />,
  head: function useHead() {
    const { asPath } = useRouter();
    const { title, frontMatter } = useConfig();

    const baseURL = new URL(process.env.NEXT_PUBLIC_URL);
    const domain = baseURL.hostname;
    const ogImage = new URL('/images/og.png', baseURL).href;
    const url = new URL(asPath, baseURL).href;
    const description = 'TypeScript로 작성한 LeetCode와 Programmers의 문제 풀이 입니다.';

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="author" content="sangrimlee" />
        <meta name="description" content={description} />
        <meta name="keywords" content={tags.join(', ')} />

        <meta name="og:title" content={title ? title + ' |  Algorithm' : 'Algorithm'} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={ogImage} />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="960" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Algorithm" />
        <meta property="og:locale" content="ko_KR"></meta>

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
    text: <Footer />,
  },
  search: {
    placeholder: 'Search',
  },
  components: {
    Badges,
    LevelBadge,
    TopicBadge,
    ProblemLink,
    Tab,
    Tabs,
  },
};

export default config;

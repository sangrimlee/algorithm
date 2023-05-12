import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

import { Footer, Logo } from './components';
import { LevelBadge, TopicBadges } from './components/mdx-components';

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
  },
  logo: <Logo className="nx-mt-1" />,
  head: function useHead() {
    const { title } = useConfig();
    const url = process.env.NEXT_PUBLIC_URL;
    const domain = url.replace(/^https?:\/\//, '');
    const ogImage = url + '/images/og.jpeg';
    const description = '';

    return (
      <>
        <meta name="theme-color" content="#fff" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site:domain" content={domain} />
        <meta name="twitter:url" content={url} />
        <meta name="og:title" content={title ? title + ' |  Algorithm' : 'Algorithm'} />
        <meta name="og:image" content={ogImage} />
        <meta name="apple-mobile-web-app-title" content="Algorithm" />

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
    LevelBadge,
    TopicBadges,
  },
};

export default config;

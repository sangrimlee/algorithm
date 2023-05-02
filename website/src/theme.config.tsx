import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
  logo: <span className="nx-font-bold nx-text-xl">Algorithm</span>,
  project: {
    link: 'https://github.com/sangrimlee/algorithm/',
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - Algorithm',
      };
    }
  },
};

export default config;

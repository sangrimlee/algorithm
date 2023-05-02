import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import { Logo } from './components/Logo';

const config: DocsThemeConfig = {
  logo: <Logo />,
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

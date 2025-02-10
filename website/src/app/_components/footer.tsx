import { Footer as NextraFooter } from 'nextra-theme-docs';

import { Logo } from '@/components/logo';

export const Footer = () => {
  return (
    <NextraFooter>
      <div>
        <div className="mb-4">
          <Logo />
        </div>
        <div className="font-mono text-sm font-medium">
          © {new Date().getFullYear()} Algorithm, All rights reserved.
        </div>
      </div>
    </NextraFooter>
  );
};

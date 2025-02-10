import Link from 'next/link';
import { GitHubIcon } from 'nextra/icons';
import { Footer as NextraFooter } from 'nextra-theme-docs';

import { BlueSkyLogo, Logo, XLogo } from '@/components/logo';

export const Footer = () => {
  return (
    <NextraFooter>
      <div className="flex w-full flex-col items-center sm:items-start">
        <Link href="/">
          <Logo />
        </Link>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            target="_blank"
            rel="noreferrer noopener nofollow"
            href="https://github.com/sangrimlee/algorithm"
            aria-label="Github Profile"
            className="transition-colors hover:text-gray-800 dark:hover:text-gray-200"
          >
            <GitHubIcon className="size-4" />
          </a>
          <hr className="block h-5 w-px border-0 bg-gray-200 dark:bg-gray-800" />
          <a
            target="_blank"
            rel="noreferrer noopener nofollow"
            href="https://x.com/sangrim_dev"
            aria-label="X Profile"
            className="transition-colors hover:text-gray-800 dark:hover:text-gray-200"
          >
            <XLogo className="size-4" />
          </a>
          <hr className="block h-5 w-px border-0 bg-gray-200 dark:bg-gray-800" />
          <a
            target="_blank"
            rel="noreferrer noopener nofollow"
            href="https://bsky.app/profile/sangrim.dev"
            aria-label="Blue Sky Profile"
            className="transition-colors hover:text-gray-800 dark:hover:text-gray-200"
          >
            <BlueSkyLogo className="size-4" />
          </a>
        </div>
        <div className="mt-8">
          <div className="text-sm font-medium">
            © {new Date().getFullYear()} Algorithm Project, All rights reserved.
          </div>
        </div>
      </div>
    </NextraFooter>
  );
};

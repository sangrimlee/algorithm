import Link from 'next/link';
import { BlueSkyLogo, GithubLogo, Logo, XLogo } from '@/components/logo';

export const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-6 bg-gray-2 py-10 text-gray-11">
      <div className="container flex flex-col items-center sm:items-start">
        <Link href="/">
          <Logo />
        </Link>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            target="_blank"
            rel="noreferrer noopener nofollow"
            href="https://github.com/sangrimlee/algorithm"
            aria-label="Github Profile"
            className="transition-colors hover:text-gray-12"
          >
            <GithubLogo className="size-4.5" />
          </a>
          <hr className="block h-5 border-t-0 border-r" />
          <a
            target="_blank"
            rel="noreferrer noopener nofollow"
            href="https://x.com/sangrim_dev"
            aria-label="X Profile"
            className="transition-colors hover:text-gray-12"
          >
            <XLogo className="size-4" />
          </a>
          <hr className="block h-5 border-t-0 border-r" />
          <a
            target="_blank"
            rel="noreferrer noopener nofollow"
            href="https://bsky.app/profile/sangrim.dev"
            aria-label="Blue Sky Profile"
            className="transition-colors hover:text-gray-12"
          >
            <BlueSkyLogo className="size-4" />
          </a>
        </div>
        <div className="mt-6">
          <div className="text-xs font-medium">
            © {new Date().getFullYear()} Algorithm Project, All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

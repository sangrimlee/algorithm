import { cx } from '@/utils/cx';

import { LeetCodeLogo, ProgrammersLogo } from './logo';

const SITES = {
  leetcode: {
    name: 'LeetCode',
    logo: LeetCodeLogo,
    className: 'h-6 w-25',
  },
  programmers: {
    name: 'Programmers',
    logo: ProgrammersLogo,
    className: 'h-4 w-30',
  },
} as const;

interface ProblemLinkProps {
  href: string;
  title: string;
  site: keyof typeof SITES;
}

export const ProblemLink = ({ href, title, site }: ProblemLinkProps) => {
  const { name, className, logo: Logo } = SITES[site];

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noreferrer noopener"
      className="flex min-h-30 w-full overflow-hidden rounded-lg border transition-colors hover:bg-gray-3"
      aria-label={`${name}에서 보기`}
    >
      <div className="hidden w-48 items-center justify-center border-r bg-gray-2 sm:flex">
        <Logo className={className} />
      </div>
      <div className="flex flex-1 items-center px-6">
        <div>
          <div className="mb-2 inline-flex items-center text-sm font-medium sm:hidden">
            <Logo iconOnly className="mr-1.5 size-3" />
            <span>{name}</span>
          </div>
          <div className={cx('line-clamp-1 text-base font-semibold', 'sm:line-clamp-2')}>
            {title}
          </div>
          <div className="mt-1 text-sm text-gray-11">{href}</div>
        </div>
      </div>
    </a>
  );
};

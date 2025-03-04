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
      className={cx(
        'flex w-full overflow-hidden rounded-lg border bg-gray-1 transition-colors sm:min-h-30',
        'hover:border-gray-8 hover:bg-gray-2',
      )}
      aria-label={`${name}에서 보기`}
    >
      <div className="hidden w-45 shrink-0 items-center justify-center border-r bg-gray-3 sm:flex">
        <Logo className={className} />
      </div>
      <div className="flex flex-1 flex-col justify-center p-4 sm:p-6">
        <div className="mb-2 flex items-center text-xs font-medium sm:hidden">
          <Logo iconOnly className="mr-1.5 size-3" />
          <span>{name}</span>
        </div>
        <div className="line-clamp-2 text-base font-semibold">{title}</div>
        <div className="mt-1 text-xs break-all text-gray-11">{href}</div>
      </div>
    </a>
  );
};

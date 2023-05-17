import clsx from 'clsx';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

import { LeetCodeLogo, ProgrammersLogo } from '../logos';

const codingSites = {
  leetcode: {
    Logo: LeetCodeLogo,
    logoClassName: 'h-6 w-[6.25rem]',
    bgClassName: 'bg-gray-100 dark:bg-gray-900',
  },
  programmers: {
    Logo: ProgrammersLogo,
    logoClassName: 'h-4 w-[7.5rem]',
    bgClassName: 'bg-[#1E2A3C]',
  },
};

interface ProblemLinkProps {
  href: string;
  title: string;
  codingSite: keyof typeof codingSites;
}

export const ProblemLink = ({ href, title, codingSite }: ProblemLinkProps) => {
  const { Logo, logoClassName, bgClassName } = codingSites[codingSite];

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noreferrer"
      className={clsx(
        'group mt-10 flex w-full justify-start overflow-hidden rounded-lg border',
        'border-gray-200 dark:border-gray-800',
      )}
    >
      <div className={clsx('flex h-28 w-44 items-center justify-center', bgClassName)}>
        <Logo className={logoClassName} />
      </div>
      <div className="flex flex-1 flex-col justify-center px-6 py-4">
        <strong className="line-clamp-2 text-base">{title}</strong>
        <div
          className={clsx(
            'mt-2.5 flex items-center text-sm font-medium',
            'text-blue-600 dark:text-blue-400',
          )}
        >
          문제 풀러가기
          <ArrowRightIcon
            className={clsx('ml-1 h-3.5 w-3.5', 'transition-transform group-hover:translate-x-1')}
          />
        </div>
      </div>
    </a>
  );
};

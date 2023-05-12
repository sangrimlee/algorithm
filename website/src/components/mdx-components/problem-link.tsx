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
        'flex w-full rounded-lg border justify-start mt-10 overflow-hidden group',
        'border-gray-200 dark:border-gray-800',
      )}
    >
      <div className={clsx('w-44 h-28 flex items-center justify-center', bgClassName)}>
        <Logo className={logoClassName} />
      </div>
      <div className="flex-1 px-6 flex justify-center flex-col">
        <strong className="text-lg">{title}</strong>
        <div
          className={clsx(
            'flex items-center mt-2.5 font-medium',
            'text-blue-600 dark:text-blue-400',
          )}
        >
          문제 풀러가기
          <ArrowRightIcon
            className={clsx('ml-1 h-4 w-4', 'transition-transform group-hover:translate-x-1')}
          />
        </div>
      </div>
    </a>
  );
};

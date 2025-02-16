import { cx } from '@/utils/cx';

import { LeetCodeLogo, ProgrammersLogo } from '../logo';
import { LinkArrowIcon } from 'nextra/icons';

interface ProblemLinkProps {
  href: string;
  title: string;
  codingSite: 'leetcode' | 'programmers';
}

export const ProblemLink = ({ href, title, codingSite }: ProblemLinkProps) => {
  const CodingSiteLogo = codingSite === 'leetcode' ? LeetCodeLogo : ProgrammersLogo;

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noreferrer"
      className={cx(
        'my-10 flex h-32 w-full overflow-hidden rounded-md border border-neutral-300 transition-colors',
        'hover:bg-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-800',
      )}
    >
      <div
        className={cx(
          'hidden w-48 items-center justify-center border-r border-neutral-300',
          'sm:flex dark:border-neutral-700',
          codingSite === 'leetcode' ? 'bg-neutral-100 dark:bg-neutral-900' : 'bg-[#1E2A3C]',
        )}
      >
        <CodingSiteLogo className={cx(codingSite === 'leetcode' ? 'h-6 w-25' : 'h-4 w-30')} />
      </div>
      <div className="flex flex-1 items-center px-6">
        <div>
          <p className="line-clamp-2 text-base font-semibold">{title}</p>
          <p
            className={cx(
              'mt-2 inline-flex items-center text-sm font-medium',
              'text-blue-600 dark:text-blue-400',
            )}
          >
            문제 풀러가기
            <LinkArrowIcon className="ml-1 size-4" />
          </p>
        </div>
      </div>
    </a>
  );
};

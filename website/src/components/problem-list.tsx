import NextLink from 'next/link';
import * as React from 'react';

import type { LeetCodeDiffculty } from '@/schemas/leetcode';
import type { ProgrammersLevel } from '@/schemas/programmers';
import { cn } from '@/utils/cn';

type ProblemListRootProps = React.ComponentPropsWithoutRef<'ul'>;

const ProblemListRoot = React.forwardRef<HTMLUListElement, ProblemListRootProps>(
  ({ className, ...props }, ref) => {
    return <ul ref={ref} className={cn('flex flex-col gap-y-0.5', className)} {...props} />;
  },
);
ProblemListRoot.displayName = 'ProblemList.Root';

type ProblemListItemProps = React.ComponentPropsWithoutRef<'li'>;

const ProblemListItem = React.forwardRef<HTMLLIElement, ProblemListItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn(
          'flex items-center justify-between gap-x-4 rounded-lg px-4 transition-colors',
          'odd:bg-gray-3 hover:bg-gray-3 odd:hover:bg-gray-4',
          className,
        )}
        {...props}
      />
    );
  },
);
ProblemListItem.displayName = 'ProblemList.Item';

type ProblemListLinkProps = React.ComponentPropsWithoutRef<typeof NextLink>;

const ProblemListLink = React.forwardRef<HTMLAnchorElement, ProblemListLinkProps>(
  ({ className, ...props }, ref) => {
    return (
      <NextLink
        ref={ref}
        className={cn(
          'inline-flex h-10 flex-1 items-center gap-x-1.5 overflow-hidden text-sm font-medium overflow-ellipsis whitespace-nowrap',
          className,
        )}
        {...props}
      />
    );
  },
);
ProblemListLink.displayName = 'ProblemList.Link';

type ProblemLevel = LeetCodeDiffculty | ProgrammersLevel;

const TEXT_COLOR_BY_LEVEL = {
  1: 'text-green-11',
  2: 'text-teal-11',
  3: 'text-amber-11',
  4: 'text-pink-11',
  5: 'text-red-11',
  Easy: 'text-green-11',
  Medium: 'text-amber-11',
  Hard: 'text-red-11',
} as const;

function getTextByLevel(level: ProblemLevel): string {
  if (typeof level === 'number') {
    return `Lv. ${level.toString()}`;
  }
  return level === 'Medium' ? 'Med.' : level;
}

type ProblemListLevelProps = Omit<React.ComponentPropsWithoutRef<'span'>, 'children'> & {
  level: ProblemLevel;
};

const ProblemListLevel = React.forwardRef<HTMLSpanElement, ProblemListLevelProps>(
  ({ level, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'min-w-10 shrink-0 text-center text-sm font-medium',
          TEXT_COLOR_BY_LEVEL[level],
          className,
        )}
        {...props}
      >
        {getTextByLevel(level)}
      </span>
    );
  },
);
ProblemListLevel.displayName = 'ProblemList.Level';

export {
  ProblemListRoot as Root,
  ProblemListItem as Item,
  ProblemListLink as Link,
  ProblemListLevel as Level,
};

import type { LeetCodeDiffculty } from '@/schemas/leetcode';
import type { ProgrammersLevel } from '@/schemas/programmers';
import type { BadgeProps } from './ui/badge';
import { Badge } from './ui/badge';

type ProblemLevel = LeetCodeDiffculty | ProgrammersLevel;

const BADGE_VARIANT_BY_LEVEL = {
  1: 'green',
  2: 'teal',
  3: 'amber',
  4: 'pink',
  5: 'red',
  Easy: 'green',
  Medium: 'amber',
  Hard: 'red',
} as const;

interface LevelBadgeProps {
  size?: BadgeProps['size'];
  level: ProblemLevel;
}

export function LevelBadge({ size, level }: LevelBadgeProps) {
  const badgeText = typeof level === 'number' ? `Lv. ${level.toString()}` : level;
  return (
    <Badge size={size} variant={BADGE_VARIANT_BY_LEVEL[level]}>
      {badgeText}
    </Badge>
  );
}

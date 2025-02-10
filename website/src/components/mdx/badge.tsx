import { Badge } from '../ui/badge';

interface BadgeRootProps {
  children?: React.ReactNode;
}

const BadgeRoot = ({ children }: BadgeRootProps) => {
  return <div className="my-6 flex flex-wrap items-center gap-3">{children}</div>;
};

const badgeColorsByLevel = {
  easy: 'green',
  medium: 'yellow',
  hard: 'red',
} as const;

interface LevelBadgeProps {
  level: 'easy' | 'medium' | 'hard';
}

const LevelBadge = ({ level }: LevelBadgeProps) => {
  return (
    <Badge asChild variant={badgeColorsByLevel[level]} className="capitalize">
      <a
        href={`https://leetcode.com/problemset/?difficulty=${level.toUpperCase()}`}
        target="_blank"
        rel="nofollow noreferrer"
      >
        {level}
      </a>
    </Badge>
  );
};

interface TopicBadgeProps {
  name: string;
  slug: string;
}

const TopicBadge = ({ name, slug }: TopicBadgeProps) => {
  return (
    <Badge asChild variant="blue">
      <a href={`https://leetcode.com/tag/${slug}`} target="_blank" rel="nofollow noreferrer">
        {name}
      </a>
    </Badge>
  );
};

export { BadgeRoot as Root, LevelBadge as Level, TopicBadge as Topic };

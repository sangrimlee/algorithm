import clsx from 'clsx';

const levelColors = {
  easy: 'text-green-600 bg-green-600 dark:text-green-400 dark:bg-green-400',
  medium: 'text-yellow-600 bg-yellow-600 dark:text-yellow-400 dark:bg-yellow-400',
  hard: 'text-red-600 bg-red-600 dark:text-red-400 dark:bg-red-400',
};

interface LevelBadgeProps {
  level: keyof typeof levelColors;
}

export const LevelBadge = ({ level }: LevelBadgeProps) => {
  return (
    <>
      <div
        className={clsx(
          'inline-flex items-center justify-center rounded-full py-1 px-3.5 font-medium capitalize',
          'bg-opacity-[0.15] hover:bg-opacity-20 dark:bg-opacity-[0.15] dark:hover:bg-opacity-25',
          levelColors[level],
        )}
      >
        {level}
      </div>
    </>
  );
};

interface TopicBadgeProps {
  name: string;
  slug: string;
}

export const TopicBadge = ({ name, slug }: TopicBadgeProps) => {
  return (
    <a
      className={clsx(
        'inline-flex items-center justify-center rounded-full py-1 px-3.5 font-medium',
        'bg-blue-600 text-blue-600 bg-opacity-10 hover:bg-opacity-20',
        'dark:bg-blue-400 dark:text-blue-400  dark:bg-opacity-[0.15] dark:hover:bg-opacity-25',
      )}
      href={`https://leetcode.com/tag/${slug}`}
      target="_blank"
      rel="nofollow noreferrer"
    >
      {name}
    </a>
  );
};

interface BadgesProps {
  children?: React.ReactNode;
}

export const Badges = ({ children }: BadgesProps) => {
  return <div className="flex items-center gap-3 flex-wrap mt-5">{children}</div>;
};

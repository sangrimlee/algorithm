interface LevelBadgeProps {
  level: 'easy' | 'medium' | 'hard';
}

export const LevelBadge = ({ level }: LevelBadgeProps) => {
  return (
    <>
      <div className={`level-badge ${level}`}>{level}</div>
      <style jsx>{`
        .level-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          padding: 0.25rem 0.875rem;

          font-size: 1rem;
          font-weight: 500;
          text-transform: capitalize;

          color: rgb(var(--level-color));
          background: rgb(var(--level-color) / 0.15);
        }

        .level-badge.easy {
          --level-color: 0 175 155;
        }
        .level-badge.medium {
          --level-color: 255 184 0;
        }
        .level-badge.hard {
          --level-color: 255 45 85;
        }
      `}</style>
    </>
  );
};

interface TopicBadgeProps {
  name: string;
  slug: string;
}

export const TopicBadge = ({ name, slug }: TopicBadgeProps) => {
  return (
    <>
      <a
        className="topic-badge"
        href={`https://leetcode.com/tag/${slug}`}
        target="_blank"
        rel="nofollow noreferrer"
      >
        {name}
      </a>
      <style jsx>{`
        .topic-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          border-radius: 9999px;
          padding: 0.25rem 0.875rem;

          font-size: 1rem;
          font-weight: 500;

          --color-hue: 212deg;
          --bg-opacity: 0.1;
          color: hsl(var(--color-hue) 100% 45%);
          background: hsl(var(--color-hue) 100% 66% / var(--bg-opacity));
        }
        .topic-badge:hover {
          --bg-opacity: 0.25;
        }
      `}</style>
    </>
  );
};

interface BadgesProps {
  children?: React.ReactNode;
}

export const Badges = ({ children }: BadgesProps) => {
  return (
    <>
      <div className="topic-badges">{children}</div>
      <style jsx>{`
        .topic-badges {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 1.25rem;
        }
      `}</style>
    </>
  );
};

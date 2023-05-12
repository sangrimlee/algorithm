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
          margin-top: 1rem;
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

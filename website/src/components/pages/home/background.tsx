import clsx from 'clsx';
import { SVGProps } from 'react';

export const Background = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-gray-200/50 dark:bg-grid-gray-800/50" />
        <div
          className={clsx(
            'gradient absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-30 blur-3xl animate-pulse',
            'md:w-96 md:h-96 xl:w-[32rem] xl:h-[32rem] md:blur-[128px]',
          )}
        />
      </div>
      <style jsx>
        {`
          .gradient {
            background-image: conic-gradient(
              from 0deg at 50% 50%,
              #ff5d00 0deg,
              #ff000c 120deg,
              #7300ff 240deg,
              #ff5d00 360deg,
              #ff000c 480deg
            );
          }
        `}
      </style>
    </>
  );
};

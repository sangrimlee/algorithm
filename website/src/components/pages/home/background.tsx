import clsx from 'clsx';

import { FadeIn } from '@/components/animations';

export const Background = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-gray-200/50 dark:bg-grid-gray-800/50" />
        <FadeIn delay={1} noVertical>
          <div
            className={clsx(
              'gradient absolute inset-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 animate-pulse opacity-30 blur-3xl',
              'md:h-96 md:w-96 md:blur-[128px] xl:h-[32rem] xl:w-[32rem]',
            )}
          />
        </FadeIn>
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

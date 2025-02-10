import { clsx } from 'clsx';

import { FadeIn } from '@/components/animation';

export const Background = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="bg-grid absolute inset-0" />
      <FadeIn delay={1} noVertical>
        <div
          className={clsx(
            'bg-gradient absolute inset-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 animate-pulse opacity-30 blur-3xl',
            'md:h-96 md:w-96 md:blur-[128px] xl:h-[32rem] xl:w-[32rem]',
          )}
        />
      </FadeIn>
    </div>
  );
};

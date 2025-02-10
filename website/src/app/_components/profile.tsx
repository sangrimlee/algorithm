import Image from 'next/image';
import { clsx } from 'clsx';

import { ScaleUp, SlideHorizontal } from '@/components/animation';

export const Profile = () => {
  return (
    <div className="flex items-center py-12 md:py-16">
      <ScaleUp delay={0.6}>
        <Image
          src="/images/profile.png"
          alt="프로필 이미지"
          width={500}
          height={500}
          className={clsx('h-12 w-12 rounded-full', 'md:h-14 md:w-14 xl:h-16 xl:w-16')}
        />
      </ScaleUp>
      <SlideHorizontal direction="right" delay={0.8}>
        <div className="ml-3 flex flex-col text-xs font-medium md:text-sm xl:text-base">
          <a
            target="_blank"
            href="https://github.com/sangrimlee"
            rel="nofollow noreferrer noopener"
            className="text-blue-600 dark:text-blue-400"
          >
            @sangrimlee
          </a>
          <a
            target="_blank"
            href="mailto:contact@sangrim.dev"
            rel="nofollow noreferrer noopener"
            className="ml-0.5 mt-1 text-slate-600 dark:text-slate-400"
          >
            contact@sangrim.dev
          </a>
        </div>
      </SlideHorizontal>
    </div>
  );
};

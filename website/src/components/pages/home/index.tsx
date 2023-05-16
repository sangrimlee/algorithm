import clsx from 'clsx';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

import { Background } from './background';
import { FadeIn, ScaleUp, SlideHorizontal } from '@/components/animations';

interface LinkBadgeProps {
  href: string;
  label: string;
}

const LinkBadge = ({ href, label }: LinkBadgeProps) => {
  return (
    <Link
      className={clsx(
        'inline-flex items-center justify-center rounded-full py-1.5 px-4 font-medium text-sm md:text-base',
        'bg-blue-600 text-blue-600 bg-opacity-10 hover:bg-opacity-20',
        'dark:bg-blue-400 dark:text-blue-400  dark:bg-opacity-[0.15] dark:hover:bg-opacity-25',
      )}
      href={href}
    >
      {label}
      <ArrowRightIcon className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1.5" />
    </Link>
  );
};

const TitleAndDescription = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center pt-36 md:pt-48">
      <FadeIn>
        <h1
          className={clsx(
            'font-logo text-5xl font-extrabold text-center tracking-tight text-gray-800',
            'md:text-6xl xl:text-7xl dark:text-gray-200',
          )}
        >
          Algorithm
        </h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p
          className={clsx(
            'text-center mt-6 text-gray-600 dark:text-gray-400 max-w-lg px-8',
            'text-base md:text-xl xl:text-2xl md:mt-8 xl:mt-10 md:max-w-xl xl:max-w-2xl',
          )}
        >
          The solutions written in TypeScript for problems of LeetCode and Programmers.
        </p>
      </FadeIn>
      <FadeIn delay={0.4}>
        <div className="mt-6 md:mt-10 space-x-4">
          <LinkBadge href="/solution/leetcode/1" label="LeetCode" />
          <LinkBadge href="/solution/programmers/1843" label="Programmers" />
        </div>
      </FadeIn>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="flex items-center py-12 md:py-16">
      <ScaleUp delay={0.6}>
        <Image
          src="/images/profile.png"
          alt="Profile image"
          width={512}
          height={512}
          className={clsx('w-12 h-12 rounded-full', 'md:w-14 md:h-14 xl:w-16 xl:h-16')}
        />
      </ScaleUp>
      <SlideHorizontal direction="right" delay={0.8}>
        <div className="flex flex-col ml-3 text-xs font-medium md:text-sm xl:text-base">
          <a
            href="https://github.com/sangrimlee"
            target="_blank"
            rel="nofollow noreferrer noopener"
            className="text-blue-600 dark:text-blue-400"
          >
            @sangrimlee
          </a>
          <a
            href="mailto:contact@sangrim.dev"
            target="_blank"
            rel="nofollow noreferrer noopener"
            className="mt-1 text-gray-600 dark:text-gray-400 ml-0.5"
          >
            contact@sangrim.dev
          </a>
        </div>
      </SlideHorizontal>
    </div>
  );
};

export const HomePage = () => {
  return (
    <main
      className={clsx(
        'relative w-full h-full overflow-hidden',
        'min-h-[calc(100vh-var(--nextra-navbar-height))]',
      )}
    >
      <Background />
      <div className="w-full h-full flex flex-col items-center">
        <TitleAndDescription />
        <Profile />
      </div>
    </main>
  );
};

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
        'inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium md:text-base',
        'bg-blue-600 bg-opacity-10 text-blue-600 hover:bg-opacity-20',
        'dark:bg-blue-400 dark:bg-opacity-[0.15]  dark:text-blue-400 dark:hover:bg-opacity-25',
      )}
      href={href}
    >
      {label}
      <ArrowRightIcon className="ml-1.5 h-3.5 w-3.5 md:h-4 md:w-4" />
    </Link>
  );
};

const TitleAndDescription = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center pt-36 md:pt-48">
      <FadeIn>
        <h1
          className={clsx(
            'text-center font-logo text-5xl font-extrabold tracking-tight text-gray-800',
            'dark:text-gray-200 md:text-6xl xl:text-7xl',
          )}
        >
          Algorithm
        </h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p
          className={clsx(
            'mt-6 max-w-lg px-8 text-center text-gray-600 dark:text-gray-400',
            'text-base md:mt-8 md:max-w-xl md:text-xl xl:mt-10 xl:max-w-2xl xl:text-2xl',
          )}
        >
          The solutions written in TypeScript for problems of LeetCode and Programmers.
        </p>
      </FadeIn>
      <FadeIn delay={0.4}>
        <div className="mt-6 space-x-4 md:mt-10">
          <LinkBadge href="/solutions/leetcode/1" label="LeetCode" />
          <LinkBadge href="/solutions/programmers/1843" label="Programmers" />
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
          className={clsx('h-12 w-12 rounded-full', 'md:h-14 md:w-14 xl:h-16 xl:w-16')}
        />
      </ScaleUp>
      <SlideHorizontal direction="right" delay={0.8}>
        <div className="ml-3 flex flex-col text-xs font-medium md:text-sm xl:text-base">
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
            className="ml-0.5 mt-1 text-gray-600 dark:text-gray-400"
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
        'relative h-full w-full overflow-hidden',
        'min-h-[calc(100vh-var(--nextra-navbar-height))]',
      )}
    >
      <Background />
      <div className="flex h-full w-full flex-col items-center">
        <TitleAndDescription />
        <Profile />
      </div>
    </main>
  );
};

import Link from 'next/link';
import { clsx } from 'clsx';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { FadeIn } from '@/components/animation';

export const HeroSection = () => {
  return (
    <section className="flex flex-1 flex-col items-center justify-center pt-36 md:pt-48">
      <FadeIn className="flex flex-col items-center">
        <div>
          <h1
            className={clsx(
              'font-logo text-center text-5xl font-extrabold tracking-tight text-slate-900',
              'dark:text-slate-100 md:text-6xl xl:text-7xl',
            )}
          >
            Algorithm
          </h1>
          <p
            className={clsx(
              'mt-6 max-w-lg px-8 text-center text-slate-600 dark:text-slate-400',
              'text-base md:mt-8 md:max-w-xl md:text-xl xl:mt-10 xl:max-w-2xl xl:text-2xl',
            )}
          >
            The solutions written in TypeScript for problems of LeetCode and Programmers.
          </p>
        </div>
        <div className="mt-6 space-x-4 md:mt-10">
          <Link
            className={clsx(
              'inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium md:text-base',
              'bg-blue-600/10 text-blue-600 hover:bg-blue-600/20',
              'dark:bg-blue-400/10 dark:bg-opacity-[0.15] dark:text-blue-400 dark:hover:bg-blue-400/20',
            )}
            href="/solutions/leetcode/1"
          >
            <span>LeetCode</span>
            <ArrowRightIcon className="ml-1.5 h-3.5 w-3.5 md:h-4 md:w-4" />
          </Link>
          <Link
            className={clsx(
              'inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200',
              'md:text-base',
              'bg-blue-600/10 text-blue-600 hover:bg-blue-600/20',
              'dark:bg-blue-400/10 dark:bg-opacity-[0.15] dark:text-blue-400 dark:hover:bg-blue-400/20',
            )}
            href="/solutions/programmers/1843"
          >
            <span>Programmers</span>
            <ArrowRightIcon className="ml-1.5 h-3.5 w-3.5 md:h-4 md:w-4" />
          </Link>
        </div>
      </FadeIn>
    </section>
  );
};

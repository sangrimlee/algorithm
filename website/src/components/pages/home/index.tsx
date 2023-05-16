import clsx from 'clsx';

import { Background } from './background';
import Image from 'next/image';

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
        <div className="flex-1 flex flex-col items-center justify-center pt-36 md:pt-48">
          <h1
            className={clsx(
              'font-logo text-5xl font-extrabold text-center tracking-tight text-gray-800',
              'md:text-6xl xl:text-7xl dark:text-gray-200',
            )}
          >
            Algorithm
          </h1>
          <p
            className={clsx(
              'text-center mt-6 text-gray-600 dark:text-gray-400 max-w-lg px-8',
              'text-base md:text-xl xl:text-2xl md:mt-8 xl:mt-10 md:max-w-xl xl:max-w-2xl',
            )}
          >
            The solutions written in TypeScript for problems of LeetCode and Programmers.
          </p>
        </div>
        <div className="flex items-center py-12 md:py-16">
          <Image
            src="/images/profile.png"
            alt="Profile image"
            width={512}
            height={512}
            className={clsx('w-12 h-12 rounded-full', 'md:w-16 md:h-16')}
          />
          <div className="flex flex-col ml-3 text-xs md:text-sm font-medium">
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
        </div>
      </div>
    </main>
  );
};

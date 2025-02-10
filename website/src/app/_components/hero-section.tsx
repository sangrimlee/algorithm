'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';

import { cx } from '@/utils/cx';
import { Button } from '@/components/ui/button';

const vairants = {
  section: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  },
} satisfies Record<string, Variants>;

export const HeroSection = () => {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={vairants.section}
      className={cx('mx-auto flex flex-1 flex-col items-center justify-center py-8')}
    >
      <motion.h1
        variants={vairants.item}
        className={cx(
          'font-logo mx-auto max-w-sm text-center text-3xl font-bold leading-[1.2] tracking-tight',
          'sm:max-w-lg sm:text-5xl sm:leading-[1.1]',
          'xl:max-w-xl xl:text-6xl',
          'text-gray-950 dark:text-gray-50',
        )}
      >
        Algorithm Problem
        <br />
        with TypeScript
      </motion.h1>
      <motion.p
        variants={vairants.item}
        className={cx(
          'mx-auto mt-4 max-w-sm text-center text-base',
          'sm:mt-6 sm:max-w-md sm:text-lg',
          'xl:mt-8 xl:max-w-lg xl:text-xl',
          'text-gray-600 dark:text-gray-400',
        )}
      >
        Explore 1,000+ problems solved in TypeScript. — New solution weekly.
      </motion.p>
      <motion.div
        variants={vairants.item}
        className={cx('mt-6 flex flex-wrap items-center justify-center gap-4', 'sm:mt-8 xl:mt-10')}
      >
        <Button
          asChild
          variant="default"
          size="lg"
          rounded="full"
          className="min-w-44 hidden sm:inline-flex"
        >
          <Link href="/solutions/leetcode/1">
            <span>LeetCode</span>
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          rounded="full"
          className="min-w-44 hidden sm:inline-flex"
        >
          <Link href="/solutions/programmers/1843">
            <span>Programmers</span>
          </Link>
        </Button>
        <Button asChild variant="default" size="md" rounded="full" className="min-w-40 sm:hidden">
          <Link href="/solutions/leetcode/1">
            <span>LeetCode</span>
          </Link>
        </Button>
        <Button asChild variant="outline" size="md" rounded="full" className="min-w-40 sm:hidden">
          <Link href="/solutions/programmers/1843">
            <span>Programmers</span>
          </Link>
        </Button>
      </motion.div>
    </motion.section>
  );
};

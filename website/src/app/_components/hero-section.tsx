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
      className={cx(
        'relative mx-auto flex min-h-(--content-height) flex-1 flex-col items-center justify-center py-20',
      )}
    >
      <motion.h1
        variants={vairants.item}
        className={cx(
          'mx-auto max-w-sm text-center font-logo text-3xl leading-[1.2] font-bold tracking-tight text-gray-12',
          'sm:max-w-lg sm:text-5xl sm:leading-[1.1]',
          'xl:max-w-xl xl:text-6xl',
        )}
      >
        Algorithm Problem
        <br />
        with TypeScript
      </motion.h1>
      <motion.p
        variants={vairants.item}
        className={cx(
          'mx-auto mt-4 max-w-sm text-center text-sm text-gray-11',
          'sm:mt-6 sm:max-w-md sm:text-lg',
          'xl:mt-8 xl:max-w-lg xl:text-xl',
        )}
      >
        Explore 1,000+ problems solved in TypeScript. — New solution weekly.
      </motion.p>
      <motion.div
        variants={vairants.item}
        className={cx('mt-6 flex flex-wrap items-center justify-center gap-4', 'sm:mt-8 xl:mt-10')}
      >
        <Button asChild variant="default" size="lg" rounded="full" className="min-w-40">
          <Link href="/solutions/leetcode">
            <span>LeetCode</span>
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" rounded="full" className="min-w-40">
          <Link href="/solutions/programmers">
            <span>Programmers</span>
          </Link>
        </Button>
      </motion.div>
    </motion.section>
  );
};

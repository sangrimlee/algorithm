'use client';

import { motion } from 'motion/react';
import type { Variants } from 'motion/react';

import { cx } from '@/utils/cx';

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
} satisfies Variants;

export const Background = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10">
        <div className={cx('bg-grid', 'absolute inset-0')} />
        <motion.div initial="hidden" animate="show" variants={variants}>
          <div
            className={cx(
              'bg-gradient',
              'absolute inset-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 animate-pulse opacity-30 blur-3xl',
              'md:h-96 md:w-96 md:blur-[128px] xl:h-[32rem] xl:w-[32rem]',
            )}
          />
        </motion.div>
      </div>
      <style jsx>
        {`
          .bg-grid {
            background-color: transparent;
            background-size: 4rem 4rem;
            background-image:
              linear-gradient(
                color-mix(in oklab, var(--color-gray-4) 5%, transparent) 1px,
                transparent 1px
              ),
              linear-gradient(
                to right,
                color-mix(in oklab, var(--color-gray-4) 5%, transparent) 1px,
                transparent 1px
              );
          }
          .bg-gradient {
            background-image: conic-gradient(
              from 0deg at 50% 50%,
              var(--red9) 0deg,
              var(--amber9) 120deg,
              var(--blue9) 240deg,
              var(--red9) 360deg,
              var(--amber9) 480deg
            );
          }
        `}
      </style>
    </>
  );
};

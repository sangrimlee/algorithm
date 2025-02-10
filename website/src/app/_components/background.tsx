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
    <div className="absolute inset-0 -z-10">
      <div className="bg-grid absolute inset-0" />
      <motion.div initial="hidden" animate="show" variants={variants}>
        <div
          className={cx(
            'bg-gradient absolute inset-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 animate-pulse opacity-30 blur-3xl',
            'md:h-96 md:w-96 md:blur-[128px] xl:h-[32rem] xl:w-[32rem]',
          )}
        />
      </motion.div>
    </div>
  );
};

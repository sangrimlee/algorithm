import * as React from 'react';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';
import { Slot } from '@radix-ui/react-slot';

const badgeVariants = cva(
  [
    'inline-flex items-center rounded-full px-2.5 py-1.5 text-sm leading-none font-medium ring-1 ring-current transition-colors',
    'focus-visible:shadow-focus-ring focus-visible:outline-none',
  ],
  {
    variants: {
      variant: {
        blue: [
          'bg-blue-700/10 text-blue-700 hover:bg-blue-700/20',
          'dark:bg-blue-300/10 dark:text-blue-300 hover:dark:bg-blue-300/20',
        ],
        green: [
          'bg-green-700/10 text-green-700 hover:bg-green-700/20',
          'dark:bg-green-300/10 dark:text-green-300 hover:dark:bg-green-300/20',
        ],
        yellow: [
          'bg-yellow-700/10 text-yellow-700 hover:bg-yellow-700/20',
          'dark:bg-yellow-300/10 dark:text-yellow-300 hover:dark:bg-yellow-300/20',
        ],
        red: [
          'bg-red-700/10 text-red-700 hover:bg-red-600/20',
          'dark:bg-red-300/10 dark:text-red-300 hover:dark:bg-red-300/20',
        ],
      },
    },
    defaultVariants: {
      variant: 'blue',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, asChild = false, ...props }, forwardedRef) => {
    const Comp = asChild ? Slot : 'span';
    return (
      <Comp className={cn(badgeVariants({ variant }), className)} ref={forwardedRef} {...props} />
    );
  },
);
Badge.displayName = 'Badge';

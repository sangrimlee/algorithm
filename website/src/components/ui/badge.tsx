import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';
import { Slot } from '@radix-ui/react-slot';

const badgeVariants = cva(
  [
    'inline-flex items-center rounded-full ring-1 ring-current px-2 py-1 text-xs leading-none font-medium transition-colors',
    'focus-visible:outline-none focus-visible:shadow-focus-ring',
  ],
  {
    variants: {
      variant: {
        blue: [
          'text-blue-600 bg-blue-600/20 hover:bg-blue-600/30',
          'dark:text-blue-400 dark:bg-blue-400/20 hover:dark:bg-blue-400/30',
        ],
        green: [
          'text-green-600 bg-green-600/20 hover:bg-green-600/30',
          'dark:text-green-400 dark:bg-green-400/20 hover:dark:bg-green-400/30',
        ],
        yellow: [
          'text-yellow-600 bg-yellow-600/20 hover:bg-yellow-600/30',
          'dark:text-yellow-400 dark:bg-yellow-400/20 hover:dark:bg-yellow-400/30',
        ],
        red: [
          'text-red-600 bg-red-600/20 hover:bg-red-600/30',
          'dark:text-red-400 dark:bg-red-400/20 hover:dark:bg-red-400/30',
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

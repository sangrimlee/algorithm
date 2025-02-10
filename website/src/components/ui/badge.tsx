import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';
import { Slot } from '@radix-ui/react-slot';

const badgeVariants = cva(
  [
    'inline-flex items-center rounded-full ring-1 ring-current px-2.5 py-1.5 text-sm leading-none font-medium transition-colors',
    'focus-visible:outline-none focus-visible:shadow-focus-ring',
  ],
  {
    variants: {
      variant: {
        blue: [
          'text-blue-700 bg-blue-700/10 hover:bg-blue-700/20',
          'dark:text-blue-300 dark:bg-blue-300/10 hover:dark:bg-blue-300/20',
        ],
        green: [
          'text-green-700 bg-green-700/10 hover:bg-green-700/20',
          'dark:text-green-300 dark:bg-green-300/10 hover:dark:bg-green-300/20',
        ],
        yellow: [
          'text-yellow-700 bg-yellow-700/10 hover:bg-yellow-700/20',
          'dark:text-yellow-300 dark:bg-yellow-300/10 hover:dark:bg-yellow-300/20',
        ],
        red: [
          'text-red-700 bg-red-700/10 hover:bg-red-600/20',
          'dark:text-red-300 dark:bg-red-300/10 hover:dark:bg-red-300/20',
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

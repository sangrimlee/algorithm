import * as React from 'react';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';
import { Slot } from '@radix-ui/react-slot';

const badgeVariants = cva(
  [
    'inline-flex shrink-0 items-center justify-center rounded-full font-medium whitespace-nowrap capitalize transition-colors',
    'focus-visible:shadow-focus-ring focus-visible:outline-none',
  ],
  {
    variants: {
      size: {
        sm: 'h-5 gap-0.5 px-1.5 text-[11px] leading-none [&_svg]:size-3',
        md: 'h-6 gap-1 px-2.5 text-xs leading-none [&_svg]:size-3.5',
        lg: 'h-8 gap-1.5 px-3 text-sm leading-none [&_svg]:size-4',
      },
      variant: {
        gray: ['bg-gray-9 text-white', 'hover:bg-gray-10'],
        blue: ['bg-blue-9 text-white', 'hover:bg-blue-10'],
        purple: ['bg-purple-9 text-white', 'hover:bg-purple-10'],
        amber: ['bg-amber-9 text-black', 'hover:bg-amber-10'],
        red: ['bg-red-9 text-white', 'hover:bg-red-10'],
        pink: ['bg-pink-9 text-white', 'hover:bg-pink-10'],
        green: ['bg-green-9 text-white', 'hover:bg-green-10'],
        teal: ['bg-teal-9 text-white', 'hover:bg-teal-10'],
        'gray-subtle': ['bg-gray-3 text-gray-12', 'hover:bg-gray-4'],
        'blue-subtle': ['bg-blue-3 text-blue-11', 'hover:bg-blue-4'],
        'purple-subtle': ['bg-purple-3 text-purple-11', 'hover:bg-purple-4'],
        'amber-subtle': ['bg-amber-3 text-amber-11', 'hover:bg-amber-4'],
        'red-subtle': ['bg-red-3 text-red-11', 'hover:bg-red-4'],
        'pink-subtle': ['bg-pink-3 text-pink-11', 'hover:bg-pink-4'],
        'green-subtle': ['bg-green-3 text-green-11', 'hover:bg-green-4'],
        'teal-subtle': ['bg-teal-3 text-teal-11', 'hover:bg-teal-4'],
        inverted: ['bg-gray-12 text-gray-1', 'hover:bg-gray-12/90'],
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'gray',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, asChild = false, ...props }, forwardedRef) => {
    const Comp = asChild ? Slot : 'span';
    return (
      <Comp
        className={cn(badgeVariants({ variant, size }), className)}
        ref={forwardedRef}
        {...props}
      />
    );
  },
);
Badge.displayName = 'Badge';

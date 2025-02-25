import * as React from 'react';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';
import { Slot } from '@radix-ui/react-slot';

const badgeVariants = cva(
  [
    'inline-flex shrink-0 items-center justify-center rounded-full font-medium whitespace-nowrap capitalize',
    'focus-visible:shadow-focus-ring focus-visible:outline-none',
  ],
  {
    variants: {
      size: {
        sm: 'h-5 gap-0.5 px-1.5 text-[11px] [&_svg]:size-3',
        md: 'h-6 gap-1 px-2.5 text-xs [&_svg]:size-3.5',
        lg: 'h-8 gap-1.5 px-3 text-sm [&_svg]:size-4',
      },
      variant: {
        gray: 'bg-gray-9 text-white',
        blue: 'bg-blue-9 text-white',
        purple: 'bg-purple-9 text-white',
        amber: 'bg-amber-9 text-black',
        red: 'bg-red-9 text-white',
        pink: 'bg-pink-9 text-white',
        green: 'bg-green-9 text-white',
        teal: 'bg-teal-9 text-white',
        'gray-subtle': 'bg-gray-3 text-gray-12',
        'blue-subtle': 'bg-blue-3 text-blue-11',
        'purple-subtle': 'bg-purple-3 text-purple-11',
        'amber-subtle': 'bg-amber-3 text-amber-11',
        'red-subtle': 'bg-red-3 text-red-11',
        'pink-subtle': 'bg-pink-3 text-pink-11',
        'green-subtle': 'bg-green-3 text-green-11',
        'teal-subtle': 'bg-teal-3 text-teal-11',
        inverted: 'bg-gray-12 text-gray-1',
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

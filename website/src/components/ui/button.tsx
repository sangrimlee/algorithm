import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const buttonVariants = cva(
  [
    'inline-flex cursor-pointer items-center justify-center gap-2 border border-transparent font-medium whitespace-nowrap transition-colors duration-200',
    'focus-visible:shadow-focus-ring focus-visible:outline-none',
    'disabled:pointer-events-none disabled:border-gray-6 disabled:bg-gray-3 disabled:text-gray-9',
    '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  ],
  {
    variants: {
      size: {
        sm: 'min-h-8 px-3 text-xs',
        md: 'min-h-9 px-4 text-sm',
        lg: 'min-h-10 px-5 text-sm',
        icon: 'h-9 w-9',
      },
      variant: {
        default: ['bg-gray-12 text-gray-1', 'hover:bg-gray-12/90'],
        outline: ['border-gray-7 bg-gray-1 text-gray-12', 'hover:border-gray-8 hover:bg-gray-3'],
        ghost: ['bg-transparent text-gray-12', 'hover:bg-gray-3 hover:text-gray-11'],
      },
      rounded: {
        default: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
      rounded: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, forwardedRef) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded }), className)}
        ref={forwardedRef}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

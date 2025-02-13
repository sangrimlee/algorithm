import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const buttonVariants = cva(
  [
    'inline-flex cursor-pointer items-center justify-center gap-2 font-medium whitespace-nowrap transition-colors duration-200',
    'focus-visible:shadow-focus-ring focus-visible:outline-none',
    'disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-gray-950 text-gray-50',
          'dark:bg-gray-50 dark:text-gray-950',
          'hover:bg-gray-900 dark:hover:bg-gray-100',
        ],
        outline: [
          'border',
          'border-gray-300 bg-gray-50 text-gray-950 hover:bg-gray-100',
          'dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-900',
        ],
      },
      size: {
        sm: 'min-h-9 px-5 text-sm',
        md: 'min-h-10 px-6 text-sm',
        lg: 'min-h-11 px-7 text-base',
      },
      rounded: {
        default: 'rounded-md',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
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

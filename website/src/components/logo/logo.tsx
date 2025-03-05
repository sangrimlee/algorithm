'use client';

import { cn } from '@/utils/cn';

type LogoProps = Omit<React.ComponentPropsWithoutRef<'span'>, 'children'>;

export function Logo({ className, ...props }: LogoProps) {
  return (
    <span
      className={cn('logo-animation', 'font-logo text-lg font-extrabold tracking-tight', className)}
      {...props}
    >
      Algorithm
      <style jsx>{`
        .logo-animation {
          mask-image: linear-gradient(60deg, black 25%, rgba(0, 0, 0, 0.25) 50%, black 75%);
          mask-size: 400%;
          mask-position: 0%;
          &:hover {
            mask-position: 100%;
            transition: mask-position 1s ease;
          }
        }
      `}</style>
    </span>
  );
}

import NextLink from 'next/link';

import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';

import { ArrowUpRightIcon } from 'lucide-react';

const EXTERNAL_HREF_REGEX = /^(https?:\/\/|mailto:|tel:)/;

type AnchorProps = ComponentPropsWithoutRef<'a'>;

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ href = '', children, ...props }, ref) => {
    const isExternalHref = EXTERNAL_HREF_REGEX.test(href);
    if (isExternalHref) {
      return (
        <a {...props} href={href} target="_blank" rel="noreferrer nofollow noopener" ref={ref}>
          {children}
          <span className="inline-flex">
            <ArrowUpRightIcon className="size-[1em]" />
          </span>
        </a>
      );
    }

    if (href.startsWith('#')) {
      return (
        <a {...props} href={href} ref={ref}>
          {children}
        </a>
      );
    }

    return (
      <NextLink {...props} href={href} ref={ref}>
        {children}
      </NextLink>
    );
  },
);
Anchor.displayName = 'Anchor';

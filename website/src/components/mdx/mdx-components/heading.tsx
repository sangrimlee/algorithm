import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

import { cx } from '@/utils/cx';
import { HashIcon } from 'lucide-react';

type HeadingProps = ComponentPropsWithoutRef<'h2'> & {
  tag: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ id = '', tag, className, children, ...props }, ref) => {
    const Tag = tag;

    if (id === 'footnote-label') {
      return (
        <Tag {...props} id={id} className={className} ref={ref}>
          {children}
        </Tag>
      );
    }

    return (
      <Tag {...props} id={id} className={cx('group', className)} ref={ref}>
        {children}
        <a
          href={`#${id}`}
          className={cx(
            'not-markdown invisible ml-1 inline-flex text-gray-11 opacity-0 transition',
            'group-hover:visible group-hover:opacity-100 hover:text-gray-12',
          )}
        >
          <HashIcon className="size-[0.75em]" />
        </a>
      </Tag>
    );
  },
);
Heading.displayName = 'Heading';

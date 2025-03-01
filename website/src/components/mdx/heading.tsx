import type { ComponentPropsWithoutRef } from 'react';

import { HashIcon } from 'lucide-react';

import { cx } from '@/utils/cx';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;

function createHeading(tag: `h${1 | 2 | 3 | 4 | 5 | 6}`) {
  return function Heading({ id, className, children, ...props }: HeadingProps) {
    const Tag = tag;

    if (id === 'footnote-label') {
      return (
        <Tag {...props} id={id} className={className}>
          {children}
        </Tag>
      );
    }

    return (
      <Tag {...props} id={id} className={cx('group', className)}>
        {children}
        {id ? (
          <a
            href={`#${id}`}
            className={cx(
              'not-markdown invisible ml-1 inline-flex text-gray-11 opacity-0 transition',
              'group-hover:visible group-hover:opacity-100 hover:text-gray-12',
            )}
          >
            <HashIcon className="size-[0.75em]" />
          </a>
        ) : null}
      </Tag>
    );
  };
}

export const H2 = createHeading('h2');
export const H3 = createHeading('h3');
export const H4 = createHeading('h4');
export const H5 = createHeading('h5');
export const H6 = createHeading('h6');

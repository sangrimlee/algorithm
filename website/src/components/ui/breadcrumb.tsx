import * as React from 'react';
import NextLink from 'next/link';

import { ChevronRight } from 'lucide-react';

import { cn } from '@/utils/cn';

type BreadcrumbRootProps = React.ComponentPropsWithRef<'nav'>;

const BreadcrumbRoot = React.forwardRef<HTMLElement, BreadcrumbRootProps>(({ ...props }, ref) => {
  return <nav aria-label="breadcrumb" ref={ref} {...props} />;
});
BreadcrumbRoot.displayName = 'Breadcrumb.Root';

type BreadcrumbListProps = React.ComponentPropsWithoutRef<'ol'>;

const BreadcrumbList = React.forwardRef<HTMLOListElement, BreadcrumbListProps>(
  ({ className, ...props }, ref) => {
    return (
      <ol
        className={cn(
          'flex flex-wrap items-center gap-1 text-sm break-words text-gray-11',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
BreadcrumbList.displayName = 'Breadcrumb.List';

type BreadcrumbItemProps = React.ComponentPropsWithoutRef<'li'>;

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <li className={cn('inline-flex items-center gap-1.5', className)} ref={ref} {...props} />
    );
  },
);
BreadcrumbItem.displayName = 'Breadcrumb.Item';

type BreadcrumbLinkProps = React.ComponentPropsWithoutRef<typeof NextLink>;

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, ...props }, ref) => {
    return (
      <NextLink
        className={cn(
          'transition-colors hover:text-gray-12',
          'focus-visible:shadow-focus-ring focus-visible:outline-none',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
BreadcrumbLink.displayName = 'Breadcrumb.Link';

type BreadcrumbPageProps = React.ComponentPropsWithoutRef<'span'>;
const BreadcrumbPage = React.forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
  ({ className, ...props }, ref) => (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn('font-medium text-gray-12', className)}
      ref={ref}
      {...props}
    />
  ),
);
BreadcrumbPage.displayName = 'Breadcrumb.Page';

type BreadcrumbSeparatorProps = Omit<React.ComponentPropsWithoutRef<'li'>, 'children'>;

const BreadcrumbSeparator = React.forwardRef<HTMLLIElement, BreadcrumbSeparatorProps>(
  (props, ref) => {
    return (
      <li role="presentation" aria-hidden="true" ref={ref} {...props}>
        <ChevronRight className="h-3.5 w-3.5" />
      </li>
    );
  },
);
BreadcrumbSeparator.displayName = 'Breadcrumb.Separator';

export {
  BreadcrumbRoot as Root,
  BreadcrumbList as List,
  BreadcrumbItem as Item,
  BreadcrumbLink as Link,
  BreadcrumbPage as Page,
  BreadcrumbSeparator as Separator,
};

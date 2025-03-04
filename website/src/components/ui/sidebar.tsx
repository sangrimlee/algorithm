'use client';

import * as React from 'react';
import NextLink from 'next/link';

import { cn } from '@/utils/cn';
import { usePathname } from 'next/navigation';

type SidebarRootProps = React.ComponentPropsWithoutRef<'aside'>;

const SidebarRoot = React.forwardRef<HTMLElement, SidebarRootProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <aside
        className={cn(
          'sticky top-(--navbar-height) flex h-(--content-height) w-56 shrink-0 flex-col',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </aside>
    );
  },
);
SidebarRoot.displayName = 'Sidebar.Root';

type SidebarHeaderProps = React.ComponentPropsWithoutRef<'div'>;

const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className={cn('flex shrink-0 flex-col gap-y-2', className)} ref={ref} {...props}>
        {children}
      </div>
    );
  },
);
SidebarHeader.displayName = 'Sidebar.Header';

type SidebarFooterProps = React.ComponentPropsWithoutRef<'div'>;

const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className={cn('flex shrink-0 flex-col gap-y-2', className)} ref={ref} {...props}>
        {children}
      </div>
    );
  },
);
SidebarFooter.displayName = 'Sidebar.Footer';

type SidebarContentProps = React.ComponentPropsWithoutRef<'nav'>;

const SidebarContent = React.forwardRef<HTMLElement, SidebarContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <nav
        className={cn('styled-scrollbar flex-1 overflow-y-auto pr-1 pb-4', className)}
        ref={ref}
        {...props}
      >
        {children}
      </nav>
    );
  },
);
SidebarContent.displayName = 'Sidebar.Content';

type SidebarListProps = React.ComponentPropsWithoutRef<'ul'>;

const SidebarList = React.forwardRef<HTMLUListElement, SidebarListProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <ul className={cn('space-y-0.5 last-of-type:pb-2', className)} ref={ref} {...props}>
        {children}
      </ul>
    );
  },
);
SidebarList.displayName = 'Sidebar.List';

type SidebarItemProps = React.ComponentPropsWithoutRef<'li'>;

const SidebarItem = React.forwardRef<HTMLLIElement, SidebarItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <li className={cn('my-1.5 ml-0.5', className)} ref={ref} {...props}>
        {children}
      </li>
    );
  },
);
SidebarItem.displayName = 'Sidebar.Item';

type SidebarLinkProps = React.ComponentPropsWithoutRef<typeof NextLink> & {
  type?: 'link' | 'label';
};

const SidebarLink = React.forwardRef<HTMLAnchorElement, SidebarLinkProps>(
  ({ type = 'link', children, className, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === props.href;

    return (
      <NextLink
        data-active={String(isActive)}
        className={cn(
          {
            'font-medium text-gray-11': type === 'link',
            'font-semibold text-gray-12': type === 'label',
          },
          'relative flex w-full cursor-pointer items-center justify-between rounded-md py-1 pl-2 text-left text-sm transition-colors',
          'hover:text-gray-12',
          'data-[active=true]:font-semibold data-[active=true]:text-blue-11',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </NextLink>
    );
  },
);
SidebarLink.displayName = 'Sidebar.Link';

export {
  SidebarRoot as Root,
  SidebarHeader as Header,
  SidebarFooter as Footer,
  SidebarContent as Content,
  SidebarList as List,
  SidebarItem as Item,
  SidebarLink as Link,
};

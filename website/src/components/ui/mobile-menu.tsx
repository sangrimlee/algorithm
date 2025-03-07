'use client';

import * as React from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/utils/cn';
import { ArrowUpRightIcon } from 'lucide-react';

const MobileMenuRoot = DialogPrimitive.Root;
MobileMenuRoot.displayName = 'MobileMenu.Root';

const MobileMenuTrigger = DialogPrimitive.Trigger;
MobileMenuTrigger.displayName = 'MobileMenu.Trigger';

const MobileMenuContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    title: string;
  }
>(({ className, children, title, ...props }, ref) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          'styled-scrollbar fixed inset-x-0 top-(--navbar-height) bottom-0 z-modal overflow-y-auto bg-gray-1 duration-200 sm:hidden',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
          'data-[state=open]:animate-in data-[state=open]:fade-in-0',
          className,
        )}
        {...props}
      >
        <DialogPrimitive.Title className="sr-only">{title}</DialogPrimitive.Title>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});
MobileMenuContent.displayName = 'MobileMenu.Content';

const MobileMenuList = React.forwardRef<HTMLUListElement, React.ComponentPropsWithoutRef<'ul'>>(
  ({ className, ...props }, ref) => {
    return (
      <ul ref={ref} className={cn('flex flex-col space-y-0.5 px-3 py-1', className)} {...props} />
    );
  },
);
MobileMenuList.displayName = 'MobileMenu.List';

const MobileMenuItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(
  ({ className, ...props }, ref) => {
    return <li ref={ref} className={cn('flex w-full items-center', className)} {...props} />;
  },
);
MobileMenuItem.displayName = 'MobileMenu.Item';

const MobileMenuLink = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<'a'>>(
  ({ href = '', className, children, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = React.useMemo(() => {
      if (href === '/') {
        return pathname === href;
      }
      return pathname.startsWith(href);
    }, [href, pathname]);

    const isExternalHref = /^(https?:\/\/)/.test(href);

    const Comp = isExternalHref ? 'a' : NextLink;
    const defaultProps = isExternalHref
      ? { target: '_blank', rel: 'noreferrer nofollow noopener' }
      : {};

    return (
      <Comp
        ref={ref}
        href={href}
        className={cn(
          isActive ? 'text-blue-11' : 'text-gray-11',
          'flex w-full items-center rounded-md px-2 py-1.5 text-sm font-medium transition-colors',
          'hover:bg-gray-3 hover:text-gray-11 focus-visible:shadow-focus-ring focus-visible:outline-none',
          className,
        )}
        {...defaultProps}
        {...props}
      >
        {children}
        {isExternalHref ? (
          <ArrowUpRightIcon className="ml-0.5 inline-flex size-4 items-center" />
        ) : null}
      </Comp>
    );
  },
);
MobileMenuLink.displayName = 'MobileMenu.Link';

export {
  MobileMenuRoot as Root,
  MobileMenuTrigger as Trigger,
  MobileMenuContent as Content,
  MobileMenuList as List,
  MobileMenuItem as Item,
  MobileMenuLink as Link,
};

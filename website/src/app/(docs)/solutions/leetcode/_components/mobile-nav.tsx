'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { ChevronRightIcon } from 'lucide-react';

import * as MobileMenu from '@/components/ui/mobile-menu';
import { cx } from '@/utils/cx';
import { meta } from '../_meta';

export function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <MobileMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <div className="fixed inset-x-0 top-(--nav-bar-height) z-fixed transition-transform lg:hidden">
        <MobileMenu.Trigger
          type="button"
          className="px-inset flex h-10 w-full cursor-pointer items-center border-b bg-gray-1"
        >
          <ChevronRightIcon
            className={cx('-ml-0.5 size-4 transition-transform', { 'rotate-90': isOpen })}
          />
          <span className="ml-1 text-sm font-semibold">문제 목록</span>
        </MobileMenu.Trigger>
      </div>
      <MobileMenu.Content
        title="전체 문제 목록"
        className="top-[calc(var(--navbar-height)+2.5rem)] lg:hidden"
      >
        <MobileMenu.List>
          {Object.entries(meta).map(([slug, name]) => (
            <MobileMenu.Item key={slug}>
              <MobileMenu.Link href={`/solutions/leetcode/${slug}`}>{name}</MobileMenu.Link>
            </MobileMenu.Item>
          ))}
        </MobileMenu.List>
      </MobileMenu.Content>
    </MobileMenu.Root>
  );
}

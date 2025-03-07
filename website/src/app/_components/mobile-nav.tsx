'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { MenuIcon, XIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import * as MobileMenu from '@/components/ui/mobile-menu';

export const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <MobileMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <MobileMenu.Trigger asChild>
        <Button type="button" variant="ghost" size="icon">
          {isOpen ? <XIcon /> : <MenuIcon />}
        </Button>
      </MobileMenu.Trigger>
      <MobileMenu.Content title="모바일 메뉴" className="sm:hidden">
        <MobileMenu.List>
          <MobileMenu.Item>
            <MobileMenu.Link href="/">Home</MobileMenu.Link>
          </MobileMenu.Item>
          <MobileMenu.Item>
            <MobileMenu.Link href="/solutions/leetcode">LeetCode</MobileMenu.Link>
          </MobileMenu.Item>
          <MobileMenu.Item>
            <MobileMenu.Link href="/solutions/programmers">Programmers</MobileMenu.Link>
          </MobileMenu.Item>
        </MobileMenu.List>
      </MobileMenu.Content>
    </MobileMenu.Root>
  );
};

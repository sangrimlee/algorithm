'use client';

import { useMemo } from 'react';
import Link from 'next/link';

import { MenuIcon } from 'lucide-react';

import { GithubLogo, Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { cx } from '@/utils/cx';
import { ThemeToggle } from './theme-toggle';
import { usePathname } from 'next/navigation';

type NavLinkProps = React.ComponentPropsWithoutRef<typeof Link>;
function NavLink({ href, className, children, ...props }: NavLinkProps) {
  const pathname = usePathname();

  const isActive = useMemo(() => {
    if (typeof href === 'string') {
      return pathname.startsWith(href);
    }
    return pathname.startsWith(href.href ?? href.pathname ?? '');
  }, [href, pathname]);

  return (
    <Link
      href={href}
      className={cx(
        'rounded-md px-2 py-1 text-sm font-medium transition-colors',
        'hover:text-gray-12 focus-visible:shadow-focus-ring focus-visible:outline-none',
        isActive ? 'font-semibold text-gray-12' : 'text-gray-11',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

export function NavBar() {
  return (
    <header className="sticky inset-x-0 top-0 z-sticky border-b border-dashed border-gray-6 bg-gray-1/90 backdrop-blur-sm">
      <div className="container flex h-(--navbar-height) items-center justify-between">
        <nav className="hidden items-center sm:flex">
          <Link href="/">
            <Logo />
          </Link>
          <ul className="ml-8 hidden items-center gap-x-2 sm:flex">
            <li className="flex">
              <NavLink href="/solutions/leetcode">LeetCode</NavLink>
            </li>
            <li className="flex">
              <NavLink href="/solutions/programmers">Programmers</NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center sm:hidden">
          {/* TODO: 모바일 메뉴 추가 */}
          <button type="button">
            <MenuIcon className="size-4" />
          </button>
        </div>
        <div className="-mr-2.5 flex flex-1 items-center justify-end">
          <nav className="flex items-center gap-x-0.5 sm:gap-x-1">
            <Button asChild variant="ghost" size="icon">
              <a
                href="https://github.com/sangrimlee/algorithm"
                target="_blank"
                rel="noopener nofollow noreferrer"
              >
                <span className="sr-only">Github 페이지로 이동</span>
                <GithubLogo />
              </a>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}

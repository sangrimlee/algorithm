import Link from 'next/link';
import { MenuIcon } from 'lucide-react';

import { GithubLogo, Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './theme-toggle';

export const NavBar = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-sticky border-b border-dashed border-gray-6 bg-gray-1/90 backdrop-blur-sm">
      <div className="container flex h-(--navbar-height) items-center justify-between">
        <nav className="hidden items-center sm:flex">
          <Link href="/">
            <Logo />
          </Link>
          {/* TODO: 링크 리스트 추가 */}
        </nav>
        <div className="flex items-center sm:hidden">
          {/* TODO: 모바일 메뉴 추가 */}
          <button type="button">
            <MenuIcon className="size-4" />
          </button>
        </div>
        <div className="-mr-2.5 flex flex-1 items-center justify-end">
          <nav className="flex items-center sm:gap-1">
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
};

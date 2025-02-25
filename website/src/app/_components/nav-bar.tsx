import Link from 'next/link';

import { GithubLogo, Logo } from '@/components/logo';
import { Bars2Icon } from '@heroicons/react/24/outline';

export const NavBar = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-sticky border-b border-gray-6 bg-gray-1/90 backdrop-blur-sm">
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
            <Bars2Icon className="size-5" />
          </button>
        </div>
        <div>
          <a
            href="https://github.com/sangrimlee/algorithm"
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            <span className="sr-only">Github 페이지로 이동</span>
            <GithubLogo className="size-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

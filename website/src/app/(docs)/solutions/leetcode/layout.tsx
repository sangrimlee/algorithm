import { MobileNav } from './_components/mobile-nav';
import { SideNav } from './_components/side-nav';

export default function LeetCodeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MobileNav />
      <SideNav />
      {children}
    </>
  );
}

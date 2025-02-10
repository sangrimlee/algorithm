import { Navbar as NextraNavbar } from 'nextra-theme-docs';

import { Logo } from '@/components/logo';

export const NavBar = () => {
  return <NextraNavbar logo={<Logo />} projectLink="https://github.com/sangrimlee/algorithm" />;
};

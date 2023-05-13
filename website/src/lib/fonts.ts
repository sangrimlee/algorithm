import { Poppins } from 'next/font/google';

export const logo = Poppins({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-logo',
});

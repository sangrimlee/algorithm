import { Noto_Sans_KR, Noto_Sans_Mono, Noto_Serif_KR, Poppins } from 'next/font/google';

export const poppins = Poppins({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-noto-sans',
});

export const notoSerifKR = Noto_Serif_KR({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-noto-serif',
});

export const notoSansMono = Noto_Sans_Mono({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-noto-sans-mono',
});

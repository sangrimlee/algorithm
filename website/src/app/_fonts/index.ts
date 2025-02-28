import { Poppins, Source_Code_Pro } from 'next/font/google';
import localFont from 'next/font/local';

export const poppins = Poppins({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
});

export const pretendard = localFont({
  src: './PretendardVariable.woff2',
  weight: '45 920',
  display: 'swap',
  variable: '--font-pretendard',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
});

export const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-source-code-pro',
  fallback: [
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    "'Liberation Mono'",
    "'Courier New'",
    'monospace',
  ],
});

import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

import { Footer } from './_components/footer';
import { NavBar } from './_components/nav-bar';
import { poppins, pretendard, sourceCodePro } from './_fonts';

import { cx } from '@/utils/cx';
import { env } from '@/env';
import StyledJsxRegistry from './registry';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  metadataBase: new URL(env.URL),
  title: {
    default: 'Algorithm - 문제 풀이 저장소',
    template: '%s | Algorithm',
  },
  description: 'LeetCode와 Programmers의 문제들을 TypeScript를 사용한 문제 풀이 저장소',
  authors: {
    name: 'sangrimlee',
    url: 'https://www.sangrim.dev',
  },
  keywords: ['알고리즘', '코딩테스트', 'LeetCode', 'Programmers', 'TypeScript'],
  openGraph: {
    type: 'website',
    siteName: 'Algorithm',
    locale: 'ko_KR',
    url: new URL(env.URL),
    images: {
      url: new URL('/images/og.png', env.URL),
      alt: 'Algorithm',
      type: 'image/png',
      width: 1200,
      height: 630,
    },
  },
  icons: [
    { url: '/favicon.png', type: 'image/png' },
    { url: '/favicon.svg', type: 'image/svg+xml' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ko"
      dir="ltr"
      className={cx(poppins.variable, pretendard.variable, sourceCodePro.variable)}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css"
          integrity="sha384-zh0CIslj+VczCZtlzBcjt5ppRcsAmDnRem7ESsYwWwg3m/OaJ2l4x7YBZl9Kxxib"
        />
      </head>
      <body>
        <Analytics />
        <StyledJsxRegistry>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            enableColorScheme
            disableTransitionOnChange
          >
            <NavBar />
            {children}
            <Footer />
          </ThemeProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}

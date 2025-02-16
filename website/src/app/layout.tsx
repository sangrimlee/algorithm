import 'nextra-theme-docs/style.css';
import './globals.css';

import type { Metadata } from 'next';
import { Layout } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Analytics } from '@vercel/analytics/react';

import { Footer } from './_components/footer';
import { NavBar } from './_components/nav-bar';
import { poppins, pretendard } from './_fonts';

import { cx } from '@/utils/cx';
import { env } from '@/env';

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ko"
      dir="ltr"
      className={cx(poppins.variable, pretendard.variable)}
      suppressHydrationWarning
    >
      <Head />
      <body>
        <Analytics />
        <Layout
          navbar={<NavBar />}
          footer={<Footer />}
          pageMap={await getPageMap()}
          sidebar={{
            autoCollapse: true,
            defaultMenuCollapseLevel: 1,
          }}
          docsRepositoryBase="https://github.com/sangrimlee/algorithm/tree/main/website"
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}

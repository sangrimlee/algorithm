import Link from 'next/link';

import { ArrowRightIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function NotFound() {
  return (
    <main className="container">
      <div className="flex min-h-(--content-height) flex-col items-center justify-center py-16">
        <h1 className="text-center font-logo text-6xl font-extrabold tracking-tight">Not Found</h1>
        <p className="mt-4 text-center text-lg text-gray-11">찾을 수 없는 페이지입니다.</p>
        <div className="mt-8">
          <Button asChild variant="outline" size="lg">
            <Link href="/">
              <span>홈으로 이동</span>
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

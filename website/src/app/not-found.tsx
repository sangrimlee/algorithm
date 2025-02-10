import { cx } from '@/utils/cx';

export default function NotFoundPage() {
  return (
    <main
      className={cx(
        'min-h-[calc(100vh-var(--nextra-navbar-height))]',
        'relative flex flex-col items-center justify-center',
      )}
    >
      Not Found
    </main>
  );
}

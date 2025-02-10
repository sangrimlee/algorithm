import { clsx } from 'clsx';

export default function NotFoundPage() {
  return (
    <main
      className={clsx(
        'min-h-[calc(100vh-var(--nextra-navbar-height))]',
        'relative flex flex-col items-center justify-center',
      )}
    >
      Not Found
    </main>
  );
}

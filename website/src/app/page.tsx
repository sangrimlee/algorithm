import { cx } from '@/utils/cx';

import { Background } from './_components/background';
import { HeroSection } from './_components/hero-section';

export default function HomePage() {
  return (
    <main
      className={cx(
        'min-h-[calc(100dvh-var(--nextra-navbar-height))]',
        'relative flex flex-col items-center px-6',
      )}
    >
      <Background />
      <HeroSection />
    </main>
  );
}

import { Background } from './_components/background';
import { HeroSection } from './_components/hero-section';
import { Profile } from './_components/profile';
import { cx } from '@/utils/cx';

export default function HomePage() {
  return (
    <main
      className={cx(
        'min-h-[calc(100vh-var(--nextra-navbar-height))]',
        'relative flex flex-col items-center',
      )}
    >
      <Background />
      <HeroSection />
      <Profile />
    </main>
  );
}

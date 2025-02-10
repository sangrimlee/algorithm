import { clsx } from 'clsx';
import { Background } from './_components/background';
import { HeroSection } from './_components/hero-section';
import { Profile } from './_components/profile';

export default function HomePage() {
  return (
    <main
      className={clsx(
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

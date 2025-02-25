import { Background } from './_components/background';
import { HeroSection } from './_components/hero-section';

export default function HomePage() {
  return (
    <main className="relative container min-h-(--content-height)">
      <Background />
      <HeroSection />
    </main>
  );
}

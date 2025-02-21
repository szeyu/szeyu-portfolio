import { theme } from '@/lib/theme';
import AboutMeSection from '@/components/sections/AboutMeSection';

export default function AboutPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ background: theme.colors.primary.dark }}
    >
      <AboutMeSection />
    </main>
  );
}
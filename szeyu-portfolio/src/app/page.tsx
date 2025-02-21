"use client";

import { theme } from '@/lib/theme';
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";

export default function Home() {
  return (
    <main 
      className="relative min-h-screen overflow-hidden"
      style={{ background: theme.colors.primary.dark }}
    >
      <HeroSection />
      <StatsSection />
      <SkillsSection />
      <TechStackSection />
      <FeaturedProjectsSection />
    </main>
  );
}
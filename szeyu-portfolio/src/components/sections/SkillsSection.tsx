import { motion } from 'framer-motion';
import { useRef } from 'react';
import { theme } from '@/lib/theme';
import Particles from '@/components/ui/Backgrounds/Particles/Particles';
import { focusAreas } from '@/data/focusAreas';
import SkillGrid from '@/components/ui/Components/SkillGrid/SkillGrid';

export default function SkillsSection() {
  const sectionRef = useRef(null);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: theme.colors.primary.dark }}
    >
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#64FFDA] to-[#A78BFA]">
              Areas of Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#64FFDA] to-[#A78BFA] mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <SkillGrid focusAreas={focusAreas} />
      </div>
    </section>
  );
}

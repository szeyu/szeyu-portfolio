import { motion } from 'framer-motion';
import Image from 'next/image';
import { theme } from '@/lib/theme';
import ShinyText from '@/components/ui/TextAnimations/ShinyText/ShinyText';
import Link from 'next/link';
import { socialLinks } from '@/data/socialLinks';

export default function HeroSection() {

  // Animation variants for floating effect
  const floatAnimation = {
    float: (i: number) => ({
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: 'reverse',
        delay: i * 0.3,
      }
    })
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A192F] to-[#112240]">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-60 -z-10">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]" />
      </div>

      <div className={`${theme.layout.maxWidth} relative z-10 px-4`}>
        <div className="flex flex-col items-center text-center">
          {/* Main Heading with Gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 pd-2"
          >
            <span className="text-6xl sm:text-7xl font-bold bg-clip-text text-transparent 
                bg-gradient-to-r from-[#A78BFA] to-[#64FFDA] leading-[1.2]">
              I'm Sim Sze Yu
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-sm font-light mb-16"
            style={{ color: theme.colors.text.secondary }}
          >
            Bachelor of Computer Science (AI) | Universiti Malaya
          </motion.p>

          {/* Profile Image with Glow Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 mb-16"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#64FFDA]/30 to-[#A78BFA]/30 blur-xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#64FFDA]/20">
              <Image
                src="/selfpic_transparent_small.png"
                alt="Sim Sze Yu Profile Picture"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Social Media Icons */}
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                className="absolute w-16 h-16 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={social.position}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href={social.url} target="_blank" rel="noopener noreferrer">
                  <div className="w-16 h-16 rounded-full bg-[#112240]/80 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-lg">
                    <Image 
                      src={social.icon} 
                      alt={social.name} 
                      width={24} 
                      height={24}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* "I Build Intelligent Solutions" Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mb-8 pd-2"
          >
            <h2 
              className="text-4xl sm:text-5xl font-bold mb-2"
              style={{ color: theme.colors.text.primary }}
            >
              I Build
            </h2>
            <h2 
              className="text-4xl sm:text-5xl font-bold 
              bg-clip-text text-transparent bg-gradient-to-r 
              from-[#64FFDA] to-[#A78BFA] pd-2"
              style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: '1.5em' }}
            >
              Intelligent Solutions
            </h2>

          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 rounded-md overflow-hidden bg-transparent border border-[#64FFDA]/30"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ShinyText 
                text="View My Projects" 
                disabled={false} 
                speed={3}
              />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-3 rounded-md overflow-hidden bg-[#64FFDA] hover:bg-[#64FFDA]/90 
              transition-colors duration-300"
            >
              <a href="mailto:szeyusim@gmail.com" className="relative text-[#0A192F] font-medium">
                Contact Me
              </a>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
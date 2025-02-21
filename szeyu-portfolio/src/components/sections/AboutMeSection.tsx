"use client";
import { theme } from '@/lib/theme';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Masonry from '@/components/ui/Components/Masonry/Masonry';
import { galleryPhotos } from '@/data/gallery';

export default function AboutMeSection() {
  const heroRef = useRef(null);
  
  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        (heroRef.current as HTMLDivElement).style.transform = `translateY(${scrollY * 0.5}px)`;
        (heroRef.current as HTMLDivElement).style.opacity = (1 - (scrollY * 0.002)).toString();
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Navigation */}
      <div className="fixed top-8 left-8 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-md overflow-hidden bg-black/70 backdrop-blur-md border border-[#64FFDA]/30"
        >
          <Link href="/" className="text-[#64FFDA] font-medium">
            Back
          </Link>
        </motion.button>
      </div>

      {/* Hero Section with Parallax */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 w-full h-full">
          <img 
            src="/aboutMeMedia/intheseaside.jpeg" 
            alt="Sim Sze Yu" 
            className="w-full h-full object-cover object-center filter brightness-50"
          />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tight"
          >
            Sim Sze Yu
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 text-xl md:text-2xl text-[#64FFDA]"
          >
            <span>Developer</span>
            <span className="hidden sm:inline">•</span>
            <span>Photographer</span>
            <span className="hidden sm:inline">•</span>
            <span>Explorer</span>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="#64FFDA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>

      {/* Photo Gallery Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: theme.colors.primary.main }}>
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
          >
            Moments Captured
          </motion.h2>
          <Masonry data={galleryPhotos} />
        </div>
      </div>
    </section>
  );
}
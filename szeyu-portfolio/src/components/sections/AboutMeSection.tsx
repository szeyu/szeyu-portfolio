"use client";
import { theme } from '@/lib/theme';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import AboutMeHeroSection from '@/app/about/AboutMeHeroSection';
import Masonry from '@/components/ui/Components/Masonry/Masonry';
import { galleryPhotos } from '@/data/gallery';
import AboutMeNavigationBack from '@/app/about/AboutMeNavigationBack';

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
      <AboutMeNavigationBack />

      {/* Hero Section with Parallax */}
      <AboutMeHeroSection />

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
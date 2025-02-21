"use client";
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function AboutMeHeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  
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
  );
}
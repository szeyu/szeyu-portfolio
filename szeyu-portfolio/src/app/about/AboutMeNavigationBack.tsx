"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutMeNavigationBack() {
  return (
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
  );
}
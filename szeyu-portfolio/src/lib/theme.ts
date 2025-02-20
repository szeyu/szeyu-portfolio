export const theme = {
  colors: {
    // Primary Colors
    primary: {
      dark: '#0A192F',    // Deep navy background
      main: '#112240',    // Lighter navy for sections
      light: '#233554',   // Highlights
    },
    // Accent Colors
    accent: {
      blue: '#64FFDA',    // Bright teal for highlights
      purple: '#A78BFA',  // Soft purple for variety
      muted: '#8892B0',   // Muted blue for secondary text
    },
    // Text Colors
    text: {
      primary: '#E2E8F0',  // Main text
      secondary: '#94A3B8', // Secondary text
      highlight: '#64FFDA', // Highlighted text
    },
  },
  gradients: {
    blue: 'from-[#64FFDA] to-[#0EA5E9]',
    purple: 'from-[#A78BFA] to-[#64FFDA]',
  },
  layout: {
    sectionPadding: 'py-24 px-4 sm:px-6 lg:px-8',
    maxWidth: 'max-w-7xl mx-auto',
  }
} as const; 
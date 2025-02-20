import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        purple: {
          400: '#c084fc',
        },
        pink: {
          600: '#db2777',
        },
        gray: {
          300: '#d1d5db',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
}
export default config
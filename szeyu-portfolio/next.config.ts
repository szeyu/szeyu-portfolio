import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'streamlit.io',
        port: '',
        pathname: '/images/brand/**',
      },
      {
        protocol: 'https',
        hostname: 'vitejs.dev',
        port: '',
        pathname: '/logo.svg',
      },
      {
        protocol: 'https',
        hostname: 'supabase.com',
        port: '',
        pathname: '/_next/static/media/**',
      },
      {
        protocol: 'https',
        hostname: 'www.gstatic.com',
        port: '',
        pathname: '/devrel-img/firebase/**',
      },
      {
        protocol: 'https',
        hostname: 'huggingface.co',
        port: '',
        pathname: '/front/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'www.sqlite.org',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}

export default nextConfig;

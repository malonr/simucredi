import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimizaciones de rendimiento
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },
  
  // Optimizar imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  
  // Headers optimizados para SEO y performance
  async headers() {
    return [
      // Páginas HTML - Cache moderado para permitir actualizaciones
      {
        source: '/((?!_next|api).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400', // 1 hora con revalidación
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ],
      },
      // Assets estáticos - Cache largo
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 año
          },
        ],
      },
      // API routes - Sin cache
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
      // SEO files - Cache moderado
      {
        source: '/(robots.txt|sitemap.xml|manifest.json)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400', // 24 horas
          },
        ],
      },
    ];
  },
  
  // Compresión
  compress: true,
};

export default nextConfig;

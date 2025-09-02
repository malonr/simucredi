'use client';

import { useEffect } from 'react';

// Tipos para Web Vitals
interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
  rating: 'good' | 'needs-improvement' | 'poor';
  navigationType: string;
}

// Función para enviar métricas (puedes integrar con Google Analytics, etc.)
function sendToAnalytics(metric: WebVitalMetric) {
  // Enviar a Google Analytics si está configurado
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as { gtag?: (command: string, action: string, parameters: object) => void }).gtag;
    if (gtag) {
      gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      });
    }
  }

  // Log en development para debugging
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', metric.name, {
      value: metric.value,
      rating: metric.rating,
      id: metric.id
    });
  }

  // Aquí puedes agregar otros servicios de analytics
  // Por ejemplo: Mixpanel, Amplitude, etc.
}

export default function WebVitals() {
  useEffect(() => {
    // Importar dinámicamente web-vitals para reducir el bundle
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      // Cumulative Layout Shift
      onCLS((metric) => {
        sendToAnalytics({
          name: 'CLS',
          value: metric.value,
          id: metric.id,
          rating: metric.rating,
          navigationType: metric.navigationType
        });
      });

      // Interaction to Next Paint (reemplaza FID en web-vitals v5)
      onINP((metric) => {
        sendToAnalytics({
          name: 'INP',
          value: metric.value,
          id: metric.id,
          rating: metric.rating,
          navigationType: metric.navigationType
        });
      });

      // First Contentful Paint
      onFCP((metric) => {
        sendToAnalytics({
          name: 'FCP',
          value: metric.value,
          id: metric.id,
          rating: metric.rating,
          navigationType: metric.navigationType
        });
      });

      // Largest Contentful Paint
      onLCP((metric) => {
        sendToAnalytics({
          name: 'LCP',
          value: metric.value,
          id: metric.id,
          rating: metric.rating,
          navigationType: metric.navigationType
        });
      });

      // Time to First Byte
      onTTFB((metric) => {
        sendToAnalytics({
          name: 'TTFB',
          value: metric.value,
          id: metric.id,
          rating: metric.rating,
          navigationType: metric.navigationType
        });
      });
    }).catch((error) => {
      console.warn('Failed to load web-vitals:', error);
    });
  }, []);

  // Este componente no renderiza nada visible
  return null;
}
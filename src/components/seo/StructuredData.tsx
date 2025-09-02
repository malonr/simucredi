import Script from 'next/script'

interface StructuredDataProps {
  data: object
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Structured data para la aplicación web
export const webApplicationData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Simucredi",
  "alternateName": "Simulador de Crédito",
  "description": "Simulador de cuotas de crédito y tarjetas. Calcula intereses, amortización y costos reales de préstamos de forma gratuita y precisa.",
  "url": "https://simucredi.com",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "browserRequirements": "Requires JavaScript. Requires HTML5.",
  "creator": {
    "@type": "Person",
    "name": "Marlon Ramirez Lizcano",
    "email": "marlon.ramirezlizcano@gmail.com",
    "url": "https://www.linkedin.com/in/marlonramirezlizcano/"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "featureList": [
    "Cálculo de cuotas de crédito",
    "Tabla de amortización detallada", 
    "Cálculo de intereses totales",
    "Simulación en tiempo real",
    "Interfaz responsive",
    "Sin necesidad de registro"
  ],
  "screenshot": "https://simucredi.com/og-image.jpg",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  }
}

// Structured data para calculadora financiera
export const calculatorData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Calculadora de Cuotas de Crédito",
  "description": "Herramienta online gratuita para calcular cuotas de préstamos y tarjetas de crédito con tabla de amortización completa.",
  "url": "https://simucredi.com/simulador",
  "applicationCategory": "FinanceApplication",
  "applicationSubCategory": "Calculator",
  "operatingSystem": "Web",
  "permissions": "No requiere permisos especiales",
  "isAccessibleForFree": true,
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Person", 
    "name": "Marlon Ramirez Lizcano"
  },
  "potentialAction": {
    "@type": "UseAction",
    "target": "https://simucredi.com/simulador",
    "object": {
      "@type": "DigitalDocument",
      "name": "Simulación de Crédito"
    }
  }
}

// Structured data para organización
export const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Simucredi",
  "url": "https://simucredi.com",
  "logo": "https://simucredi.com/icon-512.png",
  "description": "Plataforma online gratuita para simulación de créditos y cálculo de cuotas con precisión financiera.",
  "founder": {
    "@type": "Person",
    "name": "Marlon Ramirez Lizcano",
    "email": "marlon.ramirezlizcano@gmail.com",
    "sameAs": [
      "https://www.linkedin.com/in/marlonramirezlizcano/"
    ]
  },
  "sameAs": [
    "https://simucredi.com"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "marlon.ramirezlizcano@gmail.com"
  }
}

// Structured data para FAQ
export const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo funciona el simulador de crédito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El simulador calcula las cuotas mensuales basándose en el monto del préstamo, la tasa de interés anual y el número de cuotas. Utiliza la fórmula de amortización francesa para generar una tabla completa con capital, intereses y saldo pendiente."
      }
    },
    {
      "@type": "Question", 
      "name": "¿Es gratuito usar Simucredi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, Simucredi es completamente gratuito. No requiere registro, no tiene límites de uso y no solicita información personal."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué información necesito para simular un crédito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Solo necesitas tres datos: el monto que deseas financiar, la tasa de interés anual (TNA) y el número de cuotas en las que quieres pagar."
      }
    },
    {
      "@type": "Question",
      "name": "¿Los resultados son exactos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los cálculos utilizan fórmulas financieras estándar con precisión de centavos. Sin embargo, siempre consulta con tu entidad financiera los términos exactos de tu crédito."
      }
    }
  ]
}
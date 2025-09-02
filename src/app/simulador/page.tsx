import type { Metadata } from "next";
import CreditSimulatorClient from '@/components/simulador/CreditSimulatorClient';
import Header from '@/components/ui/Header';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { StructuredData, calculatorData } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: "Simulador de Cuotas de Crédito | Calculadora Financiera - Simucredi",
  description: "Calcula cuotas de crédito, intereses y tabla de amortización. Herramienta gratuita para simular préstamos y tarjetas de crédito. Obtén resultados precisos al instante.",
  keywords: ["simulador crédito", "calculadora cuotas", "amortización", "intereses", "préstamos", "tarjeta de crédito", "financiero"],
  openGraph: {
    title: "Simulador de Cuotas de Crédito | Calculadora Financiera",
    description: "Calcula tus cuotas de crédito de forma precisa. Herramienta gratuita con tabla de amortización completa.",
    type: "website",
    locale: "es_AR",
    siteName: "Simucredi"
  },
  twitter: {
    card: "summary_large_image",
    title: "Simulador de Cuotas de Crédito | Calculadora Financiera",
    description: "Calcula tus cuotas de crédito de forma precisa. Herramienta gratuita con tabla de amortización completa."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/simulador"
  }
};

export default function SimuladorPage() {
  const breadcrumbItems = [
    { label: "Inicio", href: "/" },
    { label: "Simulador de Crédito" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <StructuredData data={calculatorData} />
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontSize: '1.875rem' }}>
              Calculadora de Cuotas de Crédito
            </h1>
            <p className="text-lg text-gray-600">
              Calcula tus cuotas de crédito de forma rápida y sencilla con tabla de amortización
            </p>
          </header>
          
          <CreditSimulatorClient />
        </div>
      </div>
    </div>
  );
}

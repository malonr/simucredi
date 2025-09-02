import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StructuredData, webApplicationData, organizationData } from "@/components/seo/StructuredData";
import WebVitals from "@/components/analytics/WebVitals";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Simucredi - Simulador de Crédito",
    template: "%s | Simucredi"
  },
  description: "Simula tus cuotas de tarjeta de crédito en segundos. Calculá fácilmente cuánto pagarás en cada cuota y descubre el costo real de tu compra.",
  keywords: ["simulador crédito", "calculadora financiera", "cuotas", "amortización", "préstamos", "intereses", "Argentina"],
  authors: [{ name: "Marlon Ramirez Lizcano" }],
  creator: "Marlon Ramirez Lizcano",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    title: "Simucredi - Simulador de Crédito",
    description: "Simula tus cuotas de tarjeta de crédito en segundos. Calculá fácilmente cuánto pagarás en cada cuota.",
    siteName: "Simucredi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simucredi - Simulador de Crédito",
    description: "Simula tus cuotas de tarjeta de crédito en segundos. Calculá fácilmente cuánto pagarás en cada cuota.",
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
  verification: {
    google: "google-site-verification-code", // Reemplazar con código real
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Simucredi" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Simucredi" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData data={webApplicationData} />
        <StructuredData data={organizationData} />
        <WebVitals />
        {children}
      </body>
    </html>
  );
}

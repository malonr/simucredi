'use client';

import dynamic from 'next/dynamic';

const CreditSimulatorNoSSR = dynamic(() => import('./CreditSimulator'), { ssr: false });

export default function CreditSimulatorClient() {
  return <CreditSimulatorNoSSR />;
}

import CreditSimulatorClient from '@/components/simulador/CreditSimulatorClient';
import Header from '@/components/ui/Header';

export default function SimuladorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontSize: '1.875rem' }}>
              Simulador de Crédito
            </h1>
            <p className="text-lg text-gray-600">
              Calcula tus cuotas de tu crédito de forma rápida y sencilla
            </p>
          </header>
          
          <CreditSimulatorClient />
        </div>
      </div>
    </div>
  );
}

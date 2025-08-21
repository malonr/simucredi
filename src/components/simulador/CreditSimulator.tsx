'use client';

import { useState, useMemo, useEffect, useCallback, memo } from 'react';
import { CreditData } from '@/types/credit';
import { calcularResumen, formatearMoneda, calcularTablaAmortizacion } from '@/lib/calculations';
import CreditForm from './CreditForm';
import CreditSummary from './CreditSummary';
import dynamic from 'next/dynamic';

// Lazy load de la tabla de amortización
const AmortizationTable = dynamic(() => import('./AmortizationTable'), {
  loading: () => <div className="mt-8 p-4 bg-gray-50 rounded-lg text-center">Cargando tabla...</div>,
  ssr: false
});

// Memoizar el formulario para evitar re-renders innecesarios
const MemoizedCreditForm = memo(CreditForm);
const MemoizedCreditSummary = memo(CreditSummary);

export default function CreditSimulator() {
  const [creditData, setCreditData] = useState<CreditData>({
    monto: 0,
    tasaAnual: 0,
    cuotas: 0
  });
  const [showTable, setShowTable] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setCreditData({
      monto: 1000,
      tasaAnual: 21,
      cuotas: 12
    });
  }, []);

  // Optimizar cálculos con useMemo
  const resumen = useMemo(() => {
    if (!isClient) return { valorCuota: 0, montoTotal: 0, interesesTotales: 0 };
    return calcularResumen(creditData.monto, creditData.tasaAnual, creditData.cuotas);
  }, [creditData.monto, creditData.tasaAnual, creditData.cuotas, isClient]);

  const tablaAmortizacion = useMemo(() => {
    if (!isClient || !showTable) return [];
    return calcularTablaAmortizacion(creditData.monto, creditData.tasaAnual, creditData.cuotas);
  }, [creditData.monto, creditData.tasaAnual, creditData.cuotas, isClient, showTable]);

  // Optimizar handlers con useCallback
  const handleDataChange = useCallback((newData: Partial<CreditData>) => {
    setCreditData(prev => ({ ...prev, ...newData }));
  }, []);

  const handleToggleTable = useCallback(() => {
    setShowTable(prev => !prev);
  }, []);

  if (!isClient) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Simulador de cuotas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* Placeholder para el formulario */}
              <div className="flex items-center justify-between">
                <label className="text-gray-700 font-medium">Monto de la compra</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input 
                    className="pl-8 pr-4 py-3 border border-gray-300 rounded-md w-44 text-right text-lg text-black" 
                    disabled 
                    value=""
                    suppressHydrationWarning
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-gray-700 font-medium">Tasa de interés anual (%)</label>
                <div className="relative">
                  <input 
                    className="pr-8 pl-4 py-3 border border-gray-300 rounded-md w-44 text-right text-lg text-black" 
                    disabled 
                    value=""
                    suppressHydrationWarning
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-gray-700 font-medium">Número de cuotas (meses)</label>
                <div className="relative">
                  <input 
                    className="pr-16 pl-4 py-3 border border-gray-300 rounded-md w-44 text-right text-lg text-black" 
                    disabled 
                    value=""
                    suppressHydrationWarning
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">meses</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Resumen</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Valor de cada cuota</span>
                  <span className="text-xl font-bold text-blue-600" suppressHydrationWarning>$0,00</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Monto total a pagar</span>
                  <span className="text-xl font-bold text-green-600" suppressHydrationWarning>$0,00</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Intereses totales</span>
                  <span className="text-xl font-bold text-red-600" suppressHydrationWarning>$0,00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Simulador de cuotas
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <MemoizedCreditForm 
            data={creditData} 
            onChange={handleDataChange} 
          />
          
          <MemoizedCreditSummary 
            resumen={resumen}
            formatearMoneda={formatearMoneda}
            onToggleTable={handleToggleTable}
            isOpen={showTable}
          />
        </div>

        {showTable && (
          <AmortizationTable 
            data={tablaAmortizacion} 
            montoInicial={creditData.monto}
            cuotas={creditData.cuotas}
            tasaAnual={creditData.tasaAnual}
            interesesTotales={resumen.interesesTotales}
          />
        )}
      </div>
    </div>
  );
}

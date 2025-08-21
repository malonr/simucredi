'use client';

import { CreditSummary as CreditSummaryType } from '@/types/credit';

interface CreditSummaryProps {
  resumen: CreditSummaryType;
  formatearMoneda: (valor: number) => string;
  onToggleTable: () => void;
  isOpen: boolean;
}

export default function CreditSummary({ resumen, formatearMoneda, onToggleTable, isOpen }: CreditSummaryProps) {
  return (
    <div className="space-y-6" aria-labelledby="resumen-heading">
      <h3 id="resumen-heading" className="text-lg font-semibold text-gray-800 mb-4">
        Resumen
      </h3>
      
      <div className="space-y-4" role="list">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg" role="listitem">
          <span className="text-gray-700 font-medium">
            Valor de cada cuota
          </span>
          <span className="text-xl font-bold text-blue-600">
            {formatearMoneda(resumen.valorCuota)}
          </span>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg" role="listitem">
          <span className="text-gray-700 font-medium">
            Monto total a pagar
          </span>
          <span className="text-xl font-bold text-green-600">
            {formatearMoneda(resumen.montoTotal)}
          </span>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg" role="listitem">
          <span className="text-gray-700 font-medium">
            Intereses totales
          </span>
          <span className="text-xl font-bold text-red-600">
            {formatearMoneda(resumen.interesesTotales)}
          </span>
        </div>
      </div>

      <button
        onClick={onToggleTable}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition"
        aria-label={isOpen ? 'Ocultar tabla de amortización' : 'Generar tabla de amortización'}
      >
        {isOpen ? 'Ocultar tabla de amortización' : 'Generar tabla de amortización'}
      </button>

      {resumen.interesesTotales > 0 && (
        <div className="mt-2 p-4 bg-blue-50 border border-blue-200 rounded-lg" aria-live="polite">
          <p className="text-sm text-blue-800">
            💡 <strong>Consejo:</strong> Los intereses representan el{' '}
            <strong>
              {((resumen.interesesTotales / (resumen.montoTotal - resumen.interesesTotales)) * 100).toFixed(1)}%
            </strong>{' '}
            del monto original de tu compra.
          </p>
        </div>
      )}
    </div>
  );
}

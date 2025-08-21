'use client';

import { useCallback, memo } from 'react';
import { CreditData } from '@/types/credit';

interface CreditFormProps {
  data: CreditData;
  onChange: (data: Partial<CreditData>) => void;
}

function CreditForm({ data, onChange }: CreditFormProps) {
  const handleInputChange = useCallback((field: keyof CreditData, value: string) => {
    const numValue = parseFloat(value) || 0;
    onChange({ [field]: numValue });
  }, [onChange]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <label htmlFor="monto" className="text-gray-700 font-medium">
          Monto de la compra
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            $
          </span>
          <input
            id="monto"
            type="number"
            value={data.monto || ''}
            onChange={(e) => handleInputChange('monto', e.target.value)}
            className="pl-8 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent w-44 text-right text-lg text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            placeholder="0"
            min="0"
            step="0.01"
            inputMode="decimal"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label htmlFor="tasa" className="text-gray-700 font-medium">
          Tasa de interés anual (%)
        </label>
        <div className="relative">
          <input
            id="tasa"
            type="number"
            value={data.tasaAnual || ''}
            onChange={(e) => handleInputChange('tasaAnual', e.target.value)}
            className="pr-8 pl-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent w-44 text-right text-lg text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            placeholder="0"
            min="0"
            step="0.1"
            inputMode="decimal"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            %
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label htmlFor="cuotas" className="text-gray-700 font-medium">
          Número de cuotas (meses)
        </label>
        <div className="relative">
          <input
            id="cuotas"
            type="number"
            aria-label="Número de cuotas en meses"
            value={data.cuotas || ''}
            onChange={(e) => handleInputChange('cuotas', e.target.value)}
            className="pr-16 pl-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent w-44 text-right text-lg text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            placeholder="0"
            min="1"
            step="1"
            inputMode="numeric"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
            meses
          </span>
        </div>
      </div>
    </div>
  );
}

export default memo(CreditForm);

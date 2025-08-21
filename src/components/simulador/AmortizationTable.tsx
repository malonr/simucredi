import { CuotaAmortizacion } from '@/types/credit';
import { formatearMoneda } from '@/lib/calculations';

interface AmortizationTableProps {
  data: CuotaAmortizacion[];
  montoInicial: number;
  cuotas: number;
  tasaAnual: number;
  interesesTotales: number;
}

export default function AmortizationTable({ data, montoInicial, cuotas, tasaAnual, interesesTotales }: AmortizationTableProps) {
  if (!data || data.length === 0) return null;

  return (
    <section className="mt-8" aria-labelledby="amortizacion-heading">
      <h3 id="amortizacion-heading" className="text-2xl font-bold text-gray-800 mb-4" style={{ fontSize: '1.5rem' }}>Tabla de amortización</h3>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <caption className="text-left text-sm text-gray-600 px-4 py-2">Detalle de pagos por cuota</caption>
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-700">N° Cuota</th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Saldo Inicial</th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Pago Mensual</th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Interés</th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Abono a Capital</th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Saldo pendiente</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {data.map((fila) => (
                <tr key={fila.numero} className="hover:bg-gray-50">
                  <th scope="row" className="px-4 py-3 text-sm text-gray-700 font-medium">{fila.numero}</th>
                  <td className="px-4 py-3 text-sm text-gray-700">{formatearMoneda(fila.saldoInicial)}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{formatearMoneda(fila.cuota)}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{formatearMoneda(fila.interes)}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{formatearMoneda(fila.capital)}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{formatearMoneda(fila.saldoPendiente)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Resumen inferior */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6" aria-label="Resumen de crédito">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-500">Monto inicial</div>
          <div className="text-lg font-semibold text-gray-900">{formatearMoneda(montoInicial)}</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-500">Plazo</div>
          <div className="text-lg font-semibold text-gray-900">{cuotas} meses</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-500">Tasa anual</div>
          <div className="text-lg font-semibold text-gray-900">{tasaAnual}%</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-500">Total en intereses</div>
          <div className="text-lg font-semibold text-gray-900">{formatearMoneda(interesesTotales)}</div>
        </div>
      </div>
    </section>
  );
}

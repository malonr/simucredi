import { CuotaAmortizacion, CreditSummary } from '@/types/credit';

// Cache para cálculos repetitivos
const calculationCache = new Map<string, CuotaAmortizacion[]>();

function getCacheKey(monto: number, tasaAnual: number, cuotas: number): string {
  return `${monto}-${tasaAnual}-${cuotas}`;
}

export function calcularTablaAmortizacion(
  monto: number,
  tasaAnual: number,
  cuotas: number
): CuotaAmortizacion[] {
  if (monto <= 0 || tasaAnual <= 0 || cuotas <= 0) {
    return [];
  }

  const cacheKey = getCacheKey(monto, tasaAnual, cuotas);
  if (calculationCache.has(cacheKey)) {
    return calculationCache.get(cacheKey)!;
  }

  const tasaMensual = tasaAnual / 12 / 100;
  const cuotaMensual = (monto * tasaMensual * Math.pow(1 + tasaMensual, cuotas)) /
    (Math.pow(1 + tasaMensual, cuotas) - 1);

  const tabla: CuotaAmortizacion[] = [];
  let saldoPendiente = monto;

  for (let i = 1; i <= cuotas; i++) {
    const saldoInicial = saldoPendiente;
    const interes = saldoInicial * tasaMensual;
    const capital = cuotaMensual - interes;
    saldoPendiente = saldoInicial - capital;

    tabla.push({
      numero: i,
      saldoInicial: Math.round(saldoInicial * 100) / 100,
      capital: Math.round(capital * 100) / 100,
      interes: Math.round(interes * 100) / 100,
      cuota: Math.round(cuotaMensual * 100) / 100,
      saldoPendiente: Math.max(0, Math.round(saldoPendiente * 100) / 100)
    });
  }

  // Cachear resultado para futuras consultas
  calculationCache.set(cacheKey, tabla);
  
  // Limpiar cache si es muy grande (más de 100 entradas)
  if (calculationCache.size > 100) {
    const firstKey = calculationCache.keys().next().value;
    if (firstKey) {
      calculationCache.delete(firstKey);
    }
  }

  return tabla;
}

export function calcularResumen(
  monto: number,
  tasaAnual: number,
  cuotas: number
): CreditSummary {
  if (monto <= 0 || tasaAnual <= 0 || cuotas <= 0) {
    return {
      valorCuota: 0,
      montoTotal: 0,
      interesesTotales: 0,
    };
  }

  const tabla = calcularTablaAmortizacion(monto, tasaAnual, cuotas);
  if (tabla.length === 0) {
    return {
      valorCuota: 0,
      montoTotal: 0,
      interesesTotales: 0,
    };
  }

  const valorCuota = tabla[0].cuota;
  const montoTotal = valorCuota * cuotas;
  const interesesTotales = montoTotal - monto;

  return {
    valorCuota: Math.round(valorCuota * 100) / 100,
    montoTotal: Math.round(montoTotal * 100) / 100,
    interesesTotales: Math.round(interesesTotales * 100) / 100,
  };
}

// Memoizar formateo de moneda
const currencyFormatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatearMoneda(valor: number): string {
  return currencyFormatter.format(valor);
}

export interface CreditData {
  monto: number;
  tasaAnual: number;
  cuotas: number;
}

export interface CuotaAmortizacion {
  numero: number;
  saldoInicial: number;
  capital: number;
  interes: number;
  cuota: number;
  saldoPendiente: number;
}

export interface CreditSummary {
  valorCuota: number;
  montoTotal: number;
  interesesTotales: number;
}

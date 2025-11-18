export type Table = dataTable[]

export interface dataTable {
  fecha: string
  referencia: string
  referenciaDestino: string
  operadorOrigen: number
  operadorDestino: number
  nombreOperadorOrigen: string
  nombreOperadorDestino: string
  centroOrigen: number
  centroDestino: number
  nombreCentroOrigen: string
  nombreCentroDestino: string
  tipo: number
  tipoMovimiento: string
  horaCarga: string
  pedido?: string
  articulo: number
  descripcionArticulo: string
  cantidad: number
  observaciones: string
}
export enum Color {
  rojo, negro, azul, rosa
}

export interface Persona {
  id: number,
  nombre: string,
  activo: boolean,
  color: Color,
}

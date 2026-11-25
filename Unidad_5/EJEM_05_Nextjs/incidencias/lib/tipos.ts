export const ESTADOS = ["abierta", "en_curso", "resuelta"] as const;

export type EstadoIncidencia = (typeof ESTADOS)[number];

// Record<Clave, Valor> describe un objeto con una entrada por cada valor de «Clave».
// Aquí: una clave por cada estado (abierta, en_curso, resuelta) y un texto como valor.
// TypeScript avisa si falta algún estado o sobra alguno. Es lo mismo que escribir
// { abierta: string; en_curso: string; resuelta: string }, sin repetir las claves.
export const ETIQUETAS_ESTADO: Record<EstadoIncidencia, string> = {
  abierta: "Abierta",
  en_curso: "En curso",
  resuelta: "Resuelta",
};

export interface Incidencia {
  id: number;
  titulo: string;
  descripcion: string;
  estado: EstadoIncidencia;
  aula: string;
  apoyos: number;
  creada: string; // fecha ISO: "2026-11-16"
}

// Guarda de tipos: comprueba en tiempo de ejecución lo que TypeScript solo
// sabe en tiempo de compilación (un valor de la URL siempre llega como string).
export function esEstado(valor: unknown): valor is EstadoIncidencia {
  return typeof valor === "string" && (ESTADOS as readonly string[]).includes(valor);
}

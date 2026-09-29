// Enum para los estados posibles de un curso
export enum EstadoCurso {
  Activo = "ACTIVO",
  Pendiente = "PENDIENTE",
  Finalizado = "FINALIZADO"
}

// Tipo unión para calificaciones o niveles
export type NivelEstudio = "Principiante" | "Intermedio" | "Avanzado";

// Interfaz para el Curso
export interface Curso {
  id: number;
  nombre: string;
  nivel: NivelEstudio;
  estado: EstadoCurso;
}

// Interfaz para el Alumno
export interface Alumno {
  id: number;
  nombre: string;
  edad: number;
  cursosInscritos: Curso[];
}
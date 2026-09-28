export declare enum EstadoCurso {
    Activo = "ACTIVO",
    Pendiente = "PENDIENTE",
    Finalizado = "FINALIZADO"
}
export type NivelEstudio = "Principiante" | "Intermedio" | "Avanzado";
export interface Curso {
    id: number;
    nombre: string;
    nivel: NivelEstudio;
    estado: EstadoCurso;
}
export interface Alumno {
    id: number;
    nombre: string;
    edad: number;
    cursosInscritos: Curso[];
}
//# sourceMappingURL=modelos.d.ts.map
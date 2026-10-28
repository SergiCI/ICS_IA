export type Prioridad = "alta" | "media" | "baja";
export type FiltroPrioridad = Prioridad | "todas";
export interface Tarea {
    id: number;
    texto: string;
    completada: boolean;
    prioridad: Prioridad;
}
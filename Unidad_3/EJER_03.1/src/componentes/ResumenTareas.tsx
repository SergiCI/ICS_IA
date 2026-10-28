import type { Tarea } from "../tipos/tipos";

interface PropsResumenTareas {
    tareasVisibles: Tarea[];
    totalTareas: number;
}

export function ResumenTareas({ tareasVisibles, totalTareas }: PropsResumenTareas) {
    // Evaluamos en estricto orden según los requisitos
    if (tareasVisibles.length === 0) {
        return <p className="resumen-mensaje">No hay tareas para este filtro.</p>;
    }

    const todasCompletadas = tareasVisibles.every((t) => t.completada);
    if (todasCompletadas) {
        return (
            <p className="resumen-mensaje resumen-exito">
                ¡Felicidades! Has completado todas las tareas de esta sección.
            </p>
        );
    }

    return (
        <p className="resumen-mensaje">
            Mostrando {tareasVisibles.length} de {totalTareas} tareas.
        </p>
    );
}
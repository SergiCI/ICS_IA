import type { Tarea } from "../tipos/tipos";
import { TareaItem } from "./TareaItem";

interface PropsListaTareas {
    tareas: Tarea[];
    onToggleCompletada: (id: number) => void;
}

export function ListaTareas({ tareas, onToggleCompletada }: PropsListaTareas) {
    if (tareas.length === 0) {
        return null;
    }

    return (
        <ul className="lista-tareas">
            {tareas.map((tarea) => (
                <TareaItem
                    key={tarea.id}
                    tarea={tarea}
                    onToggleCompletada={onToggleCompletada}
                />
            ))}
        </ul>
    );
}
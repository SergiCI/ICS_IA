import type { Tarea } from "../tipos/tipos";

interface PropsTareaItem {
    tarea: Tarea;
    onToggleCompletada: (id: number) => void;
}

export function TareaItem({ tarea, onToggleCompletada }: PropsTareaItem) {
    const handleToggle = () => {
        onToggleCompletada(tarea.id);
    };

    return (
        <li className={`tarea-item tarea--${tarea.prioridad} ${tarea.completada ? "tarea--completada" : ""}`}>
            <label className="tarea-content">
                <input
                    type="checkbox"
                    checked={tarea.completada}
                    onChange={handleToggle}
                    aria-label={`Marcar como ${tarea.completada ? "pendiente" : "completada"}: ${tarea.texto}`}
                />
                <span className="tarea-texto">{tarea.texto}</span>
            </label>
            <span className={`badge badge--${tarea.prioridad}`}>
                {tarea.prioridad.toUpperCase()}
            </span>
        </li>
    );
}
import { useState } from "react";
import type { FiltroPrioridad, Tarea } from "./tipos/tipos";
import { Filtros } from "./componentes/Filtros";
import { ResumenTareas } from "./componentes/ResumenTareas";
import { ListaTareas } from "./componentes/ListaTareas";
import "./App.css";

const tareasIniciales: Tarea[] = [
  { id: 1, texto: "Aprender sobre renderizado de listas en React", completada: true, prioridad: "alta" },
  { id: 2, texto: "Implementar el filtrado de tareas", completada: false, prioridad: "alta" },
  { id: 3, texto: "Entender cómo se eleva el estado", completada: false, prioridad: "media" },
  { id: 4, texto: "Estilizar los componentes con Bootstrap", completada: true, prioridad: "baja" },
  { id: 5, texto: "Crear el componente de resumen condicional", completada: false, prioridad: "media" },
  { id: 6, texto: "Desplegar la aplicación en Netlify", completada: false, prioridad: "baja" },
];

export function App() {
  // Únicos dos estados permitidos
  const [tareas, setTareas] = useState<Tarea[]>(tareasIniciales);
  const [filtro, setFiltro] = useState<FiltroPrioridad>("todas");

  // Cálculo derivado en cada render (sin mutaciones ni estados duplicados)
  const tareasVisibles = tareas.filter((tarea) => {
    if (filtro === "todas") return true;
    return tarea.prioridad === filtro;
  });

  // Modificación inmutable del estado
  const handleToggleCompletada = (id: number) => {
    setTareas((prevTareas) =>
      prevTareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  return (
    <div className="app-container">
      <h1>Dashboard de Tareas</h1>
      <Filtros filtroActual={filtro} onCambiarFiltro={setFiltro} />
      <ResumenTareas tareasVisibles={tareasVisibles} totalTareas={tareas.length} />
      <ListaTareas tareas={tareasVisibles} onToggleCompletada={handleToggleCompletada} />
    </div>
  );
}

export default App;

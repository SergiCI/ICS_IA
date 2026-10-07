import { useState } from "react";

interface Tarea {
  id: number;
  texto: string;
  hecha: boolean;
}

// Concepto: inmutabilidad (añadir, modificar y quitar creando copias).
export default function Ejemplo05_ListaTareas() {
  const [tareas, setTareas] = useState<Tarea[]>([
    { id: 1, texto: "Estudiar useState", hecha: false },
    { id: 2, texto: "Practicar eventos", hecha: false },
  ]);
  const [texto, setTexto] = useState<string>("");

  const anadir = () => {
    // Si el texto está vacío o solo tiene espacios, no añadimos ninguna tarea.
    if (texto.trim() === "") return;

    // Creamos un nuevo array: copiamos las tareas actuales y añadimos una nueva al final.
    // Nunca usamos push sobre el array anterior porque eso mutaría el estado.
    setTareas([...tareas, { id: Date.now(), texto, hecha: false }]); // copia + nuevo

    // Tras añadir la tarea, limpiamos el campo de texto del formulario.
    setTexto("");
  };

  const alternar = (id: number) => {
    // map recorre cada tarea y devuelve un array nuevo.
    // Si la tarea coincide con el id recibido, crea una copia del objeto con la propiedad hecha invertida.
    // Si no coincide, mantiene la tarea original sin cambios.
    setTareas(tareas.map((t) => (t.id === id ? { ...t, hecha: !t.hecha } : t)));
  };

  const quitar = (id: number) => {
    // filter devuelve un nuevo array con todas las tareas excepto la que tiene ese id.
    // Así eliminamos la tarea sin mutar el array original.
    setTareas(tareas.filter((t) => t.id !== id));
  };

  return (
    <div className="ejemplo">
      <h2>05 · Inmutabilidad</h2>
      <input value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Nueva tarea" />{" "}
      <button onClick={anadir}>Añadir</button>
      <ul>
        {tareas.map((t) => (
          <li key={t.id}>
            <input type="checkbox" checked={t.hecha} onChange={() => alternar(t.id)} />{" "}
            <span style={{ textDecoration: t.hecha ? "line-through" : "none" }}>{t.texto}</span>{" "}
            <button onClick={() => quitar(t.id)}>Quitar</button>
          </li>
        ))}
      </ul>
      <p className="nota">Nunca usamos push ni splice: siempre un array nuevo.</p>
    </div>
  );
}

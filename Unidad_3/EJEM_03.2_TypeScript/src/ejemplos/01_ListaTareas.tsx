import { useState, type FormEvent } from "react";

interface Tarea {
  id: string;
  texto: string;
  completada: boolean;
}

const tareasIniciales: Tarea[] = [
  { id: "t1", texto: "Aprender React", completada: true },
  { id: "t2", texto: "Recomendar este tema", completada: false },
];

interface PropsItemTarea {
  tarea: Tarea;
  alAlternar: (id: string) => void;
  alEliminar: (id: string) => void;
}

function ItemTarea({ tarea, alAlternar, alEliminar }: PropsItemTarea) {
  return (
    <li>
      <label
        style={{ textDecoration: tarea.completada ? "line-through" : "none" }}
      >
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => alAlternar(tarea.id)}
        />
        {tarea.texto}
      </label>
      <button
        onClick={() => alEliminar(tarea.id)}
        aria-label={`Eliminar ${tarea.texto}`}
      >
        ✕
      </button>
    </li>
  );
}

export default function ListaTareas() {
  // Sin <Tarea[]>, un array vacío se infiere como never[] y no admite nada
  const [tareas, setTareas] = useState<Tarea[]>(tareasIniciales);
  const [texto, setTexto] = useState("");

  function agregarTarea(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const textoLimpio = texto.trim();
    if (textoLimpio === "") return;

    const nueva: Tarea = {
      id: crypto.randomUUID(), // id único generado AL CREAR el dato
      texto: textoLimpio,
      completada: false,
    };
    setTareas((actuales) => [nueva, ...actuales]); // al principio, sin mutar
    setTexto("");
  }

  function alternarTarea(id: string) {
    setTareas((actuales) =>
      actuales.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t,
      ),
    );
  }

  function eliminarTarea(id: string) {
    setTareas((actuales) => actuales.filter((t) => t.id !== id));
  }

  // Valor DERIVADO: se calcula en cada render, no se guarda en otro estado
  const pendientes = tareas.filter((t) => !t.completada).length;

  return (
    <section>
      <form onSubmit={agregarTarea}>
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button type="submit">Añadir</button>
      </form>

      {tareas.length === 0 ? (
        <p>No tienes tareas. ¡Añade la primera!</p>
      ) : (
        <>
          <ul>
            {tareas.map((tarea) => (
              <ItemTarea
                key={tarea.id}
                tarea={tarea}
                alAlternar={alternarTarea}
                alEliminar={eliminarTarea}
              />
            ))}
          </ul>
          <p>
            {pendientes === 0
              ? "¡Todo hecho! 🎉"
              : `Te quedan ${pendientes} tareas pendientes`}
          </p>
        </>
      )}
    </section>
  );
}

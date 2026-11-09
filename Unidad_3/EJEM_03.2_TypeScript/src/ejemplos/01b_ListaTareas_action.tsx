import { useState } from "react";

export default function ListaTareasAction() {
  const [tareas, setTareas] = useState<string[]>([]);

  // React 19: la función recibe directamente los datos del formulario (FormData)
  function agregarTarea(datos: FormData) {
    const texto = String(datos.get("texto") ?? "").trim();
    if (texto === "") return;
    setTareas((actuales) => [...actuales, texto]);
    // React vacía el formulario automáticamente al terminar la acción
  }

  return (
    <section>
      <form action={agregarTarea}>
        <input name="texto" placeholder="Nueva tarea" />
        <button type="submit">Añadir</button>
      </form>
      <ul>
        {tareas.map((texto, i) => (
          <li key={`${texto}-${i}`}>{texto}</li>
        ))}
      </ul>
    </section>
  );
}

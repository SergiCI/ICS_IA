// Fragmentos de código del tema UT 03.2 (los que contienen errores intencionados
// llevan `@ts-expect-error`, así que el proyecto sigue compilando).
import { useState, type ReactNode } from "react";
import type { Producto } from "../ejemplos/comun/productos";

declare function ProductoItem(props: { producto: Producto }): ReactNode;

// #region errorUseStateVacio
export function ListaTareasMal() {
  const [tareas, setTareas] = useState([]); // tareas: never[]

  function anadirTarea() {
    // @ts-expect-error TS2322: Type 'string' is not assignable to type 'never'.
    setTareas(["Nueva tarea"]);
  }

  return <button onClick={anadirTarea}>{tareas.length}</button>;
}
// #endregion

// #region mutarPush
export function TareasMutando() {
  const [tareas, setTareas] = useState<string[]>(["Aprender React"]);

  function anadirTarea() {
    tareas.push("Una nueva tarea"); // ❌ muta el array: React no se entera
  }

  function anadirTareaOtraVez() {
    // @ts-expect-error TS2345: 'number' is not assignable to 'SetStateAction<string[]>'.
    setTareas(tareas.push("Una nueva tarea")); // ❌ push devuelve un número
  }

  return (
    <>
      <button onClick={anadirTarea}>Añadir</button>
      <button onClick={anadirTareaOtraVez}>Añadir (otra vez)</button>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea}>{tarea}</li>
        ))}
      </ul>
    </>
  );
}
// #endregion

// #region soloLectura
export function TareasSoloLectura() {
  const [tareas] = useState<readonly string[]>(["Aprender React"]);

  function intentarMutar() {
    // @ts-expect-error TS2339: Property 'push' does not exist on type 'readonly string[]'.
    tareas.push("Otra");
  }

  return <button onClick={intentarMutar}>{tareas.length}</button>;
}
// #endregion

// #region keyColocacion
// ❌ La key dentro del componente no sirve: React no la ve
function ProductoItemMal({ producto }: { producto: Producto }) {
  return <li key={producto.id}>{producto.titulo}</li>;
}

// ✅ La key va en el elemento que escribes DENTRO del map(): el componente
export function ListaBien({ productos }: { productos: Producto[] }) {
  return (
    <ul>
      {productos.map((p) => (
        <ProductoItem key={p.id} producto={p} />
      ))}
    </ul>
  );
}
// #endregion

// #region componenteDentro
export function ListaMal({ textos }: { textos: string[] }) {
  // ❌ Fila es una función NUEVA en cada render: React la trata como otro
  //    componente, desmonta todas las filas y las crea de nuevo
  function Fila({ texto }: { texto: string }) {
    return <li>{texto}</li>;
  }

  return (
    <ul>
      {textos.map((t) => (
        <Fila key={t} texto={t} />
      ))}
    </ul>
  );
}
// #endregion

export { ProductoItemMal };

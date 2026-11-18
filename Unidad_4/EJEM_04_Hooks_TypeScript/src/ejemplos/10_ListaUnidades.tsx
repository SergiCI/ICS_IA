import { useState } from "react";
import { useDatos } from "./hooks/useDatos";

interface Unidad {
  id: number;
  titulo: string;
  completada: boolean;
}

export default function ListaUnidades() {
  const [url, setUrl] = useState("/unidades.json");
  const datos = useDatos<Unidad[]>(url);

  return (
    <section>
      <button onClick={() => setUrl("/unidades.json")}>Datos correctos</button>
      <button onClick={() => setUrl("/no-existe.json")}>Datos erróneos</button>

      {datos.estado === "cargando" && <p>Cargando unidades…</p>}
      {datos.estado === "error" && (
        <p role="alert">No se pudo cargar: {datos.mensaje}</p>
      )}
      {datos.estado === "listo" && (
        <ul>
          {datos.datos.map((unidad) => (
            <li key={unidad.id}>
              {unidad.completada ? "✅" : "⬜"} {unidad.titulo}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

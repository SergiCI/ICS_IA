"use client";

import type { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import {
  ESTADOS,
  ETIQUETAS_ESTADO,
  type EstadoIncidencia,
} from "@/lib/tipos";

interface PropsFiltroEstado {
  actual?: EstadoIncidencia;
}

// Componente de cliente: usa useRouter y un manejador de evento.
// No guarda el filtro en un estado propio: lo escribe en la URL (?estado=...)
// y es la página, en el servidor, la que vuelve a leer los datos.
export function FiltroEstado({ actual }: PropsFiltroEstado) {
  const router = useRouter();

  function manejarCambio(e: ChangeEvent<HTMLSelectElement>) {
    const valor = e.target.value;
    router.push(valor ? `/incidencias?estado=${valor}` : "/incidencias");
  }

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="filtro-estado" className="text-sm font-medium">
        Estado
      </label>
      <select
        id="filtro-estado"
        value={actual ?? ""}
        onChange={manejarCambio}
        className="rounded border border-zinc-300 bg-white px-2 py-1 text-sm"
      >
        <option value="">Todos</option>
        {ESTADOS.map((estado) => (
          <option key={estado} value={estado}>
            {ETIQUETAS_ESTADO[estado]}
          </option>
        ))}
      </select>
    </div>
  );
}

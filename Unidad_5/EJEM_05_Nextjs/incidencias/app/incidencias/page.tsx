import type { Metadata } from "next";
import { FiltroEstado } from "@/app/componentes/FiltroEstado";
import { TarjetaIncidencia } from "@/app/componentes/TarjetaIncidencia";
import { obtenerIncidencias } from "@/lib/datos";
import { esEstado } from "@/lib/tipos";

export const metadata: Metadata = { title: "Incidencias" };

interface PropsPaginaIncidencias {
  // En Next.js 16 los parámetros de búsqueda llegan como una promesa.
  searchParams: Promise<{ estado?: string | string[] }>;
}

// Componente de servidor: lee la URL, consulta los datos y pinta la lista.
export default async function PaginaIncidencias({
  searchParams,
}: PropsPaginaIncidencias) {
  const { estado } = await searchParams;
  const estadoFiltro = esEstado(estado) ? estado : undefined;
  const incidencias = await obtenerIncidencias(estadoFiltro);

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold">Incidencias</h1>
        <FiltroEstado actual={estadoFiltro} />
      </div>

      {incidencias.length === 0 ? (
        <p className="text-zinc-600">No hay incidencias con ese estado.</p>
      ) : (
        <ul className="space-y-3">
          {incidencias.map((incidencia) => (
            <li key={incidencia.id}>
              <TarjetaIncidencia incidencia={incidencia} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

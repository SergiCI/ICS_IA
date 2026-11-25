import Link from "next/link";
import type { Incidencia } from "@/lib/tipos";
import { BotonApoyo } from "./BotonApoyo";
import { EtiquetaEstado } from "./EtiquetaEstado";

interface PropsTarjetaIncidencia {
  incidencia: Incidencia;
}

// Componente de servidor que contiene una «isla» de cliente (BotonApoyo).
// Solo se pasan props serializables: números, textos, objetos simples.
export function TarjetaIncidencia({ incidencia }: PropsTarjetaIncidencia) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-semibold">
          <Link
            href={`/incidencias/${incidencia.id}`}
            className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
          >
            {incidencia.titulo}
          </Link>
        </h2>
        <EtiquetaEstado estado={incidencia.estado} />
      </div>
      <p className="mt-1 text-sm text-zinc-600">Aula: {incidencia.aula}</p>
      <div className="mt-3">
        <BotonApoyo inicial={incidencia.apoyos} />
      </div>
    </article>
  );
}

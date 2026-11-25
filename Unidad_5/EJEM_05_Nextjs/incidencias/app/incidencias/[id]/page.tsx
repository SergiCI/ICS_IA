import Link from "next/link";
import { notFound } from "next/navigation";
import { EtiquetaEstado } from "@/app/componentes/EtiquetaEstado";
import { obtenerIncidencia } from "@/lib/datos";

interface PropsPaginaDetalle {
  // El segmento dinámico [id] llega siempre como texto y dentro de una promesa.
  params: Promise<{ id: string }>;
}

export default async function PaginaDetalle({ params }: PropsPaginaDetalle) {
  const { id } = await params;
  const incidencia = await obtenerIncidencia(Number(id));

  if (!incidencia) {
    notFound(); // muestra not-found.tsx con código 404
  }

  return (
    <article className="space-y-4">
      <Link href="/incidencias" className="text-sm text-zinc-600 hover:underline">
        ← Volver al listado
      </Link>
      <div className="flex items-start justify-between gap-3">
        <h1 className="text-2xl font-bold">{incidencia.titulo}</h1>
        <EtiquetaEstado estado={incidencia.estado} />
      </div>
      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
        <dt className="font-medium">Aula</dt>
        <dd>{incidencia.aula}</dd>
        <dt className="font-medium">Creada</dt>
        <dd>{new Date(incidencia.creada).toLocaleDateString("es-ES")}</dd>
        <dt className="font-medium">Apoyos</dt>
        <dd>{incidencia.apoyos}</dd>
      </dl>
      <p>{incidencia.descripcion}</p>
    </article>
  );
}

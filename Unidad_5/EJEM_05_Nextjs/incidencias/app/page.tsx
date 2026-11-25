import Link from "next/link";
import { obtenerIncidencias } from "@/lib/datos";

// Componente de servidor (por defecto): puede ser async y leer datos directamente.
export default async function PaginaInicio() {
  const incidencias = await obtenerIncidencias();
  const abiertas = incidencias.filter((i) => i.estado === "abierta").length;

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Incidencias del centro</h1>
      <p className="text-zinc-600">
        Hay {incidencias.length} incidencias registradas, {abiertas} de ellas
        abiertas.
      </p>
      {/* Link es el componente de Next.js para enlazar páginas: se usa como un
          <a href>, pero cambia de página sin recargar el navegador (apartado 5.3). */}
      <Link
        href="/incidencias"
        className="inline-block rounded bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
      >
        Ver incidencias
      </Link>
    </section>
  );
}

import Link from "next/link";

export default function IncidenciaNoEncontrada() {
  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-bold">Incidencia no encontrada</h1>
      <p className="text-zinc-600">
        No existe ninguna incidencia con ese identificador.
      </p>
      <Link href="/incidencias" className="underline">
        Volver al listado
      </Link>
    </section>
  );
}

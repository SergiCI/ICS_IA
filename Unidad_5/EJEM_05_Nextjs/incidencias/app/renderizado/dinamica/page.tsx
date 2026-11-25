import type { Metadata } from "next";

export const metadata: Metadata = { title: "Página dinámica" };

// Obliga a generar la página en el servidor en cada petición.
// Pasaría lo mismo si la página leyera cookies(), headers() o searchParams.
export const dynamic = "force-dynamic";

export default function PaginaDinamica() {
  const hora = new Date().toLocaleTimeString("es-ES");

  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-bold">Página dinámica (SSR)</h1>
      <p>
        Hora a la que el servidor generó esta página: <strong>{hora}</strong>
      </p>
      <p className="text-zinc-600">
        Recarga varias veces: la hora cambia en cada petición.
      </p>
    </section>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = { title: "Página estática" };

// No usa datos de la petición (cookies, cabeceras, parámetros de búsqueda...),
// así que Next.js la genera una sola vez al compilar y sirve siempre ese HTML.
export default function PaginaEstatica() {
  const hora = new Date().toLocaleTimeString("es-ES");

  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-bold">Página estática (SSG)</h1>
      <p>
        Hora a la que se generó esta página: <strong>{hora}</strong>
      </p>
      <p className="text-zinc-600">
        Recarga varias veces: la hora no cambia, porque es la de la compilación.
      </p>
    </section>
  );
}

import type { Metadata } from "next";
import { RelojCliente } from "@/app/componentes/RelojCliente";

export const metadata: Metadata = { title: "Página en el cliente" };

export default function PaginaCliente() {
  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-bold">Página en el cliente (CSR)</h1>
      <RelojCliente />
      <p className="text-zinc-600">
        El título es HTML del servidor; la hora la calcula el navegador. Mira el
        código fuente de la página (Ctrl + U): el servidor solo envió «Cargando
        hora…».
      </p>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Renderizado" };

const ejemplos = [
  {
    ruta: "/renderizado/estatica",
    nombre: "Estática (SSG)",
    cuando: "La página se genera una vez, al compilar.",
  },
  {
    ruta: "/renderizado/dinamica",
    nombre: "Dinámica (SSR)",
    cuando: "La página se genera en el servidor en cada petición.",
  },
  {
    ruta: "/renderizado/cliente",
    nombre: "En el cliente (CSR)",
    cuando: "El servidor envía una página vacía y el navegador rellena el dato.",
  },
];

export default function PaginaRenderizado() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Estrategias de renderizado</h1>
      <p className="text-zinc-600">
        Las tres páginas muestran una hora. Compila con{" "}
        <code className="rounded bg-zinc-200 px-1">npm run build</code> y arranca
        con <code className="rounded bg-zinc-200 px-1">npm start</code> para ver
        la diferencia: en modo desarrollo todas se vuelven a generar siempre.
      </p>
      <ul className="space-y-2">
        {ejemplos.map((ejemplo) => (
          <li key={ejemplo.ruta}>
            <Link href={ejemplo.ruta} className="font-medium underline">
              {ejemplo.nombre}
            </Link>
            <span className="text-zinc-600"> — {ejemplo.cuando}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

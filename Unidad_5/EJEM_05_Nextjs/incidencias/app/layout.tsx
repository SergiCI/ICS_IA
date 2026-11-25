// `import type`: importa solo el tipo; desaparece al compilar (como en la UT 02.3).
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

// Next.js lee esta exportación por su nombre: define el título y la descripción
// de la pestaña del navegador (apartado 5.2).
export const metadata: Metadata = {
  title: {
    default: "Incidencias del centro",
    template: "%s · Incidencias del centro",
  },
  description: "Aplicación de ejemplo para registrar las incidencias del centro.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-zinc-50 text-zinc-900 antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:rounded focus:bg-white focus:px-3 focus:py-2"
        >
          Saltar al contenido
        </a>

        <header className="border-b border-zinc-200 bg-white">
          <nav
            aria-label="Principal"
            className="mx-auto flex max-w-3xl items-center gap-6 px-4 py-3"
          >
            <Link href="/" className="font-semibold">
              Incidencias del centro
            </Link>
            <Link href="/incidencias" className="text-zinc-600 hover:text-zinc-900">
              Incidencias
            </Link>
            <Link href="/renderizado" className="text-zinc-600 hover:text-zinc-900">
              Renderizado
            </Link>
          </nav>
        </header>

        <main id="contenido" className="mx-auto max-w-3xl px-4 py-8">
          {children}
        </main>

        <footer className="mx-auto max-w-3xl px-4 py-6 text-sm text-zinc-500">
          Módulo ICS-IA · 2.º DAW
        </footer>
      </body>
    </html>
  );
}

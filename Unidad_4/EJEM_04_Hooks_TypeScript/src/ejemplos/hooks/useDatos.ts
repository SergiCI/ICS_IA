import { useEffect, useState } from "react";

type Terminado<T> =
  | { estado: "error"; mensaje: string }
  | { estado: "listo"; datos: T };

export type EstadoDatos<T> = { estado: "cargando" } | Terminado<T>;

// Hook propio: pide una URL con fetch y devuelve cargando / error / listo
export function useDatos<T>(url: string): EstadoDatos<T> {
  // Guardamos también la URL a la que pertenece el resultado
  const [recibido, setRecibido] = useState<{
    url: string;
    resultado: Terminado<T>;
  } | null>(null);

  useEffect(() => {
    const controlador = new AbortController();

    fetch(url, { signal: controlador.signal })
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error(`Error HTTP ${respuesta.status}`);
        return respuesta.json() as Promise<T>;
      })
      .then((datos) => {
        setRecibido({ url, resultado: { estado: "listo", datos } });
      })
      .catch((error: unknown) => {
        // Una petición cancelada por la limpieza no es un error real
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
        const mensaje =
          error instanceof Error ? error.message : "Error desconocido";
        setRecibido({ url, resultado: { estado: "error", mensaje } });
      });

    // Limpieza: cancela la petición si cambia la URL o se desmonta
    return () => controlador.abort();
  }, [url]);

  // «Cargando» se DERIVA: aún no hay resultado para la URL actual
  if (recibido === null || recibido.url !== url) {
    return { estado: "cargando" };
  }
  return recibido.resultado;
}

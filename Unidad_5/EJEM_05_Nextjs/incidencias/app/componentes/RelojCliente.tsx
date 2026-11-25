"use client";

import { useEffect, useState } from "react";

// Los efectos solo se ejecutan en el navegador: el servidor nunca los ve.
// Por eso el HTML inicial lleva «Cargando hora…» y la hora real llega después.
export function RelojCliente() {
  const [hora, setHora] = useState<string | null>(null);

  useEffect(() => {
    const identificador = setInterval(() => {
      setHora(new Date().toLocaleTimeString("es-ES"));
    }, 1000);
    return () => clearInterval(identificador); // limpieza del efecto
  }, []);

  return (
    <p>
      Hora del navegador: <strong>{hora ?? "Cargando hora…"}</strong>
    </p>
  );
}

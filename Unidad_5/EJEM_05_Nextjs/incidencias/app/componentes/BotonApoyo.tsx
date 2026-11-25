"use client";

import { useState } from "react";

interface PropsBotonApoyo {
  inicial: number;
}

// Componente de cliente: necesita useState y un manejador de clic.
// El contador se pierde al recargar porque todavía no se guarda en ningún sitio
// (se guardará con el formulario y la API de la UT06).
export function BotonApoyo({ inicial }: PropsBotonApoyo) {
  const [apoyos, setApoyos] = useState(inicial);

  return (
    <button
      type="button"
      onClick={() => setApoyos((anterior) => anterior + 1)}
      className="rounded border border-zinc-300 bg-white px-3 py-1 text-sm hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
    >
      Me afecta · {apoyos}
    </button>
  );
}

import { useState } from "react";

// Concepto: eventos de teclado (Enter y Escape).
export default function Ejemplo12_Teclado() {
  const [texto, setTexto] = useState<string>("");
  const [ultimaBusqueda, setUltimaBusqueda] = useState<string>("");

  const alPulsar = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") setUltimaBusqueda(texto);
    if (e.key === "Escape") setTexto("");
  };

  return (
    <div className="ejemplo">
      <h2>12 · Teclado</h2>
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        onKeyDown={alPulsar}
        placeholder="Enter busca, Esc borra"
      />
      <p>Última búsqueda: {ultimaBusqueda || "—"}</p>
    </div>
  );
}

import { useState } from "react";

// Concepto: burbujeo y stopPropagation.
export default function Ejemplo10_Burbujeo() {
  const [registro, setRegistro] = useState<string[]>([]);

  const anotar = (mensaje: string) => setRegistro((anterior) => [...anterior, mensaje]);

  return (
    <div className="ejemplo">
      <h2>10 · Burbujeo</h2>
      <div className="tarjeta" onClick={() => anotar("clic en la tarjeta")}>
        <p>Tarjeta</p>
        <button onClick={() => anotar("clic en el botón (sube)")}>Con burbujeo</button>{" "}
        <button
          onClick={(e) => {
            e.stopPropagation();
            anotar("clic en el botón (se detiene)");
          }}
        >
          Con stopPropagation
        </button>
      </div>
      <ol>{registro.map((r, i) => <li key={i}>{r}</li>)}</ol>
      <button onClick={() => setRegistro([])}>Vaciar registro</button>
    </div>
  );
}

import { useState } from "react";

// Concepto: dato derivado. Solo "texto" es estado; el resto se calcula.
export default function Ejemplo07_ContadorCaracteres() {
  const [texto, setTexto] = useState<string>("");
  const limite = 50;

  const caracteres = texto.length; // derivado
  const quedan = limite - caracteres; // derivado
  const demasiado = quedan < 0; // derivado

  return (
    <div className="ejemplo">
      <h2>07 · Dato derivado</h2>
      <textarea value={texto} onChange={(e) => setTexto(e.target.value)} rows={3} cols={40} />
      <p className={demasiado ? "error" : "ok"}>
        {caracteres} caracteres · {demasiado ? `te pasas ${-quedan}` : `quedan ${quedan}`}
      </p>
    </div>
  );
}

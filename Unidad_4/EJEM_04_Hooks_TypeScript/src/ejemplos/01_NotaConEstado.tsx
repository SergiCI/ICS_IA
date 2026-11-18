import { useState } from "react";

const NOTA_MINIMA = 0;
const NOTA_MAXIMA = 10;
const NOTA_INICIAL = 5;

interface PropsNotaConEstado {
  nombre: string;
}

export default function NotaConEstado({ nombre }: PropsNotaConEstado) {
  const [nota, setNota] = useState(NOTA_INICIAL);

  function sumar() {
    // El nuevo valor depende del anterior: usamos la forma funcional
    setNota((anterior) => Math.min(anterior + 1, NOTA_MAXIMA));
  }

  function restar() {
    setNota((anterior) => Math.max(anterior - 1, NOTA_MINIMA));
  }

  return (
    <section>
      <h3>
        {nombre}: {nota}
      </h3>
      <button onClick={sumar} disabled={nota === NOTA_MAXIMA}>
        Sumar
      </button>
      <button onClick={restar} disabled={nota === NOTA_MINIMA}>
        Restar
      </button>
      <button onClick={() => setNota(NOTA_INICIAL)}>Restablecer</button>
    </section>
  );
}

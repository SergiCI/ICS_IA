import { useState } from "react";

const NOTAS_INICIALES = [6, 8, 5, 9];

function calcularMedia(notas: number[]): number {
  console.log("Calculando la media…");
  return notas.reduce((suma, nota) => suma + nota, 0) / notas.length;
}

interface PropsBotonReiniciar {
  alReiniciar: () => void;
}

// Sin memo
function BotonReiniciar({ alReiniciar }: PropsBotonReiniciar) {
  console.log("Render de BotonReiniciar");
  return <button onClick={alReiniciar}>Reiniciar notas</button>;
}

export default function MemoizacionConCompilador() {
  const [notas, setNotas] = useState(NOTAS_INICIALES);
  const [clics, setClics] = useState(0);

  // Sin useMemo ni useCallback
  const media = calcularMedia(notas);
  const reiniciar = () => setNotas(NOTAS_INICIALES);

  return (
    <section>
      <p>
        Notas: {notas.join(", ")} · Media: {media.toFixed(2)}
      </p>
      <button onClick={() => setNotas([...notas, 10])}>Añadir un 10</button>
      <BotonReiniciar alReiniciar={reiniciar} />
      <button onClick={() => setClics(clics + 1)}>
        Otro estado ({clics})
      </button>
    </section>
  );
}

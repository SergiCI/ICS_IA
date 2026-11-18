import { memo, useCallback, useMemo, useState } from "react";

const NOTAS_INICIALES = [6, 8, 5, 9];

function calcularMedia(notas: number[]): number {
  console.log("Calculando la media…");
  return notas.reduce((suma, nota) => suma + nota, 0) / notas.length;
}

interface PropsBotonReiniciar {
  alReiniciar: () => void;
}

// memo: no vuelve a renderizar si sus props no han cambiado
const BotonReiniciar = memo(function BotonReiniciar({
  alReiniciar,
}: PropsBotonReiniciar) {
  console.log("Render de BotonReiniciar");
  return <button onClick={alReiniciar}>Reiniciar notas</button>;
});

export default function Memoizacion() {
  const [notas, setNotas] = useState(NOTAS_INICIALES);
  const [clics, setClics] = useState(0); // estado «ajeno» a las notas

  // useMemo: solo recalcula si cambia «notas»
  const media = useMemo(() => calcularMedia(notas), [notas]);

  // useCallback: la función conserva su identidad entre renderizados
  const reiniciar = useCallback(() => setNotas(NOTAS_INICIALES), []);

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
      <p>Abre la consola y observa qué se vuelve a ejecutar en cada clic.</p>
    </section>
  );
}

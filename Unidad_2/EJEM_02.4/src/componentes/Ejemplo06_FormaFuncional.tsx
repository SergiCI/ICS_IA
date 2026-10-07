import { useState } from "react";

// Concepto: forma funcional cuando el nuevo valor depende del anterior.
export default function Ejemplo06_FormaFuncional() {
  const [n, setN] = useState<number>(0);

  const sumarTres = () => {
    setN(n + 1);
    setN(n + 1);
    setN(n + 1); // solo suma 1
  };

  const sumarTresBien = () => {
    setN((anterior) => anterior + 1);
    setN((anterior) => anterior + 1);
    setN((anterior) => anterior + 1); // suma 3
  };

  return (
    <div className="ejemplo">
      <h2>06 · Forma funcional</h2>
      <p>n = {n}</p>
      <button onClick={sumarTres}>+3 (mal)</button>{" "}
      <button onClick={sumarTresBien}>+3 (bien)</button>{" "}
      <button onClick={() => setN(0)}>Reiniciar</button>
    </div>
  );
}

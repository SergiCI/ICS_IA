import { useState } from "react";

// Concepto: useState. Al cambiar el estado, React vuelve a renderizar.
export default function Ejemplo02_ContadorBasico() {
  const [contador, setContador] = useState<number>(0);

  return (
    <div className="ejemplo">
      <h2>02 · useState</h2>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>{" "}
      <button onClick={() => setContador(0)}>Reiniciar</button>
    </div>
  );
}

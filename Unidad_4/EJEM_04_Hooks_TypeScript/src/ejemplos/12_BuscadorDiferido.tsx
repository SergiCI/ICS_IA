import { memo, useDeferredValue, useState } from "react";
import { nombres } from "./comun/nombres";

interface PropsListaNombres {
  filtro: string;
}

// memo: solo se vuelve a renderizar cuando cambia «filtro»
// (con React Compiler activado, este memo ya no haría falta)
const ListaNombres = memo(function ListaNombres({ filtro }: PropsListaNombres) {
  const visibles = nombres.filter((nombre) =>
    nombre.toLowerCase().includes(filtro.toLowerCase()),
  );

  return (
    <ul>
      {visibles.map((nombre) => (
        <li key={nombre}>{nombre}</li>
      ))}
    </ul>
  );
});

export default function BuscadorDiferido() {
  const [texto, setTexto] = useState("");
  // Se actualiza «con retraso»: primero el input, después la lista
  const textoDiferido = useDeferredValue(texto);
  const actualizando = texto !== textoDiferido;

  return (
    <section>
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Buscar alumno…"
      />
      {actualizando && <p>Actualizando la lista…</p>}
      <ListaNombres filtro={textoDiferido} />
    </section>
  );
}

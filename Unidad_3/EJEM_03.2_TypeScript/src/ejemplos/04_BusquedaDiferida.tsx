import { useDeferredValue, useState } from "react";
import { productos } from "./comun/productos";

export default function BusquedaDiferida() {
  const [busqueda, setBusqueda] = useState("");
  // El input responde al instante; la lista se actualiza con menor prioridad
  const busquedaDiferida = useDeferredValue(busqueda);

  const visibles = productos.filter((p) =>
    p.titulo.toLowerCase().includes(busquedaDiferida.toLowerCase()),
  );

  return (
    <section>
      <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar producto…"
      />
      <ul style={{ opacity: busqueda !== busquedaDiferida ? 0.5 : 1 }}>
        {visibles.map((p) => (
          <li key={p.id}>{p.titulo}</li>
        ))}
      </ul>
    </section>
  );
}

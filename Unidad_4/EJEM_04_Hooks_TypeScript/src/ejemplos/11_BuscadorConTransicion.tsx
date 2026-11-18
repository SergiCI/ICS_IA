import { useState, useTransition, type ChangeEvent } from "react";
import { nombres } from "./comun/nombres";

export default function BuscadorConTransicion() {
  const [texto, setTexto] = useState(""); // urgente: lo que se ve en el input
  const [filtro, setFiltro] = useState(""); // no urgente: filtra la lista
  const [pendiente, iniciarTransicion] = useTransition();

  function alEscribir(evento: ChangeEvent<HTMLInputElement>) {
    const valor = evento.target.value;
    setTexto(valor); // actualización urgente
    iniciarTransicion(() => {
      setFiltro(valor); // actualización de baja prioridad
    });
  }

  const visibles = nombres.filter((nombre) =>
    nombre.toLowerCase().includes(filtro.toLowerCase()),
  );

  return (
    <section>
      <input
        value={texto}
        onChange={alEscribir}
        placeholder="Buscar alumno…"
      />
      {pendiente && <p>Actualizando la lista…</p>}
      <ul style={{ opacity: pendiente ? 0.5 : 1 }}>
        {visibles.map((nombre) => (
          <li key={nombre}>{nombre}</li>
        ))}
      </ul>
    </section>
  );
}

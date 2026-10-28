// APARTADO 5 · Componente FormularioNota
// Ahora es un formulario estático que no hace nada. Hay que hacerlo funcional.

import { useState, type SubmitEvent } from "react";
import type { Nota } from "../tipos";

interface props {
  alAnadir: (Nota: Nota) => void
}

export function FormularioNota({ alAnadir }: props) {
  const [modulo, setModulo] = useState("")
  const [calificacion, setCalificacion] = useState("")
  const [observaciones, setObservaciones] = useState("")

  const calificacionNum = Number(calificacion)
  const moduloNoVacio =
    modulo.trim() !== ''
  calificacion.trim() !== "" &&
    !isNaN(calificacionNum) &&
    calificacionNum > 0 &&
    calificacionNum < 10;

  function manejarEnvio(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!moduloNoVacio) return;

    const nuevaNota: Nota = {
      id: Date.now(),
      modulo,
      calificación: Number(calificacion),
      ...(observaciones.trim() !== "" && { observaciones: observaciones.trim() }),
    }
    alAnadir(nuevaNota)

    setModulo("");
    setCalificacion("");
    setObservaciones("");
  }

  return (
    <form onSubmit={manejarEnvio} className="formulario">
      <h2>Añadir nota</h2>
      <div className="campo">
        <label htmlFor="modulo">Módulo</label>
        <input id="modulo"
          type="text"
          value={modulo}
          onChange={(e) => setModulo(e.target.value)}
        />
      </div>
      <div className="campo">
        <label htmlFor="calificacion">Calificación (0 a 10)</label>
        <input id="calificacion"
          type="number"
          min="0"
          max="10"
          step="0.1"
          value={calificacion}
          onChange={(e) => setCalificacion(e.target.value)}
        />
      </div>
      <div className="campo">
        <label htmlFor="observaciones">Observaciones (opcional):</label>
        <input id="observaciones"
          type="text"
          value={observaciones}
          onChange={(e) => setObservaciones(e.target.value)}
        />
      </div>
      <button type="submit" disabled={!moduloNoVacio}>Añadir nota</button>
    </form>
  );
}

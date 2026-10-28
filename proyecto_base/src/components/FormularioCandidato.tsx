// RETO 5 · Componente FormularioCandidato
// Ahora es un formulario estático que no hace nada. Hay que hacerlo funcional.
import { useState,type SubmitEvent } from "react";
import type { Candidato } from '../tipos';

 interface props {
  alAnadir : (candidato: Candidato) => void
}
export function FormularioCandidato({ alAnadir }: props) {
  const [nombre, setNombre] = useState("");
  const [numeroLista, setNumeroLista] = useState("");
  const [lema, setLema] = useState("");

  // Validación: nombre no vacío (sin espacios en blanco sobrantes) y número de lista entre 1 y 30
  const numListaValNum = Number(numeroLista);
  const esValido =
    nombre.trim() !== "" &&
    numeroLista.trim() !== "" &&
    !isNaN(numListaValNum) &&
    numListaValNum >= 1 &&
    numListaValNum <= 30;

  function manejarEnvio(evento: SubmitEvent<HTMLFormElement>) {
    evento.preventDefault();
    if (!esValido) return;

    const nuevoCandidato: Candidato = {
      id: Date.now(),
      nombre: nombre.trim(),
      numeroLista: Number(numeroLista),
      votos: 0,
      ...(lema.trim() !== "" && { lema: lema.trim() }),
    };

    alAnadir(nuevoCandidato);

    // Vaciar campos
    setNombre("");
    setNumeroLista("");
    setLema("");
  }

  return (
    <form onSubmit={manejarEnvio} className="formulario">
      <h2>Presentar Candidatura</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre del candidato"
        />
      </div>
      <div>
        <label>Número de lista (1-30):</label>
        <input
          type="number"
          value={numeroLista}
          onChange={(e) => setNumeroLista(e.target.value)}
          placeholder="Ej. 12"
        />
      </div>
      <div>
        <label>Lema (opcional):</label>
        <input
          type="text"
          value={lema}
          onChange={(e) => setLema(e.target.value)}
          placeholder="Tu lema de campaña"
        />
      </div>
      <button type="submit" disabled={!esValido}>
        Añadir Candidatura
      </button>
    </form>
  );
}

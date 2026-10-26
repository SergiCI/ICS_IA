// RETO 2 · Componente TarjetaCandidato
// Ahora muestra datos fijos y el botón no hace nada. Hay que hacerlo configurable mediante props.
import type { Candidato, Estado } from "../tipos";

type props = {
  candidato: Candidato,
  estado: Estado,
  textoBoton?: string,
  alVotar: (id: number) => void
}



export function TarjetaCandidato({
  candidato,
  estado,
  textoBoton = 'Votar',
  alVotar
}: props) {
  return (
    <article className="tarjeta">
      <h3>
        Nombre del candidato: {candidato.nombre}<span className="numero">Nº 0 {candidato.numeroLista}</span>
      </h3>
      <p>
        Votos: <strong>{candidato.votos}</strong>
      </p>
      {estado === 'lider' && (
        <p>👑 Va en cabeza</p>)}

      {estado === 'ninguno' && (
        <p>Todavía sin votos</p>)}
      {candidato.lema && (
        <p>Lema : {candidato.lema}</p>
      )}
      
      <button onClick={() => alVotar(candidato.id)}>{textoBoton}</button>
    </article>
  );
}

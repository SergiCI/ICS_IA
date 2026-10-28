import { useState } from "react";
import { candidatosIniciales } from "./datos";
import type { Candidato } from "./tipos";
import { obtenerEstado } from "./utilidades";
import { TarjetaCandidato } from "./components/TarjetaCandidato";
import { FormularioCandidato } from "./components/FormularioCandidato";

export function App() {
  const [candidatos, setCandidatos] = useState<Candidato[]>(candidatosIniciales);

  const totalVotos = candidatos.reduce((acc, c) => acc + c.votos, 0);
  const maximo = Math.max(0, ...candidatos.map((c) => c.votos));

  function votar(id: number) {
    setCandidatos((prevCandidatos) =>
      prevCandidatos.map((c) =>
        c.id === id ? { ...c, votos: c.votos + 1 } : c
      )
    );
  }

  function anadirCandidato(nuevoCandidato: Candidato) {
    setCandidatos((prevCandidatos) => [...prevCandidatos, nuevoCandidato]);
  }

  return (
    <main className="contenedor">
      <h1>Elección de Delegado/a</h1>
      <p>Votos emitidos: {totalVotos}</p>

      {candidatos.length === 0 ? (
        <p className="vacio">Todavía no hay candidaturas.</p>
      ) : (
        <div className="lista-candidatos">
          {candidatos.map((candidato) => (
            <TarjetaCandidato
              key={candidato.id}
              candidato={candidato}
              estado={obtenerEstado(candidato.votos, maximo)}
              alVotar={votar}
            />
          ))}
        </div>
      )}

      {}
      <FormularioCandidato alAnadir={anadirCandidato} />
    </main>
  );
}
export default App;
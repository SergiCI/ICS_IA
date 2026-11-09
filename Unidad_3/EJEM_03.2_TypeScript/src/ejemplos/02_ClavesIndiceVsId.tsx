import { useState } from "react";

interface Persona {
  id: string;
  nombre: string;
}

const personasIniciales: Persona[] = [
  { id: "u1", nombre: "Ana" },
  { id: "u2", nombre: "Luis" },
  { id: "u3", nombre: "Marta" },
];

interface PropsListaPersonas {
  titulo: string;
  usarId: boolean;
}

function ListaPersonas({ titulo, usarId }: PropsListaPersonas) {
  const [personas, setPersonas] = useState(personasIniciales);

  return (
    <section>
      <h3>{titulo}</h3>
      <button onClick={() => setPersonas((ant) => ant.toReversed())}>
        Invertir orden
      </button>
      <ul>
        {personas.map((persona, indice) => (
          // Escribe algo en un <input> y pulsa "Invertir orden"
          <li key={usarId ? persona.id : indice}>
            {persona.nombre} <input placeholder="Nota" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function DemoClaves() {
  return (
    <>
      <ListaPersonas titulo="key = índice (❌)" usarId={false} />
      <ListaPersonas titulo="key = id (✅)" usarId />
    </>
  );
}

import { useState, type ComponentType } from "react";
import ListaTareas from "./ejemplos/01_ListaTareas";
import ListaTareasAction from "./ejemplos/01b_ListaTareas_action";
import ClavesIndiceVsId from "./ejemplos/02_ClavesIndiceVsId";
import ReiniciarConKey from "./ejemplos/03_ReiniciarConKey";
import BusquedaDiferida from "./ejemplos/04_BusquedaDiferida";

interface Ejemplo {
  titulo: string;
  Componente: ComponentType;
}

const ejemplos: Ejemplo[] = [
  { titulo: "01 · Lista de tareas (estado)", Componente: ListaTareas },
  { titulo: "01b · Formulario con action", Componente: ListaTareasAction },
  { titulo: "02 · key: índice vs id", Componente: ClavesIndiceVsId },
  { titulo: "03 · Reiniciar con key", Componente: ReiniciarConKey },
  { titulo: "04 · useDeferredValue", Componente: BusquedaDiferida },
];

export default function App() {
  const [indice, setIndice] = useState(0);
  const { Componente } = ejemplos[indice];

  return (
    <main style={{ textAlign: "left", padding: "1rem" }}>
      <h1>UT 03.2 · Listas dinámicas: estado y claves</h1>
      <select
        value={indice}
        onChange={(e) => setIndice(Number(e.target.value))}
      >
        {ejemplos.map((ej, i) => (
          <option key={ej.titulo} value={i}>
            {ej.titulo}
          </option>
        ))}
      </select>
      <hr />
      {/* key: al cambiar de ejemplo se reinicia todo su estado */}
      <Componente key={indice} />
    </main>
  );
}

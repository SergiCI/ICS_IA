// APARTADOS 4 y 5 · Estado, lista de notas y uso de los componentes.
// Ahora solo muestra el título. Importa lo que necesites desde `./datos`, `./tipos`,
// `./utilidades` y `./components`.

import { useState } from "react";
import type { Nota } from "./tipos.ts";
import { ResumenNotas } from "./components/ResumenNotas.tsx";
import { FormularioNota } from "./components/FormularioNota.tsx";
import calcularResultado from "./utilidades.ts";
import { notasIniciales } from "./datos.ts";


function App() {
  const [notas, setNotas] = useState<Nota[]>(notasIniciales);

  const total = notas.length;

  const sumaCalificaciones = notas.reduce((acc, nota) => acc + nota.calificacion, 0);

  const mediaNotas = total > 0 ? sumaCalificaciones / total : 0;

  const totalAprobadas = notas.filter(
    (nota) => calcularResultado(nota.calificacion) !== 'Suspenso'
  ).length;
  function anadirNota(nuevaNota: Nota) {
    setNotas((prevNotas) => [...prevNotas, nuevaNota]);
  }

  return (
    <main className="contenedor">
      <h1>Registro de notas</h1>
      <p className="subtitulo">2.º DAW · Evaluación final</p>
      {notas.length === 0 ? (
        <p className="vacio">Todavía no hay notas registradas.</p>
      ) : (
        <div>
          <ResumenNotas
            titulo="Resumen del Curso"
            media={mediaNotas}
            aprobadas={totalAprobadas}
            total={total}
          />
          <ul className="lista-notas">
            {notas.map((nota, indice) => (
              <li key={indice}>Calificación: {nota.calificacion}</li>
            ))}
          </ul>
        </div>
      )}

      { }
      <FormularioNota alAnadir={anadirNota} />
    </main>
  )
}

export default App;

import { useState } from "react";

interface Alumno {
  id: number;
  nombre: string;
}

// Concepto: pasar datos al manejador con una función flecha.
export default function Ejemplo11_PasarDatos() {
  const [alumnos, setAlumnos] = useState<Alumno[]>([
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Luis" },
    { id: 3, nombre: "Marta" },
  ]);

  const quitar = (id: number) => setAlumnos(alumnos.filter((a) => a.id !== id));

  return (
    <div className="ejemplo">
      <h2>11 · Pasar datos al manejador</h2>
      <ul>
        {alumnos.map((a) => (
          <li key={a.id}>
            {a.nombre} <button onClick={() => quitar(a.id)}>Quitar</button>
          </li>
        ))}
      </ul>
      <p className="nota">Si escribes onClick={"{quitar(a.id)}"} se ejecuta al renderizar: ¡error!</p>
    </div>
  );
}

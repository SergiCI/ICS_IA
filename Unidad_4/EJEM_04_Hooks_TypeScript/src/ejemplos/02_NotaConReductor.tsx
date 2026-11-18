import { useReducer } from "react";

interface Estado {
  nota: number;
  movimientos: number;
  historial: number[]; // notas anteriores, para poder deshacer
}

// Unión discriminada: la propiedad «tipo» distingue cada acción
type Accion =
  | { tipo: "sumar"; puntos: number }
  | { tipo: "restar"; puntos: number }
  | { tipo: "deshacer" }
  | { tipo: "restablecer" };

const estadoInicial: Estado = { nota: 5, movimientos: 0, historial: [] };

// Función pura: recibe el estado y la acción y DEVUELVE un estado nuevo
function reductor(estado: Estado, accion: Accion): Estado {
  switch (accion.tipo) {
    case "sumar":
      return {
        nota: Math.min(estado.nota + accion.puntos, 10),
        movimientos: estado.movimientos + 1,
        historial: [...estado.historial, estado.nota],
      };
    case "restar":
      return {
        nota: Math.max(estado.nota - accion.puntos, 0),
        movimientos: estado.movimientos + 1,
        historial: [...estado.historial, estado.nota],
      };
    case "deshacer": {
      const anterior = estado.historial.at(-1);
      if (anterior === undefined) return estado; // nada que deshacer
      return {
        nota: anterior,
        movimientos: estado.movimientos + 1,
        historial: estado.historial.slice(0, -1),
      };
    }
    case "restablecer":
      return estadoInicial;
  }
}

export default function NotaConReductor() {
  // Los tipos de «estado» y «despachar» se infieren de «reductor»
  const [estado, despachar] = useReducer(reductor, estadoInicial);

  return (
    <section>
      <h3>Nota: {estado.nota}</h3>
      <p>Movimientos realizados: {estado.movimientos}</p>
      <p>Historial: {estado.historial.join(", ") || "vacío"}</p>
      <button onClick={() => despachar({ tipo: "sumar", puntos: 1 })}>
        +1
      </button>
      <button onClick={() => despachar({ tipo: "sumar", puntos: 2 })}>
        +2 (bonus)
      </button>
      <button onClick={() => despachar({ tipo: "restar", puntos: 1 })}>
        −1
      </button>
      <button
        onClick={() => despachar({ tipo: "deshacer" })}
        disabled={estado.historial.length === 0}
      >
        Deshacer
      </button>
      <button onClick={() => despachar({ tipo: "restablecer" })}>
        Restablecer
      </button>
    </section>
  );
}

import { useState } from "react";

// Definimos la forma de las props que recibirá el componente hijo BarraBusqueda.
// El hijo necesita dos cosas: el valor actual del texto y una función para avisar al padre del cambio.
interface PropsBarraBusqueda {
  termino: string;
  alCambiarTermino: (nuevoTermino: string) => void;
}

// Componente hijo: solo muestra el input y notifica al padre cuando cambia el texto.
function BarraBusqueda({ termino, alCambiarTermino }: PropsBarraBusqueda) {
  return (
    <input
      placeholder="Buscar..."
      value={termino}
      // Cuando el usuario escribe, el hijo comunica el nuevo valor al padre a través de la prop.
      onChange={(e) => alCambiarTermino(e.target.value)}
    />
  );
}

// Componente hijo que muestra un resumen basado en el texto recibido por props.
function Resumen({ termino }: { termino: string }) {
  return <p>{termino === "" ? "No hay búsqueda" : `Buscando: "${termino}"`}</p>;
}

// Concepto: elevar el estado al ancestro común (props abajo, eventos arriba).
// El estado no vive en el hijo, sino en el componente padre, porque varios componentes lo necesitan.
export default function Ejemplo15_ElevarEstado() {
  // Este estado es el dato compartido por ambos componentes.
  // El padre guarda el texto actual de la búsqueda.
  const [termino, setTermino] = useState<string>("");

  return (
    <div className="ejemplo">
      <h2>15 · Elevar el estado</h2>

      {/* El input recibe el valor actual y una función para modificarlo.
          Así el hijo no guarda el estado por sí mismo; solo informa al padre. */}
      <BarraBusqueda termino={termino} alCambiarTermino={setTermino} />

      {/* El resumen también recibe el valor del estado desde el padre.
          Como depende del mismo dato, se actualiza automáticamente cuando cambia. */}
      <Resumen termino={termino} />
    </div>
  );
}

import { useState } from "react";

// Definimos la forma del objeto que va a guardar el estado.
// En este caso, cada usuario tiene un nombre y una clave.
interface DatosAcceso {
  usuario: string;
  clave: string;
}

// Concepto: setX reemplaza completamente el valor del estado.
// Si el estado es un objeto, no se mezcla con el anterior automáticamente;
// hay que crear un nuevo objeto copiando el contenido anterior y modificando solo lo necesario.
export default function Ejemplo04_ReemplazoObjeto() {
  // El estado mantiene un objeto con dos propiedades: usuario y clave.
  // Al principio ambos están vacíos.
  const [datos, setDatos] = useState<DatosAcceso>({ usuario: "", clave: "" });

  return (
    <div className="ejemplo">
      <h2>04 · Reemplazo, no fusión</h2>

      {/* Input para el usuario.
          En onChange, se crea un NUEVO objeto con el mismo contenido anterior
          y solo cambia la propiedad usuario. */}
      <input
        placeholder="usuario"
        value={datos.usuario}
        onChange={(e) => setDatos({ ...datos, usuario: e.target.value })}
      />{" "}

      {/* Input para la clave.
          También se reemplaza el objeto, manteniendo el resto del contenido. */}
      <input
        placeholder="clave"
        value={datos.clave}
        onChange={(e) => setDatos({ ...datos, clave: e.target.value })}
      />

      {/* Se muestra el valor actual del objeto en pantalla.
          Para la clave se ocultan los caracteres con asteriscos. */}
      <p>Usuario: {datos.usuario} · Clave: {"*".repeat(datos.clave.length)}</p>

      {/* Nota didáctica: si quitamos el ...datos, el objeto se perdería y se reemplazaría solo por una propiedad. */}
      <p className="nota">Prueba a quitar el ...datos de un manejador y observa qué se pierde.</p>
    </div>
  );
}

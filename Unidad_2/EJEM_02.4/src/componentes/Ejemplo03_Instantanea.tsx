import { useState } from "react";

// Concepto: el estado de React representa una instantánea del valor en cada render.
// Aunque parezca que cambia "en el mismo momento", en realidad el valor usado por un evento
// pertenece al render actual que generó ese callback.
export default function Ejemplo03_Instantanea() {
  // useState crea una variable de estado y su función para actualizarla.
  // El valor inicial es 0 y se guarda como una instantánea del render actual.
  const [cuenta, setCuenta] = useState<number>(0);

  // Al hacer clic, se ejecuta esta función del evento.
  // Aquí vemos la clave del ejemplo: "cuenta" sigue valiendo el valor del render anterior,
  // aunque el estado se pida actualizar con setCuenta.
  const sumar = () => {
    console.log("antes:", cuenta); // valor actual del render antes de actualizar
    setCuenta(cuenta + 1); // React programa un nuevo render con el nuevo valor
    console.log("después:", cuenta); // sigue mostrando el mismo valor del render actual
  };

  // Este botón demuestra que el valor del estado se captura para ese render.
  // Aunque pasen 2 segundos, el timeout usa la instantánea del render donde se hizo clic.
  const sumarConRetraso = () => {
    setTimeout(() => alert("Valor en el momento del clic: " + cuenta), 2000);
  };

  // Se ejecuta cada vez que React renderiza este componente.
  // Sirve para ver en consola el valor actual del estado durante cada render.
  console.log("Renderizado con cuenta =", cuenta);

  return (
    <div className="ejemplo">
      <h2>03 · Instantánea</h2>

      {/* El texto mostrado en pantalla usa el valor actual del estado del render actual. */}
      <p>Cuenta: {cuenta}</p>

      {/* Al pulsar el botón, se ejecuta sumar y se produce un nuevo render. */}
      <button onClick={sumar}>Sumar y mostrar en consola</button>{" "}

      {/* Este botón muestra cómo el valor se conserva en la instantánea del evento. */}
      <button onClick={sumarConRetraso}>Mostrar a los 2 s</button>

      {/* Nota didáctica: StrictMode en desarrollo puede renderizar dos veces para detectar problemas. */}
      <p className="nota">
        Mira la consola: "antes" y "después" muestran el mismo valor. En desarrollo, StrictMode
        renderiza dos veces.
      </p>
    </div>
  );
}

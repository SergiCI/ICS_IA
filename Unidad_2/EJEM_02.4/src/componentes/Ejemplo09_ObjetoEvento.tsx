import { useState } from "react";

// Concepto: el objeto evento contiene información sobre la interacción del usuario.
// En concreto, aquí se usa target, currentTarget y type para ver qué elemento disparó
// el evento y dónde se ha registrado el manejador.
export default function Ejemplo09_ObjetoEvento() {
  // Estado que guarda un texto descriptivo para mostrar en pantalla.
  const [info, setInfo] = useState<string>("Haz clic en el botón o en el recuadro");

  // El evento recibido es un click en el <div className="tarjeta">.
  // Por tanto, el parámetro e es un MouseEvent de tipo HTMLDivElement.
  const alHacerClic = (e: React.MouseEvent<HTMLDivElement>) => {
    // e.target: elemento exacto que originó el evento.
    // Si se hace clic en el botón, target será el <button>.
    const origen = e.target as HTMLElement;

    // e.currentTarget: elemento donde se asignó el manejador.
    // En este caso siempre será el contenedor <div className="tarjeta">.
    // e.type: tipo del evento, por ejemplo "click".
    setInfo(
      `target: <${origen.tagName.toLowerCase()}> · currentTarget: <${e.currentTarget.tagName.toLowerCase()}> · tipo: ${e.type}`
    );
  };

  return (
    <div className="ejemplo">
      <h2>09 · El objeto evento</h2>

      {/* El manejador está asociado al div contenedor, pero si el usuario hace clic
          en el botón interior, el evento se propaga hacia ese div y también se captura aquí. */}
      <div className="tarjeta" onClick={alHacerClic}>
        <p>Recuadro con manejador</p>
        <button>Botón dentro</button>
      </div>

      {/* Mostramos automáticamente la información del evento. */}
      <p>{info}</p>
    </div>
  );
}

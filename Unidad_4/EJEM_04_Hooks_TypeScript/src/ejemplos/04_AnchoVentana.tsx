import { useEffect, useState } from "react";

export default function AnchoVentana() {
  const [ancho, setAncho] = useState(() => window.innerWidth);

  useEffect(() => {
    function alCambiarTamano() {
      setAncho(window.innerWidth);
    }

    window.addEventListener("resize", alCambiarTamano);

    // Limpieza: sin esto, cada ejecución del efecto dejaría un oyente más
    return () => {
      window.removeEventListener("resize", alCambiarTamano);
    };
  }, []);

  return <p>La ventana mide {ancho}px de ancho. ¡Cambia su tamaño!</p>;
}

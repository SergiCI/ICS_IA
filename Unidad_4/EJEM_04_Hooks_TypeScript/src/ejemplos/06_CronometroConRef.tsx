import { useEffect, useRef, useState } from "react";

export default function CronometroConRef() {
  const [segundos, setSegundos] = useState(0);
  // Guardamos el id del temporizador: no se pinta, así que no es estado
  const idIntervalo = useRef<number | null>(null);

  function iniciar() {
    if (idIntervalo.current !== null) return; // ya está en marcha
    idIntervalo.current = window.setInterval(() => {
      setSegundos((anterior) => anterior + 1);
    }, 1000);
  }

  function parar() {
    if (idIntervalo.current === null) return;
    window.clearInterval(idIntervalo.current);
    idIntervalo.current = null;
  }

  // Al desmontar el componente, paramos el temporizador si sigue activo
  useEffect(() => {
    return () => {
      if (idIntervalo.current !== null) {
        window.clearInterval(idIntervalo.current);
      }
    };
  }, []);

  return (
    <section>
      <h3>{segundos} s</h3>
      <button onClick={iniciar}>Iniciar</button>
      <button onClick={parar}>Parar</button>
      <button onClick={() => setSegundos(0)}>A cero</button>
    </section>
  );
}

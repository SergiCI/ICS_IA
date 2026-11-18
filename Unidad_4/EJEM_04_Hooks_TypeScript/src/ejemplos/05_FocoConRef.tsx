import { useEffect, useRef, useState } from "react";

export default function FocoConRef() {
  const [nombre, setNombre] = useState("");
  // Al principio vale null: React la rellenará con el elemento del DOM
  const campoNombre = useRef<HTMLInputElement>(null);

  // Tras el primer renderizado el <input> ya existe: le damos el foco
  useEffect(() => {
    campoNombre.current?.focus();
  }, []);

  function limpiar() {
    setNombre("");
    campoNombre.current?.focus();
  }

  return (
    <section>
      <input
        ref={campoNombre}
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre del alumno"
      />
      <button onClick={limpiar}>Limpiar</button>
    </section>
  );
}

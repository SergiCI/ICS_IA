import { useEffect, useState } from "react";
import { obtenerAlumno, type Alumno } from "./comun/servicioAlumnos";

export default function CargaAlumno() {
  const [idAlumno, setIdAlumno] = useState(1);
  const [alumno, setAlumno] = useState<Alumno | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Pasa a true cuando este efecto ya no está vigente (cambia idAlumno
    // o se desmonta el componente): así descartamos respuestas «viejas»
    let ignorar = false;

    // La función del efecto no puede ser async, pero sí una función interna
    async function cargarAlumno() {
      try {
        const datos = await obtenerAlumno(idAlumno);
        if (ignorar) return;
        setAlumno(datos);
        setCargando(false);
      } catch (e) {
        if (ignorar) return;
        setError(e instanceof Error ? e.message : "Error desconocido");
        setCargando(false);
      }
    }
    cargarAlumno();

    return () => {
      ignorar = true;
    };
  }, [idAlumno]);

  function elegirAlumno(id: number) {
    // Mostrar «Cargando…» es consecuencia del evento, no del efecto
    setIdAlumno(id);
    setCargando(true);
    setError(null);
  }

  return (
    <section>
      {[1, 2, 3, 99].map((id) => (
        <button key={id} onClick={() => elegirAlumno(id)}>
          Alumno {id}
        </button>
      ))}
      {cargando && <p>Cargando…</p>}
      {error && <p role="alert">Error: {error}</p>}
      {!cargando && !error && alumno && <h3>{alumno.nombre}</h3>}
    </section>
  );
}

import type { EstadoIncidencia, Incidencia } from "./tipos";

// Datos de ejemplo en memoria. En la UT08 se sustituirán por PostgreSQL
// sin cambiar las dos funciones que se exportan al final.
const incidencias: Incidencia[] = [
  {
    id: 1,
    titulo: "El proyector del aula 2.1 no enciende",
    descripcion: "Al pulsar el botón de encendido no se ilumina ningún indicador.",
    estado: "abierta",
    aula: "2.1",
    apoyos: 4,
    creada: "2026-11-16",
  },
  {
    id: 2,
    titulo: "Falta conexión wifi en el taller",
    descripcion: "La red del centro no llega a la parte trasera del taller.",
    estado: "en_curso",
    aula: "Taller",
    apoyos: 9,
    creada: "2026-11-12",
  },
  {
    id: 3,
    titulo: "Enchufe suelto en el aula 1.4",
    descripcion: "El enchufe de la tercera mesa se mueve y hace chispas.",
    estado: "abierta",
    aula: "1.4",
    apoyos: 7,
    creada: "2026-11-18",
  },
  {
    id: 4,
    titulo: "Pizarra digital sin calibrar",
    descripcion: "El puntero se desvía unos tres centímetros del dedo.",
    estado: "resuelta",
    aula: "2.3",
    apoyos: 2,
    creada: "2026-10-29",
  },
  {
    id: 5,
    titulo: "Grifo del baño de la planta baja",
    descripcion: "Gotea de forma continua desde hace una semana.",
    estado: "en_curso",
    aula: "Planta baja",
    apoyos: 3,
    creada: "2026-11-09",
  },
];

export async function obtenerIncidencias(
  estado?: EstadoIncidencia,
): Promise<Incidencia[]> {
  return estado ? incidencias.filter((i) => i.estado === estado) : incidencias;
}

export async function obtenerIncidencia(
  id: number,
): Promise<Incidencia | undefined> {
  return incidencias.find((i) => i.id === id);
}

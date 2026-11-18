export interface Alumno {
  id: number;
  nombre: string;
}

const alumnos: Alumno[] = [
  { id: 1, nombre: "Lucía Fernández" },
  { id: 2, nombre: "Mateo García" },
  { id: 3, nombre: "Valeria Suárez" },
];

// Simula una petición al servidor: tarda entre 0,3 y 1,5 segundos
// y falla si el alumno no existe.
export function obtenerAlumno(id: number): Promise<Alumno> {
  const retardo = 300 + Math.random() * 1200;

  return new Promise((resolver, rechazar) => {
    setTimeout(() => {
      const alumno = alumnos.find((a) => a.id === id);
      if (alumno) {
        resolver(alumno);
      } else {
        rechazar(new Error(`No existe el alumno ${id}`));
      }
    }, retardo);
  });
}

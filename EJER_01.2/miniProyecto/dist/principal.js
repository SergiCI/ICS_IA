"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Ejercicio 5  — Mini proyecto. Organizar un proyecto con los .ts en src/ (por ejemplo modelos.ts con las interfaces Alumno y Curso, y principal.ts con la lógica),
//  configurar tsconfig.json con rootDir: "./src", outDir: "./dist", excluyendo cualquier archivo con errores deliberados (exclude) e
//   incluyendo explícitamente principal.ts (include). El proyecto debe combinar al menos una interfaz,
//  un enum, un tipo unión, una función tipada con array de objetos y comprobar que tsc -w recompila automáticamente al guardar cambios en src/.
const modelos_1 = require("./modelos");
// Creación de algunos cursos de ejemplo
const curso1 = {
    id: 1,
    nombre: "TypeScript Básico",
    nivel: "Principiante",
    estado: modelos_1.EstadoCurso.Activo
};
const curso2 = {
    id: 2,
    nombre: "TypeScript Avanzado",
    nivel: "Avanzado",
    estado: modelos_1.EstadoCurso.Pendiente
};
// Creación de alumnos con arrays de objetos (Cursos)
const alumnos = [
    {
        id: 101,
        nombre: "Ana Gómez",
        edad: 20,
        cursosInscritos: [curso1, curso2]
    },
    {
        id: 102,
        nombre: "Carlos Pérez",
        edad: 22,
        cursosInscritos: [curso1]
    }
];
/**
 * Función tipada que procesa un array de alumnos y muestra su información por consola.
 */
function mostrarInformacionAlumnos(listaAlumnos) {
    console.log("=== LISTADO DE ALUMNOS Y CURSOS ===");
    listaAlumnos.forEach((alumno) => {
        console.log(`Alumno: ${alumno.nombre} (Edad: ${alumno.edad})`);
        console.log("Cursos inscritos:");
        alumno.cursosInscritos.forEach((curso) => {
            console.log(` - [${curso.nivel}] ${curso.nombre} (${curso.estado})`);
        });
        console.log("----------------------------------");
    });
}
// Ejecutar la función
mostrarInformacionAlumnos(alumnos);
//# sourceMappingURL=principal.js.map
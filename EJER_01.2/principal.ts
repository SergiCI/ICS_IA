// Ejercicio 1 — Instalar y configurar TypeScript.Instalar TypeScript de forma global(npm i - g typescript), 
// comprobar la versión de npm, crear una carpeta de proyecto con un index.html básico y un archivo principal.ts que solo contenga un console.log('Hola TypeScript').
// Compilarlo con tsc principal.ts y comprobar que se genera principal.js.Por último, ejecutar tsc--init para generar tsconfig.json.
console.log('Hola TypeScript')

// Ejercicio 2 — Tipos básicos, inferencia y objetos.** Declarar variables `edad` (number), `nombre` (string) y `esActivo` (boolean),
//  unas veces dejando que TypeScript infiera el tipo y otras anotándolo explícitamente; provocar y corregir errores de tipos.
//  Después crear un objeto tipado `persona: { nombre: string; edad: number; esSocio: boolean }` 
// e intentar asignarle una propiedad inexistente (`persona.apellido`) para observar el error.
let edad: number = 19
let nombre: string = "Sergio"
let esActivo: boolean = true

let edad2 = 25
let nombre2 = "Pablo"
let esActivo2 = false

//Error provocado aposta
//edad = treinta
edad = 30

let persona: { nombre: string; edad: number; esSocio: boolean } = {
    nombre: "Sergio",
    edad: 19,
    esSocio: true
}

//Error de propiedad inexistente en array persona
//persona.apellidos = "Caramazana"

// Ejercicio 3 — Interfaces, arrays y funciones tipadas. 
// Definir una interfaz Alumno con nombre (string), nota (number) y activo (boolean, opcional), crear un array alumnos: Alumno[] con al menos cuatro registros,
//  y escribir una función calcularMedia(alumnos: Alumno[]): number que devuelva la nota media usando reduce. 
// Añadir una segunda función mostrarResumen(alumno: Alumno): void que imprima por consola sus datos, 
// y forzar un error de tipos llamando a calcularMedia con un argumento incorrecto.

interface Alumno {
    nombre: string
    nota: number
    activo?: boolean
}

const alumnos: Alumno[] = [
    {
        nombre: "Sergio",
        nota: 10,
        activo: true
    },
    {
        nombre: "Pablo",
        nota: 10,
        activo: true
    },
    {
        nombre: "Silvia",
        nota: 5,
        activo: false
    },
    {
        nombre: "Brandom",
        nota: 7,
        activo: false
    }
]

function calcularMedia(alumnos: Alumno[]): number {
    const suma = alumnos.reduce((total, alumno) => total + alumno.nota, 0)
    return suma / alumnos.length
}

function mostrarResumen(alumno: Alumno): void {
    console.log(`Estudiante: ${alumno.nombre} | Nota: ${alumno.nota} | Activo: ${alumno.activo ?? 'No especificado'}`)
}

// --- Pruebas del código correcto ---
console.log(`Nota media general: ${calcularMedia(alumnos)}`);
alumnos.forEach(mostrarResumen);

try {
    calcularMedia("Texto incorrecto" as any)
} catch (e) {
    console.log("Error controlado")
}

// Ejercicio 4 — Uniones, tipos literales y enums. Crear enum Rol { ADMIN, EDITOR, LECTOR } y una interfaz Usuario que use ese enum y 
// un tipo unión estado: 'activo' | 'inactivo' | 'pendiente'. Escribir una función describirUsuario(usuario: Usuario): string que, según el rol y el estado, 
// devuelva un mensaje distinto (usando comparaciones sobre el tipo literal y el enum),
//  y una matriz usuarios: Usuario[] con varios casos, incluido uno con un valor de estado inválido para comprobar que TypeScript lo rechaza.
enum Rol { ADMIN, EDITOR, LECTOR }

type estado = "activo" | "inactivo" | "pendiente"

interface Usuario {
    nombre: string
    rol: Rol
    estado: estado
}

function describirUsuario(usuario: Usuario): string {
    let rolTexto = ""

    switch (usuario.rol) {
        case Rol.ADMIN:
            rolTexto = "Administrador"
            break;
        case Rol.EDITOR:
            rolTexto = "Editor"
            break;
        case Rol.LECTOR:
            rolTexto = "Lector"
            break;
    }
    let estadoStr = '';
    switch (usuario.estado) {
        case 'activo':
            estadoStr = 'se encuentra activo en el sistema';
            break;
        case 'inactivo':
            estadoStr = 'está inactivo actualmente';
            break;
        case 'pendiente':
            estadoStr = 'tiene su cuenta pendiente de activación';
            break;
    }
    return `El usuario ${usuario.nombre} tiene el rol de ${rolTexto} y ${estadoStr}.`
}
const usuarios: Usuario[] = [
  { nombre: 'Lucía', rol: Rol.ADMIN, estado: 'activo' },
  { nombre: 'Marcos', rol: Rol.EDITOR, estado: 'pendiente' },
  { nombre: 'Sofía', rol: Rol.LECTOR, estado: 'inactivo' }
//   {nombre: "Test Error", rol: Rol.LECTOR, estado: "bloqueado"}
]
usuarios.forEach(u => {
  console.log(describirUsuario(u));
})

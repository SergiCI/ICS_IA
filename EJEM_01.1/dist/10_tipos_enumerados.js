"use strict";
// ============================================================
// UNIDAD 1.1 - TypeScript I
// Tema: Tipos enumerados (enum)
// ============================================================
Object.defineProperty(exports, "__esModule", { value: true });
// Un "enum" combina la idea de tipo unión y tipo literal: define un
// conjunto cerrado de valores CON NOMBRE, fácil de leer y reutilizar.
var Rol;
(function (Rol) {
    Rol[Rol["ADMIN"] = 0] = "ADMIN";
    Rol[Rol["LECTOR"] = 1] = "LECTOR";
    Rol[Rol["AUTOR"] = 2] = "AUTOR";
})(Rol || (Rol = {}));
const miRol = Rol.ADMIN;
const rolDeHriday = Rol.AUTOR;
console.log(miRol, rolDeHriday);
// Por defecto, cada valor del enum es un número: ADMIN = 0, LECTOR = 1,
// AUTOR = 2.
// ----- Enum de strings -----
// También se pueden asignar valores de tipo string, lo que hace que el
// código sea más legible al depurar (en vez de ver un 0, 1 o 2).
var Estado;
(function (Estado) {
    Estado["PENDIENTE"] = "PENDIENTE";
    Estado["ENVIADO"] = "ENVIADO";
    Estado["ENTREGADO"] = "ENTREGADO";
})(Estado || (Estado = {}));
const estadoActual = Estado.ENVIADO;
console.log(estadoActual);
// ❌ Error: 'CANCELADO' no es un miembro del enum Estado
// const estadoMalo: Estado = 'CANCELADO';
//# sourceMappingURL=10_tipos_enumerados.js.map
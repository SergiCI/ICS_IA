"use strict";
// ============================================================
// UNIDAD 1.1 - TypeScript I
// Tema: Interfaces y alias de tipo (type)
// ============================================================
Object.defineProperty(exports, "__esModule", { value: true });
const persona1 = {
    nombre: 'Nabendu',
    edad: 40,
    esDev: true
};
const persona2 = {
    nombre: 'Mousam',
    edad: 39,
    esDev: true
};
const persona3 = {
    nombre: 'Nabendu',
    edad: 40,
    esDev: true
};
const persona4 = 'Nabendu';
const equipo = [
    { nombre: 'Nabendu', categoria: 'frontend', edad: 40 },
    { nombre: 'Mousam', categoria: 'backend', edad: 39 }
];
console.log(persona1, persona2, persona3, persona4, equipo);
// 📌 Diferencia clave para el aula:
// - Las INTERFACES solo se usan con objetos, y se pueden "extender"
//   fácilmente entre sí (herencia).
// - Los TYPE se pueden usar con cualquier tipo de dato (strings,
//   uniones, arrays, objetos...), pero no se "extienden" del mismo modo.
//# sourceMappingURL=12_interfaces_y_tipos.js.map
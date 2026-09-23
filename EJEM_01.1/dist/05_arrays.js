"use strict";
// ============================================================
// UNIDAD 1.1 - TypeScript I
// Tema: Arrays (matrices)
// ============================================================
Object.defineProperty(exports, "__esModule", { value: true });
// TypeScript infiere el tipo del array a partir de sus elementos.
const lenguajes = ['React', 'Angular', 'Vue']; // inferido como string[]
lenguajes.push('TypeScript'); // ✅ correcto
// ❌ Error: no se puede añadir un number a un array de strings
// lenguajes.push(56);
// Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
// ❌ Error: no se puede añadir un boolean a un array de strings
// lenguajes.push(true);
// También se puede declarar el tipo de forma explícita con "Tipo[]"
const numeros = [51, 22, 33];
numeros.push(56); // ✅ correcto
// ❌ Error: '56' entre comillas es un string
// numeros.push('56');
// ❌ Error: true es un boolean
// numeros.push(true);
console.log(lenguajes, numeros);
//# sourceMappingURL=05_arrays.js.map
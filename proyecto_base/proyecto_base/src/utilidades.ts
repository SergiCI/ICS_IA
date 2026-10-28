// APARTADO 2 · Función calcularResultado
// Escribe aquí la función `calcularResultado` (consulta el enunciado).

import type { Resultado } from "./tipos";

export default function calcularResultado(calificacion : number): Resultado {
    if (calificacion < 5) {
        return 'Suspenso'
    }else if (calificacion >=5 && calificacion < 7) {
        return 'Aprobado'
    } else if (calificacion >=7 && calificacion < 9) {
        return 'Notable'
    }else{
        return 'Sobresaliente'
    }
};

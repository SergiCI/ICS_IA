//Falta un espacio entre el return y la etiqueta <p>, el error de sintaxis es Parse error/ Unexpected token.
export function saludo() {
  return <p>¡Hola, clase!</p>
}
//El error es que hay dos componentes independientes devolviendose sin estar en un fragmento, el error es de compilacion de JSX.
export function Tarjeta() {
  return (
    <>
    <h2>Desarrollo Web en Entorno Cliente</h2>
    <p>Segundo curso de DAW</p>
    </>
  )
}
//No exporta la funcion Pie y no hay espacio entre el return y la etiqueta, error de tiempo de compilacion SyntaxError: The request module './Pie'.
// Archivo: src/Pie.jsx
export function Pie() {
  return <footer>© Departamento de Informática</footer>
}
//
// Archivo: src/App.jsx
import {Pie} from './Pie'
//Al importar la funcion Cabecera() de el archivo Cabecera.jsx el archivo App.jsx lo intenta importar como si fuera una exportacion por defecto (import Cabecera from ...) y el espacio entre return y la etiqueta <header>,
//Error al renderizar(does not provide an export named 'default').
// Archivo: src/Cabecera.jsx
export function Cabecera() {
  return <header>Mi aplicación</header>
}
//
// Archivo: src/App.jsx
import {Cabecera} from './Cabecera'
//Falta un espacio entre la instrucción return y el elemento <p>, La variable anioActual se ha escrito como texto plano en lugar de usar la sintaxis de llaves { } de JSX.
export function Fecha() {
  const anioActual = new Date().getFullYear()
  return <p>Estamos en el año {anioActual}</p>
}
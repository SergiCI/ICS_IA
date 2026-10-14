# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Ejercicio 1.1
// Uso en App.jsx
<Saludo nombreAlumno="Lucía" />

// Saludo.jsx
export function Saludo({ nombre }) {
  return<p>¡Hola, {nombre}!</p>;
}
 En el saludo se define la variable como nombre alumno, mientras que en la funcion esta definida como solo nombre

<Saludo nombre="Lucía" />

// Saludo.jsx
export function Saludo({ nombre }) {
  return<p>¡Hola, {nombre}!</p>;
}


Ejercicio 1.2
export function Interruptor() {
  const [encendido, setEncendido] = useState(false);
  return (
    <button onClick={() => (encendido = !encendido)}>
      {encendido ? 'Apagar' : 'Encender'}
    </button>
  );
}

Se esta modificando direcctamente la variable de encendido sin usar la variable de estado

export function Interruptor() {
  const [encendido, setEncendido] = useState(false);
  return (
    <button onClick={() => (encendido = !setEncendido)}>
      {encendido ? 'Apagar' : 'Encender'}
    </button>
  );
}


Ejercicio 1.3

export function Contador() {
  const [valor, setValor] = useState(0);
  return<button onClick={setValor(valor + 1)}>Pulsado {valor} veces</button>;
}

Se esta ejecutando la funcion setValor inmediatamente ca vez que se renderiza, provocando un bucle infinito

export function Contador() {
  const [valor, setValor] = useState(0);
  return<button onClick={()=>setValor(valor + 1)}>Pulsado {valor} veces</button>;
}

Ejercicio 1.4

export function Contador() {
  const [valor, setValor] = useState(0);
  return<button onClick={() => setValor(valor + 1)}>{valor}</button>;
}

El useState no esta definido

import {useState} from 'react';

export function Contador() {
  const [valor, setValor] = useState(0);
  return<button onClick={() => setValor(valor + 1)}>{valor}</button>;
}

Ejercicio 1.5

export function BotonEnviar({ onEnviar }) {
  function manejarClic() {
    onEnviar();
  }
  return<button onClick={manejarClic}>Enviar</button>;
}

// En App.jsx
<BotonEnviar />

BotonEnviar no le pasa ningun dato a onEnviar

export function BotonEnviar({ onEnviar }) {
  function manejarClic() {
    if{onEnviar}onEnviar();
  }
  return<button onClick={manejarClic}>Enviar</button>;
}

// En App.jsx
<BotonEnviar />

Ejercicio 1.6

export function Bandeja() {
  const [mensajesNuevos, setMensajesNuevos] = useState(0);
  return (
    <div>
      {mensajesNuevos &&<p>Tienes {mensajesNuevos} mensajes nuevos</p>}
    </div>
  );
}
Cuando no hay mensajes, en la página aparece un 0 suelto.

export function Bandeja() {
  const [mensajesNuevos, setMensajesNuevos] = useState(0);
  return (
    <div>
      {mensajesNuevos > 0 &&<p>Tienes {mensajesNuevos} mensajes nuevos</p>}
    </div>
  );
}
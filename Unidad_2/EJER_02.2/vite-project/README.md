// Uso en App.jsx
<Saludo nombreAlumno="Lucía" />

// Saludo.jsx
export function Saludo({ nombreAlumno }) {
  return<p>¡Hola, {nombreAlumno}!</p>;
}

import { useState } from 'react';

export function Interruptor() {
  const [encendido, setEncendido] = useState(false);
  return (
    <button onClick={() => (setEncendido = !encendido)}>
      {encendido ? 'Apagar' : 'Encender'}
    </button>
  );
}

export function Contador() {
  const [valor, setValor] = useState(0);
  return<button onClick={setValor(valor + 1)}>Pulsado {valor} veces</button>;
}

export function Contador() {
  const [valor, setValor] = useState(0);
  return<button onClick={() => setValor(valor + 1)}>{valor}</button>;
}

export function BotonEnviar({ onEnviar }) {
  function manejarClic() {
  if (onEnviar) onEnviar();
  }
  return <button onClick={manejarClic}>Enviar</button>;
}

// En App.jsx
<BotonEnviar />

export function Bandeja() {
  const [mensajesNuevos, setMensajesNuevos] = useState(0);
  return (
    <div>
      {mensajesNuevos > 0 && <p>Tienes {mensajesNuevos} mensajes nuevos</p>}
    </div>
  );
}

// Uso en App.jsx
<Saludo nombreAlumno="Lucía" />

// Saludo.jsx
export function Saludo({ nombre }) {
  return<p>¡Hola, {nombre}!</p>;
}

export function Interruptor() {
  const [encendido, setEncendido] = useState(false);
  return (
    <button onClick={() => (encendido = !encendido)}>
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
    onEnviar();
  }
  return<button onClick={manejarClic}>Enviar</button>;
}

// En App.jsx
<BotonEnviar />

export function Bandeja() {
  const [mensajesNuevos, setMensajesNuevos] = useState(0);
  return (
    <div>
      {mensajesNuevos &&<p>Tienes {mensajesNuevos} mensajes nuevos</p>}
    </div>
  );
}
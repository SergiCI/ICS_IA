import { useState } from "react";

// Anexo: tipado de eventos.
export default function Ejemplo16_TipadoEventos() {
  const [texto, setTexto] = useState<string>("");
  const [edad, setEdad] = useState<number>(18);
  const [datos, setDatos] = useState({ nombre: "", curso: "1" });

  // Función aparte: hay que anotar el evento
  const manejarTexto = (e: React.ChangeEvent<HTMLInputElement>) => setTexto(e.target.value);

  // Manejador con tipo de manejador (el parámetro se infiere)
  const manejarEdad: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setEdad(e.target.valueAsNumber);

  // Un solo manejador para un input y un select (unión de elementos)
  const manejarCampo = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setDatos({ ...datos, [e.target.name]: e.target.value });

  const alHacerClic = (e: React.MouseEvent<HTMLButtonElement>) =>
    alert(`Botón: ${e.currentTarget.textContent}`);

  return (
    <div className="ejemplo">
      <h2>16 · Tipado de eventos</h2>
      <p><input value={texto} onChange={manejarTexto} placeholder="ChangeEvent<HTMLInputElement>" /></p>
      <p><input type="number" value={edad} onChange={manejarEdad} /> ChangeEventHandler</p>
      <p>
        <input name="nombre" value={datos.nombre} onChange={manejarCampo} />{" "}
        <select name="curso" value={datos.curso} onChange={manejarCampo}>
          <option value="1">1.º</option>
          <option value="2">2.º</option>
        </select>
      </p>
      <button onClick={alHacerClic}>MouseEvent&lt;HTMLButtonElement&gt;</button>
      <p className="nota">{texto} · {edad} · {datos.nombre} · {datos.curso}.º</p>
    </div>
  );
}

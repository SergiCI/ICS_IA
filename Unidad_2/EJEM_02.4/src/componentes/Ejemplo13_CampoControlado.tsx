import { useState } from "react";

// Concepto: campos controlados (text, checkbox, select).
export default function Ejemplo13_CampoControlado() {
  const [nombre, setNombre] = useState<string>("");
  const [acepto, setAcepto] = useState<boolean>(false);
  const [curso, setCurso] = useState<string>("1");

  return (
    <div className="ejemplo">
      <h2>13 · Campos controlados</h2>
      <p>
        <label htmlFor="nombre">Nombre: </label>
        <input id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </p>
      <p>
        <label>
          <input type="checkbox" checked={acepto} onChange={(e) => setAcepto(e.target.checked)} /> Acepto las condiciones
        </label>
      </p>
      <p>
        <label htmlFor="curso">Curso: </label>
        <select id="curso" value={curso} onChange={(e) => setCurso(e.target.value)}>
          <option value="1">1.º</option>
          <option value="2">2.º</option>
        </select>
      </p>
      <p>Resumen: {nombre || "(sin nombre)"} · {curso}.º · {acepto ? "acepta" : "no acepta"}</p>
    </div>
  );
}

import { useState } from "react";

// Concepto: formulario sencillo con onSubmit, preventDefault y validación derivada.
export default function Ejemplo14_AltaBoletin() {
  const [correo, setCorreo] = useState<string>("");
  const [enviado, setEnviado] = useState<boolean>(false);

  const errorCorreo = correo.includes("@") ? "" : "Escribe un correo válido"; // derivado

  const alEnviar = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (errorCorreo === "") setEnviado(true);
  };

  return (
    <div className="ejemplo">
      <h2>14 · Formulario de boletín</h2>
      {enviado ? (
        <p className="ok">¡Suscrito con {correo}!</p>
      ) : (
        <form onSubmit={alEnviar}>
          <label htmlFor="correo">Correo: </label>
          <input id="correo" type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />{" "}
          <button type="submit" disabled={errorCorreo !== ""}>Suscribirme</button>
          {correo !== "" && errorCorreo && <p className="error">{errorCorreo}</p>}
        </form>
      )}
    </div>
  );
}

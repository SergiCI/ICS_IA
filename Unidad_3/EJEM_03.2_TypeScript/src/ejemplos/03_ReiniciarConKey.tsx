import { useState } from "react";

interface PropsFormularioNota {
  usuario: string;
}

function FormularioNota({ usuario }: PropsFormularioNota) {
  const [nota, setNota] = useState("");
  return (
    <label>
      Nota para {usuario}:{" "}
      <input value={nota} onChange={(e) => setNota(e.target.value)} />
    </label>
  );
}

export default function DemoReiniciarConKey() {
  const [usuario, setUsuario] = useState("Ana");

  return (
    <section>
      <button onClick={() => setUsuario("Ana")}>Ana</button>
      <button onClick={() => setUsuario("Luis")}>Luis</button>
      {/* Al cambiar la key, React crea un componente nuevo (estado a cero) */}
      <FormularioNota key={usuario} usuario={usuario} />
    </section>
  );
}

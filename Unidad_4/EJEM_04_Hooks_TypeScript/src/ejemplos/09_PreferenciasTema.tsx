import { useAlmacenamientoLocal } from "./hooks/useAlmacenamientoLocal";

type Tema = "claro" | "oscuro";

export default function PreferenciasTema() {
  const [tema, setTema] = useAlmacenamientoLocal<Tema>("tema", "claro");
  const oscuro = tema === "oscuro";

  return (
    <section
      style={{
        padding: "1rem",
        background: oscuro ? "#1f2937" : "#f9fafb",
        color: oscuro ? "#f9fafb" : "#1f2937",
      }}
    >
      <p>
        Tema actual: <strong>{tema}</strong> (recarga la página: se conserva)
      </p>
      <button onClick={() => setTema(oscuro ? "claro" : "oscuro")}>
        Cambiar tema
      </button>
    </section>
  );
}

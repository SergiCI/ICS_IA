import { useEffect, useEffectEvent, useState } from "react";

interface PropsFichaProducto {
  idProducto: number;
  usuario: string;
  alRegistrar: (mensaje: string) => void;
}

function FichaProducto({
  idProducto,
  usuario,
  alRegistrar,
}: PropsFichaProducto) {
  // Evento de efecto: ve SIEMPRE los valores más recientes de «usuario» y
  // «alRegistrar», pero no forma parte de las dependencias del efecto
  const registrarVisita = useEffectEvent((id: number) => {
    alRegistrar(`Visita al producto ${id} (usuario: ${usuario})`);
  });

  useEffect(() => {
    registrarVisita(idProducto);
  }, [idProducto]); // «usuario» no está aquí a propósito

  return <p>Estás viendo el producto {idProducto}</p>;
}

export default function VisitaProducto() {
  const [idProducto, setIdProducto] = useState(1);
  const [usuario, setUsuario] = useState("Lucía");
  const [registro, setRegistro] = useState<string[]>([]);

  function anotar(mensaje: string) {
    setRegistro((anteriores) => [...anteriores, mensaje]);
  }

  return (
    <section>
      <button onClick={() => setIdProducto(idProducto + 1)}>
        Siguiente producto
      </button>
      <button onClick={() => setUsuario(usuario === "Lucía" ? "Mateo" : "Lucía")}>
        Cambiar de usuario ({usuario})
      </button>
      <FichaProducto
        idProducto={idProducto}
        usuario={usuario}
        alRegistrar={anotar}
      />
      <pre>{registro.join("\n")}</pre>
    </section>
  );
}

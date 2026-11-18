import { useId } from "react";

interface PropsCampo {
  etiqueta: string;
  tipo?: "text" | "email" | "password";
}

function Campo({ etiqueta, tipo = "text" }: PropsCampo) {
  // Un id único por instancia: el componente se puede usar varias veces
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{etiqueta}</label> <input id={id} type={tipo} />
    </div>
  );
}

export default function CamposConId() {
  return (
    <form>
      <Campo etiqueta="Nombre" />
      <Campo etiqueta="Correo" tipo="email" />
      <Campo etiqueta="Contraseña" tipo="password" />
    </form>
  );
}

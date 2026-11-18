import { useRef, type ComponentProps } from "react";

// En React 19 «ref» es una prop más: ya no hace falta forwardRef
interface PropsCampoTexto extends ComponentProps<"input"> {
  etiqueta: string;
}

function CampoTexto({ etiqueta, ref, ...resto }: PropsCampoTexto) {
  return (
    <label>
      {etiqueta} <input ref={ref} {...resto} />
    </label>
  );
}

export default function RefComoProp() {
  const campoCorreo = useRef<HTMLInputElement>(null);

  return (
    <section>
      <CampoTexto etiqueta="Correo:" type="email" ref={campoCorreo} />
      <button onClick={() => campoCorreo.current?.focus()}>
        Ir al campo
      </button>
    </section>
  );
}

import { useSyncExternalStore } from "react";

// Le decimos a React cómo suscribirse al «almacén externo» (el navegador)
function suscribirse(avisar: () => void) {
  window.addEventListener("online", avisar);
  window.addEventListener("offline", avisar);
  return () => {
    window.removeEventListener("online", avisar);
    window.removeEventListener("offline", avisar);
  };
}

export default function EstadoConexion() {
  const enLinea = useSyncExternalStore(
    suscribirse,
    () => navigator.onLine, // valor en el cliente
    () => true, // valor durante el renderizado en el servidor
  );

  return <p>{enLinea ? "🟢 Conectado" : "🔴 Sin conexión"}</p>;
}

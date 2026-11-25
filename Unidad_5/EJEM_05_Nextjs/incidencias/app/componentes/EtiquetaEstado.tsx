import { ETIQUETAS_ESTADO, type EstadoIncidencia } from "@/lib/tipos";

// Record<EstadoIncidencia, string>: una entrada por cada estado (ver lib/tipos.ts).
//
// Las clases se escriben completas: Tailwind no detecta nombres construidos
// por partes (por ejemplo `bg-${color}-100`).
const CLASES_ESTADO: Record<EstadoIncidencia, string> = {
  abierta: "bg-red-100 text-red-800",
  en_curso: "bg-amber-100 text-amber-900",
  resuelta: "bg-green-100 text-green-800",
};

interface PropsEtiquetaEstado {
  estado: EstadoIncidencia;
}

// Componente de servidor. El estado se indica con texto, no solo con color.
export function EtiquetaEstado({ estado }: PropsEtiquetaEstado) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${CLASES_ESTADO[estado]}`}
    >
      {ETIQUETAS_ESTADO[estado]}
    </span>
  );
}

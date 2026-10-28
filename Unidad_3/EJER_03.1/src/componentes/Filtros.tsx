import type { FiltroPrioridad } from "../tipos/tipos";

interface PropsFiltros {
  filtroActual: FiltroPrioridad;
  onCambiarFiltro: (filtro: FiltroPrioridad) => void;
}

const OPCIONES_FILTRO: { valor: FiltroPrioridad; etiqueta: string }[] = [
  { valor: "todas", etiqueta: "Todas" },
  { valor: "alta", etiqueta: " Alta" },
  { valor: "media", etiqueta: " Media" },
  { valor: "baja", etiqueta: " Baja" },
];

export function Filtros({ filtroActual, onCambiarFiltro }: PropsFiltros) {
  return (
    <div className="filtros-container" role="group" aria-label="Filtrar por prioridad">
      {OPCIONES_FILTRO.map((opcion) => {
        const esActivo = filtroActual === opcion.valor;
        return (
          <button
            key={opcion.valor}
            type="button"
            className={`btn-filtro ${esActivo ? "btn-filtro--activo" : ""}`}
            onClick={() => onCambiarFiltro(opcion.valor)}
            aria-pressed={esActivo}
          >
            {opcion.etiqueta}
          </button>
        );
      })}
    </div>
  );
}
import { useState, type ComponentType } from "react";
import NotaConEstado from "./ejemplos/01_NotaConEstado";
import NotaConReductor from "./ejemplos/02_NotaConReductor";
import CargaAlumno from "./ejemplos/03_CargaAlumno";
import AnchoVentana from "./ejemplos/04_AnchoVentana";
import FocoConRef from "./ejemplos/05_FocoConRef";
import CronometroConRef from "./ejemplos/06_CronometroConRef";
import RefComoProp from "./ejemplos/07_RefComoProp";
import Memoizacion from "./ejemplos/08_Memoizacion";
import MemoizacionConCompilador from "./ejemplos/08b_MemoizacionConCompilador";
import PreferenciasTema from "./ejemplos/09_PreferenciasTema";
import ListaUnidades from "./ejemplos/10_ListaUnidades";
import BuscadorConTransicion from "./ejemplos/11_BuscadorConTransicion";
import BuscadorDiferido from "./ejemplos/12_BuscadorDiferido";
import CamposConId from "./ejemplos/13_CamposConId";
import VisitaProducto from "./ejemplos/14_VisitaProducto";
import EstadoConexion from "./ejemplos/15_EstadoConexion";

interface Ejemplo {
  titulo: string;
  Componente: ComponentType;
}

const ejemplos: Ejemplo[] = [
  {
    titulo: "01 · Nota con useState",
    Componente: () => <NotaConEstado nombre="Lucía" />,
  },
  { titulo: "02 · Nota con useReducer", Componente: NotaConReductor },
  { titulo: "03 · Cargar datos con useEffect", Componente: CargaAlumno },
  { titulo: "04 · Suscripción y limpieza", Componente: AnchoVentana },
  { titulo: "05 · useRef: foco en un campo", Componente: FocoConRef },
  { titulo: "06 · useRef: valor mutable", Componente: CronometroConRef },
  { titulo: "07 · ref como prop (React 19)", Componente: RefComoProp },
  { titulo: "08 · useMemo, useCallback y memo", Componente: Memoizacion },
  { titulo: "08b · Sin memorización manual", Componente: MemoizacionConCompilador },
  { titulo: "09 · Hook propio: useAlmacenamientoLocal", Componente: PreferenciasTema },
  { titulo: "10 · Hook propio: useDatos", Componente: ListaUnidades },
  { titulo: "11 · useTransition", Componente: BuscadorConTransicion },
  { titulo: "12 · useDeferredValue", Componente: BuscadorDiferido },
  { titulo: "13 · useId", Componente: CamposConId },
  { titulo: "14 · useEffectEvent", Componente: VisitaProducto },
  { titulo: "15 · useSyncExternalStore", Componente: EstadoConexion },
];

export default function App() {
  const [indice, setIndice] = useState(0);
  const { Componente } = ejemplos[indice];

  return (
    <main style={{ textAlign: "left", padding: "1rem" }}>
      <h1>UT 04 · Hooks de React con TypeScript</h1>
      <select
        value={indice}
        onChange={(e) => setIndice(Number(e.target.value))}
      >
        {ejemplos.map((ej, i) => (
          <option key={ej.titulo} value={i}>
            {ej.titulo}
          </option>
        ))}
      </select>
      <hr />
      {/* key: al cambiar de ejemplo se reinicia todo su estado */}
      <Componente key={indice} />
    </main>
  );
}

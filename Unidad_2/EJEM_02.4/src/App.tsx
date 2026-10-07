import { useState } from "react";
import Ejemplo01_SinEstado from "./componentes/Ejemplo01_SinEstado";
import Ejemplo02_ContadorBasico from "./componentes/Ejemplo02_ContadorBasico";
import Ejemplo03_Instantanea from "./componentes/Ejemplo03_Instantanea";
import Ejemplo04_ReemplazoObjeto from "./componentes/Ejemplo04_ReemplazoObjeto";
import Ejemplo05_ListaTareas from "./componentes/Ejemplo05_ListaTareas";
import Ejemplo06_FormaFuncional from "./componentes/Ejemplo06_FormaFuncional";
import Ejemplo07_ContadorCaracteres from "./componentes/Ejemplo07_ContadorCaracteres";
import Ejemplo08_ListaProductos from "./componentes/Ejemplo08_ListaProductos";
import Ejemplo09_ObjetoEvento from "./componentes/Ejemplo09_ObjetoEvento";
import Ejemplo10_Burbujeo from "./componentes/Ejemplo10_Burbujeo";
import Ejemplo11_PasarDatos from "./componentes/Ejemplo11_PasarDatos";
import Ejemplo12_Teclado from "./componentes/Ejemplo12_Teclado";
import Ejemplo13_CampoControlado from "./componentes/Ejemplo13_CampoControlado";
import Ejemplo14_AltaBoletin from "./componentes/Ejemplo14_AltaBoletin";
import Ejemplo15_ElevarEstado from "./componentes/Ejemplo15_ElevarEstado";
import Ejemplo16_TipadoEventos from "./componentes/Ejemplo16_TipadoEventos";

interface Ejemplo {
  titulo: string;
  Componente: () => React.JSX.Element;
}

const ejemplos: Ejemplo[] = [
  { titulo: "01 · Variable normal (no funciona)", Componente: Ejemplo01_SinEstado },
  { titulo: "02 · useState", Componente: Ejemplo02_ContadorBasico },
  { titulo: "03 · Instantánea", Componente: Ejemplo03_Instantanea },
  { titulo: "04 · Reemplazo de objetos", Componente: Ejemplo04_ReemplazoObjeto },
  { titulo: "05 · Inmutabilidad (tareas)", Componente: Ejemplo05_ListaTareas },
  { titulo: "06 · Forma funcional", Componente: Ejemplo06_FormaFuncional },
  { titulo: "07 · Dato derivado", Componente: Ejemplo07_ContadorCaracteres },
  { titulo: "08 · Lista filtrada", Componente: Ejemplo08_ListaProductos },
  { titulo: "09 · Objeto evento", Componente: Ejemplo09_ObjetoEvento },
  { titulo: "10 · Burbujeo", Componente: Ejemplo10_Burbujeo },
  { titulo: "11 · Pasar datos", Componente: Ejemplo11_PasarDatos },
  { titulo: "12 · Teclado", Componente: Ejemplo12_Teclado },
  { titulo: "13 · Campos controlados", Componente: Ejemplo13_CampoControlado },
  { titulo: "14 · Formulario de boletín", Componente: Ejemplo14_AltaBoletin },
  { titulo: "15 · Elevar el estado", Componente: Ejemplo15_ElevarEstado },
  { titulo: "16 · Tipado de eventos", Componente: Ejemplo16_TipadoEventos },
];

export default function App() {
  const [indice, setIndice] = useState<number>(0);
  const { Componente } = ejemplos[indice];

  return (
    <div className="layout">
      <nav>
        <h1>UT 02.4 · Estados y eventos</h1>
        {ejemplos.map((ej, i) => (
          <button key={ej.titulo} className={i === indice ? "activo" : ""} onClick={() => setIndice(i)}>
            {ej.titulo}
          </button>
        ))}
      </nav>
      <main>
        <Componente key={indice} />
      </main>
    </div>
  );
}

import './App.css'
import InterruptorLuz from "./InterruptorLuz.tsx";
import ContadorLimitado from "./ContadorLimitado.tsx";
import ListaCompra from "./ListaCompra.tsx";
import BuscadorPeliculas from "./BuscadorPeliculas.tsx";

function App() {

  return (
    <>
      <div>
        <h1>Repaso Examen React + Typescript</h1>
        <InterruptorLuz />
        <ContadorLimitado />
        <ListaCompra />
        <BuscadorPeliculas />
      </div>
    </>
  )
}

export default App

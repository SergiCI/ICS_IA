// import { useState } from "react";
import "./TarjetaLibro.tsx"
import TarjetaLibro from "./TarjetaLibro.tsx";
import ListaPrestamos from "./ListaPrestamos.tsx";


function App() {
    // const[count, setCount] = useState(0)
    const prestarLibro = () => {
        alert('Préstamo registrado')
    }
    
    return (
        <>
        <main>
            <TarjetaLibro
            titulo="El señor de los anillos"
            autor="J. R. R Tolkien"
            estado="disponible"
            alPrestar={prestarLibro}
            />
            <TarjetaLibro
            titulo="Jurassic Park"
            autor="Michael Crichton"
            estado="reservado"
            alPrestar={prestarLibro}
            />
            <TarjetaLibro
            titulo="¿Querías vacaciones, Stilton?"
            autor="Geronimo Stilton"
            estado="prestado"
            alPrestar={prestarLibro}
            />
            <ListaPrestamos
            
            />
        </main>
        </>
    )
}
export default App
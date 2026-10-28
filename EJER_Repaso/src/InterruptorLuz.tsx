import { useState } from "react";

export default function InterruptorLuz() {
    const [encendida, setEncendida] = useState<boolean>(false);

    const manejarConmutacion = (): void => {
        setEncendida(!encendida);
    }
    const estiloRecuadro: React.CSSProperties = {
        width: '150px',
        height: '150px',
        borderRadius: '8px',
        backgroundColor: encendida ? '#fadb14' : '#262626',
        color: encendida ? '#000000' : '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1rem',
        transition: 'background-color 0.3s ease',
        fontWeight: 'bold',
    }

    return (
        <div>
            <h2>Ejercicio 1: Interruptor de la Luz</h2>
            <div style={estiloRecuadro}>
                {encendida ? 'Luz Encendida' : 'Luz Apagada'}
            </div>
            <button onClick={manejarConmutacion}>
                {encendida ? 'Apagar' : 'Encender'}
            </button>
        </div>
    )
}
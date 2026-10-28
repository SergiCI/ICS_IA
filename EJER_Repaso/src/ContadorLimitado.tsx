import { useState } from "react";

export default function ContadorLimitado() {
    const [cuenta, setCuenta] = useState<number>(1);

    const sumar = (): void => {
        setCuenta((anterior) => Math.min(anterior + 1, 10))
    }
    const restar = (): void => {
        setCuenta((anterior) => Math.max(anterior - 1, 0))
    }
    const reiniciar = (): void => {
        setCuenta(0)
    }

    const esMaximoAlcanzado: boolean = cuenta === 10;
    const esMinimoAlcanzado: boolean = cuenta === 0;

    return (
        <div>
            <h2>Ejercicio 2: Contador Limitado</h2>
            <h3>Valor actual: {cuenta}</h3>

            {esMaximoAlcanzado && (
                <p>Máximo Alcanzado</p>
            )}

            <div>
                <button onClick={restar} disabled={esMinimoAlcanzado}>
                    Restar
                </button>
                <button onClick={sumar} disabled={esMaximoAlcanzado}>
                    Sumar
                </button>
                <button onClick={reiniciar}>
                    Reiniciar
                </button>
            </div>
        </div>
    )
}
import  type { ReactNode } from "react";

type PropsTarjetaLibro = {
    titulo : string,
    autor : string,
    estado? : 'disponible' | 'prestado' | 'reservado',
    children? : ReactNode,
    alPrestar? : () => void;
};

export default function  TarjetaLibro( {
    titulo,
    autor,
    estado = 'disponible',
    children,
    alPrestar
}: PropsTarjetaLibro) {
    return (
        <article>
            <h2>{titulo}</h2>
            <p>autor : {autor}</p>
            <p>{estado}</p>

            {children}

            {estado === "disponible" && (
                <button onClick={() => alPrestar?.()}>
                    Prestar
                </button>
            )}
        </article>
    )
}
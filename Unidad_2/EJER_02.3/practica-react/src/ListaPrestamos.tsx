import { useState } from "react";

type Prestamo = {
    id: number;
    titulo: string;
    alumno: string;
    devuelto: boolean;
};

export default function ListaPrestamos() {
    const [prestamos, setPrestamos] = useState<Prestamo[]>([
        {
            id: 1,
            titulo: "Dune",
            alumno: "Pablo",
            devuelto: false
        },
        {
            id: 2,
            titulo: "World War Z",
            alumno: "Silvia",
            devuelto: false
        }
    ])
    const [prestamoSeleccionado, setprestamoSeleccionado] = useState<Prestamo | null>(null);

    const marcadevuelto = (id: number) => {
        setPrestamos((prestamoActuales) =>
            prestamoActuales.map((prestamo) =>
                prestamo.id === id ? { ...prestamo, devuelto: true } : prestamo))
    }
    return (
        <>
            <section>
                <h1>Lista de Prestamos</h1>

                {prestamos.map((prestamo) => (
                    <article key={prestamo.id}>
                        <h3>Titulo: {prestamo.titulo}</h3>
                        <p>Alumno: {prestamo.alumno}</p>
                        <p>Devuelto: {prestamo.devuelto ? 'Devuelto' : 'Pendiente'}</p>
                        <button onClick={() => setprestamoSeleccionado}>Seleccionar Prestamo</button>
                        {!prestamo.devuelto && (
                            <button onClick={() => marcadevuelto(prestamo.id)}>Marcar como devuelto</button>
                        )}
                    </article>
                ))}

                <p>Prestamo seleccionado:{''}
                    {prestamoSeleccionado ? prestamoSeleccionado.titulo : 'Ninguno'}
                </p>
            </section>
        </>
    )
}
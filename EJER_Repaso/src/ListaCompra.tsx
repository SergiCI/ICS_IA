import React, { useState } from "react";

interface Producto {
    id: number;
    nombre: string;
    comprado: boolean
}

export default function ListaCompra() {
    const [listaProductos, setListaProductos] = useState<Producto[]>([]);
    const [nuevoNombre, setNuevoNombre] = useState<string>('');

    const manejarCambioTexto = (evento: React.ChangeEvent<HTMLInputElement>): void => {
        setNuevoNombre(evento.target.value);
    };

    const agregarProducto = (evento: React.SubmitEvent<HTMLFormElement>): void => {
        evento.preventDefault();
        const nombreLimpio = nuevoNombre.trim();
        if (nombreLimpio === '') return;

        const nuevoProducto: Producto = {
            id: Date.now(),
            nombre: nombreLimpio,
            comprado: false,
        };

        setListaProductos((listaAnterior) => [...listaAnterior, nuevoProducto]);
        setNuevoNombre('');
    };

    const alternarComprado = (id: number): void => {
        setListaProductos((listaAnterior) =>
            listaAnterior.map((producto) =>
                producto.id === id ? { ...producto, comprado: !producto.comprado } : producto
            )
        );
    };

    const eliminarProducto = (id: number): void => {
        setListaProductos((listaAnterior) =>
            listaAnterior.filter((producto) => producto.id !== id)
        );
    };

    const pendientesCount: number = listaProductos.filter((prod) => !prod.comprado).length;

    return (
        <div>
            <h2>Ejercicio 3: Lista de la Compra</h2>

            <form onSubmit={agregarProducto}>
                <input
                    type="text"
                    value={nuevoNombre}
                    onChange={manejarCambioTexto}
                    placeholder="Nombre del producto..."
                />
                <button type="submit">Añadir</button>
            </form>

            <p>Pendientes: {pendientesCount}</p>

            {listaProductos.length === 0 ? (
                <p>No hay productos en la lista.</p>
            ) : (
                <ul>
                    {listaProductos.map((producto) => (
                        <li key={producto.id}>
                            <input
                                type="checkbox"
                                checked={producto.comprado}
                                onChange={() => alternarComprado(producto.id)}
                            />
                            <span
                                style={{
                                    textDecoration: producto.comprado ? 'line-through' : 'none',
                                    color: producto.comprado ? '#8c8c8c' : 'inherit',
                                    flexGrow: 1,
                                }}>
                                {producto.nombre}
                            </span>
                            <button onClick={() => eliminarProducto(producto.id)}>Quitar</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
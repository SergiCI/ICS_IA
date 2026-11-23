import { useState } from "react";
import type { ItemCarrito, Producto } from "./Types";

interface FilaCarritoProps {
    item: ItemCarrito;
    catalogo: Producto[];
    onIncrementar: (idProducto: string) => void;
    onDecrementar: (idProducto: string) => void;
    onEliminar: (idProducto: string) => void;
}

const formateadorMoneda = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
});

export function FilaCarrito({
    item,
    catalogo,
    onIncrementar,
    onDecrementar,
    onEliminar,
}: FilaCarritoProps) {
    // Estado local para la nota de regalo de esta fila específica
    const [notaRegalo, setNotaRegalo] = useState("");

    const producto = catalogo.find((p) => p.id === item.idProducto);

    if (!producto) return null;

    const subtotal = producto.precio * item.cantidad;

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", borderBottom: "1px solid #eee", paddingBottom: "12px", marginBottom: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <strong>{producto.nombre}</strong>
                    <div>{formateadorMoneda.format(producto.precio)} x {item.cantidad} = <strong>{formateadorMoneda.format(subtotal)}</strong></div>
                </div>

                <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                    <button onClick={() => onDecrementar(producto.id)}>−</button>
                    <span>{item.cantidad}</span>
                    <button
                        onClick={() => onIncrementar(producto.id)}
                        disabled={item.cantidad >= producto.stock}
                    >
                        +
                    </button>
                    <button onClick={() => onEliminar(producto.id)} style={{ marginLeft: "8px", color: "red" }}>
                        Eliminar
                    </button>
                </div>
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Nota para regalo..."
                    value={notaRegalo}
                    onChange={(e) => setNotaRegalo(e.target.value)}
                    style={{ width: "100%", padding: "4px" }}
                />
            </div>
        </div>
    );
}
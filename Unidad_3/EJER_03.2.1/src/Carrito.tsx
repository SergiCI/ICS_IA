import type { ItemCarrito, Producto } from "./Types";
import { FilaCarrito } from "./FilaCarrito";
import { ResumenCarrito } from "./ResumenCarrito";

interface CarritoProps {
    carrito: ItemCarrito[];
    catalogo: Producto[];
    onIncrementar: (idProducto: string) => void;
    onDecrementar: (idProducto: string) => void;
    onEliminar: (idProducto: string) => void;
    onVaciar: () => void;
}

export function Carrito({
    carrito,
    catalogo,
    onIncrementar,
    onDecrementar,
    onEliminar,
    onVaciar,
}: CarritoProps) {
    const estaVacio = carrito.length === 0;

    // Datos derivados para el resumen
    const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const subtotal = carrito.reduce((acc, item) => {
        const producto = catalogo.find((p) => p.id === item.idProducto);
        return acc + (producto ? producto.precio * item.cantidad : 0);
    }, 0);

    return (
        <div style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px" }}>
            <h2>Tu Carrito</h2>

            {estaVacio ? (
                <p>Tu carrito está vacío</p>
            ) : (
                <>
                    <div>
                        {carrito.map((item) => (
                            <FilaCarrito
                                key={item.idProducto} // ¡Clave estable basada en el ID del producto!
                                item={item}
                                catalogo={catalogo}
                                onIncrementar={onIncrementar}
                                onDecrementar={onDecrementar}
                                onEliminar={onEliminar}
                            />
                        ))}
                    </div>

                    <ResumenCarrito totalUnidades={totalUnidades} subtotal={subtotal} />

                    <button
                        onClick={onVaciar}
                        style={{ marginTop: "16px", background: "#ff4d4d", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}
                    >
                        Vaciar carrito
                    </button>
                </>
            )}
        </div>
    );
}
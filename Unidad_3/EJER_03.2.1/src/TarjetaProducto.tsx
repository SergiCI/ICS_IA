import type { Producto, ItemCarrito } from "./Types";

interface TarjetaProductoProps {
    producto: Producto;
    carrito: ItemCarrito[];
    onAnadir: (idProducto: string) => void;
}

const formateadorMoneda = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
});

export function TarjetaProducto({ producto, carrito, onAnadir }: TarjetaProductoProps) {
    // Buscamos cuántas unidades de este producto ya están en el carrito
    const itemEnCarrito = carrito.find((item) => item.idProducto === producto.id);
    const cantidadEnCarrito = itemEnCarrito ? itemEnCarrito.cantidad : 0;

    const sinStock = producto.stock === 0;
    const sinMasUnidades = cantidadEnCarrito >= producto.stock;

    return (
        <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
            <h3>{producto.nombre}</h3>
            <p>{formateadorMoneda.format(producto.precio)}</p>
            <p style={{ fontSize: "0.9rem", color: "#666" }}>Stock disponible: {producto.stock}</p>

            <button
                onClick={() => onAnadir(producto.id)}
                disabled={sinStock || sinMasUnidades}
            >
                {sinStock ? "Agotado" : sinMasUnidades ? "Sin más unidades" : "Añadir"}
            </button>
        </div>
    );
}
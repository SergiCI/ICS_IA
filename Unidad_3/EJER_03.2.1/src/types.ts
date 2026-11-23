export interface Producto {
    id: string;
    nombre: string;
    precio: number;
    stock: number;
}

export interface ItemCarrito {
    idProducto: string;
    cantidad: number;
}
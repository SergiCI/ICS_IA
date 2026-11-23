import { useState } from "react";
import type { Producto, ItemCarrito } from "./Types";
import { TarjetaProducto } from "./TarjetaProducto";
import { Carrito } from "./Carrito";
import "./App.css";

const catalogoInicial: Producto[] = [
  { id: "p1", nombre: "Teclado mecánico", precio: 59.9, stock: 5 },
  { id: "p2", nombre: "Ratón inalámbrico", precio: 24.5, stock: 3 },
  { id: "p3", nombre: "Alfombrilla XL", precio: 12, stock: 10 },
  { id: "p4", nombre: "Monitor 27 pulgadas", precio: 219, stock: 2 },
  { id: "p5", nombre: "Webcam Full HD", precio: 39.95, stock: 0 },
  { id: "p6", nombre: "Auriculares con micrófono", precio: 34.5, stock: 4 },
];

export function App() {
  const [catalogo] = useState<Producto[]>(catalogoInicial);
  const [carrito, setCarrito] = useState<ItemCarrito[]>([]);

  // Añadir o incrementar si ya existe
  const handleAnadir = (idProducto: string) => {
    setCarrito((prevCarrito) => {
      const indexExistente = prevCarrito.findIndex((item) => item.idProducto === idProducto);

      if (indexExistente !== -1) {
        // Ya está, incrementamos respetando el stock
        const producto = catalogo.find((p) => p.id === idProducto);
        const itemActual = prevCarrito[indexExistente];

        if (producto && itemActual.cantidad < producto.stock) {
          const nuevoCarrito = [...prevCarrito];
          nuevoCarrito[indexExistente] = {
            ...itemActual,
            cantidad: itemActual.cantidad + 1,
          };
          return nuevoCarrito;
        }
        return prevCarrito;
      } else {
        // No está, lo añadimos con cantidad 1
        return [...prevCarrito, { idProducto, cantidad: 1 }];
      }
    });
  };

  const handleIncrementar = (idProducto: string) => {
    handleAnadir(idProducto); // Reutilizamos la lógica de añadir límite por stock
  };

  const handleDecrementar = (idProducto: string) => {
    setCarrito((prevCarrito) => {
      const itemExistente = prevCarrito.find((item) => item.idProducto === idProducto);
      if (!itemExistente) return prevCarrito;

      if (itemExistente.cantidad === 1) {
        // Si la cantidad es 1, eliminamos la línea por completo
        return prevCarrito.filter((item) => item.idProducto !== idProducto);
      } else {
        // Decrementamos en 1
        return prevCarrito.map((item) =>
          item.idProducto === idProducto ? { ...item, cantidad: item.cantidad - 1 } : item
        );
      }
    });
  };

  const handleEliminar = (idProducto: string) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.idProducto !== idProducto));
  };

  const handleVaciar = () => {
    setCarrito([]);
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Tienda Online - Carrito de la compra</h1>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px" }}>
        {/* Sección de Catálogo */}
        <section>
          <h2>Catálogo de Productos</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
            {catalogo.map((producto) => (
              <TarjetaProducto
                key={producto.id}
                producto={producto}
                carrito={carrito}
                onAnadir={handleAnadir}
              />
            ))}
          </div>
        </section>

        {/* Sección de Carrito */}
        <section>
          <Carrito
            carrito={carrito}
            catalogo={catalogo}
            onIncrementar={handleIncrementar}
            onDecrementar={handleDecrementar}
            onEliminar={handleEliminar}
            onVaciar={handleVaciar}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
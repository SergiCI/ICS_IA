import { useState } from "react";

// Definimos la estructura de cada producto.
interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

// Lista base de productos que no cambia durante la ejecución del ejemplo.
const productos: Producto[] = [
  { id: 1, nombre: "Teclado", precio: 25 },
  { id: 2, nombre: "Ratón", precio: 12 },
  { id: 3, nombre: "Monitor", precio: 150 },
  { id: 4, nombre: "Altavoces", precio: 30 },
];

// Concepto: mantener el menor estado posible (solo el filtro) y derivar el resto.
// La lista visible y el total se calculan a partir del estado actual del filtro.
export default function Ejemplo08_ListaProductos() {
  // El único estado que necesitamos es el texto del filtro.
  const [filtro, setFiltro] = useState<string>("");

  // visibles: lista derivada. No se guarda en estado, porque se puede calcular siempre.
  // Se filtra la lista base según el texto introducido por el usuario.
  const visibles = productos.filter((p) =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  // total: dato derivado. También se calcula al vuelo a partir de la lista visible.
  const total = visibles.reduce((suma, p) => suma + p.precio, 0);

  return (
    <div className="ejemplo">
      <h2>08 · Lista filtrada</h2>

      {/* Input controlado: el valor del campo depende del estado filtro. */}
      <input placeholder="Filtrar" value={filtro} onChange={(e) => setFiltro(e.target.value)} />

      {/* Mostramos solo los productos que cumplen el criterio de filtro. */}
      <ul>
        {visibles.map((p) => (
          <li key={p.id}>{p.nombre} – {p.precio} €</li>
        ))}
      </ul>

      {/* El total está siempre sincronizado con los productos visibles. */}
      <p>Total de los visibles: {total} €</p>
    </div>
  );
}

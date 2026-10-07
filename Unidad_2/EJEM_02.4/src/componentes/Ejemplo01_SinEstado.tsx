// Concepto: una variable normal NO actualiza la pantalla.
export default function Ejemplo01_SinEstado() {
  let contador = 0;

  const sumar = () => {
    contador = contador + 1;
    console.log("contador vale", contador); // cambia en consola...
  };

  return (
    <div className="ejemplo">
      <h2>01 · Variable normal</h2>
      <p>Contador: {contador}</p>
      <button onClick={sumar}>Sumar</button>
      <p className="nota">Abre la consola: la variable cambia, pero la pantalla no.</p>
    </div>
  );
}

// APARTADO 3 · Componente ResumenNotas
// Ahora muestra datos fijos. Hay que convertirlo en un componente configurable mediante props.

type props = {
  titulo?: string;
  media: number;
  aprobadas: number;
  total: number;
}

export function ResumenNotas({
  titulo = 'Resumen',
  media,
  aprobadas,
  total
}: props) {
  return (
    <section className="resumen">
      <h2>{titulo}</h2>
      <p>
        Nota media: <strong>{media}</strong>
      </p>
      <p>Módulos aprobados: {aprobadas}</p>
      {aprobadas === total &&(
        <p>¡Enhorabuena, todo aprobado!</p>
      )}
      {aprobadas !== total && (
        <p>Tienes módulos pendientes</p>
      )}
    </section>
  );
}

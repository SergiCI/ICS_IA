// TarjetaModulo.jsx
export function TarjetaModulo({ titulo, horas = 0, curso = '1º', children }) {
  // Determinamos el emoji y la etiqueta accesible según el curso
  const esSegundo = curso === '2º';
  const emoji = esSegundo ? '📗' : '📘';
  const labelCurso = esSegundo ? 'Segundo curso' : 'Primer curso';

  return (
    <section className="tarjeta-modulo" style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0', borderRadius: '8px' }}>
      <h3>
        <span role="img" aria-label={labelCurso}>
          {emoji}
        </span>{' '}
        {titulo} - <small>Curso: {curso}</small>
      </h3>

      {/* Solo se muestra si horas es mayor que 0 */}
      {horas > 0 && <p><strong>{horas}</strong> horas semanales</p>}

      {/* Contenido recibido a través de children (descripción) */}
      {children && <div className="descripcion">{children}</div>}
    </section>
  );
}
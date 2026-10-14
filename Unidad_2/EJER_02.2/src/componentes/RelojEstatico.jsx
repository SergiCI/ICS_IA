export const RelojEstatico = () => {
  const hora = new Date().toLocaleTimeString('es-ES')

  return <p>Hora actual: {hora}</p>
}
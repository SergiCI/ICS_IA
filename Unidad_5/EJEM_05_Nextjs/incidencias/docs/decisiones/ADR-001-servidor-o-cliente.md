# ADR-001 · Cada página es de servidor salvo la interactividad mínima

- **Estado:** aceptada
- **Fecha:** 2026-11-23

## Contexto

La aplicación de incidencias muestra un listado y un detalle que cualquier
persona del centro debe poder abrir rápido desde el móvil. Los datos cambian
varias veces al día. La única interacción real es filtrar el listado y pulsar
«Me afecta».

## Decisión

Todas las páginas y componentes son **de servidor** por defecto. Solo son
**de cliente** los componentes que necesitan un hook de estado o efecto o un
manejador de evento del navegador: `BotonApoyo` (usa `useState`) y
`FiltroEstado` (usa `useRouter` y `onChange`). El listado se genera en el
servidor en cada petición porque depende de `?estado=` en la URL.

## Alternativas consideradas

- **Toda la aplicación como SPA en el cliente (CSR):** se descartó porque
  obliga a descargar JavaScript antes de ver nada y el listado no sería
  accesible sin él.
- **Páginas estáticas (SSG) con regeneración:** se descartó porque las
  incidencias cambian a menudo y no queremos mostrar datos obsoletos.

## Consecuencias

- Se envía poco JavaScript al navegador: solo el de las dos «islas» de cliente.
- El filtro recarga la página del servidor en cada cambio, algo más lento que
  filtrar en memoria, pero la URL se puede compartir.
- Si más adelante aparece mucha interactividad en una pantalla, se revisará
  esta decisión para esa ruta concreta.

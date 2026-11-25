# Incidencias del centro · ejemplos de la UT05

Proyecto de ejemplo de la unidad **UT05 · Next.js: arquitectura, rutas, estilos y primer ADR**
(versión mínima). Es el punto de partida del proyecto que se amplía en las unidades siguientes.

## Cómo ejecutarlo

```bash
npm install
npm run dev        # desarrollo: http://localhost:3000
```

Para ver la diferencia entre página estática y dinámica hay que compilar:

```bash
npm run build
npm start
```

Requisitos: Node.js 20.9 o superior. Versiones con las que está probado:
Next.js 16.4, React 19, Tailwind CSS 4.

## Qué hay y en qué apartado de los apuntes se explica

| Archivo | Apartado |
|---|---|
| `app/layout.tsx`, `app/page.tsx`, `app/globals.css` | 2 · De React a Next.js (y 6 · Estilos) |
| `app/renderizado/` y `app/componentes/RelojCliente.tsx` | 3 · Estrategias de renderizado |
| `app/componentes/BotonApoyo.tsx`, `FiltroEstado.tsx`, `TarjetaIncidencia.tsx`, `EtiquetaEstado.tsx` | 4 · Componentes de servidor y de cliente |
| `app/incidencias/page.tsx`, `app/incidencias/[id]/` | 5 · Rutas, navegación y layouts |
| `app/layout.tsx`, `app/componentes/EtiquetaEstado.tsx` | 6 · Estilos y accesibilidad |
| `app/api/incidencias/route.ts` | 7 · Primer Route Handler |
| `docs/decisiones/` | 8 · Decisiones de arquitectura (ADR) |
| `lib/tipos.ts`, `lib/datos.ts` | datos de ejemplo en memoria |

## Dos cambios respecto a lo que genera `create-next-app`

1. **`next.config.ts`:** `create-next-app` 16.4 activa `cacheComponents` y
   `partialPrefetching`. Aquí se han quitado para trabajar con el modelo clásico de
   renderizado. Se explica en el apartado 2.4 de los apuntes.
2. **`app/layout.tsx`:** se ha eliminado la fuente de Google (`next/font`), que se
   estudia en la ampliación, y se ha puesto `lang="es"`.

## Pruebas rápidas desde el terminal

```bash
curl http://localhost:3000/api/incidencias
curl "http://localhost:3000/api/incidencias?estado=abierta"
curl -i "http://localhost:3000/api/incidencias?estado=otra"      # 400
curl -i http://localhost:3000/incidencias/99                     # 404
```

# UT 04 · ejemplos (React + TypeScript)

Requisitos: Node.js 20+.

```bash
npm install
npm run dev      # menú para elegir cada ejemplo
npm run build    # comprueba los tipos (tsc) y compila
npm run lint     # oxlint
```

- `src/ejemplos/`: un archivo por ejemplo (los números coinciden con el documento).
  Los hooks propios están en `src/ejemplos/hooks/`.
- `src/fragmentos/`: fragmentos del documento, incluidos los que contienen errores
  de tipos intencionados (`@ts-expect-error`).
- `npm run lint` muestra **avisos y errores intencionados** de `src/fragmentos/`
  (hooks llamados en condiciones, dependencias incompletas, `setState` en efectos…):
  son los que explica el tema. Los archivos de `src/ejemplos/` no producen ninguno.
- React 19.3 · TypeScript 7.0 · Vite 8.

## Probar el React Compiler (ejemplo 08b)

El ejemplo **08b** no usa `useMemo`, `useCallback` ni `memo`. Ábrelo con la consola
del navegador visible: en el proyecto tal como viene, la media se recalcula y el botón
se vuelve a renderizar en cada clic. Activa el compilador y compara:

```bash
npm install -D babel-plugin-react-compiler@latest @rolldown/plugin-babel
```

```ts
// vite.config.ts
import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
});
```

Reinicia `npm run dev` y repite los clics: ya no se recalcula ni se repinta lo que no ha cambiado.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


1. Punto de entrada y createRoot

El punto de entrada principal del codigo JavaScript/React esta en el archivo src/main.jsx.

La funcion createRoot (de react-dom/client) crea una raiz de React vinculada a un nodo del DOM HTML. Su funcion es gestionar y renderizar el arbol de componentes dentro de ese nodo objetivo usando el nuevo motor de renderizado concurrente de React.
2. ID de montaje y archivo HTML

El elemento HTML tiene el ID root (<div id="root"></div>). Esta definido dentro del archivo index.html ubicado en la raiz del proyecto.
3. Arbol de componentes al arrancar

App
  (Header/Logo Vite + React)
  (Seccion de contador con boton)
  (Parrafo explicativo / footer)

4. Comportamiento de <StrictMode>

    En la pagina visual: No cambia nada a simple vista; la interfaz se muestra exactamente igual.

    En la consola en modo desarrollo: Se desactiva la doble ejecucion preventiva de los efectos (useEffect) y renderizados de componentes. Con StrictMode, React renderiza los componentes dos veces intencionadamente en desarrollo para detectar posibles efectos secundarios no deseados o codigo impuro. Al quitarlo, los logs/efectos solo se ejecutan una vez.

5. Tres fragmentos de JavaScript ({ }) en App.jsx

    Incrustacion de imagenes/recursos:
    JavaScript

    <img src={viteLogo} className="logo" alt="Vite logo" />

    Evalua la variable importada viteLogo e inyecta su ruta como atributo HTML src.

    Manejador de eventos e interpolacion de estado:
    JavaScript

    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>

    Pasa una funcion flecha al evento onClick y muestra dinamicamente el valor numerico de la variable de estado count.

    Manejo de variables o expresiones en texto:
    JavaScript

    <code>src/App.jsx</code>

    (Dependiendo de la plantilla de Vite, tambien se suele encontrar {count} o ternarios/expresiones como {count => ...} dentro del JSX).

6. El elemento <> (Fragmento)

El elemento <> (sintaxis corta de <React.Fragment>) es un Fragmento de React.

Sirve para agrupar multiples elementos adyacentes sin necesidad de anadir un nodo contenedor extra al arbol. No genera ningun elemento directo en el DOM HTML; en la pestana Elementos del navegador veras directamente los nodos hijos sin ningun <div> padre envolviendolos.

Recarga la página varias veces. ¿La hora cambia sola mientras miras la página, o solo al recargar? ¿Por qué crees que ocurre esto? Con lo que sabes hasta ahora basta una hipótesis; lo veremos en la siguiente unidad.
La hora solo cambia al recargar la página (o cuando se produce un nuevo renderizado de la aplicación). Mientras la miras de forma estática, se queda fija.
Ocurre porque la constante hora se calcula una sola vez en el instante preciso en que la función RelojEstatico se ejecuta para renderizar el componente. React genera el código HTML estático correspondiente a ese momento y no tiene ningún motivo para volver a ejecutar la función del componente salvo que la página se vuelva a cargar o cambie algún estado/propiedad del componente. Para que se actualice cada segundo sin recargar, se necesitaría gestionar un estado (useState) y un efecto secundario (useEffect con un setInterval).
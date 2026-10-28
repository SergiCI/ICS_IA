# Dashboard de Tareas Interactivo

Aplicación desarrollada en React con TypeScript y Vite para la gestión y filtrado dinámico de tareas.

## Responsabilidad de cada componente

- **App.tsx**: Administra el estado global de las tareas y del filtro activo, calcula los datos derivados (tareas visibles) y renderiza la estructura principal.
- **Filtros.tsx**: Presenta los botones de filtrado generados dinámicamente desde una lista tipada y notifica al componente padre cuando el usuario selecciona un filtro.
- **ResumenTareas.tsx**: Muestra un mensaje contextual (sin tareas, todas completadas o contador de tareas) evaluando de forma condicional las tareas visibles.
- **ListaTareas.tsx**: Recorre la lista de tareas recibida y renderiza individualmente cada componente `TareaItem` asegurando claves únicas.
- **TareaItem.tsx**: Renderiza la información de una tarea individual con estilos según su prioridad y estado de completado, ofreciendo control accesible mediante checkbox e interacción por teclado.
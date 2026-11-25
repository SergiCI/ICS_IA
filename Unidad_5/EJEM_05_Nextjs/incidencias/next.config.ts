import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // create-next-app 16.4 activa aquí «cacheComponents» y «partialPrefetching».
  // En esta unidad trabajamos con el modelo clásico de renderizado (estático por
  // defecto, dinámico cuando se usan datos de la petición), así que se quitan.
  // El modelo nuevo (Cache Components) se explica como ampliación.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

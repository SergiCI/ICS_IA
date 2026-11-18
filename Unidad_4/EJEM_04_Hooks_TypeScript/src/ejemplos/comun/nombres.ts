// Una lista larga para notar la diferencia entre actualizaciones urgentes
// y no urgentes (10 000 elementos)
export const nombres: string[] = Array.from(
  { length: 10000 },
  (_, i) => `Alumno número ${i + 1}`,
);

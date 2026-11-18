import { useEffect, useState } from "react";

// Hook propio y genérico: un useState cuyo valor se guarda en localStorage
export function useAlmacenamientoLocal<T>(clave: string, valorInicial: T) {
  const [valor, setValor] = useState<T>(() => {
    try {
      const guardado = localStorage.getItem(clave);
      return guardado !== null ? (JSON.parse(guardado) as T) : valorInicial;
    } catch {
      return valorInicial; // JSON corrupto o almacenamiento no disponible
    }
  });

  useEffect(() => {
    localStorage.setItem(clave, JSON.stringify(valor));
  }, [clave, valor]);

  // «as const» hace que el resultado sea una tupla y no un array
  return [valor, setValor] as const;
}

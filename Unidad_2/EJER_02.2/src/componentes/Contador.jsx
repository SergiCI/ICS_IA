// Contador.jsx
import { useState } from 'react';

export function Contador({ etiqueta, valorInicial = 0 }) {
  // 1. Guardamos el valor en estado inicializado con valorInicial
  const [valor, setValor] = useState(valorInicial);

  // 2. Manejadores con funciones flecha
  const manejarIncremento = () => {
    setValor((prev) => prev + 1);
  };

  const manejarDecremento = () => {
    if (valor > 0) {
      setValor((prev) => prev - 1);
    }
  };

  const manejarReinicio = () => {
    // 4. Reinicia al valorInicial original, no necesariamente a 0
    setValor(valorInicial);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0', borderRadius: '8px', maxWidth: '300px' }}>
      <h4>{etiqueta}</h4>
      <p style={{ fontSize: '1.2rem' }}>Asistentes: <strong>{valor}</strong></p>
      
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={manejarIncremento}>+1</button>
        
        {/* 3. Desactivado cuando el valor sea 0 */}
        <button onClick={manejarDecremento} disabled={valor === 0}>
          -1
        </button>
        
        <button onClick={manejarReinicio}>Reiniciar</button>
      </div>
    </div>
  );
}
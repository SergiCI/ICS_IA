// AvisoCookies.jsx
import { useState } from 'react';

export function AvisoCookies({ children, onAceptar, onRechazar }) {
  // 1. Estado visible para controlar si se muestra el aviso
  const [visible, setVisible] = useState(true);

  // Si no es visible, el componente devuelve null y no se renderiza
  if (!visible) {
    return null;
  }

  // 2. Manejador para Aceptar
  const manejarAceptar = () => {
    setVisible(false); // Oculta el aviso
    onAceptar?.();     // 3. Si existe la prop, la ejecuta de forma segura
  };

  // 2. Manejador para Rechazar
  const manejarRechazar = () => {
    setVisible(false); // Oculta el aviso
    onRechazar?.();    // 3. Si existe la prop, la ejecuta de forma segura
  };

  return (
    <aside style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0', borderRadius: '8px', background: '#f9f9f9' }}>
      <div style={{ marginBottom: '0.8rem' }}>{children}</div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={manejarAceptar}>Aceptar</button>
        <button onClick={manejarRechazar}>Rechazar</button>
      </div>
    </aside>
  );
}
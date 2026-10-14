import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'
import { Cabecera } from './componentes/Cabecera'
import { Principal } from './componentes/Principal'
import { Pie } from './componentes/Pie'
import { TarjetaModulo } from './componentes/TarjetaModulo';
import { Contador } from './componentes/Contador';
import { AvisoCookies } from './componentes/AvisoCookies';

function App() {
  // Ampliación: Estado decision inicialmente en blanco ('')
  const [decision, setDecision] = useState('');
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Estructura de componentes de plantilla */}
      <Cabecera />
      <Principal />
      <Pie />

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>

      {/* Tus ejercicios integrados correctamente */}
      <main style={{ padding: '2rem' }}>
        <h1>Ciclo Formativo - Módulos</h1>

        {/* Ejemplo 1: Datos completos */}
        <TarjetaModulo titulo="Desarrollo Web en Entorno Cliente" horas={7} curso="2º">
          JavaScript, TypeScript y React en el navegador.
        </TarjetaModulo>

        {/* Ejemplo 2: Otro módulo de 2º */}
        <TarjetaModulo titulo="Desarrollo Web en Entorno Servidor" horas={8} curso="2º">
          Node.js, Express, APIs y gestión de bases de datos.
        </TarjetaModulo>

        {/* Ejemplo 3: Sin pasar curso ni horas (prueba valores por defecto) */}
        <TarjetaModulo titulo="Sistemas Informáticos">
          Instalación, configuración y mantenimiento de sistemas operativos y redes locales.
        </TarjetaModulo>

        <h1>Control de Asistentes a Charlas</h1>

        {/* Primer contador: Empieza con 5 asistentes */}
        <Contador etiqueta="Charla de Inteligencia Artificial" valorInicial={5} />

        {/* Segundo contador: Empieza con 2 asistentes */}
        <Contador etiqueta="Taller Práctico de React" valorInicial={2} />

        <h1>Bienvenido a nuestra web</h1>
        <p>Contenido principal de la página...</p>

        {/* Componente AvisoCookies con eventos opcionales y la ampliación */}
        <AvisoCookies
          onAceptar={() => {
            console.log('Cookies aceptadas');
            setDecision('aceptadas');
          }}
          onRechazar={() => {
            console.log('Cookies rechazadas');
            setDecision('rechazadas');
          }}
        >
          Utilizamos cookies propias y de terceros para mejorar la experiencia de navegación y servicios.
        </AvisoCookies>

        {/* Ampliación: Mostrar párrafo según la decisión tomada */}
        {decision === 'aceptadas' && <p style={{ color: 'green' }}>Has aceptado las cookies.</p>}
        {decision === 'rechazadas' && <p style={{ color: 'red' }}>Has rechazado las cookies.</p>}
      </main>
    </>
  );
}

export default App;
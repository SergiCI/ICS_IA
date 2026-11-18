// Fragmentos de código del tema UT 04 (los que contienen errores intencionados
// de tipos llevan `@ts-expect-error`, así que el proyecto sigue compilando).
// Los que incumplen las reglas de los hooks provocan avisos al ejecutar
// `npm run lint`: es intencionado.
import {
  useEffect,
  useImperativeHandle,
  useCallback,
  useMemo,
  useReducer,
  useRef,
  useState,
  type Reducer,
  type Ref,
} from "react";

declare function leerNotaGuardada(): number;
declare function obtenerNota(id: number): Promise<number>;

// #region estadoFoto
function ManejadorFoto() {
  const [nota, setNota] = useState(5);

  function sumarUno() {
    setNota(nota + 1);
    console.log(nota); // ⚠️ sigue valiendo 5: el estado es una «foto» del render
  }

  return <button onClick={sumarUno}>{nota}</button>;
}
// #endregion

// #region actualizacionFuncional
function TresActualizaciones() {
  const [nota, setNota] = useState(0);

  function sumarTresMal() {
    setNota(nota + 1);
    setNota(nota + 1);
    setNota(nota + 1); // ❌ las tres leen la misma «foto»: nota solo sube 1
  }

  function sumarTresBien() {
    setNota((anterior) => anterior + 1);
    setNota((anterior) => anterior + 1);
    setNota((anterior) => anterior + 1); // ✅ cada una parte del valor anterior: sube 3
  }

  return (
    <>
      <button onClick={sumarTresMal}>Mal</button>
      <button onClick={sumarTresBien}>Bien</button>
      {nota}
    </>
  );
}
// #endregion

// #region estadoPerezoso
function NotaGuardada() {
  // ❌ leerNotaGuardada() se ejecutaría en CADA renderizado
  const [notaA] = useState(leerNotaGuardada());
  // ✅ inicialización perezosa: solo se ejecuta en el primer renderizado
  const [notaB] = useState(() => leerNotaGuardada());

  return <p>{notaA + notaB}</p>;
}
// #endregion

// #region reglasIncorrectas
function ContadorMal({ activo }: { activo: boolean }) {
  if (activo) {
    const [veces] = useState(0); // ❌ dentro de una condición
    console.log(veces);
  }

  for (const inicial of [1, 2, 3]) {
    const [valor] = useState(inicial); // ❌ dentro de un bucle
    console.log(valor);
  }

  function alPulsar() {
    useEffect(() => {
      console.log("pulsado"); // ❌ dentro de un manejador de eventos
    });
  }

  return <button onClick={alPulsar}>Pulsar</button>;
}
// #endregion

// #region reglasCorrectas
function ContadorBien({ activo }: { activo: boolean }) {
  // ✅ Los hooks se llaman SIEMPRE, en el mismo orden y en el nivel superior
  const [veces, setVeces] = useState(0);

  useEffect(() => {
    if (activo) {
      console.log("Contador activo"); // ✅ la condición va DENTRO del hook
    }
  }, [activo]);

  if (!activo) {
    return null; // ✅ el retorno anticipado va DESPUÉS de todos los hooks
  }

  return <button onClick={() => setVeces(veces + 1)}>{veces}</button>;
}
// #endregion

// #region reductorIncompleto
type AccionConBonus =
  | { tipo: "sumar"; puntos: number }
  | { tipo: "restablecer" }
  | { tipo: "bonus" }; // acción nueva

// @ts-expect-error TS2366: Function lacks ending return statement and return type does not include 'undefined'.
function reductorSinBonus(nota: number, accion: AccionConBonus): number {
  switch (accion.tipo) {
    case "sumar":
      return nota + accion.puntos;
    case "restablecer":
      return 0;
    // ❌ falta el caso "bonus": TypeScript nos avisa
  }
}
// #endregion

// #region genericoAntiguo
interface EstadoNota {
  nota: number;
}
type AccionNota = { tipo: "sumar" } | { tipo: "restar" };
declare function reductorNota(e: EstadoNota, a: AccionNota): EstadoNota;

function ComponenteReductor() {
  // ❌ Forma antigua (React 18 y anteriores): ya no la admiten los tipos de React 19
  // @ts-expect-error TS2558: Expected 2 type arguments, but got 1.
  const [e1] = useReducer<Reducer<EstadoNota, AccionNota>>(reductorNota, {
    nota: 5,
  });

  // ✅ Lo habitual: dejar que TypeScript infiera los tipos desde la función
  const [e2] = useReducer(reductorNota, { nota: 5 });

  // ✅ Si hace falta indicarlos: estado y TUPLA de argumentos del reductor
  const [e3] = useReducer<EstadoNota, [AccionNota]>(reductorNota, { nota: 5 });

  console.log(e1, e2, e3);
  return null;
}
// #endregion

// #region efectoTresFormas
function TresFormasDeEfecto({ idAlumno }: { idAlumno: number }) {
  // 1. Sin array de dependencias: se ejecuta tras CADA renderizado
  useEffect(() => {
    console.log("Me he renderizado");
  });

  // 2. Array vacío: solo tras el primer renderizado (al montar)
  useEffect(() => {
    console.log("Me he montado");
  }, []);

  // 3. Con dependencias: al montar y cada vez que cambie idAlumno
  useEffect(() => {
    console.log("Ha cambiado el alumno", idAlumno);
  }, [idAlumno]);

  return null;
}
// #endregion

// #region efectoAsync
function EfectoAsync({ id }: { id: number }) {
  const [nota, setNota] = useState<number | null>(null);

  // ❌ La función del efecto no puede ser async: devolvería una promesa
  // @ts-expect-error TS2345: Argument of type '() => Promise<void>' is not assignable to parameter of type 'EffectCallback'.
  useEffect(async () => {
    setNota(await obtenerNota(id));
  }, [id]);

  // ✅ Opción 1: encadenar con then()
  useEffect(() => {
    obtenerNota(id).then(setNota);
  }, [id]);

  // ✅ Opción 2: función async interna que se llama a continuación
  useEffect(() => {
    async function cargar() {
      setNota(await obtenerNota(id));
    }
    cargar();
  }, [id]);

  return <p>{nota}</p>;
}
// #endregion

// #region efectoInnecesarioMal
function ResumenMal({ nombre, apellidos }: { nombre: string; apellidos: string }) {
  // ❌ Estado duplicado + efecto: un renderizado de más y código más largo
  const [nombreCompleto, setNombreCompleto] = useState("");

  useEffect(() => {
    setNombreCompleto(`${nombre} ${apellidos}`);
  }, [nombre, apellidos]);

  return <p>{nombreCompleto}</p>;
}
// #endregion

// #region efectoInnecesarioBien
function ResumenBien({ nombre, apellidos }: { nombre: string; apellidos: string }) {
  // ✅ Valor derivado: se calcula directamente al renderizar
  const nombreCompleto = `${nombre} ${apellidos}`;

  return <p>{nombreCompleto}</p>;
}
// #endregion

// #region useRefSinArgumento
function RefSinArgumento() {
  // ❌ En los tipos de React 19, useRef exige siempre un argumento
  // @ts-expect-error TS2554: Expected 1 arguments, but got 0.
  const sinArgumento = useRef<number>();

  // ✅ Indica el valor inicial (aunque sea undefined o null)
  const conArgumento = useRef<number | undefined>(undefined);

  useEffect(() => {
    console.log(sinArgumento.current, conArgumento.current);
  }, []);

  return null;
}
// #endregion

// #region memoDependenciasIncompletas
function ContadorObsoleto() {
  const [cuenta, setCuenta] = useState(0);

  // ❌ Dependencias incompletas: la función «recuerda» cuenta = 0 para siempre
  const sumar = useCallback(() => setCuenta(cuenta + 1), []);

  return <button onClick={sumar}>{cuenta}</button>;
}
// #endregion

// #region hookPropioContador
// El nombre DEBE empezar por «use»: así React y el linter saben que es un hook
function useContador(valorInicial = 0) {
  const [valor, setValor] = useState(valorInicial);

  const incrementar = () => setValor((anterior) => anterior + 1);
  const reiniciar = () => setValor(valorInicial);

  return { valor, incrementar, reiniciar };
}

function DosContadores() {
  // Cada llamada crea su PROPIO estado: no se comparte entre ellos
  const aciertos = useContador();
  const fallos = useContador(10);

  return (
    <p>
      <button onClick={aciertos.incrementar}>Aciertos: {aciertos.valor}</button>
      <button onClick={fallos.incrementar}>Fallos: {fallos.valor}</button>
    </p>
  );
}
// #endregion

// #region imperativeHandle
interface ControlesReproductor {
  reproducir(): void;
  pausar(): void;
}

function Reproductor({ ref }: { ref: Ref<ControlesReproductor> }) {
  const video = useRef<HTMLVideoElement>(null);

  // El padre solo ve estos dos métodos, no todo el elemento <video>
  useImperativeHandle(ref, () => ({
    reproducir() {
      video.current?.play();
    },
    pausar() {
      video.current?.pause();
    },
  }));

  return <video ref={video} src="clase.mp4" />;
}
// #endregion

declare function obtenerAlumnos(): Promise<string[]>;

// #region preguntaMensaje
function MensajeTemporal({ texto }: { texto: string }) {
  if (!texto) {
    return null;
  }
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setVisible(false), 5000);
  }, []);

  return visible ? <span>{texto}</span> : null;
}
// #endregion

// #region preguntaAsync
function ListaAlumnos() {
  const [alumnos, setAlumnos] = useState([]);

  // @ts-expect-error TS2345: Argument of type '() => Promise<void>' is not assignable to parameter of type 'EffectCallback'.
  useEffect(async () => {
    const datos = await obtenerAlumnos();
    // @ts-expect-error TS2345: Argument of type 'string[]' is not assignable to parameter of type 'SetStateAction<never[]>'.
    setAlumnos(datos);
  });

  return <p>{alumnos.length}</p>;
}
// #endregion

// #region preguntaReductor
interface EstadoPasos {
  pasos: number;
}
type AccionPasos =
  | { tipo: "avanzar"; pasos: number }
  | { tipo: "retroceder"; pasos: number };

function reductorPasos(estado: EstadoPasos, accion: AccionPasos): EstadoPasos {
  switch (accion.tipo) {
    case "avanzar":
      return { ...estado, pasos: estado.pasos + accion.pasos };
    case "retroceder":
      return { ...estado, pasos: estado.pasos - accion.pasos };
  }
}
// #endregion

// #region preguntaMemo
function ContadorMemo() {
  const [cuenta, setCuenta] = useState(0);
  const cuentaMemorizada = useMemo(() => cuenta, []);

  return <button onClick={() => setCuenta(cuenta + 1)}>{cuentaMemorizada}</button>;
}
// #endregion

// #region respuestaMensaje
function MensajeTemporalCorrecto({ texto }: { texto: string }) {
  // ✅ Todos los hooks primero…
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(id); // ✅ y el temporizador se cancela al limpiar
  }, []);

  // …y el retorno anticipado, después
  if (!texto) {
    return null;
  }

  return visible ? <span>{texto}</span> : null;
}
// #endregion

// #region respuestaAsync
function ListaAlumnosCorrecta() {
  const [alumnos, setAlumnos] = useState<string[]>([]); // ✅ tipo explícito

  useEffect(() => {
    let ignorar = false;

    obtenerAlumnos().then((datos) => {
      if (!ignorar) setAlumnos(datos); // ✅ sin async y sin respuestas obsoletas
    });

    return () => {
      ignorar = true;
    };
  }, []); // ✅ dependencias: se ejecuta solo al montar

  return <p>{alumnos.length}</p>;
}
// #endregion

export {
  ManejadorFoto,
  TresActualizaciones,
  NotaGuardada,
  ContadorMal,
  ContadorBien,
  reductorSinBonus,
  ComponenteReductor,
  TresFormasDeEfecto,
  EfectoAsync,
  ResumenMal,
  ResumenBien,
  RefSinArgumento,
  ContadorObsoleto,
  DosContadores,
  Reproductor,
  MensajeTemporal,
  ListaAlumnos,
  reductorPasos,
  ContadorMemo,
  MensajeTemporalCorrecto,
  ListaAlumnosCorrecta,
};

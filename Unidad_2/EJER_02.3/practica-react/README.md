A1.
let ciudad = 'Oviedo'; // string
let habitantes = 220000; // number
let esCapital = true; // boolean
const notas = [7.5, 8, 9.25]; // array
const fechaExamen = new Date(2026, 11, 15); // Date
let pendiente; // any

Pregunta: ¿por qué pendiente no tiene un tipo útil? Corrígelo con una anotación para que solo admita textos.
Porque aun no se sabe que dato meterle pero para que solo admititese textos tendría que ser un string.

A2.
function calcularMedia(notas: number[]): number {
  let suma = 0;
  for (const nota of notas) {
    suma += nota;
  }
  return suma / notas.length;
}

const media: string = calcularMedia([6, 7, 8]);
calcularMedia([6, '7', 8]);

const hoy = new Date();
hoy.sumarDias(3);

let aprobado = true;
aprobado = 'sí';

Corregido.
function calcularMedia(notas: number[]): number {
  let suma = 0;
  for (const nota of notas) {
    suma += nota;
  }
  return suma / notas.length;
}

const media: number = calcularMedia([6, 7, 8]);
calcularMedia([6, 7, 8]);

const hoy = new Date();
hoy.setDate(3);

let aprobado = true;
aprobado = false;

A3.
calcularPrecioFinal(100, 21);      // 121
calcularPrecioFinal(100, 21, 10);  // 108.9
function calcularPrecioFinal (precio: number, iva:number, descuento? : number){
    const precioFinal = descuento !== undefined ?precio *(1-descuento/100) : precio;
    return precioFinal*(1-iva/100)
}

A4.
const respuesta: any = JSON.parse('{"titulo": "Dune", "paginas": 412}');
console.log(respuesta.autor.toUpperCase());

No muestra el error porque respuesta es tipo any. 

type Libro = { titulo: string; paginas: number }
function esLibro (valor: unknown): valor is Libro{
return(
    typeof valor === 'object' &&
    valor !== null &&
    'titulo' in valor &&
    typeof valor.titulo === 'string' &&
    'paginas' in valor &&
    typeof valor.paginas === 'number'
);
}
const respuesta: unknown = JSON.parse('{"titulo": "Dune", "paginas": 412}');
if(esLibro(respuesta)){
    console.log(respuesta);
}

A5.
    unknown (Desconocido)

        Qué es: Representa cualquier valor de forma segura.

        Cuándo se usa: Cuando no sabes qué tipo de dato recibirás (ej. una API). Requiere verificar el tipo antes de usarlo.

    never (Nunca)

        Qué es: Representa un valor que nunca ocurre o es imposible de alcanzar.

        Cuándo se usa: En funciones que nunca retornan con éxito (lanzan errores o tienen bucles infinitos) y para validaciones exhaustivas de tipos.

//B1
type estadoPrestamo = 'disponible' | 'prestado' | 'reservado';
interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    anioPublicacion: number;
    paginas?: number;
    estado: estadoPrestamo;
}

const libro1 : Libro = {
    "isbn": "TF080607",
    "titulo": "El señor de los anillos",
    "autor": "J.R.R Tolkien",
    "anioPublicacion" : 1954,
    "paginas" : 1392,
    "estado" : 'prestado'
}
const libro2 : Libro= {
    "isbn": "JP080607",
    "titulo": "Jurassic Park",
    "autor": "Michael Crichton",
    "anioPublicacion" : 1990,
    "estado" : 'reservado'
}

// libro1.editorial = 'Anaya'
//Da error porque la propiedad editorial no existe dentro del type que define el Libro.


//B2
const libro3 : Libro = {
    "isbn": "AS080607",
    "titulo": "El último deseo",
    "autor": "Andrzej Sapkowski",
    "anioPublicacion" : 1954,
    "paginas" : 254,
    "estado" : 'disponible'
}

//B3
type Prestar = (alumno : string) => void;
type Libroprestable = Libro & {
    prestar : Prestar
}

const libro4 : Libroprestable = {
    "isbn": "TF080607",
    "titulo": "El Hobbit",
    "autor": "J.R.R Tolkien",
    "anioPublicacion" : 1932,
    "paginas" : 288,
    "estado" : 'disponible',
    "prestar"(alumno){
        console.log(`${this.titulo} fue prestado a ${alumno}`)
    }
}

libro4.prestar("Pablo")
//B4
interface LibroDigital extends Libro{
    tamanoMB: number;
}
//No podría ser un interface ya que el interface no permite las mismas cosas que el type ya que no permite que haya tipos de unión
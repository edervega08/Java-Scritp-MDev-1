
//argumentos y parametros
//a la funcion se le pueden pasar parametos y usarlos dentro
//argumentos
function suma(a){


    return a+2;
}
//esplica la estructura
//parametos
let resultado=suma(5);S
console.log(resultado);

//ejemplo 2
function suma2(c,d){


    return c+d;
}
//esplica la estructura
//parametos
let resultado2=suma2(5,6);
console.log(resultado2);

//ejemplo 3

function suma3(e,f){
console.log(arguments);//acceder a todos los valores pero no es lo mejor

    return e+f;
}
//esplica la estructura
//parametos
let resultado3=suma3(5,6,1,2,3);
console.log(resultado3);
console.log(typeof suma);

// ===============================
// Declaraciones y expresiones en JavaScript
// ===============================

// ========== DECLARATIONS (Declaraciones) ==========
// Una declaración define algo que puede usarse más adelante (crear variables, funciones, clases, etc.)

let numero = 10;                    // declaración de variable
const PI = 3.14;                    // declaración de constante
function saludar() {                // declaración de función
    console.log("Hola mundo");
}
async function cargarDatos() {}     // declaración de función asíncrona
class Persona {                     // declaración de clase
    constructor(nombre) {
        this.nombre = nombre;
    }
}
export const edad = 22;             // declaración export
// import se usa en módulos, no se puede ejecutar directamente aquí

try {
    // declaración try...catch para manejar errores
    throw new Error("error de prueba");
} catch (e) {
    console.log("Se manejó un error");
}

do {
    console.log("Una vez con do...while");
} while (false);

while (false) {
    console.log("Esto no se ejecuta");
}

// ========== STATEMENTS (Sentencias) ==========
// Controlan el flujo del programa, no producen directamente un valor

if (numero > 5) {
    console.log("El número es mayor que 5");
} else {
    console.log("El número es 5 o menor");
}

for (let i = 0; i < 3; i++) {
    console.log("Iteración", i);
}

switch (numero) {
    case 5:
        console.log("Es 5");
        break;
    case 10:
        console.log("Es 10");
        break;
    default:
        console.log("No coincide");
}

// ========== EXPRESSIONS (Expresiones) ==========
// Cualquier parte del código que se evalúe en un valor

let suma = 4 + 6;          // expresión de suma → 10
let x = 4;                 // expresión de asignación → 4
function retornar() {
    return "Hola";
}
let saludo = retornar();  // expresión de llamada → "Hola"
let doble = (n) => n * 2; // función flecha (expresión)
console.log(doble(5));    // → 10

// expresiones booleanas
let esMayor = x > 2;      // → true
console.log(esMayor);

// expresiones de objetos, arreglos, funciones anónimas
let persona = { nombre: "Ana", edad: 25 };   // objeto
let lista = [1, 2, 3];                       // arreglo
let anonima = function() { return "Hola"; }; // función anónima
console.log(anonima());

// ===============================
// En resumen:
// Declaración → define algo que puedes usar después
// Sentencia → estructura que controla el flujo
// Expresión → evalúa en un valor


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


// Declaraciones y expresiones en JavaScript

// declaration = declaración
// Es una instrucción que crea algo que se puede reutilizar o referenciar más adelante
/*
// Ejemplos de declaraciones válidas:
let a = 5;               // declara una variable
const b = 10;            // declara una constante
function saluda() {}     // declara una función
async function carga() {} // declara una función asíncrona
class Persona {}         // declara una clase
export default a;        // exportar un valor (módulos)
import algo from './x';  // importar un valor (módulos)

// NOTA: Aunque "var" también declara, es desaconsejado porque ignora el alcance de bloque

// Otras declaraciones importantes:
try {} catch (e) {}      // bloque de manejo de errores
do {} while (x < 5);     // ciclo "hacer mientras"
while (x < 5) {}         // ciclo "mientras"

// statement = sentencia (estructura de control, no devuelve valor directo)
if (true) {
  // bloque condicional
}

for (let i = 0; i < 3; i++) {
  // bucle con contador
}

else {
  // parte contraria de un if
}

switch (a) {
  case 1:
    break;
}

// Expresión (expression) en JS:
// Cualquier porción de código que se evalúe en un valor (número, string, booleano, objeto, etc.)

// Ejemplos de expresiones:
4 + 6           // suma: devuelve 10
x = 4           // asignación: devuelve 4
miFuncion()     // llamada a función: devuelve su retorno
true            // booleano: devuelve true
"hola" + "mundo" // concatenación: devuelve "holamundo"
[1, 2, 3]       // array literal: devuelve el array
{nombre: "Ana"} // objeto literal: devuelve el objeto

// También hay expresiones más avanzadas:
x > 3           // expresión booleana: true o false
() => x * 2     // función flecha (también es una expresión)
function() {}   // función anónima (expresión si no tiene nombre)

// En resumen:
// Declaración = define algo (función, variable, clase, etc.)
// Sentencia = controla el flujo del programa (if, for, etc.)
// Expresión = produce un valor

// Las expresiones pueden estar dentro de declaraciones:
// Ejemplo:
let total = 4 + 6; // declaración con expresión dentro

*/

// ==========================================
// 1. Sentencia `if` en JavaScript
// ==========================================
/*
La sentencia `if` se utiliza para ejecutar un bloque de código si una condición es verdadera.
Si la condición es falsa, se puede usar `else` para ejecutar un bloque de código alternativo.
*/

// Declaración de variables
var nombre = 'Eder';  // Variable que almacena el nombre.
var casado = false;    // Variable booleana que indica si la persona está casada o no.

// Uso de la sentencia `if`
if (casado == true) {  // Condición: ¿Es `casado` igual a `true`?
    /*
    Si la condición es verdadera, se ejecuta este bloque de código.
    */
    console.log(nombre + ' es casado');  // Imprime: "Eder es casado".
} else {
    /*
    Si la condición es falsa, se ejecuta este bloque de código.
    */
    console.log(nombre + ' es soltero');  // Imprime: "Eder es soltero".
}

// ==========================================
// 2. Ejemplo más completo con `if`, `else if` y `else`
// ==========================================
/*
Este ejemplo muestra cómo usar `if`, `else if` y `else` para manejar múltiples condiciones.
También se incluyen operadores lógicos como `&&` (AND) y `||` (OR).
*/

// Declaración de variables adicionales
var edad = 25;          // Variable que almacena la edad.
var tieneTrabajo = true; // Variable booleana que indica si la persona tiene trabajo.

// Uso de `if`, `else if` y `else`
if (edad >= 18 && tieneTrabajo) {  // Condición: ¿Es mayor de 18 años Y tiene trabajo?
    /*
    Si la condición es verdadera, se ejecuta este bloque de código.
    */
    console.log(nombre + ' es mayor de edad y tiene trabajo.');  // Imprime: "Eder es mayor de edad y tiene trabajo."
} else if (edad >= 18 && !tieneTrabajo) {  // Condición: ¿Es mayor de 18 años Y NO tiene trabajo?
    /*
    Si la primera condición es falsa pero esta es verdadera, se ejecuta este bloque de código.
    */
    console.log(nombre + ' es mayor de edad pero no tiene trabajo.');  // Imprime: "Eder es mayor de edad pero no tiene trabajo."
} else if (edad < 18) {  // Condición: ¿Es menor de 18 años?
    /*
    Si las condiciones anteriores son falsas pero esta es verdadera, se ejecuta este bloque de código.
    */
    console.log(nombre + ' es menor de edad.');  // Imprime: "Eder es menor de edad."
} else {
    /*
    Si ninguna de las condiciones anteriores es verdadera, se ejecuta este bloque de código.
    */
    console.log('No se pudo determinar la situación laboral de ' + nombre);  // Imprime: "No se pudo determinar la situación laboral de Eder."
}

// ==========================================
// 3. Operadores lógicos en condiciones
// ==========================================
/*
Los operadores lógicos permiten combinar múltiples condiciones:
- `&&` (AND): Verdadero si ambas condiciones son verdaderas.
- `||` (OR): Verdadero si al menos una de las condiciones es verdadera.
- `!` (NOT): Invierte el valor de la condición (verdadero a falso y viceversa).
*/

// Ejemplo con operadores lógicos
var esEstudiante = true;  // Variable booleana que indica si la persona es estudiante.

if ((edad >= 18 && tieneTrabajo) || esEstudiante) {  // Condición: ¿Es mayor de 18 y tiene trabajo O es estudiante?
    /*
    Si la condición es verdadera, se ejecuta este bloque de código.
    */
    console.log(nombre + ' es mayor de edad y tiene trabajo, o es estudiante.');  // Imprime: "Eder es mayor de edad y tiene trabajo, o es estudiante."
} else {
    /*
    Si la condición es falsa, se ejecuta este bloque de código.
    */
    console.log(nombre + ' no cumple ninguna de las condiciones.');  // Imprime: "Eder no cumple ninguna de las condiciones."
}
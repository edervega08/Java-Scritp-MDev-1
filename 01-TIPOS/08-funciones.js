// Funciones en JavaScript

// Se crea una función que realiza una tarea específica y se puede reutilizar
// Al definirla, se guarda como referencia (aún no se ejecuta)
function saludar() {
    console.log('hola mundo'); // esto se ejecuta cuando se llama la función
}

saludar(); // llamada a la función → muestra "hola mundo"

// Otra función que retorna un valor
function suma() {
    return 2 + 2; // devuelve 4, no lo muestra directamente
}

// Podemos guardar el resultado o imprimirlo directo:
let resultado = suma();
console.log(resultado); // 4

// O también así directo:
console.log(suma()); // 4

// ¿Qué pasa si NO se ponen los paréntesis al llamar?
console.log(suma); 
// Sin paréntesis, se muestra la definición de la función, NO se ejecuta
// Es útil cuando quieres pasar la función como argumento o referencia

// En resumen:
// - function nombre() { } → declaración
// - nombre() → llamada (con paréntesis, se ejecuta)
// - nombre  → solo referencia (sin ejecutarse)

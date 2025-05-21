let  animales=['Perro','Gato','Caballo'];

console.log(animales);
console.log(animales[0]);
animales[2]='vaca';
console.log(animales[2]);


//indice que no haga sentido

animales[10]='toro';
console.log(animales[7]);
console.log(typeof animales);//por que objeto y no array o biene por defedcto en la clse array?
//ojetos y prototipos
animales.length//dovolver la cantidad de elementos

 
//mas ejemplos
// Declaración y creación de arreglos en JavaScript
let nombre = ['Messi', 'CR7', 'BICHO', 'PELE']; // Se declara un array con valores predefinidos
let vegetables = new Array('tomate', 'lechuga', 'zanahoria'); // Se declara un array usando el constructor de Array

// Acceso a elementos del arreglo
console.log(nombre[3]); // Muestra el elemento en la posición 3 del array 'nombre' (PELE)
console.log(vegetables[1]); // Muestra el elemento en la posición 1 del array 'vegetables' (lechuga)

// Modificación de elementos del arreglo
nombre[3] = 'Jose'; // Se reemplaza el valor en la posición 3 ('PELE' -> 'Jose')
vegetables[1] = 'chayote'; // Se reemplaza el valor en la posición 1 ('lechuga' -> 'chayote')

console.log(nombre[3]); // Se muestra el nuevo valor de la posición 3 ('Jose')
console.log(vegetables[1]); // Se muestra el nuevo valor de la posición 1 ('chayote')

// Obtener la cantidad de elementos del arreglo
console.log(nombre.length); // Devuelve la cantidad de elementos en el array 'nombre'

// Recorrer un arreglo usando un bucle for
for (var i = 0; i < nombre.length; i++) { // Itera desde 0 hasta la cantidad de elementos - 1
    console.log(nombre[i]); // Muestra cada elemento del array 'nombre'
}

// Recorrer un arreglo usando forEach
vegetables.forEach(function(elemento, indice) { // Método forEach ejecuta una función por cada elemento
    console.log(elemento, indice); // Muestra cada elemento junto con su índice
});
let nombre='RONALDO';
let anime='bicho';
let edad=40;

 let personaje={
    nombre:'RONALDO',
    anime:'bicho',
    edad:40,
 };

 console.log(personaje);
 console.log(personaje.nombre);
 console.log(personaje['anime']);


 //cual de las dos usar y en que casos
 personaje.edad=13;
 personaje['edad']=16;


delete personaje.anime;
console.log(personaje);
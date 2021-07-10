/*
Autora - Virginia Ordoño Bernier
Fecha - julio 2021
Contenido - Uso de Math que nos ofrece JavaScript.
------------
Referencia
------------
Curso: JavaScript Intermedio.
Sesión: Tipos de datos avanzados.
Plataforma: Open Webinars.
Profesor: Jonathan Rodríguez.
*/

var piNumber = Math.PI();
console.log(piNumber);

//Max y min
console.log(Math.min(1, 2, 3, 4, 5));
console.log(Math.max(1, 2, 3, 4, 5));

//Redondeo
console.log(Math.round(4.4));

//Redondeo hacia abajo
console.log(Math.floor(4.8));

//Redondeo hacia arriba
console.log(Math.ceil(4.4));

//Genera números aleatorio
var randomNumber = Math.random();
console.log(randomNumber);

//Función que genera un número aleatorio de 0 a 100
function generateRandom(number) {
    return Math.round(Math.random() * number);
}
console.log(generateRandom(100));
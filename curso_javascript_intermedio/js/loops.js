/*
Autora - Virginia Ordoño Bernier
Fecha - julio 2021
Contenido - Loops
------------
Referencia
------------
Curso: JavaScript Intermedio.
Sesión: Tipos de datos avanzados.
Plataforma: Open Webinars.
Profesor: Jonathan Rodríguez.
*/

var colors = ['blue', 'red', 'green'];
console.log('Contenido del array.');
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
console.log('');

//Muestra números pares del siguiente arrays
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log('Muestra números pares.');
for (let i = 0; i < numbers.length; i++) {
    if (i % 2 == 0) {
        console.log('Es par: ' + numbers[i]);
    }
}
console.log('');

//Suma todos los números del array
var total = 0;
for (let i = 0; i < numbers.length; i++) {
    total += 1;
}
console.log('Total de números: ' + total);
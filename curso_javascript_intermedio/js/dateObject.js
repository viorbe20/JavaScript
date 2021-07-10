/*
Autora - Virginia Ordoño Bernier
Fecha - julio 2021
Contenido - Usar el objeto global Date que nos ofrece JavaScript.
------------
Referencia
------------
Curso: JavaScript Intermedio.
Sesión: Tipos de datos avanzados.
Plataforma: Open Webinars.
Profesor: Jonathan Rodríguez.
*/

var date = new Date();
//console.log(date);

var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDay;

//El mes siempre muestra el anterior porque se inicia en 0.
console.log('Hola. Hoy es ' + day + ' de ' + month + ' de ' + year);
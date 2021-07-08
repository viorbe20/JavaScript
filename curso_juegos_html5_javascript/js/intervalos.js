/*
Referencia.
Curso: Programa tus Primeros Juegos HTML5 con JavaScript.
Sesión: 12.
Plataforma: Udemy.
Autor: Javier Muñiz.
Fecha: julio 2021
*/

//fps = frames per second
var fps = 10;
var xEscenario = 0;

function mueveEscenario() {
    xEscenario++;
    console.log(xEscenario);
}

//Bucle principal
function principal() {
    console.log('Frame');
    mueveEscenario();
}

//Le pasamos la fución que va a ejecutar y cada cuánto se va a ejecutar ese código.
setInterval(principal, 1000 / fps);
/*
Referencia.
Curso: Programa tus Primeros Juegos HTML5 con JavaScript.
Sesión: 14.
Plataforma: Udemy.
Autor: Javier Muñiz.
Fecha: julio 2021
Comentario: detectas diferentes acciones que se pueden realizar con el ratón tomando como referencia un canvas.
*/

var myCanvas;

function initialize() {
    myCanvas = document.getElementById('canvas');

    myCanvas.addEventListener('mousedown', mouseClick, false);
    myCanvas.addEventListener('mouseup', mouseRelease, false);
    myCanvas.addEventListener('mousemove', mousePosition, false);
}

//Listener: muestra la posición del click del ratón
function mousePosition(event) {
    var x = event.pageX;
    var y = event.pageY;
    console.log('x: ' + x + ' - y: ' + y);
}

//Listener: aparece mensaje con click del ratón dentro del canvas
function mouseClick(event) {
    console.log('Has hecho click con el ratón.');
}

//Listener: aparece mensaje cuando libero la tecla del ratón
function mouseRelease(event) {
    console.log('Has liberado el ratón.');
}
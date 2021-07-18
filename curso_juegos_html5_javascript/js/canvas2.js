/*
Referencia.
Curso: Programa tus Primeros Juegos HTML5 con JavaScript.
Sesión: 16.
Plataforma: Udemy.
Autor: Javier Muñiz.
Fecha: julio 2021
Comentario: crear varios personajes y hacer que se muevan dentro de un canvas.
*/

var canvas;
var ctx;
var FPS = 50; //Frames per seconds

//Objeto personaje
var character = function (x, y) {
    this.x = x;
    this.y = y;
    this.right = true;

    //Método que dibuja en las coordenadas
    this.draw = function () {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x, this.y, 50, 50); //Posición x, posición y, ancho, alto      
    }

    //Método que mueve el personaje sin salirse del canvas
    this.move = function (speed) {
        if (this.right) {
            if (this.x < 400) {
                this.x += speed;
            } else {
                this.right = false;
            }
        } else {
            if (this.x > 50) {
                this.x -= speed;
            } else {
                this.right = true;
            }
        }
    }
}

//Personaje 1
var superThing1 = new character(10, 50);
var superThing2 = new character(10, 120);
var superThing3 = new character(10, 230);

function initialize() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d'); //2d es el tipo de visualización en la pantalla.     

    //Intervalo principal
    setInterval(function () {
        main();
    }, 1000 / FPS);
}

//Borra el fotograma del canvas. Se hace cambiando el ancho y el alto
function clearCanvas() {
    canvas.width = 500;
    canvas.height = 400;
}

//Función principal
function main() {
    clearCanvas();

    superThing1.draw();
    superThing2.draw();
    superThing3.draw();

    superThing1.move(1);
    superThing2.move(3);
    superThing3.move(7);
}
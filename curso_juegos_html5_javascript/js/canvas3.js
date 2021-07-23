/*
Referencia.
Curso: Programa tus Primeros Juegos HTML5 con JavaScript.
Sesión: 17.
Plataforma: Udemy.
Autor: Javier Muñiz.
Fecha: julio 2021
Comentario: 
*/

var canvas;
var ctx;
var FPS = 50; //Frames per seconds

//Imagen principal que vamos a utilizar
var imgDoctorVolt;

function initialize() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d'); //2d es el tipo de visualización en la pantalla.   

    //Carga la imagen
    imgDoctorVolt = new Image();
    imgDoctorVolt.src = 'img/doctorVolt.png';

    //Intervalo principal
    setInterval(function () {
        main();
    }, 1000 / FPS);
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

    doctorVoltObj.draw();
    doctorVoltObj.text();
}

//Atributos del personaje doctorVolt
var doctorVolt = function (x, y) {
    this.x = x;
    this.y = y;
    this.speed = 3;

    //Coloca una imagen en el canvas
    this.draw = function () {
        ctx.drawImage(imgDoctorVolt, this.x, this.y);
    }

    //Introduce texto
    this.text = function () {
        ctx.font = '30px impact';
        ctx.fillStyle = '#7FFF00';
        ctx.fillText('X: ' + this.x, 100, 100);
    }

    //Movimientos de la imagen
    this.up = function () {
        this.y -= this.speed;
    }

    this.down = function () {
        this.y += this.speed;
    }

    this.right = function () {
        this.x += this.speed;
    }

    this.left = function () {
        this.x -= this.speed;
    }
}

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

//Personajes
var superThing1 = new character(10, 50);
var superThing2 = new character(10, 120);
var superThing3 = new character(10, 230);
var doctorVoltObj = new doctorVolt(100, 100);

//Movimiento de la imagen
document.addEventListener('keydown', function (key) {
    //Arriba
    if (key.keyCode == 38) {
        doctorVoltObj.up();
    }
    //Abajo
    if (key.keyCode == 40) {
        doctorVoltObj.down();
    }
    //Izquierda
    if (key.keyCode == 37) {
        doctorVoltObj.left();
    }
    //Derecha
    if (key.keyCode == 39) {
        doctorVoltObj.right();
    }

})

//Borra el fotograma del canvas. Se hace cambiando el ancho y el alto
function clearCanvas() {
    canvas.width = 500;
    canvas.height = 400;
}
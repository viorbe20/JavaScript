/*
Referencia.
Curso: Programa tus Primeros Juegos HTML5 con JavaScript.
Sesión: 20/21.
Plataforma: Udemy.
Autor: Javier Muñiz.
Fecha: julio 2021
Comentario: 
*/

var canvas;
var ctx;
var FPS = 50;
var mainCharacterObj;

var widthBox = 50;
var heighBox = 50;

var wall = '#044f14';
var door = '#3a1700';
var sand = '#c6892f';
var key = '#c6bc00';

//Escenario donde aparece el laberinto. Existen programas para hacer el TailMap
var stage = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0, 2, 0, 0, 2, 0, 0],
    [0, 0, 2, 0, 0, 0, 2, 2, 0, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0],
    [0, 2, 2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0],
    [0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 1, 0, 0, 2, 0],
    [0, 2, 2, 3, 0, 0, 2, 0, 0, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];


function drawStage() {
    var color;

    for (y = 0; y < stage.length; y++) {
        for (x = 0; x < stage[0].length; x++) {
            if (stage[y][x] == 0)
                color = wall;
            if (stage[y][x] == 1)
                color = door;
            if (stage[y][x] == 2)
                color = sand;
            if (stage[y][x] == 3)
                color = key;

            ctx.fillStyle = color;
            ctx.fillRect(x * widthBox, y * heighBox, widthBox, heighBox);


        }
    }
}

//Constructor del protagonista
var mainCharacter = function () {
    this.x = 1; //Punto de partida del personaje
    this.y = 1; //Punto de partida del personaje
    this.color = '#820c01';
    this.key = false;

    //Dibuja prota
    this.draw = function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x * widthBox, this.y * heighBox, widthBox, heighBox);
    }

    //Función que controla que el personaje no se salga del laberinto
    //Recibe la posición y devuelve valor booleano
    this.margins = function (x, y) {
        var conflict = false;
        if (stage[y][x] == 0) {
            conflict = true;
        }
        return (conflict);
    }

    //Movimientos del prota. Si no hay conflicto, se mueve
    this.movingUp = function () {
        if (this.margins(this.x, this.y - 1) == false) {
            this.y--;
            this.checkObjects();
        }
    }

    this.movingDown = function () {
        if (this.margins(this.x, this.y + 1) == false) {
            this.y++;
            this.checkObjects();
        }
    }

    this.movingLeft = function () {
        if (this.margins(this.x - 1, this.y) == false) {
            this.x--;
            this.checkObjects();
        }
    }

    this.movingRight = function () {
        if (this.margins(this.x + 1, this.y) == false) {
            this.x++;
            this.checkObjects();
        }
    }

    //Conseguido el objetivo, termina el juego y se reinicia
    this.goalReached = function () {
        console.log('¡¡Has ganado el juego!!');
        this.x = 1;
        this.y = 1;
        this.llave = false;
        stage[8][3] = 3;
    }

    //Comprueba el valor de la casilla donde está cada vez que el personaje se mueve
    this.checkObjects = function () {
        var object = stage[this.y][this.x];
        //Si entra en la casilla de la llave, aparece un mensaje por consola y la casilla cambia al color tierra
        if (object == 3) {
            this.key = true;
            stage[this.y][this.x] = 2;
            console.log('Has encontrado la llave.');
        }
        //Si entra en la casilla de la puerta
        if (object == 1) {
            if (this.key == true) {
                this.goalReached();
            } else {
                console.log('Necesitas la llave para poder pasar.');
            }
        }
    }
}

//Borra el fotograma del canvas. Se hace cambiando el ancho y el alto
function clearCanvas() {
    canvas.width = 750;
    canvas.height = 500;
}

function main() {
    clearCanvas();
    drawStage();
    mainCharacterObj.draw();
}

function initialize() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');


    //Creamos objeto protagonista
    mainCharacterObj = new mainCharacter();


    //Lectura de teclado para el movimiento del prota
    document.addEventListener('keydown', function (key) {
        if (key.keyCode == 38) {
            mainCharacterObj.movingUp();
        }

        if (key.keyCode == 40) {
            mainCharacterObj.movingDown();
        }

        if (key.keyCode == 37) {
            mainCharacterObj.movingLeft();
        }

        if (key.keyCode == 39) {
            mainCharacterObj.movingRight();
        }
    })

    setInterval(function () {
        main();
    }, 1000 / FPS);
}
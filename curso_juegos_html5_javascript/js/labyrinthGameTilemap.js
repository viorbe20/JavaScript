/*
Referencia.
Curso: Programa tus Primeros Juegos HTML5 con JavaScript.
Sesión: 22.
Plataforma: Udemy.
Autor: Javier Muñiz.
Fecha: julio 2021
Comentario: 
*/

var canvas;
var ctx;
var FPS = 50;

var tilemap;
var mainCharacter;
var enemies = [];

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

    for (y = 0; y < stage.length; y++) {
        for (x = 0; x < stage[0].length; x++) {
            var tile = stage[y][x];

            //Recorta las imágenes del tile. Cada imagen es de 32 x 32 píxeles.
            //Leyenda: 
            //tile*32: valor del tile por lo que mide
            //0: porque es la primera fila
            //32, 32: dimensiones que tiene que recortar
            //widthBox*x, heighBox*y: dónde lo tiene que poner.
            // widthBox, heighBox: de qué tamaño va a ser lo que dibuje
            ctx.drawImage(tilemap, tile * 32, 0, 32, 32, widthBox * x, heighBox * y, widthBox, heighBox);
        }
    }
}

//Constructor de los enemigos
//Al crear un enemigo debemos pasar la posición para que se creen en sitios diferentes
var enemiesClass = function (x, y) {
    this.x = x;
    this.y = y;

    this.direction = Math.floor(Math.random() * 4);

    this.delay = 50;
    this.photogram = 0;

    //Dibuja enemigo
    this.drawEnemy = function () {
        ctx.drawImage(tilemap, 0, 32, 32, 32, this.x * widthBox, this.y * heighBox, widthBox, heighBox);
    }

    //si choca contra el muro (valor 0) no puede seguir
    this.checkCollision = function (x, y) {
        var collision = false;

        if (stage[y][x] == 0) {
            collision = true;
        }
        return collision;
    }

    this.move = function () {

        if (this.contador < this.delay) {
            this.contador++;
        } else {
            this.contador = 0;

            //Arriba
            //Si va hacia arriba solo para si hay colisión
            if (this.direction == 0) {
                if (this.checkCollision(this.x, this.y - 1) == false) {
                    this.y--;
                } else {
                    this.direction = Math.floor(Math.random() * 4);
                }
            }

            //Abajo
            if (this.direction == 1) {
                if (this.checkCollision(this.x, this.y + 1) == false) {
                    this.y++;
                } else {
                    this.direction = Math.floor(Math.random() * 4);
                }
            }

            //Izquierda
            if (this.direction == 2) {
                if (this.checkCollision(this.x - 1, this.y) == false) {
                    this.x--;
                } else {
                    this.direction = Math.floor(Math.random() * 4);
                }
            }

            //Derecha
            if (this.direction == 3) {
                if (this.checkCollision(this.x + 1, this.y) == false) {
                    this.x++;
                } else {
                    this.direction = Math.floor(Math.random() * 4);
                }
            }
        }
    }
}

//Constructor del protagonista
var mainCharacterClass = function () {
    this.x = 1; //Punto de partida del personaje
    this.y = 1; //Punto de partida del personaje
    this.color = '#820c01';
    this.key = false;

    //Dibuja prota
    this.draw = function () {
        ctx.drawImage(tilemap, 32, 32, 32, 32, this.x * widthBox, this.y * heighBox, widthBox, heighBox);
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

//Método principal
function main() {
    clearCanvas();
    drawStage();
    mainCharacter.draw();

    //Bucle para dibujar a los enemigos
    for (i = 0; i < enemies.length; i++) {
        enemies[i].move();
        enemies[i].drawEnemy();
    }
}

//Método que inicia
function initialize() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    tilemap = new Image();
    tilemap.src = 'img/tilemap.png';

    //Creamos objeto protagonista
    mainCharacter = new mainCharacterClass();

    //Creamos objeto enemigos
    //.push() añade un nuevo valor al array
    enemies.push(new enemiesClass(3, 3));
    enemies.push(new enemiesClass(5, 7));
    enemies.push(new enemiesClass(7, 7));


    //Lectura de teclado para el movimiento del prota
    document.addEventListener('keydown', function (key) {
        if (key.keyCode == 38) {
            mainCharacter.movingUp();
        }

        if (key.keyCode == 40) {
            mainCharacter.movingDown();
        }

        if (key.keyCode == 37) {
            mainCharacter.movingLeft();
        }

        if (key.keyCode == 39) {
            mainCharacter.movingRight();
        }
    })

    setInterval(function () {
        main();
    }, 1000 / FPS);
}
/*
Referencia.
Curso: Programa tus Primeros Juegos HTML5 con JavaScript.
Sesión: 15.
Plataforma: Udemy.
Autor: Javier Muñiz.
Fecha: julio 2021
Comentario: crear un objeto que será un personaje y definir su comportamiento mediante diferentes métodos.
*/

var character = function (x, y, name) {
    this.x = x;
    this.y = y;
    this.name = name;

    //Comportamiento del objeto
    this.down = function () {
        this.y += 10;
    }

    this.speak = function () {
        console.log('Hola. Mi nombre es ' + this.name);
    }
}

//Instanciamos personajes
var character1 = new character(10, 100, 'Circuitor');
var character2 = new character(220, 380, 'Energetik');

character1.down();
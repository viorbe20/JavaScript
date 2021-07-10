/*
Autora - Virginia Ordoño Bernier
Fecha - julio 2021
Contenido - Ejercicio 1. Crea un personaje de videojuego.
Crea un objeto jugador con las siguientes propiedades y métodos:
Valor inicial: 1.
Incrementar fuerza: permite incrementar fuerza en 1.
Consultar fuerza: muestra mensaje con la fuerza del jugador.
------------
Referencia
------------
Curso: JavaScript Intermedio.
Sesión: Tipos de datos avanzados.
Plataforma: Open Webinars.
Profesor: Jonathan Rodríguez.
*/

var player = {
    strength: 1,
    increaseStrenght: function () {
        this.strength += 1;
        console.log('Has añadido un punto de fuerza');
    },
    checkStrength: function () {
        console.log('Tu fuerza actual es de ' + this.strength);
    }
};

//Comprobamos fuerza, añadimos y volvemos a comprobar.
player.checkStrength();
player.increaseStrenght();
player.checkStrength();
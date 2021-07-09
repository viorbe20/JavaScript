/*
Referencia.
Curso: Programa tus Primeros Juegos HTML5 con JavaScript.
Sesión: 13.
Plataforma: Udemy.
Autor: Javier Muñiz.
Fecha: julio 2021
Comentario: aprender a capturar los códigos que vienen asignados por tecla.
*/

document.addEventListener('keydown', function (tecla) {
    //console.log(tecla.keyCode);

    if (tecla.keyCode == 32) {
        console.log('Espacio');
    }

    if (tecla.keyCode == 38) {
        console.log('Arriba');
    }

});


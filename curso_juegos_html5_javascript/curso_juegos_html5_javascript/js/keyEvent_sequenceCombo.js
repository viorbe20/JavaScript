/*
Referencia.
Curso: Programa tus Primeros Juegos HTML5 con JavaScript.
Sesión: 13.
Plataforma: Udemy.
Autor: Javier Muñiz.
Fecha: julio 2021
Comentario: sequenceCombo, ejecuta algo después de presionar un conjunto de teclas 
en un orden determinado (i.e. easter eggs).
Librería keypress: https://dmauro.github.io/Keypress/
*/

var eventoTeclado = new window.keypress.Listener(this, configTeclado);

var configTeclado = {
    prevent_repeat: true
}; //Evita repetir la pulsación de la tecla

function ataqueEspecial() {
    console.log('Ataque especial');
}

eventoTeclado.sequence_combo('up down a b', ataqueEspecial);
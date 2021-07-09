/*
Referencia.
Curso: Programa tus Primeros Juegos HTML5 con JavaScript.
Sesión: 13.
Plataforma: Udemy.
Autor: Javier Muñiz.
Fecha: julio 2021
Comentario: detecta presión de teclas simples y combinadas con simpleCombo.
Librería keypress: https://dmauro.github.io/Keypress/
*/

var configTeclado = {
    prevent_repeat: true
}; //Evite repetir la pulsación de la tecla
var eventoTeclado = new window.keypress.Listener(this, configTeclado);

function pulsaA() {
    console.log('Has pulsado a');
}

function pulsaAB() {
    console.log('Has pulsado a y b');
}

eventoTeclado.simple_combo('a', pulsaA);
eventoTeclado.simple_combo('a b', pulsaAB);
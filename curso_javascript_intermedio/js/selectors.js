/*
Autora - Virginia Ordoño Bernier
Fecha - julio 2021
Contenido - Selectors
------------
Referencia
------------
Curso: JavaScript Intermedio.
Sesión: DOM.
Plataforma: Open Webinars.
Profesor: Jonathan Rodríguez.
*/

//Obtener información por el id
var paragraphTagName = document.getElementsByTagName('p');
console.log(paragraphTagName);

//Obtener información por el tagName
var paragraphId = document.getElementById('paragraph');
console.log(paragraphId.innerText);
/*
Autora - Virginia Ordoño Bernier
Fecha - julio 2021
Contenido - Explicación de funciones flecha. 
No tienen nombre, sintaxis reducica, usamos this. y aparecen con o sin body para retornar valores.
------------
Referencia
------------
Curso: JavaScript para principiantes.
Sesión: Funciones.
Plataforma: Open Webinars.
Profesora: Cristina Ponce.
*/

//Igual, con y sin return
const message = 'Text sample';
var greet1 = (name) => `Hello ${name}`;
var greet2 = (name) => {
    return `Hola ${name}`
};

console.log(greet1('Virginia'));
console.log(greet2('Virginia'));
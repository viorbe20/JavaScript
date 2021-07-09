/*
Autora - Virginia Ordoño Bernier
Fecha - julio 2021
Contenido - Explicación de funciones anónimas. 
No tienen nombre y se pueden asociar a una variable.
------------
Referencia
------------
Curso: JavaScript para principiantes.
Sesión: Funciones.
Plataforma: Open Webinars.
Profesora: Cristina Ponce.
*/

var greet = function (name = 'world') {
    return `Hello ${name}`
}

console.log(greet());
console.log(greet('Virginia'));
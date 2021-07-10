/*
Autora - Virginia Ordoño Bernier
Fecha - julio 2021
Contenido - Formas de crear objetos
------------
Referencia
------------
Curso: JavaScript Intermedio.
Sesión: Tipos de datos avanzados.
Plataforma: Open Webinars.
Profesor: Jonathan Rodríguez.
*/

//Objetos declarativo o literales.
var person1 = {
    name = 'Anne',
    age = 30,

    greet1: function () {
        console.log('Hello' + this.name);
    }
};

//Objetos construidos
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet2 = function () {
        console.log('Hello');
    }
};

var person2 = new Person('Lisa', 35);

//Usando new Object
var persona3 = new Object({
    name = 'Anne',
    age = 30,
    greet3: function () {
        '...'
    }
});
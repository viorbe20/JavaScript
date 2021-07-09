/*
Autora - Virginia Ordoño Bernier
Fecha - julio 2021
Contenido - diferentes operaciones con strings.
------------
Referencia
------------
Curso: JavaScript para principiantes.
Sesión: Tipo de datos primitivos.
Plataforma: Open Webinars.
Profesora: Cristina Ponce.
*/

//Concatenar strings
console.log('Hello' + ' World');

//TEMPLATE LITERALS (con comillas invertidas -backticks en inglés-)
const name = 'Virginia';
console.log(`Welcome ${name} to my world`);

//.LENGTH muestra la longitud.
console.log('Caracteres del string: ' + name.length);

//.INCLUDES muestra si se incluye un intervalo de caracteres dado.
console.log('¿Lo contiene?: ' + name.includes('Vir'));

//.SLICE divide el string dadas dos posiciones (comenzando por 0).
console.log('Trozo del string ' + name.slice(0, 3));

//.REPLACE cambiar un carácter por otro.
console.log('Cambiamos una parte del texto: ' + name.replace('nia', 'nita'));

//.TRIM quita los espacios del principio y el final.
const string1 = '  Esto es un texto con espacios al principio y al final.  '
console.log(string1.trim());

//.SPLIT separa la cadena de texto por el carácter indicado.
//Lo separa en un array.
const string2 = 'Esto,es,una,cadena,llena,de,comas.'
console.log(string2.split(','));
const string3 = 'Esto*es*una*cadena*llena*de*asteriscos.'
console.log(string3.split('*'));